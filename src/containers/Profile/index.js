import { connect } from 'react-redux';

import Profile from '../../components/Profile/profile';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
});

export default connect(mapStateToProps)(Profile);
