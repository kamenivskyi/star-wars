import React from 'react';

export const PlanetView = ({ planet }) => {
  const { name, rotationPeriod, population, diameter, climate, id } = planet;
  return (
    <>
      <div className='col-md-3'>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt={name}
          className='img-fluid rounded'
        />
      </div>
      <div className='col-md-9 planet-data'>
        <h4>{name}</h4>
        <span className='d-block'>rotation period: {rotationPeriod}</span>
        <span className='d-block'>population: {population}</span>
        <span className='d-block'>diameter: {diameter}</span>
        <span className='d-block'>climate: {climate}</span>
      </div>
    </>
  );
};
