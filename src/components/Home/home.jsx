import consumption from '../../assets/consumption.png';
import statistical from '../../assets/statistical.png';
import chat from '../../assets/chat.png';
import profile from '../../assets/profile.png';

import './home.scss';

const Home = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;