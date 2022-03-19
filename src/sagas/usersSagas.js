import {takeEvery, call, put, fork} from 'redux-saga/effects';
import {ACTIONS} from '../actions/ActionTypes.js';
import {apiUsers} from '../api/index.js';

function* getUsers() {
  try {
    const result = yield call(apiUsers.getUsers);
    // yield put(actions.getUsersSuccess(result.data.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(ACTIONS.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
