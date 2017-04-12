import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';

import auth from './auth';

const rootReducer = combineReducers({
  auth,
  routing: routerReducer
});

export default rootReducer;
