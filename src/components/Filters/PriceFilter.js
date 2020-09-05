import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsMinPriceSelector, productsMaxPriceSelector } from '../../redux/selectors/FiltersSelectors';
import { DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE } from '../../helpers/constants';
import { setFiltersPrice } from '../../redux/operations/FiltersOperations';
import CustomRange from '../Inputs/CustomRange';

const PriceFilter = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector(productsMinPriceSelector);
  const maxPrice = useSelector(productsMaxPriceSelector);

  const [priceDiapason, setPrices] = useState([minPrice, maxPrice]);

  const handlePriceChange = value => {
    setPrices(value);
  };

  return (
    <CustomRange
      min={DEFAULT_MIN_PRICE}
      max={DEFAULT_MAX_PRICE}
      step={10}
      value={priceDiapason}
      onChange={handlePriceChange}
      onAfterChange={() => dispatch(setFiltersPrice(priceDiapason))}
    />
  );
};

export default PriceFilter;
