import { combineReducers } from 'redux';

import { loadingBarReducer } from 'react-redux-loading-bar';
import productsReducer from './ProductsReducer';
import ordersReducer from './OrdersReducer';
import filtersReducer from './FiltersReducer';
import cartReducer from './CartReducer';
import appReducer from './AppReducer';

export default combineReducers({
  products: productsReducer,
  orders: ordersReducer,
  filters: filtersReducer,
  cart: cartReducer,
  app: appReducer,
  loadingBar: loadingBarReducer,
});
