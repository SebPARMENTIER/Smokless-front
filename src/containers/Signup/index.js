import { connect } from 'react-redux';

import Signup from '../../components/Signup/signup';

import {
  createUserValue,
  createUserAction,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  average: state.user.average,
  price: state.user.price,
  isCreatedUserSuccess: state.user.isCreatedUserSuccess,
  isCreatedPasswordError: state.user.isCreatedPasswordError,
  isCreatedPasswordLengthError: state.user.isCreatedPasswordLengthError,
  isCreatedUserError: state.user.isCreatedUserError,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createUserValue(newValue, name));
  },
  handleSignup: () => {
    dispatch(createUserAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
