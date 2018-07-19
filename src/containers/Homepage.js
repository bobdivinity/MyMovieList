import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import TopicsList from '../components/organisms/TopicsList'
import GenresWidget from "../components/organisms/GenresWidget"
import TopRatedWidget from "../components/organisms/TopRatedWidget"

import { getDiscoverMovie, getDiscoverSerie } from '../actions/DiscoverAction'

class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      max: 4,
      movie: {
        index: 0,
        offset: 0,
        elements: []
      }
    }
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getDiscoverMovie())
    // dispatch(getDiscoverSerie())
  }

  render() {
    const { discovered_movies, discovered_series } = this.props

    console.log(discovered_movies)
    // console.log(discovered_series)

    // let

    return (
      <Container fluid>
        <Row>
          <Col md='9'>
            <TopicsList />
            {/*<TopicsList />*/}
          </Col>
          <Col md='3'>
            <GenresWidget />
            <TopRatedWidget />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    discovered_movies: state.discover.movies.content,
    discovered_series: state.discover.series.content
  }
}

export default connect(mapStateToProps)(Homepage)
