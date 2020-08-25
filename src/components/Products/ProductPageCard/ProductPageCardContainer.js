import { connect } from 'react-redux';
import ProductPageCard from './ProductPageCard';
import { GET_PRODUCT } from '../../../redux/selectors/ProductsSelectors';

const mapStateToProps = state => ({
  product: GET_PRODUCT(state),
});

export default connect(mapStateToProps, null)(ProductPageCard);
