import { connect } from 'react-redux';
import App from './App';
import { IS_CART_POP_UP, IS_LOADING, IS_NAVIGATION } from '../../redux/selectors/AppSelectors';

const mapStateToProps = state => ({
  isCartPopUp: IS_CART_POP_UP(state),
  isNavigation: IS_NAVIGATION(state),
  isLoading: IS_LOADING(state),
});

export default connect(mapStateToProps, null)(App);
