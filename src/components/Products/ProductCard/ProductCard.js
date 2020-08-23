import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import Btn from '../../Inputs/Btn';
import currencyFormatter from '../../../helpers/currencyFormatter';
import dateFormatter from '../../../helpers/dateFormatter';
import productImg from '../../../assets/img/product.svg';

const ProductCard = ({ product, addToCart, isProductPage, isSmallCart, isCart }) => {
  const styles = () => {
    if (isProductPage) return 'product-card product-card--product-page';
    if (isSmallCart) return 'product-card product-card--small-cart';
    if (isCart) return 'product-card product-card--cart';
    return 'product-card';
  };

  const originsStyles = () => {
    if (product.origin === 'europe') return 'product-card__origins product-card__origins--europe';
    if (product.origin === 'asia') return 'product-card__origins product-card__origins--asia';
    if (product.origin === 'usa') return 'product-card__origins product-card__origins--usa';
    if (product.origin === 'africa') return 'product-card__origins product-card__origins--africa';
    return 'product-card__origins';
  };

  return (
    <div className={styles()}>
      {!isProductPage && (
        <Link className="product-card__link" to={`/products/${product.id}`}>
          <img className="product-card__img" src={productImg} alt={product.name} />
          <h3 className="product-card__title">{product.name}</h3>
        </Link>
      )}
      {!(isSmallCart || isCart) && (
        <div className="product-card__info">
          <span className={originsStyles()}>{product.origin}</span>
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
        <Btn type="button" label="Add to cart" modificator="add-to-cart" onClick={() => addToCart(product)} />
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
  addToCart: T.func.isRequired,
  isProductPage: T.bool,
  isSmallCart: T.bool,
  isCart: T.bool,
};

export default ProductCard;
