import { call, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { showLoading, resetLoading } from 'react-redux-loading-bar';
import { postOrderSuccess, postOrderRequest, postOrderError } from '../../actions/OrdersActions';
import api from '../../../api/requests';
import { toggleLoader } from '../../actions/AppActions';
import { ORDERS_PAGE } from '../../../helpers/constants';

export default function* postOrderSaga(credentials, history) {
  yield put(toggleLoader(true));
  yield put(showLoading());
  yield put(postOrderRequest());

  try {
    const data = yield call(api.postOrder, credentials);
    yield put(postOrderSuccess(data));
    history.push(`${ORDERS_PAGE}/${data.id}`);
  } catch (err) {
    yield put(postOrderError(err));
    toastr.error('Error', err.message);
  } finally {
    yield put(toggleLoader(false));
    yield put(resetLoading());
  }
}
