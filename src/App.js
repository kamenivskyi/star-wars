import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SwapiService from './services/SwapiService';
import RandomPlanet from './components/RandomPlanet';
import PeoplePage from './components/PeoplePage';
import PlanetsPage from './components/PlanetsPage';
import ErrorBoundry from './components/ErrorBoundry';
import Row from './components/Row';
import ItemDetails from './components/ItemDetails';
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
      getPersonImage
    } = this.service;

    const personDetails = (
      <ItemDetails
        itemId={20}
        getData={getPersonById}
        getImageUrl={getPersonImage}
      />
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarshipById}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <ErrorBoundry>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Row left={personDetails} right={starshipDetails} />
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
