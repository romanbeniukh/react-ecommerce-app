import React from 'react';
import { useParams } from 'react-router-dom';
import useInjectSaga from '../../hooks/useInjectSaga';
import fetchOrderSaga from '../../redux/sagas/ordersSagas/fetchOrderSaga';

import OrderPageCard from '../../components/Orders/OrderPageCard/OrderPageCard';
import Section from '../../layouts/Section/Section';

const OrderPage = () => {
  const { id } = useParams();

  useInjectSaga('fetchOrderSaga', fetchOrderSaga, id);

  return (
    <Section title="Order">
      <OrderPageCard />
    </Section>
  );
};

export default OrderPage;
