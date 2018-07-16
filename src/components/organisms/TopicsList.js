import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {
  Row,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

import MovieItem from '../molecules/MovieItem'

class TopicsList extends React.Component {
  render() {
    const {
      title,
      subtitle,
      topics
    } = this.props

    return (
      <div>
        <h1 className='my-4'>
          {title} <small>{subtitle}</small>
        </h1>

        <Row>
          {_.map(topics, (topic, index) => (
            <MovieItem item={topic} key={index} />
          ))}
        </Row>

        <Pagination listClassName='justify-content-center'>
          <PaginationItem>
            <PaginationLink previous href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href='#' />
          </PaginationItem>
        </Pagination>
      </div>
    )
  }
}

TopicsList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired
}

// @todo
TopicsList.defaultProps = {
  title: 'This is a title',
  subtitle: 'This is a subtitle',
  topics: [
    {
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    },
    {
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    },
    {
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    },
    {
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    }
  ]
}

export default TopicsList
