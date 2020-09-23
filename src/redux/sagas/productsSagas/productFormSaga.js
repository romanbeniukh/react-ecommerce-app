import { put } from 'redux-saga/effects';
import { setProductForEdit, clearProductForEdit } from '../../actions/ProductsActions';
import { toggleModal } from '../../actions/AppActions';

export function* openProductFormModal(product = null) {
  if (product) yield put(setProductForEdit(product));
  yield put(toggleModal(true));
}

export function* closeProductFormModal() {
  yield put(clearProductForEdit());
  yield put(toggleModal(false));
}
