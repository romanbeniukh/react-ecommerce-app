import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import dateFormatter from '../../../helpers/dateFormatter';
import ProductCard from '../../Products/ProductCard/ProductCard';
import { ORDERS_PAGE } from '../../../helpers/constants';
import currencyFormatter from '../../../helpers/currencyFormatter';

const OrderItem = ({ order, isFull = false, totalPrice = null }) => (
  <div className="order-item">
    <header className="order-item__header">
      <span className="order-item__text">
        Order №: <span className="order-item__text order-item__text--contrast">{order.id}</span>
      </span>
      <span className="order-item__text">
        Created at:{' '}
        <span className="order-item__text order-item__text--contrast">{dateFormatter(order.createdAt)}</span>
      </span>
      {isFull && totalPrice && (
        <>
          <span className="order-item__text">
            Total price:{' '}
            <span className="order-item__text order-item__text--contrast">{currencyFormatter(totalPrice)} $</span>
          </span>
          <span className="order-item__text">Items:</span>
        </>
      )}
    </header>
    {isFull ? (
      <div className="order-item__cards-wrap">
        {order.pieces &&
          order.pieces.map(product => (
            <ProductCard isSmallCart key={product.id} product={product.product} count={product.count} />
          ))}
      </div>
    ) : (
      <Link to={`${ORDERS_PAGE}/${order.id}`}>Open details</Link>
    )}
  </div>
);

OrderItem.defaultProps = {
  isFull: false,
  totalPrice: null,
};

OrderItem.propTypes = {
  order: T.shape({
    id: T.string,
    createdAt: T.string,
    pieces: T.arrayOf(
      T.shape({
        id: T.string,
        count: T.number,
        product: T.shape({
          isEditable: T.bool,
          id: T.string,
          name: T.string,
          price: T.number,
          origin: T.string,
          createdAt: T.string,
          updatedAt: T.string,
        }),
      }),
    ),
  }).isRequired,
  isFull: T.bool,
  totalPrice: T.number,
};

export default OrderItem;
