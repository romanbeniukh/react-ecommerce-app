import { call, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { showLoading, resetLoading } from 'react-redux-loading-bar';
import { getOrderSuccess, getOrderRequest, getOrderError } from '../../actions/OrdersActions';
import api from '../../../api/requests';
import { toggleLoader } from '../../actions/AppActions';

export default function* fetchOrderSaga(id) {
  yield put(toggleLoader(true));
  yield put(showLoading());
  yield put(getOrderRequest());

  try {
    const data = yield call(api.getOrder, id);
    yield put(getOrderSuccess(data));
  } catch (err) {
    yield put(getOrderError(err));
    toastr.error('Error', err.message);
  } finally {
    yield put(toggleLoader(false));
    yield put(resetLoading());
  }
}
