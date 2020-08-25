import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/HomePage'));
const Products = lazy(() => import('../pages/Products/ProductsPageContainer'));
const Product = lazy(() => import('../pages/Product/ProductPageContainer'));
const Cart = lazy(() => import('../pages/Cart/CartPage'));

const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:id" component={Product} />
      <Route path="/cart" component={Cart} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default Routes;
