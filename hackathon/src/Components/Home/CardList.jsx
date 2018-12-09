import React from 'react';
import CardItem from './CardItem';


const CardList = () => (
  <div className="card-list">
    <h1 className="title-section">Les derniers plats</h1>
    <div className="card-list row">
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  </div>
);

export default CardList;
