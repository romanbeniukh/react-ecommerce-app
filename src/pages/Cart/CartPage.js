import React from 'react';
import CartProductsList from '../../components/Сart/CartProductsList/CartProductsList';
import Section from '../../layouts/Section/Section';

const CartPage = () => (
  <Section title="Cart">
    <CartProductsList />
  </Section>
);

export default CartPage;
