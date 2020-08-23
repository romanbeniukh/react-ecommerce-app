import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { setPage, setProductsPerPage, setProductsLimit } from '../actions/FiltersActions';

const pageReducer = createReducer(null, {
  [setPage]: (state, action) => action.payload,
});

const productsPerPageReducer = createReducer(null, {
  [setProductsPerPage]: (state, action) => action.payload,
});

const productsLimitReducer = createReducer(null, {
  [setProductsLimit]: (state, action) => action.payload,
});

export default combineReducers({
  page: pageReducer,
  productsPerPage: productsPerPageReducer,
  productsLimit: productsLimitReducer,
});
