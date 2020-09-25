import { put, call, takeLatest } from 'redux-saga/effects';
import {
  resetFilters,
  setEditable,
  setPage,
  setPerPage,
  setProductsMaxPrice,
  setProductsMinPrice,
  setOrigins,
  setFiltersFromUrl,
} from '../../actions/FiltersActions';
import fetchProductsSaga from './fetchProductsSaga';
import parseFilters from '../../../helpers/parseFilters';

export default function* productsSaga(history) {
  const { pathname, search } = history.location;
  const parsedFilters = parseFilters(search);

  yield put(resetFilters());

  if (Object.keys(parsedFilters).length) yield put(setFiltersFromUrl(parsedFilters));

  if (pathname === '/my-products') yield put(setEditable());

  yield call(fetchProductsSaga, 0, history);

  yield takeLatest([setPage], fetchProductsSaga, 0, history);

  yield takeLatest(
    [setOrigins, setPerPage, setProductsMinPrice, setProductsMaxPrice],
    fetchProductsSaga,
    1500,
    history,
  );
}
