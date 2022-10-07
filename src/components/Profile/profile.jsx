import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Profile = ({
  pseudo,
}) => {
  return (
    <div className="profile">
      <div className="profile-desc">
        Mes informations
      </div>
      <div className="profile-pseudo">
        {pseudo}
      </div>
      <div className="profile-elements">
        <div className="profile-elements-update">
          <Link
            className="profile-elements-update-pseudo"
            to="/profile/pseudo"
          >
            Modifier votre pseudo
          </Link>
        </div>
        <div className="profile-elements-update">
          <Link
            className="profile-elements-update-password"
            to="/profile/password"
          >
            Modifier votre mot de passe
          </Link>
        </div>
        <div className="profile-elements-update">
          <Link
            className="profile-elements-update-average"
            to="/profile/average"
          >
            Modifier votre consommation moyenne quotidienne de cigarettes
          </Link>
        </div>
        <div className="profile-elements-update">
          <Link
            className="profile-elements-update-price"
            to="/profile/price"
          >
            Modifier le prix d'un paquet de 20 cigarettes
          </Link>
        </div>
        <div className="profile-elements-delete">
          <Link
            className="profile-elements-delete-account"
            to="/profile/delete"
          >
            Supprimer votre compte
          </Link>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  pseudo: PropTypes.string.isRequired,
};

export default Profile;
