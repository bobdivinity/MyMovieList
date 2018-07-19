import { get } from '../services/interfaces/ApiTMDB'

/* eslint-disable */

export const API_DISCOVER_MOVIE           = '@@MYMOVIELIST/API_DISCOVER_MOVIE'
export const API_DISCOVER_MOVIE_PENDING   = '@@MYMOVIELIST/API_DISCOVER_MOVIE_PENDING'
export const API_DISCOVER_MOVIE_FULFILLED = '@@MYMOVIELIST/API_DISCOVER_MOVIE_FULFILLED'
export const API_DISCOVER_MOVIE_REJECTED  = '@@MYMOVIELIST/API_DISCOVER_MOVIE_REJECTED'

export const API_DISCOVER_SERIE           = '@@MYMOVIELIST/API_DISCOVER_SERIE'
export const API_DISCOVER_SERIE_PENDING   = '@@MYMOVIELIST/API_DISCOVER_SERIE_PENDING'
export const API_DISCOVER_SERIE_FULFILLED = '@@MYMOVIELIST/API_DISCOVER_SERIE_FULFILLED'
export const API_DISCOVER_SERIE_REJECTED  = '@@MYMOVIELIST/API_DISCOVER_SERIE_REJECTED'

/* eslint-enable */

let defaultParamsMovie = {
  language: 'fr-FR',
  sort_by: 'popularity.desc',
  include_adult: false,
  include_video: false,
  page: 1
}

let defaultParamsSerie = {
  language: 'fr-FR',
  sort_by: 'popularity.desc',
  timezone: 'Europe/Paris',
  include_null_first_air_dates: false,
  page: 1
}

/**
 * Get movies which must be discovered
 * @param params
 * @returns {{type: *, payload: *}}
 */
export function getDiscoverMovie(params = {}) {
  return {
    type: API_DISCOVER_MOVIE,
    payload: get('discover/movie', {
      ...defaultParamsMovie,
      ...params
    }).then(function (response) {
      return response.data
    })
  }
}

/**
 * Get series which must be discovered
 * @param params
 * @returns {{type: *, payload: *}}
 */
export function getDiscoverSerie(params = {}) {
  return {
    type: API_DISCOVER_SERIE,
    payload: get('discover/tv', {
      ...defaultParamsSerie,
      ...params
    }).then(function (response) {
      return response.data
    })
  }
}
