import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from "../Field/field";
import Loading from '../Loading/loading';

import './login.scss';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLoginUserError,
  errorLoginMessage,
  isLoading
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  return (
    <div className="login">
      <p className="login-desc">
        Veuillez saisir vos identifiants pour vous connecter.
      </p>
      <div className="login-connexion">
        <form
          className="login-connexion-form"
          onSubmit={handleSubmit}
        >
          <div className="login-connexion-form-field">
            <Field
              className='login-connexion-form-field-email'
              name="email"
              type='email'
              placeholder='Email...'
              onChange={changeField}
              value={email}
            />
            <Field
              className='login-connexion-form-field-password'
              name='password'
              type='password'
              placeholder='Mot de passe...'
              onChange={changeField}
              value={password}
            />
          </div>
          {isLoginUserError && (
            <div className="login-connexion-form-error">
              {errorLoginMessage}
            </div>
          )}
          {isLoading && (
            <div className="login-connexion-form-loading">
              <Loading />
            </div>
          )}
          {!isLoading && (
            <button
              className="login-connexion-form-button"
              type='submit'
            >
              Valider
            </button>
          )}
        </form>
      </div>
      <div className="login-signup">
        <p className="login-signup-desc">
          Pas encore de compte ?
        </p>
        <div className="login-signup-page">
          <Link
            className="login-signup-page-link"
            to="/signup"
          >
            Se créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLoginUserError: PropTypes.bool.isRequired,
  errorLoginMessage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Login;
