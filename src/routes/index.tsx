import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import ProductsList from '../pages/productsList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ProductsList} />
    <Route path="/login" exact component={Login} />
  </Switch>
);

export default Routes;
