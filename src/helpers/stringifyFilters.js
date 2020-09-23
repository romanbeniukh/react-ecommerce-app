import { DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE, DEFAULT_PAGE, DEFAULT_PER_PAGE } from './constants';

export default filters => {
  const { origins, page, perPage, minPrice, maxPrice, editable } = filters;

  const currentFilters = [
    origins.length ? `origins=${origins.join(',')}` : '',
    page && page !== DEFAULT_PAGE ? `page=${page}` : '',
    perPage && perPage !== DEFAULT_PER_PAGE ? `perPage=${perPage}` : '',
    minPrice !== DEFAULT_MIN_PRICE ? `minPrice=${minPrice}` : '',
    maxPrice !== DEFAULT_MAX_PRICE ? `maxPrice=${maxPrice}` : '',
    editable ? `editable=true` : '',
  ];

  return currentFilters.filter(Boolean).length !== 0 ? `${currentFilters.filter(Boolean).join('&')}` : '';
};
