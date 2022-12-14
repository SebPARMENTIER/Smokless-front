import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from '../../containers/Login';

import consumption from '../../assets/consumption.png';
import statistical from '../../assets/statistical.png';
import chat from '../../assets/chat.png';
import profile from '../../assets/profile.png';

import './home.scss';

const Home = ({
  isLogged,
  isSignupUserSuccess,
  handleGoToHome,
  isDisplayingWelcome,
  setDisplayingWelcome,
  pseudo,
}) => {
  useEffect(() => {
    if (isSignupUserSuccess) {
      handleGoToHome();
    }
    if (isLogged) {
      const timer = setTimeout(() => {
        setDisplayingWelcome();
      }, 1500);
      return () => clearTimeout(timer);
    };
  }, [isLogged]);
  return (
    <div className="home">
      {!isLogged && (
        <div className="home-welcome">
          <div className="home-welcome-intro">
            <p className="home-welcome-intro-hello">
              Bonjour et bienvenue sur votre application <span className="home-welcome-intro-hello-span">smokless</span> !
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
        <>
          <div className={isDisplayingWelcome ? "home-elements-welcome" : "home-elements-welcome home-elements-welcome-swipe"}>
            <p className="home-elements-welcome-hello">
              Bonjour <span className="home-elements-welcome-hello-span">{pseudo}</span> !
            </p>
          </div>
          <div className={isDisplayingWelcome ? "home-elements" : "home-elements home-elements-swipe"}>
            <Link className="home-elements-consumption">
              <p className="home-elements-consumption-text">
                Ma consommation
              </p>
              <img
                className="home-elements-consumption-image"
                src={consumption}
                alt="Consommation"
              />
            </Link>
            <Link className="home-elements-statistical">
              <p className="home-elements-statistical-text">
                Mes statistiques
              </p>
              <img
                className="home-elements-statistical-image"
                src={statistical}
                alt="Statistiques"
              />
            </Link>
            <Link className="home-elements-chat">
              <p className="home-elements-chat-text">
                Mes discussions
              </p>
              <img
                className="home-elements-chat-image"
                src={chat}
                alt="Discussions"
              />
            </Link>
            <Link
              className="home-elements-profile"
              to="/profile"
            >
              <p className="home-elements-profile-text">
                Mes informations
              </p>
              <img
                className="home-elements-profile-image"
                src={profile}
                alt="Informations"
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isSignupUserSuccess: PropTypes.bool.isRequired,
  handleGoToHome: PropTypes.func.isRequired,
  isDisplayingWelcome: PropTypes.bool.isRequired,
  setDisplayingWelcome: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default Home;