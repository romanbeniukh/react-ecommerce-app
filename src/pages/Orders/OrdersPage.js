import React from 'react';
import useInjectSaga from '../../hooks/useInjectSaga';
import fetchOrdersSaga from '../../redux/sagas/ordersSagas/fetchOrdersSaga';

import OrdersList from '../../components/Orders/OrdersList/OrdersList';
import Section from '../../layouts/Section/Section';

const OrdersPage = () => {
  useInjectSaga('fetchOrders', fetchOrdersSaga);

  return (
    <Section title="Orders">
      <OrdersList />
    </Section>
  );
};

export default OrdersPage;
