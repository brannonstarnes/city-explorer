import './App.css';
import React, { Component } from 'react';
import CityForm from './components/CityForm.js'
import CityInfo from './components/CityInfo.js'
import axios from 'axios';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    locationName: '',
    lat: '',
    lon: ''
  }
}

//when event occurs in input field, update state to match the value of the input field
handleChange = (e) => {
  this.setState({locationName: e.target.value})
};

handleClick = async () => {
  const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.locationName}&format=json`;

  let response = await axios.get(url);
  const lat = response.data[0].lat
  const lon = response.data[0].lon
  this.setState({lat: lat, lon: lon});
}

  render() {
    return (
    <>
    <CityForm locationName = {this.state.locationName} handleChange = {this.handleChange} handleClick={this.handleClick}/>
    <CityInfo locationName = {this.state.locationName} lat = {this.state.lat} lon={this.state.lon}/>
    </>
    );
  }
};

