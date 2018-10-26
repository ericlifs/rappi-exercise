import React, {Fragment} from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from 'pages/Home';

import GlobalStyle from 'config/styles';

const App = () => (
  <Fragment>
    <GlobalStyle/>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Fragment>

);

export default App;
