import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import store from './store'

import AppLayout from './layouts'
import Homepage from './containers/Homepage'

// Créer un historique amélioré qui synchronise les événements de navigation avec le store
const history = syncHistoryWithStore(createBrowserHistory(), store)

/**
 *
 * @param layout
 * @param component
 * @param rest
 * @returns {*}
 * @constructor
 */
const RouteWithLayout = ({layout, component, ...rest}) => {
  return (
    <Route {...rest} render={(props) =>
      React.createElement( layout, props, React.createElement(component, props))
    }/>
  )
};

// Initialisation de l'application
const AppRouter = (
  <Router history={history}>
    <Switch>
      <RouteWithLayout exact path='/' layout={AppLayout} component={Homepage}/>
    </Switch>
  </Router>
)

export default AppRouter
