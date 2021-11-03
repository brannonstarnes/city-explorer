import './App.css';
import React, { Component } from 'react';
import CityForm from './components/CityForm.js'
import Map from './components/Map.js'
import axios from 'axios';
import WeatherInfo from './components/WeatherInfo.js'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    locationDataAll: {},
    locationName: '',
    lat: '',
    lon: '',
    mapUrl: '',
    error: false
  }
}

//when event occurs in input field, update state to match the value of the input field
handleChange = (e) => {
  this.setState({locationName: e.target.value})
};

getMap = async () => {
  const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`;
  this.setState({...this.state.locationDataAll, mapUrl: mapUrl})
  console.log(mapUrl)
};

getLocation = async () => {
  let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=
  ${this.state.locationName}&format=json`;
  try {
    let response = await axios.get(url);
    const locationDataAll = response.data[0];
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    // const name = response.data[0].display_name;
    this.setState({locationDataAll: locationDataAll, lat: lat, lon: lon});
    this.getMap();   
  } catch (e){
    console.error(e);
    this.setState({error: true})
  } 
};

  render() {
    return (
    <>
    <CityForm locationName = {this.state.locationName} handleChange = {this.handleChange} getLocation={this.getLocation}/>
    <WeatherInfo lat = {this.state.lat} lon={this.state.lon} locationName={this.state.locationName}/>
    {this.state.mapUrl && <Map locationDataAll={this.state.locationDataAll} lat={this.state.lat} lon={this.state.lon} mapUrl={this.state.mapUrl} />}
    {this.state.error && <h2>Error: Cannot Geocode</h2>}  
    </>
    );
  }
};

