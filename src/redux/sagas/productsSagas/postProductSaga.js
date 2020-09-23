import { call, put } from 'redux-saga/effects';
import { resetLoading, showLoading } from 'react-redux-loading-bar';
import { toastr } from 'react-redux-toastr';
import { toggleLoader } from '../../actions/AppActions';
import { postProductError, postProductRequest, postProductSuccess } from '../../actions/ProductsActions';
import api from '../../../api/requests';
import { closeProductFormModal } from './productFormSaga';

export default function* postProductSaga(credentials) {
  yield put(showLoading());
  yield put(toggleLoader(true));
  yield put(postProductRequest());

  try {
    const data = yield call(api.postProduct, credentials);
    yield put(postProductSuccess(data));
    toastr.success('Success', 'Product successful added');
  } catch (err) {
    yield put(postProductError(err));
    toastr.error('Error', err.message);
  } finally {
    yield call(closeProductFormModal);
    yield put(resetLoading());
    yield put(toggleLoader(false));
  }
}
