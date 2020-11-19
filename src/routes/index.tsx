import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import ProductsList from '../pages/productsList';
import Cart from '../pages/cart';
import Finish from '../pages/finish';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ProductsList} />
    <Route path="/login" exact component={Login} />
    <Route path="/cart" exact component={Cart} />
    <Route path="/finish" exact component={Finish} />
  </Switch>
);

export default Routes;
