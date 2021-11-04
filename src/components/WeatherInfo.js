import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class WeatherInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            weatherForecast: []
        }
    }


    getWeatherInfo = async () => {
       
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.lat}&lon=${this.props.lon}`;
        
        let response = await axios.get(url);
        this.setState({weatherForecast: response.data});
        console.log(response.data);  
       };    

    //the data that comes back will be put in state..if i have the state, will map it and render li's
    //to render will check if you have the weather info or not, if yes, then render
    
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
