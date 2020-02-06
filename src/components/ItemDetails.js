import React, { Component } from 'react';
import Spinner from './Spinner';
import SwapiService from '../services/SwapiService';

export const Record = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

class ItemDetails extends Component {
  state = {
    item: {},
    fields: [],
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

    if (!item) return <div>Select an item from the list</div>;

    return (
      <div className='jumbotron'>
        <div className='row'>
          <img src={image} alt='item image' className='col-md-5' />
          <ul className='list-group col-md-7'>
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
