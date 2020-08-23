import { connect } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../../redux/actions/CartActions';
import CartProduct from './CartProduct';

const mapDispatchToProps = dispatch => ({
  incrementQuantity: id => dispatch(incrementQuantity(id)),
  decrementQuantity: id => dispatch(decrementQuantity(id)),
  removeFromCart: id => dispatch(removeFromCart(id)),
});

export default connect(null, mapDispatchToProps)(CartProduct);
