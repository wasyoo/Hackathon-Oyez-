import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router';
import Home from './compenents/Home';

const NavRouter = () => (
  <div>
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </div>
);

export default NavRouter;
