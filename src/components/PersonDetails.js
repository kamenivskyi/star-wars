import React, { Component } from 'react';
import Spinner from './Spinner';
import SwapiService from '../services/SwapiService';

class PersonDetails extends Component {
  state = {
    person: {}
  };
  service = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    if (!this.props.personId) return;
    this.service
      .getPersonById(this.props.personId)
      .then(person => this.setState({ person }));
  };

  render() {
    const { name, gender, mass, birthYear, eyeColor, id } = this.state.person;
    if (!this.state.person) return <div>Select a person from list</div>;
    return (
      <div className='jumbotron'>
        <div className='row'>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt={name}
            className='col-md-5'
          />
          <ul className='list-group col-md-7'>
            <li className='list-group-item'>{name}</li>
            <li className='list-group-item'>Gender: {gender}</li>
            <li className='list-group-item'>Mass: {mass}</li>
            <li className='list-group-item'>Eye color: {eyeColor}</li>
            <li className='list-group-item'>Birth year: {birthYear}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
