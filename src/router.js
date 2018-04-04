import React from 'react'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import store from './store'

import App from './App'

// Créer un historique amélioré qui synchronise les événements de navigation avec le store
const history = syncHistoryWithStore(createBrowserHistory(), store)

// Initialisation de l'application
const AppRouter = <Router history={history}>
  <Route path='/' component={App}>
  </Route>
</Router>

export default AppRouter
