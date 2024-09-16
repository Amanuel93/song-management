// controllers/songController.js
const Song = require('../models/Song');
const { validationResult } = require('express-validator');

// Create a new song
exports.createSong = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, artist, album, genre } = req.body;
  const image = req.file ? req.file.path : '';

  try {
    const song = new Song({
      title,
      artist,
      album,
      genre,
      image
    });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: 'Error saving the song' });
  }
};

// Get all songs with pagination, search, and filtering
exports.Filteredsong = async (req, res) => {
  const { page = 1, limit = 5, search = '', genre, artist, album } = req.query;

  // Build query object
  const query = {};

  // If search is provided, filter by title, artist, or album with a case-insensitive search
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { artist: { $regex: search, $options: 'i' } },
      { album: { $regex: search, $options: 'i' } },
      { genre: { $regex: search, $options: 'i' } }
    ];
  }

  // Add genre filter if provided
  // if (genre) {
  //   query.genre = genre;
  // }

  try {
    // Fetch songs based on query
    const songs = await Song.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    // Count total number of songs matching the query
    const total = await Song.countDocuments(query);

    res.json({
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      songs,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching songs' });
  }
};

// Get a single song by ID
exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching song' });
  }
};

// Update a song
exports.updateSong = async (req, res) => {
  const { title, artist, album, genre } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    song.title = title || song.title;
    song.artist = artist || song.artist;
    song.album = album || song.album;
    song.genre = genre || song.genre;
    if (image) song.image = image;

    await song.save();
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: 'Error updating song' });
  }
};

// Delete a song
exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting song' });
  }
};

// Get statistics
exports.getStatistics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct('artist').countDocuments();
    const totalAlbums = await Song.distinct('album').countDocuments();
    const totalGenres = await Song.distinct('genre').countDocuments();

    const songsPerGenre = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } }
    ]);

    const songsPerArtist = await Song.aggregate([
      {
        $group: {
          _id: '$artist',
          songs: { $sum: 1 },
          albums: { $addToSet: '$album' }
        }
      },
      {
        $project: {
          artist: '$_id',
          songs: 1,
          albums: { $size: '$albums' }
        }
      }
    ]);

    const songsPerAlbum = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 } } }
    ]);

    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsPerGenre,
      songsPerArtist,
      songsPerAlbum,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching statistics' });
  }
};

exports.getAllSongs = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  try {
    // Fetch all songs with pagination
    const songs = await Song.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    // Count total number of songs
    const total = await Song.countDocuments();

    res.json({
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      songs,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching songs' });
  }
};

