import { connect } from 'react-redux';
import { GET_PRODUCTS_IN_CART, GET_CART_TOTAL_PRICE } from '../../../redux/selectors/CartSelector';
import CartProductsList from './CartProductsList';

const mapStateToProps = state => ({
  products: GET_PRODUCTS_IN_CART(state),
  totalPrice: GET_CART_TOTAL_PRICE(state),
});

export default connect(mapStateToProps, null)(CartProductsList);
