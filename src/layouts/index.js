import React from 'react'
import { connect } from 'react-redux'

import NavigationBar from '../containers/partials/NavigationBar'
import Footer from '../containers/partials/Footer'

import { getGenresMovie, getGenresSerie } from '../actions/GenreAction'

class AppLayout extends React.Component {

  /**
   * @constructor
   * @param {object} props props
   */
  constructor(props) {
    super(props);

    this.initReferences()
  }

  /**
   * initReferences - Chargement des référentiels de l'API
   * @param {string} languageLocale application language
   *
   * @returns {void}
   */
  initReferences() {
    const { dispatch } = this.props

    dispatch(getGenresMovie())
    dispatch(getGenresSerie())
  }

  render() {
    return (
      <div>
        <NavigationBar />

        {this.props.children}

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(AppLayout)
