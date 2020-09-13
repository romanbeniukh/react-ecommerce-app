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
  postProductRequest,
  postProductSuccess,
  postProductError,
  patchProductRequest,
  patchProductSuccess,
  patchProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  setProductForEdit,
  clearProductForEdit,
  updateProduct,
} from '../actions/ProductsActions';
import { setFiltersFromRequest } from '../actions/FiltersActions';

import { addToCart } from '../actions/CartActions';
import { toggleCartPopUp, toggleModal, toggleLoader } from '../actions/AppActions';
import api from '../../api/requests';

export const openProductFormModal = (product = null) => dispatch => {
  product && dispatch(setProductForEdit(product));
  dispatch(toggleModal(true));
};

export const closeProductFormModal = () => dispatch => {
  dispatch(clearProductForEdit());
  dispatch(toggleModal(false));
};

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
  dispatch(toggleLoader(true));
  dispatch(getProductRequest());

  api
    .getProduct(id)
    .then(res => {
      dispatch(getProductSuccess(res));
    })
    .catch(err => {
      dispatch(getProductError(err));
      toastr.error('Error', err.message);
    })
    .finally(() => dispatch(toggleLoader(false)));
};

export const postProduct = credentials => dispatch => {
  dispatch(postProductRequest());

  api
    .postProduct(credentials)
    .then(res => {
      dispatch(postProductSuccess(res));
      dispatch(closeProductFormModal());
      toastr.success('Success', 'Product successful added');
    })
    .catch(err => {
      dispatch(postProductError(err));
      toastr.error('Error', err.message);
    });
};

export const patchProduct = (id, credentials) => dispatch => {
  dispatch(patchProductRequest());

  api
    .patchProduct(id, credentials)
    .then(res => {
      dispatch(patchProductSuccess(res));
      dispatch(updateProduct(res));
      dispatch(closeProductFormModal());
      toastr.success('Success', 'Product successful edited');
    })
    .catch(err => {
      dispatch(patchProductError(err));
      toastr.error('Error', err.message);
    });
};

export const deleteProduct = id => dispatch => {
  dispatch(deleteProductRequest());

  api
    .deleteProduct(id)
    .then(() => {
      dispatch(deleteProductSuccess(id));
      toastr.success('Success', 'Product successful deleted');
    })
    .catch(err => {
      dispatch(deleteProductError(err));
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
