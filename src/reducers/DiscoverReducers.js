import {
  API_DISCOVER_MOVIE_PENDING,
  API_DISCOVER_MOVIE_FULFILLED,
  API_DISCOVER_MOVIE_REJECTED,
  API_DISCOVER_SERIE_PENDING,
  API_DISCOVER_SERIE_FULFILLED,
  API_DISCOVER_SERIE_REJECTED,
} from '../actions/DiscoverAction'

const initialState = {
  movies: {
    pending: false,
    success: false,
    error: null,
    content: {}
  },
  series: {
    pending: false,
    success: false,
    error: null,
    content: {}
  }
}

export default function DiscoverReducers(state = initialState, action) {
  const { payload, type } = action

  switch (type) {
  case API_DISCOVER_MOVIE_PENDING: {
    return {
      ...state,
      movies: {
        pending: true,
        success: false,
        error: null,
        content: null
      }
    }
  }

  case API_DISCOVER_MOVIE_REJECTED: {
    return {
      ...state,
      movies: {
        pending: false,
        success: false,
        error: payload,
        content: null
      }
    }
  }

  case API_DISCOVER_MOVIE_FULFILLED: {
    return {
      ...state,
      movies: {
        pending: false,
        success: true,
        error: null,
        content: payload
      }
    }
  }

  case API_DISCOVER_SERIE_PENDING: {
    return {
      ...state,
      series: {
        pending: true,
        success: false,
        error: null,
        content: null
      }
    }
  }

  case API_DISCOVER_SERIE_REJECTED: {
    return {
      ...state,
      series: {
        pending: false,
        success: false,
        error: payload,
        content: null
      }
    }
  }

  case API_DISCOVER_SERIE_FULFILLED: {
    return {
      ...state,
      series: {
        pending: false,
        success: true,
        error: null,
        content: payload
      }
    }
  }

  default:
    return state
  }
}
