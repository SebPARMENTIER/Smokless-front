import {
  createStore,
  applyMiddleware,
  compose
} from 'react-redux';

import reducer from '../reducers/user.js';
import authMiddleware from '../middlewares/authMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;