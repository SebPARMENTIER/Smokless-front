import {
  SET_SIGNUP_VALUE,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  GO_BACK_TO_HOME_TO_LOGIN,
  SET_LOGIN_VALUE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT,
} from '../actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  average: '',
  price: '',
  isSignupUserSuccess: false,
  isSignupUserError: false,
  successMessage: '',
  errorMessage: '',
  isLogged: false,
  isLoggedUserError: false,
  userId: '',
  accessToken: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGNUP_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isSignupUserSuccess: action.data.isSignupUserSuccess,
        successMessage: action.data.successMessage,
        pseudo: '',
        email: '',
        password: '',
        passwordConfirm: '',
        average: '',
        price: '',
        isSignupUserError: false,
      };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        isSignupUserError: true,
        errorMessage: action.data.error,
      };
    case GO_BACK_TO_HOME_TO_LOGIN:
      return {
        ...state,
        isSignupUserSuccess: false,
      };
    case SET_LOGIN_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_USER_SUCCESS:
      const { id, pseudo, average, price } = action.data.userData;
      const { accessToken } = action.data;
      return {
        ...state,
        userId: id,
        pseudo,
        average,
        price,
        accessToken,
        isLogged: true,
        email: '',
        password: '',
        isSignupUserError: false,
        isLoggedUserError: false,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoggedUserError: true,
        errorMessage: action.data.error,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        userId: '',
        pseudo: '',
        average: '',
        price: '',
        accessToken: null,
      };
    default:
      return state;
  }
};

export default reducer;
