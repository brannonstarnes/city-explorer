import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="https://icons.iconarchive.com/icons/iconshock/super-vista-general/256/world-icon.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                  />{'  '}
               City Explorer
                </Navbar.Brand>
              </Container>
            </Navbar>
          </>
        )
    }
 }