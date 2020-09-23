import { put } from 'redux-saga/effects';
import { addToCart } from '../actions/CartActions';
import { toggleCartPopUp } from '../actions/AppActions';

export default function* addToCartSaga(product) {
  yield put(addToCart(product));
  yield put(toggleCartPopUp(true));
}
