import React, { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import T from 'prop-types';
import { toggleNavigation, toggleModal } from '../../redux/actions/AppActions';
import { MAIN_PAGE, PRODUCTS_PAGE, MY_PRODUCTS_PAGE, ORDERS_PAGE, CART_PAGE } from '../../helpers/constants';
import useOutsideClick from '../../hooks/useOtsideClick';
import useListenHistory from '../../hooks/useListenHistory';
import Btn from '../Inputs/Btn';

const NavBar = ({ isAdaptive }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const location = useLocation();

  useOutsideClick(ref, () => {
    isAdaptive && dispatch(toggleNavigation(false));
  });

  useListenHistory(() => {
    isAdaptive && dispatch(toggleNavigation(false));
  });

  return (
    <nav className="nav-bar" ref={ref}>
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <NavLink to={MAIN_PAGE} className="nav-bar__link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to={PRODUCTS_PAGE} className="nav-bar__link" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to={MY_PRODUCTS_PAGE} className="nav-bar__link" activeClassName="active">
            My products
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to={ORDERS_PAGE} className="nav-bar__link" activeClassName="active">
            Orders
          </NavLink>
        </li>
        {location.pathname !== CART_PAGE && (
          <li className="nav-bar__item nav-bar__item--btn">
            <Btn
              type="button"
              onClick={() => dispatch(toggleModal(true))}
              label="+ Add product"
              modificator="stroke-color"
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  isAdaptive: false,
};

NavBar.propTypes = {
  isAdaptive: T.bool,
};

export default NavBar;
