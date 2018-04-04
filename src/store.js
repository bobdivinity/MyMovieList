/**
 * Create the application's store
 */
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import reducer from './reducers'

let middlewares = [
  thunkMiddleware,
  promiseMiddleware(),
  createLogger() // must be deleted in production environment
]

const middleware = applyMiddleware(...middlewares)

const enhancer = compose(
  middleware,
  typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : (x) => x
)

const store = createStore(reducer, enhancer)

export default store
