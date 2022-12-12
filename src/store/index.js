import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../reducers/user';
import signupMiddleware from '../middlewares/signupMiddleware';
import loginMiddleware from '../middlewares/loginMiddleware';
import profileMiddleware from '../middlewares/profileMiddleware';

const reducer = {
  user: userReducer,
};

const store = configureStore({
  reducer,
  middleware: [
    signupMiddleware,
    loginMiddleware,
    profileMiddleware,
  ],
});

export default store;
