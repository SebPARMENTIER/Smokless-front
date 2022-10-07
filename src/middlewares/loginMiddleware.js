import axios from 'axios';

import { apiBaseUrl } from '../const';
import {
  LOGIN_USER,
  loginUserSuccess,
  loginUserError,
  loading,
} from '../actions/user';

const loginMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN_USER: {
      store.dispatch(loading());
      const options = {
        method: 'POST',
        url: `${apiBaseUrl}/login`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      };
      axios(options)
        .then((response) => {
          store.dispatch(loginUserSuccess(response.data));
          store.dispatch(loading());
        })
        .catch((response) => {
          store.dispatch(loginUserError(response.response.data));
          store.dispatch(loading());
        });
      break;
    }
    default:
      next(action);
  }
};

export default loginMiddleware;
