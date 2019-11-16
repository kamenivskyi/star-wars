import React, { Component } from 'react';
import Spinner from './Spinner';
import SwapiService from '../services/SwapiService';

class ItemDetails extends Component {
  state = {
    item: {},
    image: null
  };
  service = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;

    getData(itemId).then(item =>
      this.setState({ item, image: getImageUrl(item) })
    );
  };

  render() {
    const { item, image } = this.state;
    const { name, gender, mass, birthYear, eyeColor, id } = this.state.item;
    if (!item) return <div>Select an item from the list</div>;
    return (
      <div className='jumbotron'>
        <div className='row'>
          <img src={image} alt={name} className='col-md-5' />
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

export default ItemDetails;
