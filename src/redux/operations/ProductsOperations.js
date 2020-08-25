import { toastr } from 'react-redux-toastr';
import {
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  getProductRequest,
  getProductSuccess,
  getProductError,
} from '../actions/ProductsActions';

import { addToCart } from '../actions/CartActions';
import { toggleCartPopUp } from '../actions/AppActions';
import api from '../../api/requests';

export const getProducts = params => dispatch => {
  dispatch(getProductsRequest());

  api
    .getProducts(params)
    .then(res => {
      dispatch(getProductsSuccess(res.items));
    })
    .catch(err => {
      dispatch(getProductsError(err));
      toastr.error('Error', err.message);
    });
};

export const getProduct = id => dispatch => {
  dispatch(getProductRequest());

  api
    .getProduct(id)
    .then(res => {
      dispatch(getProductSuccess(res));
    })
    .catch(err => {
      dispatch(getProductError(err));
      toastr.error('Error', err.message);
    });
};

export const addToCartOperation = product => dispatch => {
  dispatch(addToCart(product));
  dispatch(toggleCartPopUp(true));
};
