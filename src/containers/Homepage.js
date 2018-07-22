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

import { getDiscoveredItems } from '../selectors/DiscoveredItems'

import { getDiscoverMovie, getDiscoverSerie } from '../actions/DiscoverAction'

class Homepage extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //
  // }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(getDiscoverMovie())
    dispatch(getDiscoverSerie())
  }

  render() {
    const { discovered_movies, discovered_series } = this.props

    return (
      <Container fluid>
        <Row>
          <Col md='9'>
            <TopicsList
              type='movie'
              title='Films'
              subtitle='actualités'
              topics={discovered_movies}
            />
            <TopicsList
              type='serie'
              title='Séries'
              subtitle='actualités'
              topics={discovered_series}
            />
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
    discovered_movies: getDiscoveredItems(state, {type: 'movies'}),
    discovered_series: getDiscoveredItems(state, {type: 'series'})
  }
}

export default connect(mapStateToProps)(Homepage)
