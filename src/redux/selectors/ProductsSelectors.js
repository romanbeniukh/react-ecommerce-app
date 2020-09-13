import { createSelector } from 'reselect';

export const getProducts = state => state.products;

export const getProductsSelector = createSelector([getProducts], products => products.products);
export const getProductSelector = createSelector([getProducts], products => products.product);
export const getOriginsSelector = createSelector([getProducts], products => products.origins);
export const getEditedProductSelector = createSelector([getProducts], products => products.editedProduct);
