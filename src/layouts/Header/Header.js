import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';
import { isCartPopUpSelector, isNavigationSelector } from '../../redux/selectors/AppSelectors';
import { getCartItemsCountSelector } from '../../redux/selectors/CartSelector';
import { toggleNavigation, toggleCartPopUp } from '../../redux/actions/AppActions';
import { NOT_ADAPTIVE, CART_PAGE } from '../../helpers/constants';

import NavBar from '../../components/NavBar/NavBar';
import CartPopUp from '../../components/Сart/CartPopUp/CartPopUp';

import logo from '../../assets/img/logo.svg';
import slideLeft from '../../styles/transitions/slide-left.module.sass';
import slideRight from '../../styles/transitions/slide-right.module.sass';

const Header = () => {
  const dispatch = useDispatch();
  const width = useWindowSize();
  const location = useLocation();

  const cartItemsCount = useSelector(getCartItemsCountSelector);
  const isCartPopUp = useSelector(isCartPopUpSelector);
  const isNavigation = useSelector(isNavigationSelector);

  const handleCartPopUp = useCallback(() => {
    dispatch(toggleCartPopUp(!isCartPopUp));
  }, [dispatch, isCartPopUp]);

  const handleNavigation = useCallback(() => {
    dispatch(toggleNavigation(!isNavigation));
  }, [dispatch, isNavigation]);

  return (
    <header className="page-header">
      <div className="page-header__logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="page-header__menu-icon">
        <button type="button" className="img-replace" onClick={handleNavigation} aria-label="Menu" />
      </div>
      {location.pathname !== CART_PAGE && (
        <div className="page-header__cart-icon cart-icon">
          <div className="page-header__cart-icon-wrap">
            <button type="button" className="img-replace" onClick={handleCartPopUp} aria-label="Cart" />
            {cartItemsCount > 0 && <div className="page-header__cart-icon-count">{cartItemsCount}</div>}
          </div>
        </div>
      )}
      {width < NOT_ADAPTIVE ? (
        <CSSTransition in={isNavigation} timeout={300} classNames={slideLeft} unmountOnExit>
          <NavBar isAdaptive />
        </CSSTransition>
      ) : (
        <NavBar />
      )}
      <CSSTransition in={isCartPopUp} timeout={300} classNames={slideRight} unmountOnExit>
        <CartPopUp />
      </CSSTransition>
    </header>
  );
};

export default Header;
