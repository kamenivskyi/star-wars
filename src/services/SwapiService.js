class SwapiService {
  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch the ${url}, received: ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const people = await this.getResource('/people');
    return people.results.map(this._transformPerson);
  };

  getPersonById = async id => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const planets = await this.getResource('/planets');
    return planets.results.map(this._transformPlanet);
  };

  getPlanetById = async id => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const starships = await this.getResource('/starships');
    return starships.results.map(this._transformStarship);
  };

  getStarshipById = async id => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };
  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };
  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };
  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };
  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate
    };
  };
  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      crew: starship.crew,
      length: starship.length,
      model: starship.model,
      passengers: starship.passengers,
      consumables: starship.consumables,
      manufacturer: starship.manufacturer,
      cargoCapacity: starship.cargo_capacity,
      costInCredits: starship.cost_in_credits
    };
  };
  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      mass: person.mass,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };
}
export default SwapiService;
