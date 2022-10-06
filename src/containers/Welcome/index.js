import { connect } from 'react-redux';

import Welcome from '../../components/Welcome/welcome';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps)(Welcome);
