import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import user from '../../assets/user.png';

import './header.scss';

const Header = ({
  isLogged,
  onClickLogout,
}) => {
  const handleLogout = () => {
    onClickLogout();
  };
  return (
    <div className="header">
      <div className="header-elements">
        <div className="header-elements-home">
          <Link
            className="header-elements-home-link"
            to="/"
          >
            <img className="header-elements-home-link-image" src={home} alt="home" />
          </Link>
        </div>
        <div className="header-elements-logo">
          <img className="header-elements-logo-image" src={logo} alt="logo" />
        </div>
        <div className={isLogged ? 'header-elements-user' : 'header-elements-user-hidden'}>
        {isLogged && (
          <Link
            className="header-elements-user-link"
            to="/"
            onClick={handleLogout}
          >
            <img className="header-elements-user-link-image" src={user} alt="user" />
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default Header;
