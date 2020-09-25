import { toastr } from 'react-redux-toastr';
import { put, call } from 'redux-saga/effects';
import api from '../../api/requests';
import { getOriginsRequest, getOriginsSuccess, getOriginsError } from '../actions/ProductsActions';

export default function* rootSaga() {
  yield call(api.setAuthToken);
  yield put(getOriginsRequest());

  try {
    const data = yield call(api.getOrigins);
    yield put(getOriginsSuccess(data.items));
  } catch (err) {
    yield put(getOriginsError(err));
    toastr.error('Error', err.message);
  }
}
