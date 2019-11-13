import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SwapiService from "./services/SwapiService";
import RandomPlanet from "./components/RandomPlanet";
import "./App.css";

class App extends Component {
  // service = new SwapiService();
  // componentDidMount() {
  //   console.log(this.service.getAllPeople());
  // }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />
          <RandomPlanet />
        </div>
      </div>
    );
  }
}

export default App;
