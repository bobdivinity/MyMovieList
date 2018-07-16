import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

class TopRatedWidget extends React.Component {
  /**
   * Display a top rated movie list according to its type
   * @param type {string}
   * @param movies {collection}
   * @returns [JSX}
   */
  renderTopMovies(type, movies) {
    let iconClass = (type === 'movie') ? 'film' : 'tv'

    return (
      <ListGroup>
        {_.map(movies, (movie, index) => (
          <li key={index} className='list-item'>
            <FontAwesomeIcon icon={iconClass} />
            <a href='#'> {movie.name}</a>
          </li>
        ))}
      </ListGroup>
    )
  }

  render() {
    const { topMoviesList, topSeriesList } = this.props

    return (
      <Card className='my-4'>
        <CardHeader>Les mieux notés</CardHeader>
        <CardBody>
          <Row>
            <Col>
              {this.renderTopMovies('movie', topMoviesList)}
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              {this.renderTopMovies('serie', topSeriesList)}
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

TopRatedWidget.propTypes = {
  topMoviesList: PropTypes.array.isRequired,
  topSeriesList: PropTypes.array.isRequired
}

// @todo
TopRatedWidget.defaultProps = {
  topMoviesList: [
    {name: 'Film 1'},
    {name: 'Film 2'},
    {name: 'Film 3'},
    {name: 'Film 4'},
    {name: 'Film 5'}
  ],
  topSeriesList: [
    {name: 'Série 1'},
    {name: 'Série 2'},
    {name: 'Série 3'},
    {name: 'Série 4'},
    {name: 'Série 5'}
  ]
}

export default TopRatedWidget
