import React, { useEffect, useCallback } from 'react';
import T from 'prop-types';
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
import { resetFilters } from '../../redux/actions/FiltersActions';
import { setPageWithScrollUp } from '../../redux/operations/FiltersOperations';
import stringifyFilters from '../../helpers/stringifyFilters';
import useWindowSize from '../../hooks/useWindowSize';
import useListenHistory from '../../hooks/useListenHistory';
import { NOT_ADAPTIVE } from '../../helpers/constants';

import ProductsList from '../../components/Products/ProductsList/ProductsList';
import Section from '../../layouts/Section/Section';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Pagination from '../../components/Filters/Pagination';
import Fab from '../../components/Inputs/Fab';

const ProductsPage = ({ myProducts, title }) => {
  const width = useWindowSize();
  const dispatch = useDispatch();
  const isFilters = useSelector(isFiltersSelector);
  const filters = useSelector(filtersSelector);
  const totalItems = useSelector(productsTotalItemsSelector);
  const perPage = useSelector(productsPerPageSelector);
  const page = useSelector(productsPageSelector);
  const history = useHistory();
  const searchParams = stringifyFilters({ ...filters, editable: !!myProducts });

  const getProductsCallback = useCallback(() => {
    dispatch(getProducts(searchParams));
  }, [dispatch, searchParams]);

  useListenHistory(location => {
    const { state } = location;

    state && state.resetFilters && dispatch(resetFilters());
  });

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
    <Section title={title}>
      <Sidebar isAdaptive={width < NOT_ADAPTIVE}>
        <>
          <ProductsList />
          <Pagination
            initialPage={page}
            forcePage={page}
            count={Math.ceil(totalItems / perPage)}
            onClick={handlePagination}
          />
          {width < NOT_ADAPTIVE && <Fab onClick={() => dispatch(toggleFilters(!isFilters))} />}
        </>
      </Sidebar>
    </Section>
  );
};

ProductsPage.defaultProps = {
  myProducts: false,
};

ProductsPage.propTypes = {
  myProducts: T.bool,
  title: T.string.isRequired,
};

export default ProductsPage;
