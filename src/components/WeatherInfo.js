import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';

export default class WeatherInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            weatherForecast: [],
        }
    }

    getWeatherInfo = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.lat}&lon=${this.props.lon}&city_name${this.props.locationName.split(',')[0]}`;
        
        let response = await axios.get(url);
        this.setState({weatherForecast: response.data});
        console.log(response.data);  
    };    


    render(){
        return(
            <div>
                <Container>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>3 Day Forecast for {this.props.locationName}.</Card.Title>
                            <Card.Text>
                              {this.state.weatherForecast && this.state.weatherForecast.map((dayForecast, idx) => 
                              <li key={idx}>Date: {dayForecast.datetime} Low Temp: {dayForecast.min_temp} High Temp: {dayForecast.max_temp} Conditions: {dayForecast.description}</li>)}
                            </Card.Text>
                            <Button onClick={this.getWeatherInfo}>Get Weather</Button>
                        </Card.Body>
                    </Card>
                    
                </Container>
                
    
            </div>
        )
    };
}
