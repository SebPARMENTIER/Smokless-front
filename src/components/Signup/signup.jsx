import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from "../Field/field";

const Signup = ({
  email,
  pseudo,
  password,
  passwordConfirm,
  average,
  price,
  changeField,
  handleSignup,
  isCreatedUserSuccess,
  isCreatedPasswordError,
  isCreatedPasswordLengthError,
  isCreatedUserError
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };
  return (
    <div className="signup">
      <p className="signup-desc">
        Veuillez remplir tous les champs pour créer votre compte.
      </p>
      <div className="signup-creation">
        <form
          className="signup-creation-form"
          onSubmit={handleSubmit}
        >
          <div className="signup-creation-form-field">
            <Field
              className="signup-creation-form-field-email"
              name="email"
              type="email"
              placeholder="Email..."
              onChange={changeField}
              value={email}
            />
            <Field
              className="signup-creation-form-field-pseudo"
              name="pseudo"
              type="text"
              placeholder="Pseudo..."
              onChange={changeField}
              value={pseudo}
            />
            <Field
              className="signup-creation-form-field-password"
              name="password"
              type="password"
              placeholder="Mot de passe..."
              onChange={changeField}
              value={password}
            />
            <Field
              className="signup-creation-form-field-passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="Vérification mot de passe..."
              onChange={changeField}
              value={passwordConfirm}
            />
            <Field
              className="signup-creation-form-field-average"
              name="average"
              type="number"
              placeholder="Moyenne de cigarettes par jour"
              onChange={changeField}
              value={average}
            />
            <Field
              className="signup-creation-form-field-price"
              name="price"
              type="number"
              step="0.01"
              placeholder="Prix d'un paquet de cigarettes"
              onChange={changeField}
              value={price}
            />
          </div>
          {isCreatedUserSuccess &&
            <div className="signup-creation-form-success">
              <p className="signup-creation-form-success-desc">
                Compte crée avec succès, veuillez vous connecter
              </p>
              <div className="signup-creation-form-sucess-page">
                <Link
                  className="signup-creation-form-sucess-page-link"
                  to="/"
                >
                OK
                </Link>
              </div>
            </div>
          }
          {isCreatedUserError &&
            <p className="signup-creation-form-error">
              Email ou pseudo déjà existant.
            </p>
          }
          {isCreatedPasswordError &&
            <p className="signup-creation-form-error">
              Mot de passe non identique.
            </p>
          }
          {isCreatedPasswordLengthError &&
            <p className="signup-creation-form-error">
              Votre mot de passe doit contenir au minimum 8 caractères.
            </p>
          }
          {!isCreatedUserSuccess && (
            <button
              type="submit"
              className="signup-creation-form-button"
            >
              Valider
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  email: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  average: PropTypes.any.isRequired,
  price: PropTypes.any.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  isCreatedUserSuccess: PropTypes.bool.isRequired,
  isCreatedPasswordError: PropTypes.bool.isRequired,
  isCreatedPasswordLengthError: PropTypes.bool.isRequired,
  isCreatedUserError: PropTypes.bool.isRequired,
};

export default Signup;
