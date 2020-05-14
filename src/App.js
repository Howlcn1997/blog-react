import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Index from '@pages/index/index';
import ErrorBoundary from '@components/ErrorBoundary';

import './App.css';

const history = createBrowserHistory();
function App() {
  return (
    <ErrorBoundary>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Index} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
