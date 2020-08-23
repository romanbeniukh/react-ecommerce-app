import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';
import api from '../../api/requests';
import ProductPageCard from '../../components/Products/ProductPageCard/ProductPageCard';
import Section from '../../layouts/Section/Section';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api
      .getProduct(id)
      .then(res => {
        setProduct(res);
      })
      .catch(err => {
        toastr.error('Error', err.message);
      });
  }, [id]);

  return (
    <Section title="Product">
      <ProductPageCard product={product} />
    </Section>
  );
};

export default ProductPage;
