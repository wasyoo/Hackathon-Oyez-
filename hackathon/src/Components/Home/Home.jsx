import React from 'react';
import CardList from './CardList';
import Carousel from './Carousel';
import ModalReg from '../User/ModalReg/ModalReg';
import HowItWork from './HowItWork';

const Home = () => (
  <div>
    <Carousel />
    <HowItWork />
    <CardList />
    {/* <div className="modal fade" id="register" tabindex="-1" role="dialog">
      <Register/>
    </div> */}
    <ModalReg />
  </div>
);

export default Home;
