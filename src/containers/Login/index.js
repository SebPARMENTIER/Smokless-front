import { connect } from 'react-redux';

import Login from '../../components/Login/login';

import {
  loginUserValue,
  loginUserAction,
  goToSignup,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLoginUserError: state.user.isLoginUserError,
  errorLoginMessage: state.user.errorLoginMessage,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(loginUserValue(newValue, name));
  },
  handleLogin: () => {
    dispatch(loginUserAction());
  },
  handleGoToSignup: () => {
    dispatch(goToSignup());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
