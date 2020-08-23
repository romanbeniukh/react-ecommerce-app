import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import T from 'prop-types';
import NavBar from '../../components/NavBar/NavBarContainer';
import logo from '../../assets/img/logo.svg';
import useWindowSize from '../../hooks/useWindowSize';
import { NOT_ADAPTIVE } from '../../helpers/constants';
import slideLeft from '../../styles/transitions/slide-left.module.sass';

const Header = ({ cartItemsCount, isCartPopUp, isNavigation, toggleCartPopUp, toggleNavigation }) => {
  const width = useWindowSize();
  const location = useLocation();

  return (
    <>
      <header className="page-header">
        <div className="page-header__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="page-header__menu-icon">
          <button
            type="button"
            className="img-replace"
            onClick={() => toggleNavigation(!isNavigation)}
            aria-label="Menu"
          />
        </div>
        {location.pathname !== '/cart' && (
          <div className="page-header__cart-icon cart-icon">
            <div className="page-header__cart-icon-wrap">
              <button
                type="button"
                className="img-replace"
                onClick={() => toggleCartPopUp(!isCartPopUp)}
                aria-label="Cart"
              />
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
      </header>
    </>
  );
};

Header.propTypes = {
  cartItemsCount: T.number.isRequired,
  isCartPopUp: T.bool.isRequired,
  isNavigation: T.bool.isRequired,
  toggleCartPopUp: T.func.isRequired,
  toggleNavigation: T.func.isRequired,
};

export default Header;
