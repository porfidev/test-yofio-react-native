import {combineReducers} from 'redux';
import apiReducer from './ApiReducer.js';
import usersReducer from './UsersReducer.js';

export default combineReducers({users: usersReducer, apiUrl: apiReducer});
