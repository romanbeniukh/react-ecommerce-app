import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import useBodyOverflow from '../../../hooks/useBodyOverflow';
import useOutsideClick from '../../../hooks/useOtsideClick';
import useListenHistory from '../../../hooks/useListenHistory';
import ProductCard from '../../Products/ProductCard/ProductCardContainer';
import currencyFormatter from '../../../helpers/currencyFormatter';
import CartEmpty from '../CartEmpty/CartEmpty';

const CartPopUp = ({ toggleCartPopUp, products, totalPrice }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    toggleCartPopUp(false);
  });

  useListenHistory(() => {
    toggleCartPopUp(false);
  });

  useBodyOverflow(true);

  return (
    <div className="cart-pop-up" ref={ref}>
      {products.length ? (
        <>
          <h2 className="cart-pop-up__title">Cart</h2>
          {products.map(product => (
            <ProductCard isSmallCart key={product.id} product={product} />
          ))}
          <div className="cart-pop-up__total-price-wrap">
            Total:<span className="cart-pop-up__total-price">{`${currencyFormatter(totalPrice)} $`}</span>
          </div>
          <div className="cart-pop-up__to-cart-link-wrap">
            <Link className="cart-pop-up__to-cart-link" to="/cart">
              Go to cart page
            </Link>
          </div>
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

CartPopUp.propTypes = {
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
  toggleCartPopUp: T.func.isRequired,
  totalPrice: T.number.isRequired,
};

export default CartPopUp;
