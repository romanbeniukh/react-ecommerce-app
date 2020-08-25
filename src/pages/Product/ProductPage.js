import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import T from 'prop-types';
import ProductPageCard from '../../components/Products/ProductPageCard/ProductPageCardContainer';
import Section from '../../layouts/Section/Section';

const ProductPage = ({ getProduct, clearProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);

    return () => clearProduct();
  }, [getProduct, clearProduct, id]);

  return (
    <Section title="Product">
      <ProductPageCard />
    </Section>
  );
};

ProductPage.propTypes = {
  getProduct: T.func.isRequired,
  clearProduct: T.func.isRequired,
};

export default ProductPage;
