import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../../context/swapi-service-context/swapi-service-context';

export const PlanetDetails = ({ itemId }) => (
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
