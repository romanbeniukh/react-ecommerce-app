import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsSelector } from '../../../redux/selectors/ProductsSelectors';

import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {
  const products = useSelector(getProductsSelector);

  return (
    <ul className="products">
      {products.map(product => (
        <li className="products__item" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
