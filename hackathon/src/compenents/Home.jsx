import React from 'react';
import CardList from './CardList';
import NavBarMenu from './NavBar';
import Carousel from './Carousel';
import ModalReg from './ModalReg/ModalReg'

const Home = () => (
  <div>
    <NavBarMenu />
    <Carousel />
    <CardList />
    {/* <div className="modal fade" id="register" tabindex="-1" role="dialog">
      <Register/>
    </div> */}
    <ModalReg/>
  </div>
);

export default Home;
