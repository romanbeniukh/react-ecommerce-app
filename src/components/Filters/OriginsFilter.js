import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOriginsSelector } from '../../redux/selectors/ProductsSelectors';
import { selectedOriginsSelector } from '../../redux/selectors/FiltersSelectors';
import { setOrigins } from '../../redux/actions/FiltersActions';
import CustomCheckboxGroup from '../Inputs/CustomCheckboxGroup';

const OriginsFilter = () => {
  const origins = useSelector(getOriginsSelector);
  const selectedOrigins = useSelector(selectedOriginsSelector);
  const dispatch = useDispatch();

  const handleOriginsChange = checkedValues => {
    dispatch(setOrigins(checkedValues));
  };

  return (
    <>
      <CustomCheckboxGroup selectedValues={selectedOrigins} handler={handleOriginsChange} values={origins} />
    </>
  );
};

export default OriginsFilter;
