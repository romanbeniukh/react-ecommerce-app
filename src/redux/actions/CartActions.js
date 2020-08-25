import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('ADD_TO_CART');
export const removeFromCart = createAction('REMOVE_FROM_CART');
export const incrementQuantity = createAction('INCREMENT_QUANTITY');
export const decrementQuantity = createAction('DECREMENT_QUANTITY');
