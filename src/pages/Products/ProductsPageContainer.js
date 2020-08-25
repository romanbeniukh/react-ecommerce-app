import { connect } from 'react-redux';
import ProductsPage from './ProductsPage';
import { getProducts } from '../../redux/operations/ProductsOperations';

const mapDispatchToProps = dispatch => ({
  getProducts: params => dispatch(getProducts(params)),
});

export default connect(null, mapDispatchToProps)(ProductsPage);
