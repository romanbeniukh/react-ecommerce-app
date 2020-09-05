import { createAction } from '@reduxjs/toolkit';

export const getProductsRequest = createAction('GET_PRODUCTS_REQUEST');
export const getProductsSuccess = createAction('GET_PRODUCTS_SUCCESS');
export const getProductsError = createAction('GET_PRODUCTS_ERROR');

export const getProductRequest = createAction('GET_PRODUCT_REQUEST');
export const getProductSuccess = createAction('GET_PRODUCT_SUCCESS');
export const getProductError = createAction('GET_PRODUCT_ERROR');

export const getOriginsRequest = createAction('GET_ORIGINS_REQUEST');
export const getOriginsSuccess = createAction('GET_ORIGINS_SUCCESS');
export const getOriginsError = createAction('GET_ORIGINS_ERROR');
