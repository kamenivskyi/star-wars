import React from 'react';
import './ErrorIndicator.css';
import image from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator m-auto'>
      <img src={image} alt='Death star' />
      <p className='mt-2'>Oops, something has gone wrong!</p>
    </div>
  );
};
export default ErrorIndicator;
