import React from 'react';
import T from 'prop-types';
import ProductCard from '../../Products/ProductCard/ProductCardContainer';
import currencyFormatter from '../../../helpers/currencyFormatter';

const CartProduct = ({ product, incrementQuantity, decrementQuantity, removeFromCart }) => (
  <div className="cart-product">
    <button
      className="cart-product__remove"
      type="button"
      onClick={() => removeFromCart(product.id)}
      aria-label="remove from cart"
    />
    <ProductCard isCart product={product} />
    <div className="cart-product__quantity">
      <button
        disabled={product.quantity <= 1}
        className="cart-product__quantity-btn"
        type="button"
        onClick={() => decrementQuantity(product.id)}
      >
        -
      </button>
      <span className="cart-product__quantity-text">{product.quantity}</span>
      <button className="cart-product__quantity-btn" type="button" onClick={() => incrementQuantity(product.id)}>
        +
      </button>
    </div>
    <span className="cart-product__total">{currencyFormatter(product.price * product.quantity)} $</span>
  </div>
);

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
  incrementQuantity: T.func.isRequired,
  decrementQuantity: T.func.isRequired,
  removeFromCart: T.func.isRequired,
};

export default CartProduct;
