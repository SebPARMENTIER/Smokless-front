import axios from 'axios';

import { apiBaseUrl } from '../const';
import {
  UPDATE_PSEUDO,
  updatePseudoSuccess,
  updatePseudoError,
  loading,
} from '../actions/user';

const profileMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case UPDATE_PSEUDO: {
      store.dispatch(loading());
      const options = {
        method: 'PATCH',
        url: `${apiBaseUrl}/user/pseudo`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.accessToken}`,
        },
        data: {
          id: state.user.userId,
          password: state.user.password,
          pseudo: state.user.newPseudo,
        },
      };
      axios(options)
        .then((response) => {
          store.dispatch(updatePseudoSuccess(response.data));
          store.dispatch(loading());
        })
        .catch((response) => {
          store.dispatch(updatePseudoError(response.response.data));
          store.dispatch(loading());
        });
      break;
    }
    default:
      next(action);
  }
};

export default profileMiddleware;
