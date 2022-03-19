import {INITIAL_STATE} from '../store/initialState.js';

const apiReducer = (state = INITIAL_STATE.apiUrl, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default apiReducer;
