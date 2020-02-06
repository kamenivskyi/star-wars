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
import { SwapiServiceProvider } from './context/swapi-service-context/swapi-service-context';
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
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.service}>
          <div className='App'>
            <div className='container'>
              <Navbar />

              {/* <PersonList>
              {({ name, birthYear }) => (
                <span>
                  {name} ({birthYear})
                </span>
              )}
            </PersonList> old -> without withChildFunction HOC*/}

              <Row left={<PersonList />} right={<PersonDetails itemId={4} />} />

              <Row left={<PlanetList />} right={<PlanetDetails itemId={2} />} />

              <Row
                left={<StarshipList />}
                right={<StarshipDetails itemId={9} />}
              />
            </div>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
