import React from 'react'

import NavigationBar from '../containers/partials/NavigationBar'
import Footer from '../containers/partials/Footer'

class AppLayout extends React.Component {

  /**
   * @constructor
   * @param {object} props props
   */
  constructor(props) {
    super(props);

    const { languageLocale } = props

    this.initReferences(languageLocale)
  }

  /**
   * initReferences - Chargement des référentiels de l'API
   * @param {string} languageLocale application language
   *
   * @returns {void}
   */
  initReferences(languageLocale) {
    const { dispatch } = this.props

    // dispatch(getStarList(languageLocale))
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

export default AppLayout
