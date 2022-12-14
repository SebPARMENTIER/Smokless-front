import {
  SET_SIGNUP_VALUE,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  GO_TO_HOME,
  GO_TO_SIGNUP,
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
  SET_UPDATE_AVERAGE_VALUE,
  UPDATE_AVERAGE_SUCCESS,
  UPDATE_AVERAGE_ERROR,
  BACK_TO_PROFILE,
} from '../actions/user';

export const initialState = {
  userId: '',
  pseudo: '',
  newPseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  newPassword: '',
  newPasswordConfirm: '',
  average: '',
  newAverage: '',
  price: '',
  accessToken: null,
  isSignupUserSuccess: false,
  isSignupUserError: false,
  successSignupMessage: '',
  errorSignupMessage: '',
  isLogged: false,
  isLoginUserError: false,
  errorLoginMessage: '',
  isDisplayingWelcome: false,
  isLoading: false,
  isUpdatePseudoSuccess: false,
  isUpdatePseudoError: false,
  successUpdateMessage: '',
  errorUpdateMessage: '',
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
    case GO_TO_HOME:
      return {
        ...state,
        isSignupUserSuccess: false,
        email: '',
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
        newAverage: '',
        isUpdateAverageSuccess: false,
        isUpdateAverageError: false,
      };
    case GO_TO_SIGNUP:
      return {
        ...state,
        pseudo: '',
        email: '',
        password: '',
        passwordConfirm: '',
        average: '',
        price: '',
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
        passwordConfirm: '',
        pseudo: '',
        newPseudo: '',
        average: '',
        newAverage: '',
        price: '',
        newPassword: '',
        newPasswordConfirm: '',
        accessToken: null,
        isUpdatePseudoSuccess: false,
        isUpdatePseudoError: false,
        isUpdatePasswordSuccess: false,
        isUpdatePasswordError: false,
        isUpdateAverageSuccess: false,
        isUpdateAverageError: false,
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
    case SET_UPDATE_AVERAGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_AVERAGE_SUCCESS:
      return {
        ...state,
        average: state.newAverage,
        isUpdateAverageSuccess: true,
        successUpdateMessage: action.data.successUpdateMessage,
        isUpdateAverageError: false,
      };
    case UPDATE_AVERAGE_ERROR:
      return {
        ...state,
        isUpdateAverageError: true,
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
        newAverage: '',
        isUpdateAverageSuccess: false,
        isUpdateAverageError: false,
      };
    default:
      return state;
  }
};

export default reducer;
