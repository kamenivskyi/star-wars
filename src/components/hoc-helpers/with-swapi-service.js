import React from 'react';
import { SwapiServiceConsumer } from '../../context/swapi-service-context/swapi-service-context';

const withSwapiService = Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          return <Wrapped {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};
export default withSwapiService;
