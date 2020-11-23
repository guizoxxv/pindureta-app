import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/login';
import ProductsList from '../pages/productsList';
import Cart from '../pages/cart';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={ProductsList} isPrivate />
    <Route path="/cart" exact component={Cart} isPrivate />
  </Switch>
);

export default Routes;
