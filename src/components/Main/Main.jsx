import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Timer from '../Timer/Timer';
import Statistics from '../Statistics/Statistics';

import './Main.scss';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Timer} />
      <Route path='/statistics' component={Statistics} />
    </Switch>
  </main>
);

export default Main;
