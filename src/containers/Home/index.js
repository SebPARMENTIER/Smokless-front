import { connect } from 'react-redux';

import Home from '../../components/Home/home';

import {
  goBackToHomeToLogin,
  displayWelcome,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isSignupUserSuccess: state.user.isSignupUserSuccess,
  isDisplayingWelcome: state.user.isDisplayingWelcome,
});

const mapDispatchToProps = (dispatch) => ({
  setIsSignupUserSuccessToFalse: () => {
    dispatch(goBackToHomeToLogin());
  },
  setDisplayingWelcome: () => {
    dispatch(displayWelcome());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
