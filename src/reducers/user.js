import {
  SET_SIGNUP_VALUE,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  GO_BACK_TO_HOME_TO_LOGIN,
  SET_LOGIN_VALUE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT,
  DISPLAY_WELCOME,
  LOADING,
  SET_UPDATE_PSEUDO_VALUE,
  UPDATE_PSEUDO_SUCCESS,
  UPDATE_PSEUDO_ERROR,
  SET_UPDATE_PASSWORD_VALUE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_ERROR,
  BACK_TO_PROFILE,
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
  successSignupMessage: '',
  errorSignupMessage: '',
  isLogged: false,
  isLoginUserError: false,
  errorLoginMessage: '',
  userId: '',
  accessToken: null,
  isDisplayingWelcome: false,
  isLoading: false,
  newPseudo: '',
  isUpdatePseudoSuccess: false,
  isUpdatePseudoError: false,
  successUpdateMessage: '',
  errorUpdateMessage: '',
  newPassword: '',
  newPasswordConfirm: '',
  isUpdatePasswordSuccess: false,
  isUpdatePasswordError: false,
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
        successSignupMessage: action.data.successSignupMessage,
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
        errorSignupMessage: action.data.error,
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
      const {
        id,
        pseudo,
        average,
        price,
      } = action.data.userData;
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
        isLoginUserError: false,
        isDisplayingWelcome: true,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoginUserError: true,
        errorLoginMessage: action.data.error,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        userId: '',
        password: '',
        pseudo: '',
        newPseudo: '',
        average: '',
        price: '',
        newPassword: '',
        newPasswordConfirm: '',
        accessToken: null,
        isUpdatePseudoSuccess: false,
        isUpdatePseudoError: false,
        isUpdatePasswordSuccess: false,
        isUpdatePasswordError: false,
      };
    case DISPLAY_WELCOME:
      return {
        ...state,
        isDisplayingWelcome: false,
      };
    case LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case SET_UPDATE_PSEUDO_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_PSEUDO_SUCCESS:
      return {
        ...state,
        isUpdatePseudoSuccess: true,
        successUpdateMessage: action.data.successUpdateMessage,
        isUpdatePseudoError: false,
        pseudo: state.newPseudo,
        newPseudo: '',
        password: '',
      };
    case UPDATE_PSEUDO_ERROR:
      return {
        ...state,
        isUpdatePseudoError: true,
        errorUpdateMessage: action.data.error,
      };
    case SET_UPDATE_PASSWORD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        isUpdatePasswordSuccess: true,
        successUpdateMessage: action.data.successUpdateMessage,
        isUpdatePasswordError: false,
      };
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        isUpdatePasswordError: true,
        errorUpdateMessage: action.data.error,
      };
    case BACK_TO_PROFILE:
      return {
        ...state,
        newPseudo: '',
        password: '',
        isUpdatePseudoSuccess: false,
        isUpdatePseudoError: false,
        newPassword: '',
        newPasswordConfirm: '',
        isUpdatePasswordSuccess: false,
        isUpdatePasswordError: false,
        successUpdateMessage: '',
        errorUpdateMessage: '',
      };
    default:
      return state;
  }
};

export default reducer;
