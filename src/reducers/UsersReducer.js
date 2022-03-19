import {combineReducers} from 'redux';
import {ACTIONS} from '../actions/ActionTypes.js';
import {INITIAL_STATE} from '../store/initialState.js';

const usersReducer = (state = INITIAL_STATE.users, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
});
