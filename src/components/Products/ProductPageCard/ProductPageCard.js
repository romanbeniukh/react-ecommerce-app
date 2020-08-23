import React from 'react';
import T from 'prop-types';
import ProductCard from '../ProductCard/ProductCardContainer';
import productImage from '../../../assets/img/product-page.jpg';

const ProductPageCard = ({ product }) => (
  <div className="product-page-card">
    <div className="product-page-card__img-wrap">
      <img className="product-page-card__img" src={productImage} alt={product.name} />
    </div>
    <div className="product-page-card__info-wrap">
      <h2 className="product-page-card__title">{product.name}</h2>
      <ProductCard isProductPage product={product} />
    </div>
  </div>
);

ProductPageCard.propTypes = {
  product: T.shape({
    isEditable: T.bool,
    id: T.string,
    name: T.string,
    price: T.number,
    origin: T.string,
    createdAt: T.string,
    updatedAt: T.string,
    quantity: T.number,
  }).isRequired,
};

export default ProductPageCard;
