// Point d’entrée de l’application
// ===============================

import style from "./resources/styles/main.css"

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Router from './router'

render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('app')
)
