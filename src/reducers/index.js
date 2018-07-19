import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import HelloReducers from './HelloReducers'
import DiscoverReducers from './DiscoverReducers'
import GenreReducers from './GenreReducers'

export default combineReducers({
  routing: routerReducer,
  hello: HelloReducers,
  discover: DiscoverReducers,
  genres: GenreReducers
})
