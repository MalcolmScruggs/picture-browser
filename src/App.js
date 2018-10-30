import React, { Component } from 'react';
import './App.css';
import PictureBrowser from "./PictureBrowser";



class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <div className="nav-logo">
              Picture Browser
          </div>
        </nav>
        <PictureBrowser />
      </div>
    );
  }
}

export default App;
