import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../../../assets/img/cart.svg';

const CartEmpty = () => (
  <div className="cart-empty">
    <h2 className="cart-empty__title">Your cart is empty :(</h2>
    <span className="cart-empty__text">Go to products and add something!</span>
    <img src={cartImage} alt="empty-cart" />
    <Link className="cart-empty__link" to="/products">
      Go to products
    </Link>
  </div>
);

export default CartEmpty;
