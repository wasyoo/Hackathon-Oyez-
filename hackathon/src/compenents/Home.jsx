import React from 'react';
import CardList from './CardList';
import NavBarMenu from './NavBar';
import Carousel from './Carousel';

const Home = () => (
  <div>
    <NavBarMenu />
    <Carousel />
    <CardList />
  </div>
);

export default Home;
