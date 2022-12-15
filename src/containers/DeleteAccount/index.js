import { connect } from 'react-redux';

import DeleteAccount from '../../components/DeleteAccount/deleteAccount';

import {
  deleteAccountValue,
  deleteAccountAction,
  logout,
  backToProfileAction,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  password: state.user.password,
  isDeleteAccountSuccess: state.user.isDeleteAccountSuccess,
  isDeleteAccountError: state.user.isDeleteAccountError,
  errorDeleteAccountMessage: state.user.errorDeleteAccountMessage,
  successDeleteAccountMessage: state.user.successDeleteAccountMessage,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(deleteAccountValue(newValue, name));
  },
  handleDeleteAccount: () => {
    dispatch(deleteAccountAction());
  },
  handleLogout: () => {
    dispatch(logout());
  },
  handleBackToProfile: () => {
    dispatch(backToProfileAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
