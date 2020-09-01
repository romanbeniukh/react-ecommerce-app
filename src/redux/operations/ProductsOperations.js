import { toastr } from 'react-redux-toastr';
import {
  getProductsRequest,
  getProductsSuccess,
  getProductsError,
  getProductRequest,
  getProductSuccess,
  getProductError,
  getOriginsRequest,
  getOriginsSuccess,
  getOriginsError,
} from '../actions/ProductsActions';
import { setFiltersFromRequest } from '../actions/FiltersActions';

import { addToCart } from '../actions/CartActions';
import { toggleCartPopUp } from '../actions/AppActions';
import api from '../../api/requests';

export const getProducts = params => dispatch => {
  dispatch(getProductsRequest());

  api
    .getProducts(params)
    .then(res => {
      dispatch(getProductsSuccess(res.items));
      dispatch(setFiltersFromRequest(res));
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

export const getOrigins = () => dispatch => {
  dispatch(getOriginsRequest());

  api
    .getOrigins()
    .then(res => {
      dispatch(getOriginsSuccess(res.items));
    })
    .catch(err => {
      dispatch(getOriginsError(err));
      toastr.error('Error', err.message);
    });
};

export const addToCartOperation = product => dispatch => {
  dispatch(addToCart(product));
  dispatch(toggleCartPopUp(true));
};
