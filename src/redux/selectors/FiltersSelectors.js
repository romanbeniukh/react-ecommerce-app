import { createSelector } from 'reselect';

export const filtersSelector = state => state.filters;
export const selectedOriginsSelector = createSelector([filtersSelector], filters => filters.origins);
export const productsMinPriceSelector = createSelector([filtersSelector], filters => filters.minPrice);
export const productsMaxPriceSelector = createSelector([filtersSelector], filters => filters.maxPrice);
export const productsPerPageSelector = createSelector([filtersSelector], filters => filters.perPage);
export const productsTotalItemsSelector = createSelector([filtersSelector], filters => filters.totalItems);
export const productsPageSelector = createSelector([filtersSelector], filters => filters.page);
