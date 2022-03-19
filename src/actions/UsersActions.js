import {ACTIONS} from './ActionTypes.js';

export const addUser = user => ({
  type: ACTIONS.ADD_USER,
  payload: user,
});

export const getAllUsers = () => ({
  type: ACTIONS.GET_USERS_REQUEST,
});

export const setUsers = users => ({
  type: ACTIONS.SET_USERS,
  payload: users,
});
