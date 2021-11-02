import './App.css';
import React, { Component } from 'react';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    location: ''
  }
}

  render() {
    return (
      <div>
        <input type='text'></input>
        <h1>Test</h1>
      </div>
    );
  }
};

