// src/slices/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import songReducer from './songSlices';

const rootReducer = combineReducers({
  songs: songReducer,
});

export default rootReducer;
