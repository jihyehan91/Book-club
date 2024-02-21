import React from 'react';
import Logo from '../header/Logo';
import Authentication from '../header/Authentication';
import Navigation from '../header/Navigation';
import User from '../header/User';
import Notification from '../header/Notification';
import SearchBar from '../header/SearchBar';

function Header() {
  return (
    <header className='header'>
      <Logo />
      {/* <Authentication />
      <Navigation />
      <SearchBar />
      <Notification />
      <User /> */}
    </header>
  );
}

export default Header;
