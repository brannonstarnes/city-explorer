import './App.css';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    locationName: ''
  }
}

//when event occurs in input field, update state to match the value of the input field
handleChange = (e) => {
  this.setState({locationName: e.target.value})
};


  render() {
    return (
      <Form>
  <Form.Group className="mb-3" >
    <Form.Label>City Name</Form.Label>
    <Form.Control type="search" placeholder="i.e. Chattanooga" onChange={this.handleChange} />
    <Form.Text className="text-muted">
      Please enter a city name to explore:
    </Form.Text>
  </Form.Group>
  <Button variant="primary" onClick="handleClick">
    Explore!
  </Button>  
  <h2>{this.state.locationName}</h2>
</Form>
    );
  }
};

