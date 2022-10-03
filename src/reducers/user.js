import {
  SET_USER_VALUE,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_PASSWORD_ERROR,
  CREATE_PASSWORD_LENGTH_ERROR,
  GO_BACK_TO_HOME_TO_LOGIN,
} from '../actions/user';

export const initialState = {
  pseudo: '',
  email: '',
  password: '',
  passwordConfirm: '',
  average: 0,
  price: 0,
  isCreatedUserSuccess: false,
  isCreatedPasswordError: false,
  isCreatedPasswordLengthError: false,
  isCreatedUserError: false,
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
        pseudo: '',
        email: '',
        password: '',
        passwordConfirm: '',
        average: 0,
        price: 0,
        isCreatedPasswordError: false,
        isCreatedPasswordLengthError: false,
        isCreatedUserError: false,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreatedPasswordError: false,
        isCreatedPasswordLengthError: false,
        isCreatedUserError: true,
      };
    case CREATE_PASSWORD_ERROR:
      return {
        ...state,
        isCreatedPasswordError: true,
        isCreatedPasswordLengthError: false,
        isCreatedUserError: false,
      };
    case CREATE_PASSWORD_LENGTH_ERROR:
      return {
        ...state,
        isCreatedPasswordError: false,
        isCreatedPasswordLengthError: true,
        isCreatedUserError: false,
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
