// src/sagas/counterSaga.ts
import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from '../slices/counterSlice';

function* incrementAsync() {
  yield delay(1000); // Delay the increment by 1 second
  yield put(increment());
}

export default function* counterSaga() {
  yield takeEvery('counter/incrementAsync', incrementAsync);
}
