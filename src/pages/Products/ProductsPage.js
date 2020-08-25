import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/operations/ProductsOperations';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import Section from '../../layouts/Section/Section';

const ProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Section title="Products">
      <ProductsList />
    </Section>
  );
};

export default ProductsPage;
