import React from 'react';
import T from 'prop-types';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../../redux/actions/CartActions';

import ProductCard from '../../Products/ProductCard/ProductCard';
import currencyFormatter from '../../../helpers/currencyFormatter';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-product">
      <button
        className="cart-product__remove"
        type="button"
        onClick={() => dispatch(removeFromCart(product.id))}
        aria-label="remove from cart"
      />
      <ProductCard isCart product={product} />
      <div className="cart-product__quantity">
        <button
          disabled={product.quantity <= 1}
          className="cart-product__quantity-btn"
          type="button"
          onClick={() => dispatch(decrementQuantity(product.id))}
        >
          -
        </button>
        <span className="cart-product__quantity-text">{product.quantity}</span>
        <button
          className="cart-product__quantity-btn"
          type="button"
          onClick={() => dispatch(incrementQuantity(product.id))}
        >
          +
        </button>
      </div>
      <span className="cart-product__total">{currencyFormatter(product.price * product.quantity)} $</span>
    </div>
  );
};

CartProduct.propTypes = {
  product: T.shape({
    isEditable: T.bool,
    id: T.string,
    name: T.string,
    price: T.number,
    origin: T.string,
    createdAt: T.string,
    updatedAt: T.string,
    quantity: T.number,
  }).isRequired,
};

export default CartProduct;
