import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <a className='navbar-brand' href='#'>
        StarWarsApp
      </a>
      <div className='collapse navbar-collapse' id='navbarColor01'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              People
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Planets
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Starships
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
