import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';
import Home from 'pages/Home';
import GlobalStyle from 'config/styles';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Fragment>
  </Provider>
);

export default App;
