import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import T from 'prop-types';
import { toggleNavigation } from '../../redux/actions/AppActions';
import { MAIN_PAGE, PRODUCTS_PAGE } from '../../helpers/constants';

import useBodyOverflow from '../../hooks/useBodyOverflow';
import useOutsideClick from '../../hooks/useOtsideClick';
import useListenHistory from '../../hooks/useListenHistory';

const NavBar = ({ isAdaptive }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  useOutsideClick(ref, () => {
    isAdaptive && dispatch(toggleNavigation(false));
  });

  useListenHistory(() => {
    isAdaptive && dispatch(toggleNavigation(false));
  });

  useBodyOverflow(isAdaptive);

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
