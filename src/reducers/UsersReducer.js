import {ACTIONS} from '../actions/ActionTypes.js';
import {INITIAL_STATE} from '../store/initialState.js';

const usersReducer = (state = INITIAL_STATE.users, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      console.log('ENTRANDO A ACTION', state);
      return [...state, action.payload];
    case ACTIONS.SET_USERS:
      console.log('ENTRNADO A SETEAR UJSUARIO', action);
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default usersReducer;
