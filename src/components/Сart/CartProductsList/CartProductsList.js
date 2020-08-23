import React from 'react';
import T from 'prop-types';
import CartProduct from '../CartProduct/CartProductContainer';
import CartEmpty from '../CartEmpty/CartEmpty';
import currencyFormatter from '../../../helpers/currencyFormatter';

const CartProductsList = ({ products, totalPrice }) =>
  products.length ? (
    <>
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
    </>
  ) : (
    <CartEmpty />
  );

CartProductsList.propTypes = {
  products: T.arrayOf(
    T.shape({
      isEditable: T.bool,
      id: T.string,
      name: T.string,
      price: T.number,
      origin: T.string,
      createdAt: T.string,
      updatedAt: T.string,
      quantity: T.number,
    }),
  ).isRequired,
  totalPrice: T.number.isRequired,
};

export default CartProductsList;
