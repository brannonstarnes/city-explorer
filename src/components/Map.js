import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default class Map extends Component {

  render() {
    return (
        <Card>
  <Card.Body><img src={this.props.mapUrl} alt='aerial map'/></Card.Body>
</Card>
    );
  }
};