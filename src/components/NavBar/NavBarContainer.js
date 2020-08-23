import { connect } from 'react-redux';
import NavBar from './NavBar';
import { toggleNavigation } from '../../redux/actions/AppActions';

const mapDispatchToProps = dispatch => ({
  toggleNavigation: bool => dispatch(toggleNavigation(bool)),
});

export default connect(null, mapDispatchToProps)(NavBar);
