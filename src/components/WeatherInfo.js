import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class WeatherInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            weatherForecast: [],
        }
    }

    getWeatherInfo = async () => {
       //reach out to my server with lat long retreived
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.lat}&lon=${this.props.lon}&city_name${this.props.locationName.split(',')[0]}`;
        
        let response = await axios.get(url);
        this.setState({weatherForecast: response.data});
        console.log(response.data);  
       };    


    render(){
        return(
            <div>
                <Container>
                    <Button onClick={this.getWeatherInfo}>Get Weather</Button>
                </Container>
                {this.state.weatherForecast.length && this.state.weatherForecast.map((dayForecast, idx) => 
                <li key={idx}>Date: {dayForecast.datetime} Low Temp: {dayForecast.min_temp} High Temp: {dayForecast.max_temp} Conditions: {dayForecast.description}</li>)}
    
            </div>
        )
    };
}
