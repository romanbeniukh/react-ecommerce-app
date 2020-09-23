import { call, put } from 'redux-saga/effects';
import { resetLoading, showLoading } from 'react-redux-loading-bar';
import { toastr } from 'react-redux-toastr';
import { toggleLoader } from '../../actions/AppActions';
import {
  patchProductError,
  patchProductRequest,
  patchProductSuccess,
  updateProduct,
} from '../../actions/ProductsActions';
import api from '../../../api/requests';
import { closeProductFormModal } from './productFormSaga';

export default function* patchProductSaga(id, credentials) {
  yield put(showLoading());
  yield put(toggleLoader(true));
  yield put(patchProductRequest());

  try {
    const data = yield call(api.patchProduct, id, credentials);
    yield put(patchProductSuccess(data));
    yield put(updateProduct(data));
    toastr.success('Success', 'Product successful edited');
  } catch (err) {
    yield put(patchProductError(err));
    toastr.error('Error', err.message);
  } finally {
    yield call(closeProductFormModal);
  }

  yield put(resetLoading());
  yield put(toggleLoader(false));
}
