import { createSelector } from 'reselect';

export const GET_CART = state => state.cart;
export const GET_PRODUCTS_IN_CART = createSelector([GET_CART], cart => Object.values(cart));
export const GET_CART_ITEMS_COUNT = createSelector([GET_PRODUCTS_IN_CART], products =>
  products.reduce((acc, product) => acc + product.quantity, 0),
);
export const GET_CART_TOTAL_PRICE = createSelector([GET_PRODUCTS_IN_CART], products =>
  products.reduce((acc, product) => acc + product.price * product.quantity, 0),
);
