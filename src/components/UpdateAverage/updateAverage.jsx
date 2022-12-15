import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../Field/field';
import Loading from '../Loading/loading';
import './updateAverage.scss';

const UpdateAverage = ({
  pseudo,
  average,
  newAverage,
  password,
  changeField,
  handleUpdateAverage,
  handleBackToProfile,
  isUpdateAverageSuccess,
  isUpdateAverageError,
  errorUpdateMessage,
  successUpdateMessage,
  isLoading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateAverage();
  };
  const handleClickBackToProfile = () => {
    handleBackToProfile();
  }
  return (
    <div className="updateAverage">
      <div className="updateAverage-header">
        Mes informations
      </div>
      <div className="updateAverage-pseudo">
        {pseudo}
      </div>
      {!successUpdateMessage && (
        <div className="updateAverage-current">
          Votre consommation moyenne quotidienne est actuellement de
          <span className="updateAverage-current-span"> {Math.round(average)} </span>
          cigarettes.
        </div>
      )}
      <div className="updateAverage-infos">
        {!isUpdateAverageSuccess && (
          <form
            className="updateAverage-infos-form"
            onSubmit={handleSubmit}
          >
            <div className="updateAverage-infos-form-field">
              <label className="updateAverage-infos-form-label">
                Nouvelle consommation moyenne de cigarettes par jour
              </label>
              <Field
                className="updateAverage-infos-form-field-newAverage"
                name="newAverage"
                type="number"
                step="0.01"
                placeholder="Consommation moyenne de cigarettes par jour..."
                onChange={changeField}
                value={newAverage}
              />
              <label className="updateAverage-infos-form-label">
                Mot de passe
              </label>
              <Field
                className="updateAverage-infos-form-field-password"
                name="password"
                type="password"
                placeholder="Mot de passe..."
                onChange={changeField}
                value={password}
              />
            </div>
            {isUpdateAverageError && (
              <div className="updateAverage-infos-form-error">
                {errorUpdateMessage}
              </div>
            )}
            {isLoading && (
              <Loading />
            )}
            {!isLoading && (
              <button
                className="updateAverage-infos-form-button"
                type='submit'
              >
                Valider
              </button>
            )}
          </form>
        )}
      </div>
      <div className="updateAverage-success">
        {isUpdateAverageSuccess && (
          <p className="updateAverage-success-desc">
            {successUpdateMessage}
          </p>
        )}
        <div className="updateAverage-success-page">
          <Link
            className="updateAverage-success-page-link"
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

UpdateAverage.propTypes = {
  pseudo: PropTypes.string.isRequired,
  average: PropTypes.any.isRequired,
  newAverage: PropTypes.any.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdateAverage: PropTypes.func.isRequired,
  handleBackToProfile: PropTypes.func.isRequired,
  isUpdateAverageSuccess: PropTypes.bool.isRequired,
  isUpdateAverageError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorUpdateMessage: PropTypes.string.isRequired,
  successUpdateMessage: PropTypes.string.isRequired,
};

export default UpdateAverage;
