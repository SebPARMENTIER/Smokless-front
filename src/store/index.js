import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../reducers/user';
import signupMiddleware from '../middlewares/signupMiddleware';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
  middleware: [
    signupMiddleware,
  ],
});

export default store;
