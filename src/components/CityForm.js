import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

export default class CityForm extends Component {

  render() {
    return (
    <Container>
      <Form>
  <Form.Group className="mb-3" >
    <Form.Label>City Name</Form.Label>
    <Form.Control type="search" placeholder="i.e. Chattanooga" value={this.props.locationName} onChange={this.props.handleChange} />
    <Form.Text className="text-muted">
      Please enter a city name to explore:
    </Form.Text>
  </Form.Group>
  <Button variant="primary" onClick={this.props.getLocation}>
    Explore!
  </Button>  
</Form>
</Container>
    );
  }
};