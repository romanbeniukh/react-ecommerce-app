import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { productsMinPriceSelector, productsMaxPriceSelector } from '../../redux/selectors/FiltersSelectors';
import { DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICE } from '../../helpers/constants';
import { setFiltersPriceSaga } from '../../redux/sagas/filtersSaga';
import useRunSaga from '../../hooks/useRunSaga';
import CustomRange from '../Inputs/CustomRange';

const PriceFilter = () => {
  const minPrice = useSelector(productsMinPriceSelector);
  const maxPrice = useSelector(productsMaxPriceSelector);
  const setFiltersPrice = useRunSaga(setFiltersPriceSaga);
  const [priceDiapason, setPrices] = useState([minPrice, maxPrice]);

  useEffect(() => {
    setPrices([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

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
      onAfterChange={() => setFiltersPrice(priceDiapason)}
    />
  );
};

export default PriceFilter;
