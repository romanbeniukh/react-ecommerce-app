import { connect } from 'react-redux';
import Header from './Header';
import { toggleCartPopUp, toggleNavigation } from '../../redux/actions/AppActions';
import { IS_CART_POP_UP, IS_NAVIGATION } from '../../redux/selectors/AppSelectors';
import { GET_CART_ITEMS_COUNT } from '../../redux/selectors/CartSelector';

const mapStateToProps = state => ({
  isCartPopUp: IS_CART_POP_UP(state),
  isNavigation: IS_NAVIGATION(state),
  cartItemsCount: GET_CART_ITEMS_COUNT(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartPopUp: bool => dispatch(toggleCartPopUp(bool)),
  toggleNavigation: bool => dispatch(toggleNavigation(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
