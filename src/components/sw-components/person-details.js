import React from 'react';
import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../../context/swapi-service-context/swapi-service-context';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;

  return (
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
  );
};

export default withSwapiService(PersonDetails);
