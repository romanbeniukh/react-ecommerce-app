import { call, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { showLoading, resetLoading } from 'react-redux-loading-bar';
import { getOrdersSuccess, getOrdersRequest, getOrdersError } from '../../actions/OrdersActions';
import api from '../../../api/requests';
import { toggleLoader } from '../../actions/AppActions';

export default function* fetchOrdersSaga() {
  yield put(toggleLoader(true));
  yield put(showLoading());
  yield put(getOrdersRequest());

  try {
    const data = yield call(api.getOrders);
    yield put(getOrdersSuccess(data.items));
  } catch (err) {
    yield put(getOrdersError(err));
    toastr.error('Error', err.message);
  } finally {
    yield put(toggleLoader(false));
    yield put(resetLoading());
  }
}
