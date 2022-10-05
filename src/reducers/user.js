import {
  SET_USER_VALUE,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  GO_BACK_TO_HOME_TO_LOGIN,
} from '../actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  average: '',
  price: '',
  isCreatedUserSuccess: false,
  isCreatedUserError: false,
  successMessage: '',
  errorMessage: '',
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreatedUserSuccess: action.data.isCreatedUserSuccess,
        successMessage: action.data.successMessage,
        pseudo: '',
        email: '',
        password: '',
        passwordConfirm: '',
        average: '',
        price: '',
        isCreatedUserError: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreatedUserError: true,
        errorMessage: action.data.error,
      };
    case GO_BACK_TO_HOME_TO_LOGIN:
      return {
        ...state,
        isCreatedUserSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;
