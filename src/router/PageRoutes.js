import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Progress from '../components/Progress/Progress';

const Home = lazy(() => import('../views/HomePage'));
const Contacts = lazy(() => import('../redux/containers/views/ContactsPageContainer'));
const Login = lazy(() => import('../redux/containers/views/LoginPageContainer'));
const Signup = lazy(() => import('../redux/containers/views/SignupPageContainer'));
const Cabinet = lazy(() => import('../redux/containers/views/CabinetPageContainer'));

const PageRoutes = () => (
  <div className="page-container">
    <Suspense fallback={<Progress />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cabinet" component={Cabinet} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default PageRoutes;
