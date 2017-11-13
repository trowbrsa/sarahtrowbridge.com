import React, { Component } from 'react';
import Overview from './Overview';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Meet Sarah</h2>
          <Overview />
        </div>
      </div>
    );
  }
}

export default App;
