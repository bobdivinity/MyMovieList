import React from 'react'
import PropTypes from 'prop-types'
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
  render() {
    const { movie } = this.props

    return (
      <div className='col-lg-3 col-md-4 col-sm-6 portfolio-item'>
        <Card>
          <CardLink>
            <CardImg top src={movie.url} />
            <CardImgOverlay>
              <CardTitle>{movie.title}</CardTitle>
              <CardText>{movie.description}</CardText>
            </CardImgOverlay>
          </CardLink>
          <CardBody>
            <CardTitle>
              <CardLink href='#'>{movie.title}</CardLink>
            </CardTitle>
            <CardText>Note : {movie.rate} / 5</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object
}

MovieItem.defaultProps = {
  movie: {
    title: 'Thor : Ragnarok (2017)',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.',
    url: 'http://placehold.it/325x448',
    rate: 4.1
  }
}

export default MovieItem
