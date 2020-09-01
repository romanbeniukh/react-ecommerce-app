import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useOutsideClick from '../../../hooks/useOtsideClick';
import useListenHistory from '../../../hooks/useListenHistory';
import { toggleCartPopUp } from '../../../redux/actions/AppActions';
import { getProductsInCartSelector, getCartTotalPriceSelector } from '../../../redux/selectors/CartSelector';
import { CART_PAGE } from '../../../helpers/constants';

import ProductCard from '../../Products/ProductCard/ProductCard';
import currencyFormatter from '../../../helpers/currencyFormatter';
import CartEmpty from '../CartEmpty/CartEmpty';

const CartPopUp = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const products = useSelector(getProductsInCartSelector);
  const totalPrice = useSelector(getCartTotalPriceSelector);

  useOutsideClick(ref, () => {
    dispatch(toggleCartPopUp(false));
  });

  useListenHistory(() => {
    dispatch(toggleCartPopUp(false));
  });

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
            <Link className="cart-pop-up__to-cart-link" to={CART_PAGE}>
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

export default CartPopUp;
