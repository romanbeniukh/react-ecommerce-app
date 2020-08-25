import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getProductsSuccess, getProductSuccess, clearProduct } from '../actions/ProductsActions';

const productsReducer = createReducer([], {
  [getProductsSuccess]: (state, action) => action.payload,
});

const productReducer = createReducer(
  {},
  {
    [getProductSuccess]: (state, action) => action.payload,
    [clearProduct]: () => {
      return {};
    },
  },
);

export default combineReducers({
  products: productsReducer,
  product: productReducer,
});
