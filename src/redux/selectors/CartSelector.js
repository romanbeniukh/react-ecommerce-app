import { createSelector } from 'reselect';

export const getCartSelector = state => state.cart;
export const getProductsInCartSelector = createSelector([getCartSelector], cart => Object.values(cart));
export const getCartItemsCountSelector = createSelector([getProductsInCartSelector], products =>
  products.reduce((acc, product) => acc + product.quantity, 0),
);
export const getCartTotalPriceSelector = createSelector([getProductsInCartSelector], products =>
  products.reduce((acc, product) => acc + product.price * product.quantity, 0),
);
export const getCartForOrder = createSelector([getProductsInCartSelector], products =>
  products.map(product => ({ productId: product.id, count: product.quantity })),
);
