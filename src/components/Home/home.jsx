import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Login from '../Login/login';

import consumption from '../../assets/consumption.png';
import statistical from '../../assets/statistical.png';
import chat from '../../assets/chat.png';
import profile from '../../assets/profile.png';

import './home.scss';

const Home = ({
  isLogged,
  isCreatedUserSuccess,
  setIsCreatedUserSuccessToFalse,
}) => {
  useEffect(() => {
    if (isCreatedUserSuccess) {
      setIsCreatedUserSuccessToFalse();
    }
  }, []);
  return (
    <div className="home">
      {!isLogged && (
        <div className="home-welcome">
          <div className="home-welcome-intro">
            <p className="home-welcome-intro-hello">
              Bonjour et bienvenue sur votre application <span className="home-welcome-span">smokless</span> !
            </p>
            <p className="home-welcome-intro-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt molestiae optio culpa ratione. Consequuntur suscipit voluptas facilis nesciunt accusamus. Dolor repellendus deleniti voluptatem expedita tempora officia maxime quas aspernatur, sint facilis fugiat illum omnis quo saepe? Minima, repudiandae accusantium blanditiis fuga autem reiciendis eius, magnam neque ipsa, dolor qui?
            </p>
          </div>
          <div className="home-welcome-login">
            <Login />
          </div>
        </div>
      )}
      {isLogged && (
        <div className="home-elements">
          <div className="home-elements-consumption">
            <p className="home-elements-consumption-text">
              Ma consommation
            </p>
            <img
              className="home-elements-consumption-image"
              src={consumption}
              alt="Consommation"
            />
          </div>
          <div className="home-elements-statistical">
            <p className="home-elements-statistical-text">
              Mes statistiques
            </p>
            <img
              className="home-elements-statistical-image"
              src={statistical}
              alt="Statistiques"
            />
          </div>
          <div className="home-elements-chat">
            <p className="home-elements-chat-text">
              Mes discussions
            </p>
            <img
              className="home-elements-chat-image"
              src={chat}
              alt="Discussions"
            />
          </div>
          <div className="home-elements-profile">
            <p className="home-elements-profile-text">
              Mes informations
            </p>
            <img
              className="home-elements-profile-image"
              src={profile}
              alt="Informations"
            />
          </div>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isCreatedUserSuccess: PropTypes.bool.isRequired,
  setIsCreatedUserSuccessToFalse: PropTypes.func.isRequired,
};

export default Home;