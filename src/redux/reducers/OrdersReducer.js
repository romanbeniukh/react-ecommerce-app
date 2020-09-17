import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { postOrderSuccess, getOrdersSuccess, getOrderSuccess, getOrderRequest } from '../actions/OrdersActions';

const ordersReducer = createReducer([], {
  [getOrdersSuccess]: (state, action) => [...action.payload],
});

const orderReducer = createReducer(
  {},
  {
    [getOrderRequest]: () => ({}),
    [getOrderSuccess]: (state, action) => action.payload,
    [postOrderSuccess]: (state, action) => action.payload,
  },
);

export default combineReducers({
  orders: ordersReducer,
  order: orderReducer,
});
