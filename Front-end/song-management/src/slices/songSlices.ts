import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song, Statistics } from '../types';

interface SongState {
  // songs: Song[];
  songs: Array<{ _id: string; title: string; artist: string; album: string; genre: string; image: string }>;
  statistics: Statistics | null;
  song: Song | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
}

const initialState: SongState = {
  songs: [],
  statistics: null,
  song: null,
  loading: false,
  error: null,
  currentPage: 1,
};

type DeleteSongPayload = {
  id: string;
};

type FetchSongPayload = {
  id: string;
};

type FetchFilteredSongsPayload = {
  search: string;
  page: number;
  limit: number;
};

const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    // Fetch all songs
    fetchSongsStart(state, action: PayloadAction<{ page: number }>) {
  
      state.loading = true;
    },
    // fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
    //   state.songs = action.payload;
    //   state.loading = false;
    // },
    fetchSongsSuccess(state, action: PayloadAction<{songs:Song[]; page: number }>) {
      state.loading = false;
      state.error = null;
      if (action.payload.page === 1) {
        state.songs = action.payload.songs; // Replace songs if it's the first page
      } else {
        state.songs = [...state.songs, ...action.payload.songs]; // Append new songs
      }
      state.currentPage = action.payload.page;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // Fetch filtered songs
    fetchFilteredSongsStart(state, action: PayloadAction<Song[]>) {
      state.loading = true;
    },
    fetchFilteredSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchFilteredSongsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // Fetch a single song by ID
    fetchSongByIdStart(state ,action: PayloadAction<FetchSongPayload>) {
      state.loading = true;
    },
    fetchSongByIdSuccess(state, action: PayloadAction<Song>) {
      state.song = action.payload;
      state.loading = false;
    },
    fetchSongByIdFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // Create a new song
    createSongStart(state, action: PayloadAction<FormData>) {
      state.loading = true;
    },
    createSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // Update a song
    updateSongStart(state, action: PayloadAction<{ id: string; data: FormData }>) {
      state.loading = true;
    },
    updateSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(song => song._id === action.payload._id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    // Delete a song
    deleteSongStart(state, action: PayloadAction<DeleteSongPayload>) {
      state.loading = true;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter(song => song._id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  
    // Fetch statistics
    fetchStatisticsStart(state) {
      state.loading = true;
    },
    fetchStatisticsSuccess(state, action: PayloadAction<Statistics>) {
      state.statistics = action.payload;
      state.loading = false;
    },
    fetchStatisticsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  fetchFilteredSongsStart,
  fetchFilteredSongsSuccess,
  fetchFilteredSongsFailure,
  fetchSongByIdStart,
  fetchSongByIdSuccess,
  fetchSongByIdFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
  fetchStatisticsStart,
  fetchStatisticsSuccess,
  fetchStatisticsFailure,
} = songSlice.actions;

export default songSlice.reducer;
