import { call, put, select, delay } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { showLoading, resetLoading } from 'react-redux-loading-bar';
import { filtersSelector } from '../../selectors/FiltersSelectors';
import stringifyFilters from '../../../helpers/stringifyFilters';
import { toggleLoader } from '../../actions/AppActions';
import { getProductsSuccess, getProductsError, getProductsRequest } from '../../actions/ProductsActions';
import api from '../../../api/requests';
import { setFiltersFromRequest } from '../../actions/FiltersActions';

export default function* fetchProductsSaga(delayTime, history) {
  const filters = yield select(filtersSelector);
  const searchParams = stringifyFilters(filters);

  yield put(toggleLoader(true));
  yield put(showLoading());
  yield put(getProductsRequest());
  yield delay(delayTime);

  try {
    const data = yield call(api.getProducts, searchParams);
    yield put(getProductsSuccess(data.items));
    yield put(setFiltersFromRequest(data));
  } catch (err) {
    yield put(getProductsError(err));
    toastr.error('Error', err.message);
  } finally {
    yield put(toggleLoader(false));
    yield put(resetLoading());
  }

  history.push({ search: searchParams });
}
