import logo from '../../assets/headersl.png';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;