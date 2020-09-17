import React, { useRef } from 'react';
import T from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { toggleFilters } from '../../redux/actions/AppActions';
import useOutsideClick from '../../hooks/useOtsideClick';
import { isFiltersSelector } from '../../redux/selectors/AppSelectors';

import Filters from '../../components/Filters/Filters';

import slideLeft from '../../styles/transitions/slide-left.module.sass';
import Overlay from '../../components/Overlay/Overlay';

const Sidebar = ({ children, isAdaptive }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const isFilters = useSelector(isFiltersSelector);

  useOutsideClick(ref, () => {
    isAdaptive && dispatch(toggleFilters(false));
  });

  return (
    <div className="with-sidebar">
      {isAdaptive ? (
        <CSSTransition in={isFilters} timeout={300} classNames={slideLeft} unmountOnExit>
          <aside ref={ref} className="page-sidebar">
            <Filters isAdaptive={isAdaptive} />
          </aside>
        </CSSTransition>
      ) : (
        <aside className="page-sidebar">
          <Filters />
        </aside>
      )}
      {isFilters && <Overlay />}
      <div className="page-content">{children}</div>
    </div>
  );
};

Sidebar.propTypes = {
  children: T.element.isRequired,
  isAdaptive: T.bool.isRequired,
};

export default Sidebar;
