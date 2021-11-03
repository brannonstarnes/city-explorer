import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class WeatherInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            weatherInfo: []
        }
    }


    getWeatherInfo = async () =>{
       try{
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.lat}&lon=${this.props.lon}&city=${this.props.locationName.split(',')[0]}`
        let response = await axios.get(url);
        console.log(response.data);
        console.log(this.props.lat, this.props.lon, this.props.locationName)
        this.setState({weatherInfo: response.data});  
       } catch (e){
        console.error(e);
       }
    }

    // matchLocation = () => {
    // //take lat and lon from this.props.lat/lon and try to match to the the reponse.data using .find()
    // this.state.weatherInfo.find(lat => lat >= Math.floor(lat))
    // }

    //the data that comes back will be put in state..if i have the state, will map it and render li's
    //to render will check if you have the weather info or not, if yes, then render
    
    render(){
        return(
            <div>
                <Container>
                <Button onClick={this.getWeatherInfo}>Get Weather</Button>
                </Container>
                {this.state.weatherInfo.length && this.state.weatherInfo.map((dayForecast, idx) => 
                <li key={idx}>Date: {dayForecast.datetime} Low Temp: {dayForecast.min_temp} High Temp: {dayForecast.max_temp} : {dayForecast.description}</li>)}
            </div>
        )
    }
}