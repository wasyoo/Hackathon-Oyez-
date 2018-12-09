/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { connect } from 'react-redux';
import CardItem from './CardItem';


const CardList = (props) => (
  <div className="home">
    <div className="card-list row">
      { props.plat.map((el, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <CardItem key={index} id={index} plat={el} />)
      }
    </div>
  </div>

);
const mapStateToProps = (state) => ({
  plat: state
})
export default connect(mapStateToProps)(CardList);
