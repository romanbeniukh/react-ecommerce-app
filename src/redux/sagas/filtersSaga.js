import { put } from 'redux-saga/effects';
import { setProductsMinPrice, setProductsMaxPrice, setPage } from '../actions/FiltersActions';

export function* setPageWithScrollUpSaga(page) {
  yield put(setPage(page));

  window.scrollTo({
    top: 0,
  });
}

export function* setFiltersPriceSaga(value) {
  yield put(setProductsMinPrice(value[0]));
  yield put(setProductsMaxPrice(value[1]));
}
