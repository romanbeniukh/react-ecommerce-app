import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  getProductsInCartSelector,
  getCartTotalPriceSelector,
  getCartForOrder,
} from '../../../redux/selectors/CartSelector';
import { postOrder } from '../../../redux/operations/OrdersOperations';

import CartProduct from '../CartProduct/CartProduct';
import CartEmpty from '../CartEmpty/CartEmpty';
import currencyFormatter from '../../../helpers/currencyFormatter';
import Btn from '../../Inputs/Btn';

const CartProductsList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(getProductsInCartSelector);
  const totalPrice = useSelector(getCartTotalPriceSelector);
  const cartForOrder = useSelector(getCartForOrder);

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
          onClick={() => dispatch(postOrder(orderData, history))}
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
