import './App.css';
import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js'
import Map from './components/Map.js';
import axios from 'axios';
import ErrorMessage from './components/ErrorMessage.js';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    locationDataAll: {},
    locationName: '',
    lat: '',
    lon: '',
    mapUrl: '',
    error: false,
    errorMsg: 'Default Error Message'
  }
}

handleChange = (e) => {
  this.setState({locationName: e.target.value})
};

getMap = async () => {
  const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`;
  try{
  this.setState({...this.state.locationDataAll, mapUrl: mapUrl})
  console.log(mapUrl)
  } catch (e){
    console.error(e)
    this.setState({errorMsg: e});
    this.setState({error: 'true'});
  }
};

getLocation = async () => {
  let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=
  ${this.state.locationName}&format=json`;
  try {
    let response = await axios.get(url);
    const locationDataAll = response.data[0];
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    const name = response.data[0].display_name;
    this.setState({locationDataAll: locationDataAll, lat: lat, lon: lon, locationName: name});
    this.getMap();   
  } catch (e){
    this.setState({errorMsg: e});
    this.setState({error: true})
  } 
};

  render() {
    return (
    <>
    <Header />
    <Main lat = {this.state.lat} lon={this.state.lon} locationName={this.state.locationName} handleChange={this.handleChange} getLocation = {this.getLocation}/>

    {this.state.mapUrl && <Map locationDataAll={this.state.locationDataAll} lat={this.state.lat} lon={this.state.lon} mapUrl={this.state.mapUrl} />}
    {this.state.error && <ErrorMessage error= {this.state.error} errorMsg={this.state.errorMsg}/>}  
    </>
    );
  }
};

