import React, { Component } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
                <Col md={4} style={{margin: 'auto'}}>
                <Carousel indicators={false}>
                    {this.state.movies && this.state.movies.map((movie) => 
                        <Carousel.Item>
                            <img style= {{margin: 'auto'}} alt='carousel item' src={`https://image.tmdb.org/t/p/w400${movie.posterPath}`}/> 
                        {/* <Carousel.Caption> */}
                        <div style={{overflow: 'scroll', height: '100px'}}>
                            <h3 style={{color: 'black'}}>{movie.title}</h3>
                            <p style={{color: 'black'}}>{movie.overview}</p>
                            <h5 style={{color: 'black'}}> Avg Rating: {movie.votes} Votes:{movie.voteCount}</h5>
                        </div>
                        {/* </Carousel.Caption>  */}
                        </Carousel.Item>   
                        )}
                </Carousel>
                </Col>
            </div>
        )
    };
}
