import React, { Component } from 'react';
import CityForm from './CityForm.js';
import WeatherInfo from './WeatherInfo.js';
import MovieInfo from './MovieInfo.js';

export default class Main extends Component{
    render(){
        return(
           <>
              <CityForm locationName = {this.props.locationName} handleChange = {this.props.handleChange} getLocation={this.props.getLocation}/>
              <WeatherInfo lat = {this.props.lat} lon={this.props.lon} locationName={this.props.locationName}/>
              <MovieInfo city_name={this.props.locationName}/>
            </>
        )
    }
 }