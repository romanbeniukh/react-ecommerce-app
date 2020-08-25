import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { getProductSelector } from '../../../redux/selectors/ProductsSelectors';

import productImage from '../../../assets/img/product-page.jpg';

const ProductPageCard = () => {
  const product = useSelector(getProductSelector);

  return (
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
};

export default ProductPageCard;
