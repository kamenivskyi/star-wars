import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SwapiService from './services/SwapiService';
import RandomPlanet from './components/RandomPlanet';
import PeoplePage from './components/PeoplePage';
import PlanetsPage from './components/PlanetsPage';
import ErrorBoundry from './components/ErrorBoundry';
import './App.css';

class App extends Component {
  service = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <RandomPlanet />
            <PeoplePage getData={this.service.getAllPeople} />
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
