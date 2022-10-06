import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Field from "../Field/field";

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  isLoggedUserError,
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
          {isLoggedUserError && (
            <div className="login-connexion-form-error">
              Vérifiez vos identifiants de connexion.
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
      <div className="login-access-signup">
        <p className="login-access-signup-desc">
          Pas encore de compte ?
        </p>
        <div className="login-access-signup-page">
          <Link
            className="login-access-signup-page-link"
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
  isLoggedUserError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Login;
