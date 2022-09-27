import logo from '../../assets/headersl.png';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;