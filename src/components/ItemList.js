import React from 'react';
import SwapiService from '../services/SwapiService';
import { withData } from '../components/HOCHelpers';

const { getAllPeople } = new SwapiService();

const ItemList = props => {
  const { onItemSelected, data, children } = props;

  const renderItems = array => {
    return array.map(item => {
      const label = children(item);
      return (
        <li
          className='list-group-item'
          key={item.id}
          onClick={() => onItemSelected(item.id)}
        >
          {label}
        </li>
      );
    });
  };

  return <ul>{renderItems(data)}</ul>;
};

export default withData(ItemList, getAllPeople);
