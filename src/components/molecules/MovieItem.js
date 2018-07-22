import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardLink,
  CardTitle,
  CardText
} from 'reactstrap'


class MovieItem extends React.Component {
  buildItemToDisplay(item) {
    return {
      title: !_.isEmpty(item.title) ? item.title : item.name,
      description: item.overview,
      url: item.poster_path,
      rate: item.vote_average
    }
  }

  render() {
    const { item } = this.props

    let cardItem = this.buildItemToDisplay(item)

    return (
      <div className='col-lg-3 col-md-6 col-sm-6 portfolio-item'>
        <Card>
          <CardLink>
            <CardImg top src={'https://image.tmdb.org/t/p/w400' + cardItem.url} />
            <CardImgOverlay>
              <CardTitle>{cardItem.title}</CardTitle>
              <CardText>{cardItem.description}</CardText>
            </CardImgOverlay>
          </CardLink>
          <CardBody>
            <CardTitle>
              <CardLink href='#'>{cardItem.title}</CardLink>
            </CardTitle>
            <CardText>Note : {cardItem.rate} / 10</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

MovieItem.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}

MovieItem.defaultProps = {
  type: 'movie',
  item: {
    title: 'Thor : Ragnarok (2017)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
    url: 'http://placehold.it/325x448',
    rate: 4.1
  }
}

export default MovieItem
