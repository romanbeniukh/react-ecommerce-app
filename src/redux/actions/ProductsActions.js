import { createAction } from '@reduxjs/toolkit';

export const getProductsRequest = createAction('GET_PRODUCTS_REQUEST');
export const getProductsSuccess = createAction('GET_PRODUCTS_SUCCESS');
export const getProductsError = createAction('GET_PRODUCTS_ERROR');

export const getProductRequest = createAction('GET_PRODUCT_REQUEST');
export const getProductSuccess = createAction('GET_PRODUCT_SUCCESS');
export const getProductError = createAction('GET_PRODUCT_ERROR');

export const postProductRequest = createAction('POST_PRODUCT_REQUEST');
export const postProductSuccess = createAction('POST_PRODUCT_SUCCESS');
export const postProductError = createAction('POST_PRODUCT_ERROR');

export const patchProductRequest = createAction('PATCH_PRODUCT_REQUEST');
export const patchProductSuccess = createAction('PATCH_PRODUCT_SUCCESS');
export const patchProductError = createAction('PATCH_PRODUCT_ERROR');

export const deleteProductRequest = createAction('DELETE_PRODUCT_REQUEST');
export const deleteProductSuccess = createAction('DELETE_PRODUCT_SUCCESS');
export const deleteProductError = createAction('DELETE_PRODUCT_ERROR');

export const getOriginsRequest = createAction('GET_ORIGINS_REQUEST');
export const getOriginsSuccess = createAction('GET_ORIGINS_SUCCESS');
export const getOriginsError = createAction('GET_ORIGINS_ERROR');

export const setProductForEdit = createAction('SET_PRODUCT_FOR_EDIT');
export const clearProductForEdit = createAction('CLEAR_PRODUCT_FOR_EDIT');
export const updateProduct = createAction('UPDATE_PRODUCT');
