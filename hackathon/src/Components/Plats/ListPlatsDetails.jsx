import React, { Component } from 'react';
import CardList from '../Home/CardList';


class Plats extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="containerPlat" style={{ display: 'flex', padding: '7% 5% ' }}>
        <CardList />
      </div>
    );
  }
}
export default Plats;
