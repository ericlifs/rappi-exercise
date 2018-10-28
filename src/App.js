import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import createStore from './store';
import Home from 'pages/Home';
import GlobalStyle from 'config/styles';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </PersistGate>
  </Provider>
);

export default App;
