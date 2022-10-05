import { connect } from 'react-redux';

import Home from '../../components/Header/header';

import {
  logout,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
