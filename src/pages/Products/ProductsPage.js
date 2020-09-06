import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../../redux/operations/ProductsOperations';
import {
  filtersSelector,
  productsPerPageSelector,
  productsTotalItemsSelector,
  productsPageSelector,
} from '../../redux/selectors/FiltersSelectors';
import { isFiltersSelector } from '../../redux/selectors/AppSelectors';
import { toggleFilters } from '../../redux/actions/AppActions';
import { setPageWithScrollUp } from '../../redux/operations/FiltersOperations';
import stringifyFilters from '../../helpers/stringifyFilters';
import useWindowSize from '../../hooks/useWindowSize';
import { NOT_ADAPTIVE } from '../../helpers/constants';

import ProductsList from '../../components/Products/ProductsList/ProductsList';
import Section from '../../layouts/Section/Section';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Pagination from '../../components/Filters/Pagination';
import Fab from '../../components/Inputs/Fab';

const ProductsPage = () => {
  const width = useWindowSize();
  const dispatch = useDispatch();
  const isFilters = useSelector(isFiltersSelector);
  const filters = useSelector(filtersSelector);
  const totalItems = useSelector(productsTotalItemsSelector);
  const perPage = useSelector(productsPerPageSelector);
  const page = useSelector(productsPageSelector);
  const history = useHistory();
  const searchParams = stringifyFilters(filters);

  const getProductsCallback = useCallback(() => {
    dispatch(getProducts(searchParams));
  }, [dispatch, searchParams]);

  useEffect(() => {
    getProductsCallback();
    history.push({ search: searchParams });
    // eslint-disable-next-line
  }, [getProductsCallback]);

  const handlePagination = value => {
    const { selected } = value;
    const selectedValue = selected + 1;

    dispatch(setPageWithScrollUp(selectedValue));
  };

  return (
    <Section title="Products">
      <Sidebar isAdaptive={width < NOT_ADAPTIVE}>
        <>
          <ProductsList />
          <Pagination
            initialPage={page}
            forcePage={page}
            count={Math.round(totalItems / perPage)}
            onClick={handlePagination}
          />
          {width < NOT_ADAPTIVE && <Fab onClick={() => dispatch(toggleFilters(!isFilters))} />}
        </>
      </Sidebar>
    </Section>
  );
};

export default ProductsPage;
