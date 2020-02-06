import React from 'react';

const ItemList = props => {
  const { onItemSelected, data, children: renderLabel } = props;

  console.log(props);

  const renderItems = data.map(item => {
    const { id } = item;

    const label = renderLabel(item);

    return (
      <li
        className='list-group-item'
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className='list-group'>{renderItems}</ul>;
};

export default ItemList;
