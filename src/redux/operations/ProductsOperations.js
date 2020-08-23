import { toastr } from 'react-redux-toastr';
import { getProductsRequest, getProductsSuccess, getProductsError } from '../actions/ProductsActions';
import { addToCart } from '../actions/CartActions';
import { toggleCartPopUp } from '../actions/AppActions';
import api from '../../api/requests';

export const getProducts = () => dispatch => {
  dispatch(getProductsRequest());

  api
    .getProducts()
    .then(res => {
      dispatch(getProductsSuccess(res.items));
    })
    .catch(err => {
      dispatch(getProductsError(err));
      toastr.error('Error', err.message);
    });
};

export const addToCartOperation = product => dispatch => {
  dispatch(addToCart(product));
  dispatch(toggleCartPopUp(true));
};
