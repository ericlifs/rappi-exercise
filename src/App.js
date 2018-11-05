import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import createStore from './store'
import HomeContainer from 'pages/containers/Home'
import CategoryContainer from 'pages/containers/Category'
import GlobalStyle from 'config/styles'

const { store, persistor } = createStore()

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/category/:id" component={CategoryContainer} />
      </Switch>
    </PersistGate>
  </Provider>
)

export default App
