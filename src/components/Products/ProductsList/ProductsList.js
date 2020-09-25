import React from 'react';
import { useSelector } from 'react-redux';
import { getProductsSelector } from '../../../redux/selectors/ProductsSelectors';
import { productsPerPageSelector } from '../../../redux/selectors/FiltersSelectors';
import { isLoadingSelector } from '../../../redux/selectors/AppSelectors';

import ProductCard from '../ProductCard/ProductCard';
import CustomSkeleton from '../../Skeleton/Skeleton';

const ProductsList = () => {
  const products = useSelector(getProductsSelector);
  const productsPerPage = useSelector(productsPerPageSelector);
  const isLoading = useSelector(isLoadingSelector);
  const itemsArray = Array.from({ length: productsPerPage }, (v, k) => k + 1);

  return (
    <ul className="products">
      {isLoading && itemsArray
        ? itemsArray.map(item => (
            <li className="products__item" key={item}>
              <CustomSkeleton />
            </li>
          ))
        : products.map(product => (
            <li className="products__item" key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
    </ul>
  );
};

export default ProductsList;
