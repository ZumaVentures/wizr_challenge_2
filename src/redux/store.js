import { combineReducers, createStore } from 'redux';

import count from './example/reducer';

const appReducers = combineReducers({
  count,
});

const initialState = {};

const store = createStore(
  appReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
