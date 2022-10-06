import axios from 'axios';

import { apiBaseUrl } from '../const';
import {
  SIGNUP_USER,
  signupUserSuccess,
  signupUserError,
} from '../actions/user';

const signupMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case SIGNUP_USER: {
      const options = {
        method: 'POST',
        url: `${apiBaseUrl}/signup`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          pseudo: state.user.pseudo,
          email: state.user.email,
          password: state.user.password,
          passwordConfirm: state.user.passwordConfirm,
          average: Math.round(state.user.average),
          price: state.user.price,
        },
      };
      axios(options)
        .then((response) => {
          store.dispatch(signupUserSuccess(response.data));
        })
        .catch((response) => {
          store.dispatch(signupUserError(response.response.data));
        });
      break;
    }
    default:
      next(action);
  }
};

export default signupMiddleware;
