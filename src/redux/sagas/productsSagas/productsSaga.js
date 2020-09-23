import { put, select, call, takeLatest } from 'redux-saga/effects';
import {
  resetFilters,
  setEditable,
  setNotEditable,
  setPage,
  setPerPage,
  setProductsMaxPrice,
  setProductsMinPrice,
  setOrigins,
  setFiltersFromUrl,
} from '../../actions/FiltersActions';
import { productsEditable } from '../../selectors/FiltersSelectors';
import fetchProductsSaga from './fetchProductsSaga';
import parseFilters from '../../../helpers/parseFilters';

export default function* productsSaga(history) {
  const isEditable = yield select(productsEditable);
  const { pathname, search } = history.location;
  const parsedFilters = parseFilters(search);

  yield put(resetFilters());

  if (Object.keys(parsedFilters).length) yield put(setFiltersFromUrl(parsedFilters));

  if (pathname === '/products' && isEditable) yield put(setNotEditable());

  if (pathname === '/my-products' && !isEditable) yield put(setEditable());

  yield call(fetchProductsSaga, 0, history);

  yield takeLatest([setPage], fetchProductsSaga, 0, history);

  yield takeLatest(
    [setOrigins, setPerPage, setProductsMinPrice, setProductsMaxPrice],
    fetchProductsSaga,
    1500,
    history,
  );
}
