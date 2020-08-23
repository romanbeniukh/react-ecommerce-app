import React, { useEffect } from 'react';
import T from 'prop-types';
import ProductsList from '../../components/Products/ProductsList/ProductsListContainer';
import Section from '../../layouts/Section/Section';

const ProductsPage = ({ getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Section title="Products">
      <ProductsList />
    </Section>
  );
};

ProductsPage.propTypes = {
  getProducts: T.func.isRequired,
};

export default ProductsPage;
