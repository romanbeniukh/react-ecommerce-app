import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import { GET_PRODUCTS } from '../../../redux/selectors/ProductsSelectors';

const mapStateToProps = state => ({
  products: GET_PRODUCTS(state),
});

export default connect(mapStateToProps, null)(ProductsList);
