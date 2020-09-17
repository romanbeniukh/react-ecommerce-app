import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../redux/operations/OrdersOperations';

import OrdersList from '../../components/Orders/OrdersList/OrdersList';
import Section from '../../layouts/Section/Section';

const OrdersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <Section title="Orders">
      <OrdersList />
    </Section>
  );
};

export default OrdersPage;
