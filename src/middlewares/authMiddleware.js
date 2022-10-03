import axios from 'axios';

import { apiBaseUrl } from '../const';
import {
  CREATE_USER,
  createPasswordLengthError,
  createPasswordError,
  createUserSuccess,
  createUserError,
} from '../actions/user';

const authMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case CREATE_USER: {
      if (state.user.password.length < 8) {
        store.dispatch(createPasswordLengthError());
      } else if (state.user.password !== state.user.passwordConfirm) {
        store.dispatch(createPasswordError());
      } else {
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
            average: state.user.average,
            price: state.user.price,
          },
        };
        axios(options)
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
