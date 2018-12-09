import React from 'react';
import CardList from './CardList';
import Carousel from './Carousel';
import ModalReg from '../User/ModalReg/ModalReg';
import HowItWork from './HowItWork';
import TopUser from './TopUser';

const Home = () => (
  <div>
    <Carousel />
    <HowItWork />
    <CardList />
    <TopUser />
    <ModalReg />
  </div>
);

export default Home;
