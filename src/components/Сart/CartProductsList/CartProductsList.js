import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  getProductsInCartSelector,
  getCartTotalPriceSelector,
  getCartForOrder,
} from '../../../redux/selectors/CartSelector';
import useRunSaga from '../../../hooks/useRunSaga';
import postOrderSaga from '../../../redux/sagas/ordersSagas/postOrderSaga';

import CartProduct from '../CartProduct/CartProduct';
import CartEmpty from '../CartEmpty/CartEmpty';
import currencyFormatter from '../../../helpers/currencyFormatter';
import Btn from '../../Inputs/Btn';

const CartProductsList = () => {
  const history = useHistory();
  const products = useSelector(getProductsInCartSelector);
  const totalPrice = useSelector(getCartTotalPriceSelector);
  const cartForOrder = useSelector(getCartForOrder);
  const postOrder = useRunSaga(postOrderSaga);

  const orderData = {
    order: {
      pieces: cartForOrder,
    },
  };

  return products.length ? (
    <ul className="cart-products">
      {products.map(product => (
        <li className="cart-products__item" key={product.id}>
          <CartProduct product={product} />
        </li>
      ))}
      <li className="cart-products__total">
        Total: <span className="cart-products__total-price">{`${currencyFormatter(totalPrice)} $`}</span>
      </li>
      <li className="cart-products__confirm">
        <Btn
          label="Confirm order"
          onClick={() => postOrder(orderData, history)}
          modificator="secondary"
          type="button"
        />
      </li>
    </ul>
  ) : (
    <CartEmpty />
  );
};

export default CartProductsList;
