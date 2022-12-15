import { connect } from 'react-redux';

import Home from '../../components/Home/home';

import { displayWelcome } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  isSignupUserSuccess: state.user.isSignupUserSuccess,
  isDisplayingWelcome: state.user.isDisplayingWelcome,
  pseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  setDisplayingWelcome: () => {
    dispatch(displayWelcome());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
