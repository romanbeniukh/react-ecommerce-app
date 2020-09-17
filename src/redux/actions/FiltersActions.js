import { createAction } from '@reduxjs/toolkit';

export const setPage = createAction('SET_PAGE');
export const setPerPage = createAction('SET_PER_PAGE');
export const setOrigins = createAction('SET_ORIGINS');
export const removeOrigins = createAction('REMOVE_ORIGINS');
export const setProductsMinPrice = createAction('SET_PRODUCTS_MIN_PRICE');
export const setProductsMaxPrice = createAction('SET_PRODUCTS_MAX_PRICE');
export const setFiltersFromRequest = createAction('SET_FILTERS_FROM_REQUEST');
export const resetFilters = createAction('RESET_FILTERS');
