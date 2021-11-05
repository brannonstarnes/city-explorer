import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Carousel from 'bootstrap';

export default class MovieInfo extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }


    getMovieInfo = async () => {
       
        const url = `${process.env.REACT_APP_SERVER_URL}/movies?city_name=${this.props.city_name.split(',')[0]}`;
        
        let result = await axios.get(url);
        this.setState({movies: result.data});
        console.log(result.data);  
    };    

    //the data that comes back will be put in state..if i have the state, will map it and render li's
    //to render will check if you have the weather info or not, if yes, then render
    
    render(){
        return(
            <div>
                <Container>
                    <Button onClick={this.getMovieInfo}>Get Movies</Button>
                </Container>
                <Carousel>
                    {this.state.movies && this.state.movies.map((movie) => 
                        <Carousel.Item>
                            <img alt='carousel item' src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`}/> 
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            <h5> Avg Rating: {movie.votes} Votes:{movie.voteCount}</h5>
                        </Carousel.Caption> 
                        </Carousel.Item>   
                        )}
                </Carousel>
            </div>
        )
    };
}
