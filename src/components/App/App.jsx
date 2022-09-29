import { Route, Routes } from 'react-router-dom';

import Header from '../Header/header';
import Home from '../Home/home';
import Footer from '../Footer/footer';
import Signup from '../Signup/signup';

import './app.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
