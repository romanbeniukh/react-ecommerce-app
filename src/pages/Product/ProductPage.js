import React from 'react';
import { useParams } from 'react-router-dom';
import useInjectSaga from '../../hooks/useInjectSaga';
import fetchProductSaga from '../../redux/sagas/productsSagas/fetchProductSaga';

import ProductPageCard from '../../components/Products/ProductPageCard/ProductPageCard';
import Section from '../../layouts/Section/Section';

const ProductPage = () => {
  const { id } = useParams();

  useInjectSaga('productSaga', fetchProductSaga, id);

  return (
    <Section title="Product">
      <ProductPageCard />
    </Section>
  );
};

export default ProductPage;
