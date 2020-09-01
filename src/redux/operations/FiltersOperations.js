import { setProductsMinPrice, setProductsMaxPrice, setPage } from '../actions/FiltersActions';

export const setFiltersPrice = value => dispatch => {
  dispatch(setProductsMinPrice(value[0]));
  dispatch(setProductsMaxPrice(value[1]));
};

export const setPageWithScrollUp = page => dispatch => {
  dispatch(setPage(page));

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
