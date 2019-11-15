import React, { Component } from 'react';
import SwapiService from '../services/SwapiService';
import ErrorIndicator from './ErrorIndicatior';
import { PlanetView } from './PlanetView';
import Spinner from './Spinner';

class RandomPlanet extends Component {
  service = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleError = error => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20) + 3;
    this.service
      .getPlanetById(id)
      .then(planet => this.setState({ planet, loading: false }))
      .catch(this.handleError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(error || loading);
    return (
      <div className='jumbotron mt-3'>
        <div className='row'>
          {error && <ErrorIndicator />}
          {loading && <Spinner />}
          {hasData && <PlanetView planet={planet} />}
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
