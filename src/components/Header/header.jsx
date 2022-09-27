import logo from '../../assets/logo.png';
import home from '../../assets/home.png';
import user from '../../assets/user.png';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img className="header-image-home" src={home} alt="home" />
        <img className="header-image-logo" src={logo} alt="logo" />
        <img className="header-image-user" src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;