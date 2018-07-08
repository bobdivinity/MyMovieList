import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import HelloReducers from './HelloReducers'

export default combineReducers({
  routing: routerReducer,
  hello: HelloReducers
})
