// routes/songRoutes.js
const express = require('express');
const { check } = require('express-validator');
const {
    createSong,
    getSongById,
    updateSong,
    deleteSong,
    getStatistics,
    Filteredsong,
    getAllSongs
} = require('../controllers/song-controller');
const upload = require('../config/multer-config');

const router = express.Router();

// Create a new song
router.post(
  '/create',
  upload.single('image'),
  [
    check('title', 'Title is required').not().isEmpty(),
    check('artist', 'Artist is required').not().isEmpty(),
    check('album', 'Album is required').not().isEmpty(),
    check('genre', 'Genre is required').not().isEmpty(),
  ],
 createSong
);

// Get all songs with search, filter, and pagination
router.get('/getFilteredSong', Filteredsong);

router.get('/getAllSongs', getAllSongs);

// Get a single song by ID
router.get('/getSong/:id', getSongById);

// Update a song
router.put(
  '/updateSong/:id',
  upload.single('image'),
  [
    check('title', 'Title is required').optional().not().isEmpty(),
    check('artist', 'Artist is required').optional().not().isEmpty(),
    check('album', 'Album is required').optional().not().isEmpty(),
    check('genre', 'Genre is required').optional().not().isEmpty(),
  ],
  updateSong
);

// Delete a song
router.delete('/delete/:id', deleteSong);

// Get statistics
router.get('/statistics', getStatistics);

module.exports = router;
