import React from 'react';
import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator m-auto'>
      <img src={icon} alt='Error icon' />
      <p className='mt-2'>Oops, something has gone wrong!</p>
    </div>
  );
};
export default ErrorIndicator;
