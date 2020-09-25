import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getProductsSuccess,
  getProductSuccess,
  getProductRequest,
  getOriginsSuccess,
  postProductSuccess,
  patchProductSuccess,
  deleteProductSuccess,
  setProductForEdit,
  clearProductForEdit,
  updateProduct,
} from '../actions/ProductsActions';

const productsReducer = createReducer([], {
  [getProductsSuccess]: (state, action) => action.payload,
  [postProductSuccess]: (state, action) => [...state, action.payload],
  [patchProductSuccess]: (state, action) =>
    state.map(product => (product.id !== action.payload.id ? product : action.payload)),
  [deleteProductSuccess]: (state, action) => state.filter(product => product.id !== action.payload),
});

const productReducer = createReducer(
  {},
  {
    [getProductRequest]: () => ({}),
    [getProductSuccess]: (state, action) => action.payload,
    [updateProduct]: (state, action) => (state.id === action.payload.id ? action.payload : state),
    [deleteProductSuccess]: () => ({}),
  },
);

const productForEditReducer = createReducer(
  {},
  {
    [setProductForEdit]: (state, action) => action.payload,
    [clearProductForEdit]: () => ({}),
  },
);

const originsReducer = createReducer([], {
  [getOriginsSuccess]: (state, action) => action.payload,
});

export default combineReducers({
  products: productsReducer,
  product: productReducer,
  editedProduct: productForEditReducer,
  origins: originsReducer,
});
