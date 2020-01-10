import React, { Component } from 'react'

import { Card, Grid, Col, Row, Button } from 'components-lib-typescript'

export default class App extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={3}>
              <Card></Card>
            </Col>
            <Col sm={5}>
              <Button>Teste</Button>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Card></Card>
            </Col>
            <Col sm={5}>
              <Card></Card>
            </Col>
          </Row>
          <Row>
            <Col sm={7} lg={2}>
              <Card></Card>
            </Col>
            <Col sm={2} lg={9}>
              <Card></Card>
            </Col>
            <Col sm={3} lg={1}>
              <Card></Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
