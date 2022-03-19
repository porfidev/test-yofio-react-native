import {ACTIONS} from './ActionTypes.js';

export const addUser = user => ({
  type: ACTIONS.ADD_USER,
  payload: user,
});
