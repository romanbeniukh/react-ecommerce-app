import { call, put } from 'redux-saga/effects';
import { resetLoading, showLoading } from 'react-redux-loading-bar';
import { toastr } from 'react-redux-toastr';
import { toggleLoader } from '../../actions/AppActions';
import { deleteProductError, deleteProductRequest, deleteProductSuccess } from '../../actions/ProductsActions';
import api from '../../../api/requests';

export default function* deleteProductSaga(id) {
  yield put(showLoading());
  yield put(toggleLoader(true));
  yield put(deleteProductRequest());

  try {
    yield call(api.deleteProduct, id);
    yield put(deleteProductSuccess(id));
    toastr.success('Success', 'Product successful deleted');
  } catch (err) {
    yield put(deleteProductError(err));
    toastr.error('Error', err.message);
  } finally {
    yield put(resetLoading());
    yield put(toggleLoader(false));
  }
}
