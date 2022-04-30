import React from 'react';
import {Home} from '../Home';
import {BottomNavigation} from './BottomNavigation';
import {Header} from './Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <BottomNavigation />
    </>
  );
};
