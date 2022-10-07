import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../../containers/Header';
import Home from '../../containers/Home';
import Footer from '../Footer/footer';
import Signup from '../../containers/Signup';
import Error from '../Error/error';

import './app.scss'

const App = ({
  isLogged,
}) => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {!isLogged && (
          <Route exact path='/signup' element={<Signup />} />
        )}
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default App
