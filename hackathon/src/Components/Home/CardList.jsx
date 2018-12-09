/* eslint-disable react/prefer-stateless-function */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import CardItem from './CardItem';

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        <h1 className="title-section">Les derniers plats</h1>
        <div className="card-list row">
          {this.props.el.map((el, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CardItem key={index} id={index} el={el} />))
          }
        </div>
      </div>
    )
  }
}

export default CardList;
