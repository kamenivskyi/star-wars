import ItemList from '../ItemList';
import withData from '../hoc-helpers/withData';
import SwapiService from '../../services/SwapiService';

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
