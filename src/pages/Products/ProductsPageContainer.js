import { connect } from 'react-redux';
import ProductsPage from './ProductsPage';
import { getProducts } from '../../redux/operations/ProductsOperations';

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(null, mapDispatchToProps)(ProductsPage);
