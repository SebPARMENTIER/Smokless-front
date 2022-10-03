export const SET_USER_VALUE = 'SET_USER_VALUE';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const CREATE_PASSWORD_ERROR = 'CREATE_PASSWORD_ERROR';
export const CREATE_PASSWORD_LENGTH_ERROR = 'CREATE_PASSWORD_LENGTH_ERROR';

export const createUserValue = (newValue, name) => ({
  type: SET_USER_VALUE,
  value: newValue,
  name,
});

export const createUserAction = () => ({ type: CREATE_USER });

export const createUserSuccess = (data) => ({ type: CREATE_USER_SUCCESS, data });

export const createUserError = () => ({ type: CREATE_USER_ERROR });

export const createPasswordError = () => ({ type: CREATE_PASSWORD_ERROR });

export const createPasswordLengthError = () => ({ type: CREATE_PASSWORD_LENGTH_ERROR });
