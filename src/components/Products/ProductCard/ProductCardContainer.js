import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { addToCartOperation } from '../../../redux/operations/ProductsOperations';

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCartOperation(product)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
