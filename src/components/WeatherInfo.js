import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay.js';

export default class WeatherInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            weatherForecast: [],
        }
    }

    getWeatherInfo = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.lat}&lon=${this.props.lon}&city_name=${this.props.locationName.split(',')[0]}`;
        
        let response = await axios.get(url);
        this.setState({weatherForecast: response.data});
        console.log(response.data);  
    };    


    render(){
       
        return(
            <div>
              
                    <Card style={{ width: '40rem', height: '34rem', margin:'auto' }}>
                        <Card.Img variant="top" src="https://www.weather.gov/images/riw/Banner_Forecast.png" />
                        <Card.Body>
                        <Card.Title>3 Day Forecast for {this.props.locationName}.</Card.Title>
                            <Card.Text style={{height: '70'}}>
                              <WeatherDay weatherForecast={this.state.weatherForecast}/>
                            </Card.Text>
                            <Button onClick={this.getWeatherInfo}>Get Weather</Button>
                        </Card.Body>
                    </Card>

    
            </div>
        )
    };
}
