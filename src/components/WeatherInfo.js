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

        const url = `'http://localhost:3001/weather?lat=${this.props.lat}&${this.props.lon}&${this.props.locationName}'`
        let response = await axios.get(url)
        console.log(response.data)
        // this.setState({weatherInfo: response.data})
        // this.matchLocation()
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
                {this.state.weatherInfo.length > 0 && this.state.weatherInfo.map(weather => <li key={weather}>{weather}</li>)}
            </div>
        )
    }
}