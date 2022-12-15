import { connect } from 'react-redux';

import UpdatePrice from '../../components/UpdatePrice/updatePrice';

import {
  updatePriceValue,
  updatePriceAction,
  backToProfileAction,
} from '../../actions/user';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  price: state.user.price,
  newPrice: state.user.newPrice,
  password: state.user.password,
  isUpdatePriceSuccess: state.user.isUpdatePriceSuccess,
  isUpdatePriceError: state.user.isUpdatePriceError,
  errorUpdateMessage: state.user.errorUpdateMessage,
  successUpdateMessage: state.user.successUpdateMessage,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updatePriceValue(newValue, name));
  },
  handleUpdatePrice: () => {
    dispatch(updatePriceAction());
  },
  handleBackToProfile: () => {
    dispatch(backToProfileAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePrice);
