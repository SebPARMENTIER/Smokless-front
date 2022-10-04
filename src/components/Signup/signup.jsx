import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from "../Field/field";

import './signup.scss';

const Signup = ({
  pseudo,
  email,
  password,
  passwordConfirm,
  average,
  price,
  changeField,
  handleSignup,
  handleGoBackToHomeToLogin,
  isCreatedUserSuccess,
  isCreatedUserError,
  successMessage,
  errorMessage,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };
  const handleClickToGoBackToHomeToLogin = () => {
    handleGoBackToHomeToLogin();
  };
  return (
    <div className="signup">
      {!isCreatedUserSuccess && (
        <>
          <p className="signup-desc">
            Veuillez remplir tous les champs pour créer votre compte.
          </p>
          <div className="signup-creation">
            <form
              className="signup-creation-form"
              onSubmit={handleSubmit}
            >
              <div className="signup-creation-form-field">
                <label className="signup-creation-form-label">
                  Pseudo
                </label>
                <Field
                  className="signup-creation-form-field-pseudo"
                  name="pseudo"
                  type="text"
                  placeholder="Pseudo..."
                  onChange={changeField}
                  value={pseudo}
                />
                <label className="signup-creation-form-label">
                  Email
                </label>
                <Field
                  className="signup-creation-form-field-email"
                  name="email"
                  type="email"
                  placeholder="Email..."
                  onChange={changeField}
                  value={email}
                />
                <label className="signup-creation-form-label">
                  Mot de passe
                  <p className="signup-creation-form-label-span">
                    (Au moins 10 caractères - 1 majuscule - 1 minuscule - 1 chiffre - 1 caractère spécial)
                  </p>
                </label>
                <Field
                  className="signup-creation-form-field-password"
                  name="password"
                  type="password"
                  placeholder="Mot de passe..."
                  onChange={changeField}
                  value={password}
                />
                <label className="signup-creation-form-label">
                  Vérification mot de passe
                </label>
                <Field
                  className="signup-creation-form-field-passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  placeholder="Vérification mot de passe..."
                  onChange={changeField}
                  value={passwordConfirm}
                />
                <label className="signup-creation-form-label">
                  Consommation moyenne de cigarettes par jour
                </label>
                <Field
                  className="signup-creation-form-field-average"
                  name="average"
                  type="number"
                  placeholder="Moyenne de cigarettes par jour"
                  onChange={changeField}
                  value={average}
                />
                <label className="signup-creation-form-label">
                  Prix d'un paquet de 20 cigarettes
                </label>
                <Field
                  className="signup-creation-form-field-price"
                  name="price"
                  type="number"
                  placeholder="Prix d'un paquet de cigarettes"
                  onChange={changeField}
                  value={price}
                />
              </div>
              {isCreatedUserError &&
                <p className="signup-creation-form-error">
                  {errorMessage}
                </p>
              }
              <button
                type="submit"
                className="signup-creation-form-button"
              >
                Valider
              </button>
            </form>
          </div>
        </>
      )}
      {isCreatedUserSuccess &&
        <div className="signup-creation-form-success">
          <p className="signup-creation-form-success-desc">
            {successMessage}
          </p>
          <div className="signup-creation-form-sucess-page">
            <Link
              className="signup-creation-form-sucess-page-link"
              to="/"
              onClick={handleClickToGoBackToHomeToLogin}
            >
            Se connecter
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

Signup.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  average: PropTypes.any.isRequired,
  price: PropTypes.any.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  handleGoBackToHomeToLogin: PropTypes.func.isRequired,
  isCreatedUserSuccess: PropTypes.bool.isRequired,
  isCreatedUserError: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default Signup;
