import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../Field/field';
import Loading from '../Loading/loading';
import './updatePassword.scss';

const UpdatePassword = ({
  pseudo,
  password,
  newPassword,
  newPasswordConfirm,
  changeField,
  handleUpdatePassword,
  handleBackToProfile,
  isUpdatePasswordSuccess,
  isUpdatePasswordError,
  errorUpdateMessage,
  successUpdateMessage,
  isLoading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdatePassword();
  };
  const handleClickBackToProfile = () => {
    handleBackToProfile();
  }
  return (
    <div className="updatePassword">
      <div className="updatePassword-header">
        Mes informations
      </div>
      <div className="updatePassword-pseudo">
        {pseudo}
      </div>
      <div className="updatePassword-infos">
        {!isUpdatePasswordSuccess && (
          <form
            className="updatePassword-infos-form"
            onSubmit={handleSubmit}
          >
            <div className="updatePassword-infos-form-field">
              <label className="updatePassword-infos-form-label">
                Mot de passe actuel
              </label>
              <Field
                className="updatePassword-infos-form-field-password"
                name="password"
                type="password"
                placeholder="Mot de passe actuel..."
                onChange={changeField}
                value={password}
              />
              <label className="updatePassword-infos-form-label">
                Nouveau mot de passe
                <p className="updatePassword-infos-form-label-span">
                  (Au moins 10 caractères - 1 majuscule - 1 minuscule - 1 chiffre - 1 caractère spécial)
                </p>
              </label>
              <Field
                className="updatePassword-infos-form-field-newPassword"
                name="newPassword"
                type="password"
                placeholder="Nouveau mot de passe..."
                onChange={changeField}
                value={newPassword}
              />
              
              <label className="updatePassword-infos-form-label">
                Vérification mot de passe
              </label>
              <Field
                className="updatePassword-infos-form-field-newPasswordConfirm"
                name="newPasswordConfirm"
                type="password"
                placeholder="Vérification mot de passe..."
                onChange={changeField}
                value={newPasswordConfirm}
              />
            </div>
            {isUpdatePasswordError && (
              <div className="updatePassword-infos-form-error">
                {errorUpdateMessage}
              </div>
            )}
            {isLoading && (
              <Loading />
            )}
            {!isLoading && (
              <button
                className="updatePassword-infos-form-button"
                type='submit'
              >
                Valider
              </button>
            )}
          </form>
        )}
      </div>
      <div className="updatePassword-success">
        {isUpdatePasswordSuccess && (
          <p className="updatePassword-success-desc">
            {successUpdateMessage}
          </p>
        )}
        <div className="updatePassword-success-page">
          <Link
            className="updatePassword-success-page-link"
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

UpdatePassword.propTypes = {
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  newPasswordConfirm: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdatePassword: PropTypes.func.isRequired,
  handleBackToProfile: PropTypes.func.isRequired,
  isUpdatePasswordSuccess: PropTypes.bool.isRequired,
  isUpdatePasswordError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorUpdateMessage: PropTypes.string.isRequired,
  successUpdateMessage: PropTypes.string.isRequired,
};

export default UpdatePassword;
