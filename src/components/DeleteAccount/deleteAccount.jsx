import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from '../Field/field';
import Loading from '../Loading/loading';
import './deleteAccount.scss';

const DeleteAccount = ({
  pseudo,
  password,
  changeField,
  handleDeleteAccount,
  handleBackToProfile,
  isDeleteAccountSuccess,
  isDeleteAccountError,
  successDeleteAccountMessage,
  errorDeleteAccountMessage,
  handleLogout,
  isLoading,
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (isDeleteAccountSuccess) {
      const timer = setTimeout(() => {
        handleLogout();
        return navigate("/");
      }, 1500);
      return () => clearTimeout(timer);
    };
  }, [isDeleteAccountSuccess]);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleDeleteAccount();
  };
  const handleClickBackToProfile = () => {
    handleBackToProfile();
  }
  return (
    <div className="deleteAccount">
      <div className="deleteAccount-header">
        Mes informations
      </div>
      <div className="deleteAccount-pseudo">
        {pseudo}
      </div>
      {!isDeleteAccountSuccess && (
        <div className="deleteAccount-warning">
          ATTENTION !!!
          <p>
            Vous êtes sur le point de supprimer votre compte !!!
          </p>
        </div>
      )}
      <div className="deleteAccount-infos">
        {!isDeleteAccountSuccess && (
          <form
            className="deleteAccount-infos-form"
            onSubmit={handleSubmit}
          >
            <div className="deleteAccount-infos-form-field">
              <label className="deleteAccount-infos-form-label">
                Mot de passe
              </label>
              <Field
                className="deleteAccount-infos-form-field-password"
                name="password"
                type="password"
                placeholder="Mot de passe..."
                onChange={changeField}
                value={password}
              />
            </div>
            {isDeleteAccountError && (
              <div className="deleteAccount-infos-form-error">
                {errorDeleteAccountMessage}
              </div>
            )}
            {isLoading && (
              <Loading />
            )}
            {!isLoading && (
              <button
                className="deleteAccount-infos-form-button"
                type='submit'
              >
                Supprimer mon compte
              </button>
            )}
          </form>
        )}
      </div>
      <div className="deleteAccount-success">
        {isDeleteAccountSuccess && (
          <p className="deleteAccount-success-desc">
            {successDeleteAccountMessage}
          </p>
        )}
        {!isDeleteAccountSuccess && (
          <div className="deleteAccount-success-page">
            <Link
              className="deleteAccount-success-page-link"
              to="/profile"
              onClick={handleClickBackToProfile}
            >
              Retour
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

DeleteAccount.propTypes = {
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleDeleteAccount: PropTypes.func.isRequired,
  handleBackToProfile: PropTypes.func.isRequired,
  isDeleteAccountSuccess: PropTypes.bool.isRequired,
  isDeleteAccountError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorDeleteAccountMessage: PropTypes.string.isRequired,
  successDeleteAccountMessage: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default DeleteAccount;
