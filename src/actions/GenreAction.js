import { get } from '../services/interfaces/ApiTMDB'

/* eslint-disable */

export const API_GENRES_MOVIE           = '@@MYMOVIELIST/API_GENRES_MOVIE'
export const API_GENRES_MOVIE_PENDING   = '@@MYMOVIELIST/API_GENRES_MOVIE_PENDING'
export const API_GENRES_MOVIE_FULFILLED = '@@MYMOVIELIST/API_GENRES_MOVIE_FULFILLED'
export const API_GENRES_MOVIE_REJECTED  = '@@MYMOVIELIST/API_GENRES_MOVIE_REJECTED'

export const API_GENRES_SERIE           = '@@MYMOVIELIST/API_GENRES_SERIE'
export const API_GENRES_SERIE_PENDING   = '@@MYMOVIELIST/API_GENRES_SERIE_PENDING'
export const API_GENRES_SERIE_FULFILLED = '@@MYMOVIELIST/API_GENRES_SERIE_FULFILLED'
export const API_GENRES_SERIE_REJECTED  = '@@MYMOVIELIST/API_GENRES_SERIE_REJECTED'

/* eslint-enable */

let defaultParamsMovie = {
  language: 'fr-FR'
}

let defaultParamsSerie = {
  language: 'fr-FR'
}

/**
 * Get genres for movies
 * @param params
 * @returns {{type: *, payload: *}}
 */
export function getGenresMovie(params = {}) {
  return {
    type: API_GENRES_MOVIE,
    payload: get('genre/movie/list', {
      ...defaultParamsMovie,
      ...params
    }).then(function (response) {
      return response.data
    })
  }
}

/**
 * Get genres for series
 * @param params
 * @returns {{type: *, payload: *}}
 */
export function getGenresSerie(params = {}) {
  return {
    type: API_GENRES_SERIE,
    payload: get('genre/tv/list', {
      ...defaultParamsSerie,
      ...params
    }).then(function (response) {
      return response.data
    })
  }
}
