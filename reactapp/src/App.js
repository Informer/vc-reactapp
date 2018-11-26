import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Add_adapter from "./components/Add_adapter";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Add_adapter/>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
    );
  }
}

export default App;
