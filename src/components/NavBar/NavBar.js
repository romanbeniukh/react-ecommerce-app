import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import T from 'prop-types';
import useBodyOverflow from '../../hooks/useBodyOverflow';
import useOutsideClick from '../../hooks/useOtsideClick';
import useListenHistory from '../../hooks/useListenHistory';

const NavBar = ({ isAdaptive, toggleNavigation }) => {
  const ref = useRef();

  useOutsideClick(ref, () => {
    isAdaptive && toggleNavigation(false);
  });

  useListenHistory(() => {
    isAdaptive && toggleNavigation(false);
  });

  useBodyOverflow(isAdaptive);

  return (
    <nav className="nav-bar" ref={ref}>
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <NavLink to="/" className="nav-bar__link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-bar__item">
          <NavLink to="/products" className="nav-bar__link" activeClassName="active">
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
  toggleNavigation: T.func.isRequired,
};

export default NavBar;
