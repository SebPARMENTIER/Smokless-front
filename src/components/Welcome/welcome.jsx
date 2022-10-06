import PropTypes from 'prop-types';

import './welcome.scss';

const Welcome = ({
  pseudo,
  isLogged,
}) => {
  return (
    <div className={isLogged ? "welcome welcome-swipe" : "welcome"}>
      <p className="welcome-hello">
        Bonjour <span className="welcome-hello-span">{pseudo}</span> !
      </p>
    </div>
  );
};

Welcome.propTypes = {
  pseudo: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Welcome;
