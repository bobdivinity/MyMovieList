import React from 'react'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import store from './store'

import App from './App'

import { sayHello } from './actions/HelloActions'

// Créer un historique amélioré qui synchronise les événements de navigation avec le store
const history = syncHistoryWithStore(createBrowserHistory(), store)

// test
store.dispatch(sayHello('Antoine DEVE'))
console.log('Hello ' + store.getState().hello.name)

// Initialisation de l'application
const AppRouter = (
  <Router history={history}>
    <Route path='/' component={App} />
  </Router>
)

export default AppRouter
