import React from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import Routes from 'react-static-routes';

import './css/app.scss';

const App = () => {
  return (
    <Router>
      <div>
        <h1>/whoami</h1>
        <div>
          <Routes />
        </div>
      </div>
    </Router>
  )
};

export default hot(module)(App);
