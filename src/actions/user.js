export const SET_SIGNUP_VALUE = 'SET_SIGNUP_VALUE';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';
export const GO_BACK_TO_HOME_TO_LOGIN = 'GO_BACK_TO_HOME_TO_LOGIN';
export const SET_LOGIN_VALUE = 'SET_LOGIN_VALUE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const LOGOUT = 'LOGOUT';
export const DISPLAY_WELCOME = 'DISPLAY_WELCOME';
export const LOADING = 'LOADING';
export const SET_UPDATE_PSEUDO_VALUE = 'SET_UPDATE_PSEUDO_VALUE';
export const UPDATE_PSEUDO = 'UPDATE_PSEUDO';
export const UPDATE_PSEUDO_SUCCESS = 'UPDATE_PSEUDO_SUCCESS';
export const UPDATE_PSEUDO_ERROR = 'UPDATE_PSEUDO_ERROR';
export const BACK_TO_PROFILE = 'BACK_TO_PROFILE';

export const signupUserValue = (newValue, name) => ({
  type: SET_SIGNUP_VALUE,
  value: newValue,
  name,
});

export const signupUserAction = () => ({ type: SIGNUP_USER });

export const signupUserSuccess = (data) => ({ type: SIGNUP_USER_SUCCESS, data });

export const signupUserError = (data) => ({ type: SIGNUP_USER_ERROR, data });

export const goBackToHomeToLogin = () => ({ type: GO_BACK_TO_HOME_TO_LOGIN });

export const loginUserValue = (newValue, name) => ({
  type: SET_LOGIN_VALUE,
  value: newValue,
  name,
});

export const loginUserAction = () => ({ type: LOGIN_USER });

export const loginUserSuccess = (data) => ({ type: LOGIN_USER_SUCCESS, data });

export const loginUserError = (data) => ({ type: LOGIN_USER_ERROR, data });

export const logout = () => ({ type: LOGOUT });

export const displayWelcome = () => ({ type: DISPLAY_WELCOME });

export const loading = () => ({ type: LOADING });

export const updatePseudoValue = (newValue, name) => ({
  type: SET_UPDATE_PSEUDO_VALUE,
  value: newValue,
  name,
});

export const updatePseudoAction = () => ({ type: UPDATE_PSEUDO });

export const updatePseudoSuccess = (data) => ({ type: UPDATE_PSEUDO_SUCCESS, data });

export const updatePseudoError = (data) => ({ type: UPDATE_PSEUDO_ERROR, data });

export const backToProfileAction = () => ({ type: BACK_TO_PROFILE });
