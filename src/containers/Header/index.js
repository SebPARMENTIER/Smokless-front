import { connect } from 'react-redux';

import Home from '../../components/Header/header';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps)(Home);
