import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CityInfo from './CityInfo';
import Container from 'react-bootstrap/Container'


export default class Map extends Component {

  render() {
    return (
        <Container>
        <Card border='primary' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={this.props.mapUrl}/>
            <Card.Body>
                <Card.Title>{this.props.locationName}</Card.Title>
                <Card.Text>
                    <CityInfo locationName={this.props.locationName} lat={this.props.lat} lon={this.props.lon} mapUrl={this.props.mapUrl} />
                </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    );
  }
};