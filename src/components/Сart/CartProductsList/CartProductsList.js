import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsInCartSelector, getCartTotalPriceSelector } from '../../../redux/selectors/CartSelector';

import CartProduct from '../CartProduct/CartProduct';
import CartEmpty from '../CartEmpty/CartEmpty';
import currencyFormatter from '../../../helpers/currencyFormatter';

const CartProductsList = () => {
  const products = useSelector(getProductsInCartSelector);
  const totalPrice = useSelector(getCartTotalPriceSelector);

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
    </ul>
  ) : (
    <CartEmpty />
  );
};

export default CartProductsList;
