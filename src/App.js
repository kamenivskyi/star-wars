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

    const personDetails = (
      <ItemDetails
        itemId={20}
        getData={getPersonById}
        getImageUrl={getPersonImage}
      >
        <Record field='name' label='Name: ' />
        <Record field='gender' label='Gender: ' />
        <Record field='eyeColor' label='Eye color: ' />
        <Record field='mass' label='Mass: ' />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarshipById}
        getImageUrl={getStarshipImage}
      >
        <Record field='model' label='Model: ' />
        <Record field='length' label='Length: ' />
        <Record field='costInCredits' label='Cost: ' />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Row left={personDetails} right={starshipDetails} />
            <Row
              left={
                <ItemList getData={getAllPeople} onItemSelected={() => {}}>
                  {({ name }) => <span>{name}</span>}
                </ItemList>
              }
              right={
                <ItemList getData={getAllPeople} onItemSelected={() => {}}>
                  {({ name }) => <span>{name}</span>}
                </ItemList>
              }
            />
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
