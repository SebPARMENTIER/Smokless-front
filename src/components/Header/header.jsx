import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import user from '../../assets/user.png';

import './header.scss';

const Header = ({
  isLogged,
}) => {
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
        <div className='header-element-user'>
        {isLogged && (
          <button className="header-element-user-button" type="button">
            <img className="header-element-user-button-image" src={user} alt="user" />
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
