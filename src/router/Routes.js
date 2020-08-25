import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MAIN_PAGE, PRODUCTS_PAGE, CART_PAGE } from '../helpers/constants';

import HomePage from '../pages/Home/HomePage';
import ProductsPage from '../pages/Products/ProductsPage';
import ProductPage from '../pages/Product/ProductPage';
import CartPage from '../pages/Cart/CartPage';

const Routes = () => (
  <Switch>
    <Route exact path={MAIN_PAGE} component={HomePage} />
    <Route exact path={PRODUCTS_PAGE} component={ProductsPage} />
    <Route path={`${PRODUCTS_PAGE}/:id`} component={ProductPage} />
    <Route path={CART_PAGE} component={CartPage} />
    <Redirect to={MAIN_PAGE} />
  </Switch>
);

export default Routes;
