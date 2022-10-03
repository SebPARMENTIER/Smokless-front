import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../reducers/user';
import authMiddleware from '../middlewares/authMiddleware';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
  middleware: [
    authMiddleware,
  ],
});

export default store;
