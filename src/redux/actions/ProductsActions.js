import { createAction } from '@reduxjs/toolkit';

export const getProductsRequest = createAction('GET_PRODUCTS_REQUEST');
export const getProductsSuccess = createAction('GET_PRODUCTS_SUCCESS');
export const getProductsError = createAction('GET_PRODUCTS_ERROR');
