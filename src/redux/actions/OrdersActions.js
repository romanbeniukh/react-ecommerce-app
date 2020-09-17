import { createAction } from '@reduxjs/toolkit';

export const getOrdersRequest = createAction('GET_ORDERS_REQUEST');
export const getOrdersSuccess = createAction('GET_ORDERS_SUCCESS');
export const getOrdersError = createAction('GET_ORDERS_ERROR');

export const getOrderRequest = createAction('GET_ORDER_REQUEST');
export const getOrderSuccess = createAction('GET_ORDER_SUCCESS');
export const getOrderError = createAction('GET_ORDER_ERROR');

export const postOrderRequest = createAction('POST_ORDER_REQUEST');
export const postOrderSuccess = createAction('POST_ORDER_SUCCESS');
export const postOrderError = createAction('POST_ORDER_ERROR');
