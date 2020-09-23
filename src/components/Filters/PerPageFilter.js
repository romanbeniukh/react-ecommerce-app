import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { PER_PAGE_OPTIONS } from '../../helpers/constants';
import { setPerPage } from '../../redux/actions/FiltersActions';
import { productsPerPageSelector } from '../../redux/selectors/FiltersSelectors';

const PerPageFilter = () => {
  const dispatch = useDispatch();
  const productsPerPage = useSelector(productsPerPageSelector);
  const initialValue = PER_PAGE_OPTIONS.filter(item => item.value === productsPerPage);

  const handlePerPage = selectedOption => {
    const { value } = selectedOption;
    dispatch(setPerPage(value));
  };

  return (
    <Select
      defaultValue={initialValue}
      placeholder={productsPerPage}
      onChange={handlePerPage}
      options={PER_PAGE_OPTIONS}
    />
  );
};

export default PerPageFilter;
