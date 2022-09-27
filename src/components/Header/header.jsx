import logo from '../../assets/headersl.png';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img className="header-image-logo" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;