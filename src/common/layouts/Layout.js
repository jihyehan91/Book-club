import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Layout({ children }) {
  return (
    <div className='container'>
      <Header />
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
