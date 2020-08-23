import { connect } from 'react-redux';
import CartPopUp from './CartPopUp';
import { toggleCartPopUp } from '../../../redux/actions/AppActions';
import { removeFromCart } from '../../../redux/actions/CartActions';
import { GET_PRODUCTS_IN_CART, GET_CART_TOTAL_PRICE } from '../../../redux/selectors/CartSelector';

const mapStateToProps = state => ({
  products: GET_PRODUCTS_IN_CART(state),
  totalPrice: GET_CART_TOTAL_PRICE(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartPopUp: bool => dispatch(toggleCartPopUp(bool)),
  removeCartItem: id => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPopUp);
