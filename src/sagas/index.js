import {all} from 'redux-saga/effects';
import usersSagas from './usersSagas.js';

export default function* rootSaga() {
  yield all([...usersSagas]);
}
