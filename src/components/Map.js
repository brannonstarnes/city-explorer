import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CityInfo from './CityInfo'
export default class Map extends Component {

  render() {
    return (
        <Card>
            <Card.Header>Your Custom Map</Card.Header>
              <Card.Body>
                <Card.Title><img src={this.props.mapUrl} alt=''/></Card.Title>
                <Card.Text><CityInfo locationName={this.props.locationName} lat={this.props.lat} lon={this.props.lon} mapUrl={this.props.mapUrl} /></Card.Text>
              </Card.Body>
            </Card>
    );
  }
};