import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { PRODUCTS_PAGE } from '../../../helpers/constants';

import { addToCartOperation } from '../../../redux/operations/ProductsOperations';
import Btn from '../../Inputs/Btn';
import currencyFormatter from '../../../helpers/currencyFormatter';
import dateFormatter from '../../../helpers/dateFormatter';

import productImg from '../../../assets/img/product.svg';

const ProductCard = ({ product, isProductPage, isSmallCart, isCart }) => {
  const dispatch = useDispatch();

  const styles = classNames('product-card', {
    'product-card--product-page': isProductPage,
    'product-card--small-cart': isSmallCart,
    'product-card--cart': isCart,
  });

  const originsStyles = classNames('product-card__origins', {
    'product-card__origins--europe': product.origin === 'europe',
    'product-card__origins--asia': product.origin === 'asia',
    'product-card__origins--usa': product.origin === 'usa',
    'product-card__origins--africa': product.origin === 'africa',
  });

  return (
    <div className={styles}>
      {!isProductPage && (
        <Link className="product-card__link" to={`${PRODUCTS_PAGE}/${product.id}`}>
          <img className="product-card__img" src={productImg} alt={product.name} />
          <h3 className="product-card__title">{product.name}</h3>
        </Link>
      )}
      {!(isSmallCart || isCart) && (
        <div className="product-card__info">
          <span className={originsStyles}>{product.origin}</span>
          <span className="product-card__date">
            create: <span>{dateFormatter(product.createdAt)}</span>
          </span>
          <span className="product-card__date">
            update: <span>{dateFormatter(product.updatedAt)}</span>
          </span>
        </div>
      )}
      <div className="product-card__price-wrap">
        <span className="product-card__price">{`${currencyFormatter(product.price)} $`}</span>
        {isSmallCart && (
          <>
            <span className="product-card__price">Qty: {product.quantity}</span>
            <span className="product-card__price product-card__price--accent">{`${currencyFormatter(
              product.price * product.quantity,
            )} $`}</span>
          </>
        )}
      </div>
      {!(isSmallCart || isCart) && (
        <Btn
          type="button"
          label="Add to cart"
          modificator="add-to-cart"
          onClick={() => dispatch(addToCartOperation(product))}
        />
      )}
    </div>
  );
};

ProductCard.defaultProps = {
  isProductPage: false,
  isSmallCart: false,
  isCart: false,
};

ProductCard.propTypes = {
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
  isProductPage: T.bool,
  isSmallCart: T.bool,
  isCart: T.bool,
};

export default ProductCard;
