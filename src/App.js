import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SwapiService from './services/SwapiService';
import RandomPlanet from './components/RandomPlanet';
import PeoplePage from './components/PeoplePage';
import PlanetsPage from './components/PlanetsPage';
import ErrorIndicatior from './components/ErrorIndicatior';
import './App.css';

class App extends Component {
  service = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) return <ErrorIndicatior />;

    return (
      <div className='App'>
        <div className='container'>
          <Navbar />
          <RandomPlanet />
          <PeoplePage getData={this.service.getAllPeople} />
        </div>
      </div>
    );
  }
}

export default App;
