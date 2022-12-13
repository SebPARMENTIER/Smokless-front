import { connect } from 'react-redux';

import UpdatePassword from '../../components/UpdatePassword/updatePassword';

import {
  updatePasswordValue,
  updatePasswordAction,
  backToProfileAction,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  password: state.user.password,
  newPassword: state.user.newPassword,
  newPasswordConfirm: state.user.newPasswordConfirm,
  isUpdatePasswordSuccess: state.user.isUpdatePasswordSuccess,
  isUpdatePasswordError: state.user.isUpdatePasswordError,
  errorUpdateMessage: state.user.errorUpdateMessage,
  successUpdateMessage: state.user.successUpdateMessage,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updatePasswordValue(newValue, name));
  },
  handleUpdatePassword: () => {
    dispatch(updatePasswordAction());
  },
  handleBackToProfile: () => {
    dispatch(backToProfileAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePassword);
