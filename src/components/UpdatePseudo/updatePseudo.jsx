import PropTypes from 'prop-types';

import Loading from '../Loading/loading';
import './updatePseudo.scss';

const UpdatePseudo = ({
  newPseudo,
  password,
  changeField,
  handleUpdatePseudo,
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
  return (
    <div className="updatePseudo">
      <div className="updatePseudo-desc">
        Mes informations
      </div>
      <div className="updatePseudo-pseudo">
        {pseudo}
      </div>
      <div className="updatePseudo-infos">
        <form
          className="updatePseudo-infos-form"
          onSubmit={handleSubmit}
        >
          <div className="updatePseudo-infos-form-field">
            <Field
              className='updatePseudo-infos-form-field-newPseudo'
              name="newPseudo"
              type='text'
              placeholder='Nouveau Pseudo..'
              onChange={changeField}
              value={newPseudo}
            />
            <Field
              className='updatePseudo-infos-form-field-password'
              name='password'
              type='password'
              placeholder='Mot de passe...'
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
            <div className="updatePseudo-infos-form-loading">
              <Loading />
            </div>
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
      </div>
      {isUpdatePseudoSuccess && (
        <div className="updatePseudo-success">
          <p className="updatePseudo-success-desc">
            {successUpdateMessage}
          </p>
          <div className="updatePseudo-success-page">
            <Link
              className="updatePseudo-success-page-link"
              to="/profile"
            >
              Retour
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

Profile.propTypes = {
  newPseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdatePseudo: PropTypes.func.isRequired,
  isUpdatePseudoSuccess: PropTypes.bool.isRequired,
  isUpdatePseudoError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorUpdateMessage: PropTypes.string.isRequired,
  successUpdateMessage: PropTypes.string.isRequired,
};

export default UpdatePseudo;
