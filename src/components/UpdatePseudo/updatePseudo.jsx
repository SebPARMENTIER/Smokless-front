import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../Field/field';
import Loading from '../Loading/loading';
import './updatePseudo.scss';

const UpdatePseudo = ({
  pseudo,
  newPseudo,
  password,
  changeField,
  handleUpdatePseudo,
  handleBackToProfile,
  isUpdatePseudoSuccess,
  isUpdatePseudoError,
  errorUpdateMessage,
  successUpdateMessage,
  isLoading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdatePseudo();
  };
  const handleClickBackToProfile = () => {
    handleBackToProfile();
  }
  return (
    <div className="updatePseudo">
      <div className="updatePseudo-header">
        Mes informations
      </div>
      <div className="updatePseudo-pseudo">
        {pseudo}
      </div>
      <div className="updatePseudo-infos">
        {!isUpdatePseudoSuccess && (
          <form
            className="updatePseudo-infos-form"
            onSubmit={handleSubmit}
          >
            <div className="updatePseudo-infos-form-field">
              <label className="updatePseudo-infos-form-label">
                Nouveau Pseudo
              </label>
              <Field
                className="updatePseudo-infos-form-field-newPseudo"
                name="newPseudo"
                type="text"
                placeholder="Nouveau Pseudo..."
                onChange={changeField}
                value={newPseudo}
              />
              <label className="updatePseudo-infos-form-label">
                Mot de passe
              </label>
              <Field
                className="updatePseudo-infos-form-field-password"
                name="password"
                type="password"
                placeholder="Mot de passe..."
                onChange={changeField}
                value={password}
              />
            </div>
            {isUpdatePseudoError && (
              <div className="updatePseudo-infos-form-error">
                {errorUpdateMessage}
              </div>
            )}
            {isLoading && (
              <Loading />
            )}
            {!isLoading && (
              <button
                className="updatePseudo-infos-form-button"
                type='submit'
              >
                Valider
              </button>
            )}
          </form>
        )}
      </div>
      <div className="updatePseudo-success">
        {isUpdatePseudoSuccess && (
          <p className="updatePseudo-success-desc">
            {successUpdateMessage}
          </p>
        )}
        <div className="updatePseudo-success-page">
          <Link
            className="updatePseudo-success-page-link"
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

UpdatePseudo.propTypes = {
  pseudo: PropTypes.string.isRequired,
  newPseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdatePseudo: PropTypes.func.isRequired,
  handleBackToProfile: PropTypes.func.isRequired,
  isUpdatePseudoSuccess: PropTypes.bool.isRequired,
  isUpdatePseudoError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorUpdateMessage: PropTypes.string.isRequired,
  successUpdateMessage: PropTypes.string.isRequired,
};

export default UpdatePseudo;
