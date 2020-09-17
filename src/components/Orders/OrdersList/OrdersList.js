import React from 'react';
import { useSelector } from 'react-redux';
import { getOrdersSelector } from '../../../redux/selectors/OrdersSelectors';

import OrderItem from '../OrderItem/OrderItem';

const OrdersList = () => {
  const orders = useSelector(getOrdersSelector);

  return (
    <ul className="orders">
      {orders.map(order => (
        <li key={order.id}>
          <OrderItem order={order} />
        </li>
      ))}
    </ul>
  );
};

export default OrdersList;
