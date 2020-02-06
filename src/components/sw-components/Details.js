import React from 'react';
import SwapiService from '../../services/SwapiService';
import withDetails from '../hoc-helpers/withDetails';
import ItemDetails, { Record } from '../ItemDetails';
const {
  getPersonById,
  getPlanetById,
  getStarshipById,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = new SwapiService();

// const PersonDetails = itemId =>
//   withDetails(ItemDetails, getPersonById, getPersonImage, itemId);
// const PlanetDetails = withDetails(ItemDetails,getPlanetById, getPlanetImage );
// const StarshipDetails = withDetails(ItemDetails, getStarshipById, getStarshipImage);

const StarshipDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getStarshipById}
    getImageUrl={getStarshipImage}
  >
    <Record field='model' label='Model: ' />
    <Record field='length' label='Length: ' />
    <Record field='costInCredits' label='Cost: ' />
  </ItemDetails>
);

const PlanetDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getPlanetById}
    getImageUrl={getPlanetImage}
  >
    <Record field='population' label='Population: ' />
    <Record field='rotationPeriod' label='RotationPeriod: ' />
    <Record field='diameter' label='Diameter: ' />
  </ItemDetails>
);

const PersonDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getPersonById}
    getImageUrl={getPersonImage}
  >
    <Record field='name' label='Name: ' />
    <Record field='gender' label='Gender: ' />
    <Record field='eyeColor' label='Eye color: ' />
    <Record field='mass' label='Mass: ' />
  </ItemDetails>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
