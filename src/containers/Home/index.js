import { connect } from 'react-redux';

import Home from '../../components/Home/home';

import {
  goBackToHomeToLogin,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  isCreatedUserSuccess: state.user.isCreatedUserSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  setIsCreatedUserSuccessToFalse: () => {
    dispatch(goBackToHomeToLogin());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
