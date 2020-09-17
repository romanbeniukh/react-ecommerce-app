import { createSelector } from 'reselect';

export const getOrdersSelector = state => state.orders.orders;
export const getOrderSelector = state => state.orders.order;

export const getOrderTotalPrice = createSelector(
  [getOrderSelector],
  order => order && order.pieces && order.pieces.reduce((acc, item) => acc + item.product.price * item.count, 0),
);
