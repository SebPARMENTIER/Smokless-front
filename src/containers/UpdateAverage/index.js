import { connect } from 'react-redux';

import UpdateAverage from '../../components/UpdateAverage/updateAverage';

import {
  updateAverageValue,
  updateAverageAction,
  backToProfileAction,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  average: state.user.average,
  newAverage: state.user.newAverage,
  password: state.user.password,
  isUpdateAverageSuccess: state.user.isUpdateAverageSuccess,
  isUpdateAverageError: state.user.isUpdateAverageError,
  errorUpdateMessage: state.user.errorUpdateMessage,
  successUpdateMessage: state.user.successUpdateMessage,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateAverageValue(newValue, name));
  },
  handleUpdateAverage: () => {
    dispatch(updateAverageAction());
  },
  handleBackToProfile: () => {
    dispatch(backToProfileAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAverage);
