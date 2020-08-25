import { combineReducers } from 'redux';

import productsReducer from './ProductsReducer';
import filtersReducer from './FiltersReducer';
import cartReducer from './CartReducer';
import appReducer from './AppReducer';

export default combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  cart: cartReducer,
  app: appReducer,
});
