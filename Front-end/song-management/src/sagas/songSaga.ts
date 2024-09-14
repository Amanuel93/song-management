
import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { Song, Statistics,FetchSongByIdPayload,CreateSongPayload,UpdateSongPayload, DeleteSongPayload, FetchFilteredSongsPayload } from '../types'; // Adjust the import path as necessary
import {
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
} from '../slices/songSlices'; // Adjust the import path as necessary
// import { createAction } from '@reduxjs/toolkit';

// const fetchSongsStart = createAction<{ page: number }>('songs/fetchSongsStart');

// Fetch all songs
// function* fetchSongsSaga(action: ReturnType<typeof fetchSongsStart>) {
//   try {
//     const { page } = action.payload;
//     const response: AxiosResponse<{ songs: Song[] }> = yield call(axios.get, 'http://localhost:5000/api/songs/getAllSongs',{
//       params: { page }, // Pass page number as query parameter
//     });
//     yield put(fetchSongsSuccess(response.data.songs));
//   } catch (error) {
//     // Type the error as an Error object
//     const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
//     yield put(fetchSongsFailure(errorMessage));
//   }
// }

type DeleteSongPayload = {
  id: string;
};

function* fetchSongsSaga(action: ReturnType<typeof fetchSongsStart>) {
  try {
    const { page } = action.payload;
    
    // Making an API call to fetch the songs
    const response: AxiosResponse<{ songs: Song[] }> = yield call(
      axios.get,
      'https://song-management-11.onrender.com/api/songs/getAllSongs',
      {
        params: { page }, // Passing page number as a query parameter
      }
    );

    // Dispatching success action with the fetched songs and current page number
    yield put(fetchSongsSuccess({ songs: response.data.songs, page }));

  } catch (error) {
    // Handling errors and dispatching failure action with a descriptive message
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchSongsFailure(errorMessage));
  }
}


// Fetch filtered songs
function* fetchFilteredSongsSaga(action: { type: string; payload: FetchFilteredSongsPayload }) {
  try {
    const { search, genre, artist, album, page, limit } = action.payload;

    const response: AxiosResponse<{ songs: Song[], total: number }> = yield call(axios.get, 'https://song-management-11.onrender.com/api/songs/getFilteredsong', {
      params: { search, genre, artist, album, page, limit },
    });

    yield put(fetchFilteredSongsSuccess(response.data.songs));

  } catch (error) {
    // Handle error properly
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchFilteredSongsFailure(errorMessage));
  }
}

// Fetch a single song by ID
function* fetchSongByIdSaga(action: { type: string; payload: FetchSongByIdPayload }) {
  try {
    const { id } = action.payload;
    const response: AxiosResponse<Song> = yield call(axios.get, `https://song-management-11.onrender.com/api/songs/getSong/${id}`);
    yield put(fetchSongByIdSuccess(response.data));
  } catch (error) {
    // Type the error as an Error object
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchSongByIdFailure(errorMessage));
  }
}

// Create a new song
function* createSongSaga(action: { type: string; payload: FormData }) {
  try {
    // const formData = new FormData();
    // Object.entries(action.payload).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    const response: AxiosResponse<Song> = yield call(axios.post, 'https://song-management-11.onrender.com/api/songs/create', action.payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }) ;
    yield put(createSongSuccess(response.data));
  } catch (error) {
    // Type the error as an Error object
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(createSongFailure(errorMessage));
  }
}

// Update a song
function* updateSongSaga(action:  { type: string; payload: { id: string; data: FormData } }) {
  try {
    const { id, data } = action.payload;
    // const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => {
    //   if (value !== null && key !== 'id') { // Skip the id
    //     formData.append(key, value);
    //   }
    // });

    const response: AxiosResponse<Song> = yield call(axios.put, `https://song-management-11.onrender.com/api/songs/updateSong/${id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    yield put(updateSongSuccess(response.data));
  } catch (error) {
    // Type the error as an Error object
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(updateSongFailure(errorMessage));
  }
}

// Delete a song
function* deleteSongSaga(action: { type: string; payload: DeleteSongPayload }) {
  try {
    const { id } = action.payload;
    yield call(axios.delete, `https://song-management-11.onrender.com/api/songs/delete/${id}`);
    yield put(deleteSongSuccess(id));
  } catch (error) {
    // Type the error as an Error object
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(deleteSongFailure(errorMessage));
  }
}

// Fetch statistics
function* fetchStatisticsSaga() {
  try {
    const response: AxiosResponse<Statistics> = yield call(axios.get, 'https://song-management-11.onrender.com/api/songs/statistics');
    yield put(fetchStatisticsSuccess(response.data));
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    yield put(fetchStatisticsFailure(errorMessage));
  }
}

export default function* songSaga() {
  yield takeLatest(fetchSongsStart.type, fetchSongsSaga);
  yield takeLatest(fetchFilteredSongsStart.type, fetchFilteredSongsSaga);
  yield takeLatest(fetchSongByIdStart.type, fetchSongByIdSaga);
  yield takeLatest(createSongStart.type, createSongSaga);
  yield takeLatest(updateSongStart.type, updateSongSaga);
  yield takeLatest(deleteSongStart.type, deleteSongSaga);
  yield takeLatest(fetchStatisticsStart.type, fetchStatisticsSaga);
}
