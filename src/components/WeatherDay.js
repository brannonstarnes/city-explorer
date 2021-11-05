import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default class WeatherDay extends Component{
    
    // this.props.weatherForecast.map(dailyWeather => new DayForecast(dailyWeather));
    
    // class DayForecast {
    //     constructor(obj){
    //       this.datetime = obj.datetime;
    //       this.min_temp = obj.min_temp;
    //       this.max_temp = obj.max_temp;
    //       this.description = obj.weather.description;
    //       this.icon = obj.weather.icon;
    //     } 
    //   }

    render() {
        return(
            <>
            <Container>
                <Card>
                    <p>Test</p>
                </Card>
            </Container>
            </>
        )
    };
}