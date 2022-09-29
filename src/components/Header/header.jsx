import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import user from '../../assets/user.png';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <button className="header-option-home-button">
          <img className="header-image-home" src={home} alt="home" />
        </button>
        <img className="header-image-logo" src={logo} alt="logo" />
        <button className="header-option-user-button">
          <img className="header-image-user" src={user} alt="user" />
        </button>
      </div>
    </div>
  );
};

export default Header;