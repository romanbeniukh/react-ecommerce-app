import { createReducer } from '@reduxjs/toolkit';
import {
  setPage,
  setPerPage,
  setOrigins,
  setProductsMaxPrice,
  setProductsMinPrice,
  setFiltersFromRequest,
} from '../actions/FiltersActions';
import { INITIAL_FILTERS } from '../../helpers/constants';

const filtersReducer = createReducer(INITIAL_FILTERS, {
  [setPage]: (state, action) => {
    return {
      ...state,
      page: action.payload,
    };
  },
  [setPerPage]: (state, action) => {
    return {
      ...state,
      page: state.page !== 1 ? 1 : state.page,
      perPage: action.payload,
    };
  },
  [setOrigins]: (state, action) => {
    return {
      ...state,
      page: state.page !== 1 ? 1 : state.page,
      origins: [...action.payload],
    };
  },
  [setProductsMinPrice]: (state, action) => {
    return {
      ...state,
      page: state.page !== 1 ? 1 : state.page,
      minPrice: action.payload,
    };
  },
  [setProductsMaxPrice]: (state, action) => {
    return {
      ...state,
      page: state.page !== 1 ? 1 : state.page,
      maxPrice: action.payload,
    };
  },
  [setFiltersFromRequest]: (state, action) => {
    return {
      ...state,
      page: action.payload.page,
      perPage: action.payload.perPage,
      totalItems: action.payload.totalItems,
    };
  },
});

export default filtersReducer;
