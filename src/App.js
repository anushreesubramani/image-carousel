import React, { Component } from 'react';
import Slider from 'components/Slider';
import ErrorBoundary from 'components/ErrorBoundary';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Slider />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
