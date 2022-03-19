import {takeEvery, call, put, fork, select} from 'redux-saga/effects';
import {ACTIONS} from '../actions/ActionTypes.js';
import {apiUsers} from '../api/index.js';
import {apiUrl} from './selectors.js';

function* getUsers() {
  try {
    console.log('getUSERS SAGA');
    const url = yield select(apiUrl);
    const result = yield call(() => apiUsers.obtainUsers(url + '/users'));

    console.log('RESUL CALL', result);
    yield put({type: ACTIONS.SET_USERS, payload: result});
    // yield put(setUsers(result));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(ACTIONS.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
