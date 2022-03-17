import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/index';
import Repository from '../Pages/Repository/index';
import UserInfo from '../Pages/UserInfo/index';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/user/:id" component={UserInfo} />
      <Route path="/repos/:id" component={Repository} />
    </Switch>
  )
}
export default Routes;