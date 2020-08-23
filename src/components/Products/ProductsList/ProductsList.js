import React from 'react';
import T from 'prop-types';
import ProductCard from '../ProductCard/ProductCardContainer';

const ProductsList = ({ products }) => (
  <ul className="products">
    {products.map(product => (
      <li className="products__item" key={product.id}>
        <ProductCard product={product} />
      </li>
    ))}
  </ul>
);

ProductsList.propTypes = {
  products: T.arrayOf(
    T.shape({
      isEditable: T.bool,
      id: T.string,
      name: T.string,
      price: T.number,
      origin: T.string,
      createdAt: T.string,
      updatedAt: T.string,
      quantity: T.number,
    }),
  ).isRequired,
};

export default ProductsList;
