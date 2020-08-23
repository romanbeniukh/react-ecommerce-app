import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getProductsSuccess } from '../actions/ProductsActions';

const productsReducer = createReducer([], {
  [getProductsSuccess]: (state, action) => action.payload,
});

export default combineReducers({
  products: productsReducer,
});
