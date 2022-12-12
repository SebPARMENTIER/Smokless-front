import { connect } from 'react-redux';

import UpdatePseudo from '../../components/UpdatePseudo/updatePseudo';

import {
  updatePseudoValue,
  updatePseudoAction,
  backToProfileAction,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  newPseudo: state.user.newPseudo,
  password: state.user.password,
  isUpdatePseudoSuccess: state.user.isUpdatePseudoSuccess,
  isUpdatePseudoError: state.user.isUpdatePseudoError,
  errorUpdateMessage: state.user.errorUpdateMessage,
  successUpdateMessage: state.user.successUpdateMessage,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updatePseudoValue(newValue, name));
  },
  handleUpdatePseudo: () => {
    dispatch(updatePseudoAction());
  },
  handleBackToProfile: () => {
    dispatch(backToProfileAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePseudo);
