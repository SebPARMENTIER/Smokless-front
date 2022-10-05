export const SET_USER_VALUE = 'SET_USER_VALUE';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const GO_BACK_TO_HOME_TO_LOGIN = 'GO_BACK_TO_HOME_TO_LOGIN';
export const LOGOUT = 'LOGOUT';

export const createUserValue = (newValue, name) => ({
  type: SET_USER_VALUE,
  value: newValue,
  name,
});

export const createUserAction = () => ({ type: CREATE_USER });

export const createUserSuccess = (data) => ({ type: CREATE_USER_SUCCESS, data });

export const createUserError = (data) => ({ type: CREATE_USER_ERROR, data });

export const goBackToHomeToLogin = () => ({ type: GO_BACK_TO_HOME_TO_LOGIN });

export const logout = () => ({ type: LOGOUT });
