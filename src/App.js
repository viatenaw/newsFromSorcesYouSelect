import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="header">News You Read</h1>
        <h3 id="headerDescription">From Your Favorite Sources</h3>
        <Home />
      </div>
    );
  }
}

export default App;
