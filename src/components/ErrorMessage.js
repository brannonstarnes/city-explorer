import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

export default class ErrorMessage extends Component{
   render(){
       return(
        <Container fluid='sm'>
        <Alert variant="success">
        <Alert.Heading>Oops!</Alert.Heading>
        <p>
          Sorry about that! {this.props.errorMsg}.
        </p>
        <hr />
        <p className="mb-0">
          Refresh your screen and try a new search!
        </p>
      </Alert>
      </Container>
       )
   }
}