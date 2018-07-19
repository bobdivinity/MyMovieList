import axios from 'axios'
import _ from 'lodash'

import { config } from '../../config'

/**
 * Build the URL for the TMDB API
 *
 * @param {string} uri
 * @returns {string}
 */
function getUrl(uri) {
  return _.join(
    [
      config.API_TMDB_URL,
      config.API_TMDB_VERSION,
      uri
    ],
    '/'
  )
}

/**
 * Make a call to the TMDB API with GET method
 *
 * @param {string} uri : URI to call
 * @param {object} params : additionnal parameters for the query
 *
 * @returns {AxiosPromise}
 */
export const get = function (uri, params = {}) {
  return axios.get(
    getUrl(uri), {
      params: {
        api_key: config.API_TMDB_KEY,
        ...params
      }
    }
  )
}
