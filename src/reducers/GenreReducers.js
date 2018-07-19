import {
  API_GENRE_MOVIE_PENDING,
  API_GENRE_MOVIE_FULFILLED,
  API_GENRE_MOVIE_REJECTED,
  API_GENRE_SERIE_PENDING,
  API_GENRE_SERIE_FULFILLED,
  API_GENRE_SERIE_REJECTED,
} from '../actions/GenreAction'

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

export default function GenreReducers(state = initialState, action) {
  const { payload, type } = action

  switch (type) {
  case API_GENRE_MOVIE_PENDING: {
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

  case API_GENRE_MOVIE_REJECTED: {
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

  case API_GENRE_MOVIE_FULFILLED: {
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

  case API_GENRE_SERIE_PENDING: {
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

  case API_GENRE_SERIE_REJECTED: {
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

  case API_GENRE_SERIE_FULFILLED: {
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
