import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getProductsSuccess, getProductSuccess, getProductRequest } from '../actions/ProductsActions';

const productsReducer = createReducer([], {
  [getProductsSuccess]: (state, action) => action.payload,
});

const productReducer = createReducer(
  {},
  {
    [getProductRequest]: () => ({}),
    [getProductSuccess]: (state, action) => action.payload,
  },
);

export default combineReducers({
  products: productsReducer,
  product: productReducer,
});
