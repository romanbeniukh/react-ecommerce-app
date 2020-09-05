import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import T from 'prop-types';
import { productsTotalItemsSelector } from '../../redux/selectors/FiltersSelectors';
import { toggleFilters } from '../../redux/actions/AppActions';

import WithLabel from './WithLabel';
import OriginsFilter from './OriginsFilter';
import PriceFilter from './PriceFilter';
import PerPageFilter from './PerPageFilter';
import Btn from '../Inputs/Btn';

const Filters = ({ isAdaptive }) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(productsTotalItemsSelector);

  return (
    <div className="filters">
      <WithLabel label="Items per page">
        <PerPageFilter />
      </WithLabel>
      <WithLabel label="Origins">
        <OriginsFilter />
      </WithLabel>
      <WithLabel label="Price diapason">
        <PriceFilter />
      </WithLabel>
      <span className="filters__total-items">Find {totalItems} products!</span>
      {isAdaptive && (
        <Btn
          label="Hide filters"
          modificator="hide-filters"
          type="button"
          onClick={() => dispatch(toggleFilters(false))}
        />
      )}
    </div>
  );
};

Filters.defaultProps = {
  isAdaptive: false,
};

Filters.propTypes = {
  isAdaptive: T.bool,
};

export default Filters;
