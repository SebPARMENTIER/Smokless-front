import axios from 'axios';

import { apiBaseUrl } from '../const';
import {
  UPDATE_PSEUDO,
  updatePseudoSuccess,
  updatePseudoError,
  UPDATE_PASSWORD,
  updatePasswordSuccess,
  updatePasswordError,
  UPDATE_AVERAGE,
  updateAverageSuccess,
  updateAverageError,
  UPDATE_PRICE,
  updatePriceSuccess,
  updatePriceError,
  DELETE_ACCOUNT,
  deleteAccountSuccess,
  deleteAccountError,
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
    case UPDATE_PASSWORD: {
      store.dispatch(loading());
      const options = {
        method: 'PATCH',
        url: `${apiBaseUrl}/user/password`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.accessToken}`,
        },
        data: {
          id: state.user.userId,
          password: state.user.password,
          newPassword: state.user.newPassword,
          newPasswordConfirm: state.user.newPasswordConfirm,
        },
      };
      axios(options)
        .then((response) => {
          store.dispatch(updatePasswordSuccess(response.data));
          store.dispatch(loading());
        })
        .catch((response) => {
          store.dispatch(updatePasswordError(response.response.data));
          store.dispatch(loading());
        });
      break;
    }
    case UPDATE_AVERAGE: {
      store.dispatch(loading());
      const options = {
        method: 'PATCH',
        url: `${apiBaseUrl}/user/average`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.accessToken}`,
        },
        data: {
          id: state.user.userId,
          average: Math.round(state.user.newAverage),
          password: state.user.password,
        },
      };
      axios(options)
        .then((response) => {
          store.dispatch(updateAverageSuccess(response.data));
          store.dispatch(loading());
        })
        .catch((response) => {
          store.dispatch(updateAverageError(response.response.data));
          store.dispatch(loading());
        });
      break;
    }
    case UPDATE_PRICE: {
      store.dispatch(loading());
      const options = {
        method: 'PATCH',
        url: `${apiBaseUrl}/user/price`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.accessToken}`,
        },
        data: {
          id: state.user.userId,
          price: state.user.newPrice,
          password: state.user.password,
        },
      };
      axios(options)
        .then((response) => {
          store.dispatch(updatePriceSuccess(response.data));
          store.dispatch(loading());
        })
        .catch((response) => {
          store.dispatch(updatePriceError(response.response.data));
          store.dispatch(loading());
        });
      break;
    }
    case DELETE_ACCOUNT: {
      store.dispatch(loading());
      const options = {
        method: 'DELETE',
        url: `${apiBaseUrl}/user/${state.user.userId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.accessToken}`,
        },
        data: {
          password: state.user.password,
        },
      };
      axios(options)
        .then((response) => {
          store.dispatch(deleteAccountSuccess(response.data));
          store.dispatch(loading());
        })
        .catch((response) => {
          store.dispatch(deleteAccountError(response.response.data));
          store.dispatch(loading());
        });
      break;
    }
    default:
      next(action);
  }
};

export default profileMiddleware;
