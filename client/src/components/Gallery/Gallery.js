import React, { Component } from "react";
import { Grid, Row, Col, Image } from 'react-bootstrap';

class GalleryImages extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
          My Work</Col>
          <Col xs={6} md={2}>
            <Image src="http://via.placeholder.com/200x200" rounded />
          </Col>
          <Col xs={6} md={2}>
           <Image src="http://via.placeholder.com/200x200" rounded />
          </Col>
          <Col xs={6} md={2}>
            <Image src="http://via.placeholder.com/200x200" rounded />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default GalleryImages;