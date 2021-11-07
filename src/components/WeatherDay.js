import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class WeatherDay extends Component{
    
    
    render() {

        return(
            <div>
              {/* <Container>   */}
                <Row>       
                 {this.props.weatherForecast && this.props.weatherForecast.map((dayForecast) => 
                 <Col>
                    <Card style={{ width: '11rem', margin:'auto' }}>
                        <Card.Img variant="top" src={` https://www.weatherbit.io/static/img/icons/${dayForecast.icon}.png`} />
                        <Card.Body>
                            <Card.Title>{dayForecast.datetime}</Card.Title>
                              <Card.Text>
                                  <ul>
                                    <li>Low: {dayForecast.min_temp}</li>
                                    <li>High: {dayForecast.max_temp}</li>
                                    <li>Conditions: {dayForecast.description}</li>
                                  </ul>
                              </Card.Text>
                        </Card.Body>
                    </Card>
                 </Col>
                 )}
              </Row>
            {/* </Container> */}
            </div>
        )
    }
}