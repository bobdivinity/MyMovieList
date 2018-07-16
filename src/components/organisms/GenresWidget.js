import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col
} from 'reactstrap'

class GenresWidget extends React.Component {
  /**
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props)

    this.renderListOfGenre = this.renderListOfGenre.bind(this)
  }

  /**
   * Display a genre's movie list
   * @param genres
   * @returns {JSX}
   */
  renderListOfGenre(genres, index) {
    return (
      <Col lg='6' key={index}>
        <ul className='list-unstyled mb-0'>
          {_.map(genres, (genre, genreIndex) => (
            <li key={genreIndex}>
              <a href='#'>{genre}</a>
            </li>
          ))}
        </ul>
      </Col>
    )
  }

  render() {
    const { genres } = this.props

    let listsOfGenres = _.sortBy(_.chunk(genres, Math.round(genres.length / 2)))

    return (
      <Card className='my-4'>
        <CardHeader>Catégories</CardHeader>
        <CardBody>
          <Row>
            {_.map(listsOfGenres, (listOfGenres, index) => (
              this.renderListOfGenre(listOfGenres, index)
            ))}
          </Row>
        </CardBody>
      </Card>
    )
  }
}

GenresWidget.propTypes = {
  genres: PropTypes.array.isRequired
}

// @todo
GenresWidget.defaultProps = {
  genres: ['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5']
}

export default GenresWidget
