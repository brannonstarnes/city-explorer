import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

export default class CityInfo extends Component {

  render() {
    return (
        <Container>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Your City:</th>
            <th>{this.props.locationName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Latitude</td>
            <td>{this.props.lat}</td>
          </tr>
          <tr>
            <td>Longitude</td>
            <td>{this.props.lon}</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    );
  }
};