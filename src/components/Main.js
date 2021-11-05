import React, { Component } from 'react';
import CityForm from './CityForm.js';
import MovieInfo from './MovieInfo.js';
import WeatherInfo from './WeatherInfo.js';
import CityCard from './CityCard.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

export default class Main extends Component{
    render(){
        return(
           <>
           <Container>
           <Row>
                <Container>
                    <CityForm locationName = {this.props.locationName} handleChange = {this.props.handleChange} getLocation={this.props.getLocation}/>
                </Container>
            </Row>
            <Row>    
              <Col>
                <Container>
                    {this.props.mapUrl && <CityCard locationDataAll={this.props.locationDataAll} lat={this.props.lat} lon={this.props.lon} mapUrl={this.props.mapUrl} />}
                </Container>
              </Col>
              <Col>
                <Container>
                    <WeatherInfo lat = {this.props.lat} lon={this.props.lon} locationName={this.props.locationName}/>
                </Container>
              </Col>
            </Row>  
            <Row> 
              <MovieInfo city_name={this.props.locationName}/>
            </Row>
              </Container>  
            </>
        )
    }
 }