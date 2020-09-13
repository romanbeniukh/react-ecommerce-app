import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MAIN_PAGE, PRODUCTS_PAGE, MY_PRODUCTS_PAGE, CART_PAGE, ORDERS_PAGE } from '../helpers/constants';

import HomePage from '../pages/Home/HomePage';
import ProductsPage from '../pages/Products/ProductsPage';
import ProductPage from '../pages/Product/ProductPage';
import CartPage from '../pages/Cart/CartPage';
import OrdersPage from '../pages/Orders/OrdersPage';
import OrderPage from '../pages/Order/OrderPage';

const Routes = () => (
  <Switch>
    <Route exact path={MAIN_PAGE} component={HomePage} />
    <Route exact path={PRODUCTS_PAGE} render={props => <ProductsPage {...props} title="Products" />} />
    <Route exact path={MY_PRODUCTS_PAGE} render={props => <ProductsPage {...props} myProducts title="My products" />} />
    <Route path={`${PRODUCTS_PAGE}/:id`} component={ProductPage} />
    <Route path={CART_PAGE} component={CartPage} />
    <Route exact path={ORDERS_PAGE} component={OrdersPage} />
    <Route exact path={`${ORDERS_PAGE}/:id`} component={OrderPage} />
    <Redirect to={MAIN_PAGE} />
  </Switch>
);

export default Routes;
