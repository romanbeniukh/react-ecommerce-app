import React from 'react';
import { useSelector } from 'react-redux';
import { getOrderTotalPrice, getOrderSelector } from '../../../redux/selectors/OrdersSelectors';
import OrderItem from '../OrderItem/OrderItem';

const OrderPageCard = () => {
  const order = useSelector(getOrderSelector);
  const orderTotalPrice = useSelector(getOrderTotalPrice);

  return <OrderItem order={order} totalPrice={orderTotalPrice} isFull />;
};

export default OrderPageCard;
