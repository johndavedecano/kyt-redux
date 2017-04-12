import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import ExecutionEnvironment from 'exenv';
import request from './helpers/request';

const thunkMiddleware = thunk.withExtraArgument(request);

function configureStoreProd(initialState) {
  const middlewares = [thunkMiddleware];
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

const logger = createLogger();

function configureStoreDev(initialState) {

  var composed;
  let middlewares = [thunkMiddleware];
  const isBrowser = ExecutionEnvironment.canUseDOM;

  if (isBrowser) {

    middlewares.concat(logger);

    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    
    composed = composeWithDevToolsExtension(
      applyMiddleware(...middlewares),
    );
  } else {
    composed = compose(applyMiddleware(...middlewares));
  }

  return createStore(
    rootReducer,
    initialState,
    composed,
  );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;