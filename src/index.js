// Point d’entrée de l’application
// ===============================

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './resources/styles/main.css'

// Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faFilm,
  faTv
} from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Router from './router'

// Load font-awesome icons
library.add(faSearch, faFilm, faTv)

render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('app')
)
