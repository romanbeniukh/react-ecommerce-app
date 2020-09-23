import React from 'react';
import T from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  productsPerPageSelector,
  productsTotalItemsSelector,
  productsPageSelector,
} from '../../redux/selectors/FiltersSelectors';
import { isFiltersSelector } from '../../redux/selectors/AppSelectors';
import { toggleFilters } from '../../redux/actions/AppActions';
import { setPageWithScrollUpSaga } from '../../redux/sagas/filtersSaga';
import useWindowSize from '../../hooks/useWindowSize';
import { NOT_ADAPTIVE } from '../../helpers/constants';
import useInjectSaga from '../../hooks/useInjectSaga';
import useRunSaga from '../../hooks/useRunSaga';
import productsSaga from '../../redux/sagas/productsSagas/productsSaga';

import ProductsList from '../../components/Products/ProductsList/ProductsList';
import Section from '../../layouts/Section/Section';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import Pagination from '../../components/Filters/Pagination';
import Fab from '../../components/Inputs/Fab';

const ProductsPage = ({ title }) => {
  const width = useWindowSize();
  const dispatch = useDispatch();
  const setPageWithScrollUp = useRunSaga(setPageWithScrollUpSaga);
  const isFilters = useSelector(isFiltersSelector);
  const totalItems = useSelector(productsTotalItemsSelector);
  const perPage = useSelector(productsPerPageSelector);
  const page = useSelector(productsPageSelector);
  const history = useHistory();

  useInjectSaga('productsListSaga', productsSaga, history);

  const handlePagination = value => {
    const { selected } = value;
    const selectedValue = selected + 1;

    setPageWithScrollUp(selectedValue);
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

ProductsPage.propTypes = {
  title: T.string.isRequired,
};

export default ProductsPage;
