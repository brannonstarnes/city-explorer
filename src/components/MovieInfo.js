import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class WeatherInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }


    getMovieInfo = async () => {
       
        const url = `${process.env.REACT_APP_SERVER_URL}/movies?city_name=${this.props.city_name.split(',')[0]}`;
        
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
                <Button onClick={this.getMovieInfo}>Get Movies</Button>
                </Container>
                {this.state.movies.length && this.state.movies.map((movie, idx) => 
                <li key={idx}>Date: {movie.datetime} Low Temp: {movie.min_temp} High Temp: {movie.max_temp} Conditions: {movie.description}</li>)}
    
            </div>
        )
    };
}
