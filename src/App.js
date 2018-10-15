import React, { Component } from "react";
import Slider from "components/Slider";
import ErrorBoundary from "components/ErrorBoundary";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" data-testid="app">
        <ErrorBoundary>
          <Slider />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
