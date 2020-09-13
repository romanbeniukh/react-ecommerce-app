// breakpoints
export const NOT_ADAPTIVE = 1200;

// routes
export const MAIN_PAGE = '/';
export const PRODUCTS_PAGE = '/products';
export const MY_PRODUCTS_PAGE = '/my-products';
export const CART_PAGE = '/cart';
export const ORDERS_PAGE = '/orders';

// filters
export const DEFAULT_PAGE = 1;
export const DEFAULT_MIN_PRICE = 0;
export const DEFAULT_MAX_PRICE = 1000;
export const DEFAULT_PER_PAGE = 50;
export const PER_PAGE_OPTIONS = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
];

export const INITIAL_FILTERS = {
  page: null,
  perPage: null,
  totalItems: null,
  origins: [],
  minPrice: DEFAULT_MIN_PRICE,
  maxPrice: DEFAULT_MAX_PRICE,
};
