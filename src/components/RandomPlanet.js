import React, { Component } from "react";
import SwapiService from "../services/SwapiService";

class RandomPlanet extends Component {
  service = new SwapiService();

  state = {
    id: null,
    name: null,
    rotationPeriod: null,
    population: null,
    diameter: null,
    climate: null
  };

  componentDidMount() {
    this.updatePlanet();
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.service.getPlanetById(id).then(res =>
      this.setState({
        id,
        name: res.name,
        population: res.population,
        rotationPeriod: res.rotation_period,
        diameter: res.diameter,
        climate: res.climate
      })
    );
  };

  render() {
    const {
      name,
      population,
      rotationPeriod,
      diameter,
      climate,
      id
    } = this.state;
    return (
      <div className="jumbotron row">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt={name}
          className="col-md-4"
        />
        <div className="col-md-8">
          <h5 className="display-4">{name}</h5>
          <span className="d-block">rotation period: {rotationPeriod}</span>
          <span className="d-block">population: {population}</span>
          <span className="d-block">diameter: {diameter}</span>
          <span className="d-block">climate: {climate}</span>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
