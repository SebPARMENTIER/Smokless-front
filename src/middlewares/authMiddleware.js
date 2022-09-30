import axios from 'axios';

import { apiBaseUrl } from '../const';
import {
  SIGNUP,
  createPasswordLengthError,
  createPasswordError,
  createUserSuccess,
  createUserError,
} from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SIGNUP: {
      if (state.user.password.length < 8) {
        store.dispatch(createPasswordLengthError());
      } else if (state.user.password !== state.user.passwordConfirm) {
        store.dispatch(createPasswordError());
      } else {
        const config = {
          method: 'post',
          url: `${apiBaseUrl}/signup`,
          data: {
            pseudo: state.user.pseudo,
            email: state.user.email,
            password: state.user.password,
          },
        };
        axios(config)
          .then((response) => {
            store.dispatch(createUserSuccess(response.data));
          })
          .catch((error) => {
            store.dispatch(createUserError(error));
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default authMiddleware;
