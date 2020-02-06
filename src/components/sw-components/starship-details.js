import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../../context/swapi-service-context/swapi-service-context';

export const StarshipDetails = ({ itemId }) => (
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
