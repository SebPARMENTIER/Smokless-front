import './loading.scss';

import logo from '../../assets/logo.png';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-picture">
        <img
          className="loading-picture-image"
          src={logo}
          alt="Logo qui tourne"
        />
      </div>
    </div>
  );
};

export default Loading;
