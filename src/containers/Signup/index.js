import { connect } from 'react-redux';

import Signup from '../../components/Signup/signup';

import {
  signupUserValue,
  signupUserAction,
  goBackToHomeToLogin,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  email: state.user.email,
  password: state.user.password,
  passwordConfirm: state.user.passwordConfirm,
  average: state.user.average,
  price: state.user.price,
  isSignupUserSuccess: state.user.isSignupUserSuccess,
  isSignupUserError: state.user.isSignupUserError,
  successSignupMessage: state.user.successSignupMessage,
  errorSignupMessage: state.user.errorSignupMessage,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(signupUserValue(newValue, name));
  },
  handleSignup: () => {
    dispatch(signupUserAction());
  },
  handleGoBackToHomeToLogin: () => {
    dispatch(goBackToHomeToLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
