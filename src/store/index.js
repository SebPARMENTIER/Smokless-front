import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../reducers/user';
import signupMiddleware from '../middlewares/signupMiddleware';
import loginMiddleware from '../middlewares/loginMiddleware';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
  middleware: [
    signupMiddleware,
    loginMiddleware,
  ],
});

export default store;
