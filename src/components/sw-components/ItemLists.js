import React from 'react';
import ItemList from '../ItemList';
import withData from '../hoc-helpers/withData';
import SwapiService from '../../services/SwapiService';

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
