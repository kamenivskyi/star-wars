import React from 'react';
// import SwapiService from '../../services/SwapiService';
// import withDetails from '../hoc-helpers/withDetails';
import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../../context/swapi-service-context/swapi-service-context';

// const PersonDetails = itemId =>
//   withDetails(ItemDetails, getPersonById, getPersonImage, itemId);
// const PlanetDetails = withDetails(ItemDetails,getPlanetById, getPlanetImage );
// const StarshipDetails = withDetails(ItemDetails, getStarshipById, getStarshipImage);

const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getStarship, getStarshipImage }) => {
      return (
        <ItemDetails
          itemId={itemId}
          getData={getStarship}
          getImageUrl={getStarshipImage}
        >
          <Record field='model' label='Model: ' />
          <Record field='length' label='Length: ' />
          <Record field='costInCredits' label='Cost: ' />
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => {
      return (
        <ItemDetails
          itemId={itemId}
          getData={getPlanet}
          getImageUrl={getPlanetImage}
        >
          <Record field='population' label='Population: ' />
          <Record field='rotationPeriod' label='RotationPeriod: ' />
          <Record field='diameter' label='Diameter: ' />
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const PersonDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => (
      <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='name' label='Name: ' />
        <Record field='gender' label='Gender: ' />
        <Record field='eyeColor' label='Eye color: ' />
        <Record field='mass' label='Mass: ' />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
