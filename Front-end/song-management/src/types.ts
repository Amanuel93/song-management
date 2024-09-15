export interface Song {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
    image: string;
  }
  
  export interface Statistics {
    totalSongs: number;
    totalArtists: number;
    totalAlbums: number;
    totalGenres: number;
    songsPerGenre: { _id: string; count: number }[];
    songsPerArtist: { artist: string; songs: number; albums: number }[];
    songsPerAlbum: { _id: string; count: number }[];
  }

  export interface FetchFilteredSongsPayload {
    search?: string;
    genre?: string;
    artist?: string;
    album?: string;
    page?: number;
    limit?: number;
  }

  export interface FetchSongByIdPayload {
    id: string;
  }
  
  export interface CreateSongPayload {
    title: string;
    artist: string;
    album: string;
    genre: string;
    image?: File;
  }

  export interface UpdateSongPayload {
    id: string;
    data: Song;
  }
  
  export interface DeleteSongPayload {
    id: string;
  }
  
  // Action types
  // export const UPDATE_SONG_START = 'UPDATE_SONG_START';
  // export const DELETE_SONG_START = 'DELETE_SONG_START';
  // export const FETCH_FILTERED_SONGS_START = 'FETCH_FILTERED_SONGS_START';
  // export const FETCH_SONG_BY_ID_START = 'FETCH_SONG_BY_ID_START';
  // export const CREATE_SONG_START = 'CREATE_SONG_START';
  