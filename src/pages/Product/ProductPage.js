import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../redux/operations/ProductsOperations';

import ProductPageCard from '../../components/Products/ProductPageCard/ProductPageCard';
import Section from '../../layouts/Section/Section';

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <Section title="Product">
      <ProductPageCard />
    </Section>
  );
};

export default ProductPage;
