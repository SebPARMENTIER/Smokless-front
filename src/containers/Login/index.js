import { connect } from 'react-redux';

import Login from '../../components/Login/login';

import {
  loginUserValue,
  loginUserAction,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLoggedUserError: state.user.isLoggedUserError,
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(loginUserValue(newValue, name));
  },
  handleLogin: () => {
    dispatch(loginUserAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
