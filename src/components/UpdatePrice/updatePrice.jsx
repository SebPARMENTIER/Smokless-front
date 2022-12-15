import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../Field/field';
import Loading from '../Loading/loading';
import './updatePrice.scss';

const UpdatePrice = ({
  pseudo,
  price,
  newPrice,
  password,
  changeField,
  handleUpdatePrice,
  handleBackToProfile,
  isUpdatePriceSuccess,
  isUpdatePriceError,
  errorUpdateMessage,
  successUpdateMessage,
  isLoading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdatePrice();
  };
  const handleClickBackToProfile = () => {
    handleBackToProfile();
  }
  return (
    <div className="updatePrice">
      <div className="updatePrice-header">
        Mes informations
      </div>
      <div className="updatePrice-pseudo">
        {pseudo}
      </div>
      {!successUpdateMessage && (
        <div className="updatePrice-current">
          Le prix d'un paquet de 20 cigarettes est actuellement de
          <span className="updatePrice-current-span"> {Number.parseFloat(price).toFixed(2)} </span>
          euros.
        </div>
      )}
      
      <div className="updatePrice-infos">
        {!isUpdatePriceSuccess && (
          <form
            className="updatePrice-infos-form"
            onSubmit={handleSubmit}
          >
            <div className="updatePrice-infos-form-field">
              <label className="updatePrice-infos-form-label">
                Nouveau prix d'un paquet de 20 cigarettes
                <p className="signup-creation-form-label-span">
                  (Sans le symbole € - Exemple: 10 ou 10,20)
                </p>
              </label>
              <Field
                className="updatePrice-infos-form-field-newPrice"
                name="newPrice"
                type="number"
                step="0.01"
                placeholder="Nouveau prix d'un paquet de 20 cigarettes..."
                onChange={changeField}
                value={newPrice}
              />
              <label className="updatePrice-infos-form-label">
                Mot de passe
              </label>
              <Field
                className="updatePrice-infos-form-field-password"
                name="password"
                type="password"
                placeholder="Mot de passe..."
                onChange={changeField}
                value={password}
              />
            </div>
            {isUpdatePriceError && (
              <div className="updatePrice-infos-form-error">
                {errorUpdateMessage}
              </div>
            )}
            {isLoading && (
              <Loading />
            )}
            {!isLoading && (
              <button
                className="updatePrice-infos-form-button"
                type='submit'
              >
                Valider
              </button>
            )}
          </form>
        )}
      </div>
      <div className="updatePrice-success">
        {isUpdatePriceSuccess && (
          <p className="updatePrice-success-desc">
            {successUpdateMessage}
          </p>
        )}
        <div className="updatePrice-success-page">
          <Link
            className="updatePrice-success-page-link"
            to="/profile"
            onClick={handleClickBackToProfile}
          >
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
};

UpdatePrice.propTypes = {
  pseudo: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
  newPrice: PropTypes.any.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdatePrice: PropTypes.func.isRequired,
  handleBackToProfile: PropTypes.func.isRequired,
  isUpdatePriceSuccess: PropTypes.bool.isRequired,
  isUpdatePriceError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorUpdateMessage: PropTypes.string.isRequired,
  successUpdateMessage: PropTypes.string.isRequired,
};

export default UpdatePrice;
