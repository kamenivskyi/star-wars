import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SwapiService from './services/SwapiService';
import RandomPlanet from './components/RandomPlanet';
import PeoplePage from './components/PeoplePage';
import PlanetsPage from './components/PlanetsPage';
import ItemList from './components/ItemList';
import ErrorBoundry from './components/ErrorBoundry';
import Row from './components/Row';
import ItemDetails, { Record } from './components/ItemDetails';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from './components/sw-components';
import './App.css';

{
  /* <RandomPlanet />
<PeoplePage getData={this.service.getAllPeople} /> */
}
class App extends Component {
  service = new SwapiService();

  render() {
    const {
      getPersonById,
      getStarshipById,
      getStarshipImage,
      getPersonImage,
      getAllPeople
    } = this.service;

    return (
      <ErrorBoundry>
        <div className='App'>
          <div className='container'>
            <Navbar />

            <PersonList>
              {({ name, birthYear }) => (
                <span>
                  {name} ({birthYear})
                </span>
              )}
            </PersonList>

            <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>

            <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>

            <PersonDetails itemId={4} />

            <StarshipDetails itemId={3} />

            <PlanetDetails itemId={2} />
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
