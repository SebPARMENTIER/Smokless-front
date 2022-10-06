import { connect } from 'react-redux';

import Home from '../../components/Home/home';

import {
  goBackToHomeToLogin,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isSignupUserSuccess: state.user.isSignupUserSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  setIsSignupUserSuccessToFalse: () => {
    dispatch(goBackToHomeToLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
