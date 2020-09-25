import { call, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { resetLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../../api/requests';
import { getProductRequest, getProductSuccess, getProductError } from '../../actions/ProductsActions';
import { toggleLoader } from '../../actions/AppActions';

export default function* fetchProductSaga(id) {
  yield put(showLoading());
  yield put(toggleLoader(true));
  yield put(getProductRequest());

  try {
    const data = yield call(api.getProduct, id);
    yield put(getProductSuccess(data));
  } catch (err) {
    yield put(getProductError(err));
    toastr.error('Error', err.message);
  } finally {
    yield put(resetLoading());
    yield put(toggleLoader(false));
  }
}
