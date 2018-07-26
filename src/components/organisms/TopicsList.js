import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {
  Row,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap'

import MovieItem from '../molecules/MovieItem'

class TopicsList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      max: 4,
      page: 1,
      offset: 0
    }
  }

  changePage(page) {
    if(page !== this.state.page && page > 0 && page <= this.props.topics.length / this.state.max) {
      this.state.page = page
      this.state.offset = (this.state.page - 1) * this.state.max
    }

    this.setState({
      page: page,
      offset: (page - 1) * this.state.max
    })
  }

  render() {
    const {
      title,
      subtitle,
      type,
      topics
    } = this.props

    let elements = _.slice(topics, this.state.offset, this.state.offset + this.state.max)

    return (
      <div>
        <h1 className='my-4'>
          {title} <small>{subtitle}</small>
        </h1>

        <Row>
          {_.map(elements, (element, index) => (
            <MovieItem item={element} type={type} key={index} />
          ))}
        </Row>

        <Pagination listClassName='justify-content-center'>
          <PaginationItem className={ClassNames({disabled: (this.state.offset === 0)})}>
            <PaginationLink previous onClick={() => this.changePage(this.state.page - 1)} />
          </PaginationItem>

          {_.map(_.range(1, (topics.length / this.state.max) + 1), (page, index) => (
            <PaginationItem key={index} className={
              ClassNames(
                { active: (this.state.page === page) }
              )
            }>
              <PaginationLink onClick={() => this.changePage(page)} >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem className={
            ClassNames(
              { disabled: ((this.state.offset + this.state.max) === topics.length)}
            )
          }>
            <PaginationLink next onClick={() => this.changePage(this.state.page + 1)} />
          </PaginationItem>
        </Pagination>
      </div>
    )
  }
}

TopicsList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired
}

// @todo
TopicsList.defaultProps = {
  title: 'This is a title',
  subtitle: 'This is a subtitle',
  type: 'movie',
  topics: [
    {
      id: 1,
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    },
    {
      id: 2,
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    },
    {
      id: 3,
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    },
    {
      id: 4,
      title: 'Thor : Ragnarok (2017)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
      url: 'http://placehold.it/325x448',
      rate: 4.1
    }
  ]
}

export default TopicsList
