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
      <div className="header-element">
        <div className="header-element-home">
          <Link
            className="header-element-home-link"
            to="/"
          >
            <img className="header-element-home-link-image" src={home} alt="home" />
          </Link>
        </div>
        <div className="header-element-logo">
          <img className="header-element-logo-image" src={logo} alt="logo" />
        </div>
        <div className={isLogged ? 'header-element-user' : 'header-element-user-hidden'}>
        {isLogged && (
          <Link
            className="header-element-user-link"
            to="/"
            onClick={handleLogout}
          >
            <img className="header-element-user-link-image" src={user} alt="user" />
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
