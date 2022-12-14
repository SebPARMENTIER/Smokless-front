import { connect } from 'react-redux';

import Home from '../../components/Header/header';

import {
  logout,
  goToHome,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => {
    dispatch(logout());
  },
  handleGoToHome: () => {
    dispatch(goToHome());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
