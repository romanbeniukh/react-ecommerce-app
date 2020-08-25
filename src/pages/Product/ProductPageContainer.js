import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { getProduct } from '../../redux/operations/ProductsOperations';
import { clearProduct } from '../../redux/actions/ProductsActions';

const mapDispatchToProps = dispatch => ({
  getProduct: id => dispatch(getProduct(id)),
  clearProduct: () => dispatch(clearProduct()),
});

export default connect(null, mapDispatchToProps)(ProductPage);
