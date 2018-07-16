import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import TopicsList from '../components/organisms/TopicsList'
import GenresWidget from "../components/organisms/GenresWidget"
import TopRatedWidget from "../components/organisms/TopRatedWidget";

class Homepage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md='9'>
            <TopicsList />
            <TopicsList />
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

export default Homepage
