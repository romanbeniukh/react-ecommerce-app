import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrder } from '../../redux/operations/OrdersOperations';

import OrderPageCard from '../../components/Orders/OrderPageCard/OrderPageCard';
import Section from '../../layouts/Section/Section';

const OrderPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  return (
    <Section title="Order">
      <OrderPageCard />
    </Section>
  );
};

export default OrderPage;
