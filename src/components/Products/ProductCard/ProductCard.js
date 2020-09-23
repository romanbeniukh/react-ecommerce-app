import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import classNames from 'classnames';
import { PRODUCTS_PAGE } from '../../../helpers/constants';
import addToCartSaga from '../../../redux/sagas/addToCartSaga';
import { openProductFormModal } from '../../../redux/sagas/productsSagas/productFormSaga';
import deleteProductSaga from '../../../redux/sagas/productsSagas/deleteProductSaga';
import useRunSaga from '../../../hooks/useRunSaga';

import Btn from '../../Inputs/Btn';
import currencyFormatter from '../../../helpers/currencyFormatter';
import dateFormatter from '../../../helpers/dateFormatter';

import productImg from '../../../assets/img/product.svg';

const ProductCard = ({ product, count = null, isProductPage, isSmallCart, isCart }) => {
  const addToCart = useRunSaga(addToCartSaga);
  const editProduct = useRunSaga(openProductFormModal);
  const deleteProduct = useRunSaga(deleteProductSaga);

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

  const trashIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
    </svg>
  );

  const quantity = count || product.quantity;

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
            <span className="product-card__price">Qty: {quantity}</span>
            <span className="product-card__price product-card__price--accent">{`${currencyFormatter(
              product.price * quantity,
            )} $`}</span>
          </>
        )}
      </div>
      <div className="product-card__btn-wrap">
        {!(isSmallCart || isCart || product.isEditable) && (
          <Btn type="button" label="Add to cart" modificator="secondary" onClick={() => addToCart(product)} />
        )}
        {product.isEditable && (
          <>
            <Btn size="small" modificator="main" label="Edit" type="button" onClick={() => editProduct(product)} />
            {!isProductPage && (
              <Btn
                size="small"
                modificator="secondary"
                icon={trashIcon}
                label="Delete"
                type="button"
                onClick={() => deleteProduct(product.id)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  isProductPage: false,
  isSmallCart: false,
  isCart: false,
  count: null,
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
  count: T.number,
};

export default ProductCard;
