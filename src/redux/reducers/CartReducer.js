import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../actions/CartActions';
import { postOrderSuccess } from '../actions/OrdersActions';

export default createReducer(
  {},
  {
    [addToCart]: (state, action) => {
      if (state[action.payload.id]) {
        return {
          ...state,
          [action.payload.id]: { ...state[action.payload.id], quantity: state[action.payload.id].quantity + 1 },
        };
      }
      return { ...state, [action.payload.id]: { ...action.payload, quantity: 1 } };
    },
    [removeFromCart]: (state, action) => {
      const clonedState = { ...state };
      delete clonedState[action.payload];
      return clonedState;
    },
    [incrementQuantity]: (state, action) => {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity + 1 },
      };
    },
    [decrementQuantity]: (state, action) => {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], quantity: state[action.payload].quantity - 1 },
      };
    },
    [postOrderSuccess]: () => ({}),
  },
);
