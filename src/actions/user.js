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
