import axios from 'axios';

import { apiBaseUrl } from '../const';
import {
  CREATE_USER,
  createUserSuccess,
  createUserError,
} from '../actions/user';

const signupMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_USER: {
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
          store.dispatch(createUserSuccess(response.data));
        })
        .catch((response) => {
          store.dispatch(createUserError(response.response.data));
        });
      break;
    }
    default:
      next(action);
  }
};

export default signupMiddleware;
