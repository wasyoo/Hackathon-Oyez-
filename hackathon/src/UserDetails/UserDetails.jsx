import React, { Component } from 'react';
import './UserDetails.css';
import NavBar from '../compenents/NavBar';
import CardItem from '../compenents/CardItem';
import StarsRating from './Raiting';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="UserDetails">
        <NavBar />
        <div className="container portfolio">
          <div className="bio-info">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="bio-image">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="img" />
                      <div className="ligne1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="title">
                  <a href="https://google.com/">Foulen Ben Foulen</a>
                </div>
                <div className="label-details">
                  <div className="label">Téléphone :</div>
                  <div className="details">  +216 50 789 988</div>
                </div>
                <br />
                <div className="label-details">
                  <div className="label">Email : </div>
                  <div className="details">  Foulen@gmail.com</div>
                </div>
                <br />
                <div className="label-details">
                  <div className="label">Entreprise : </div>
                  <div className="details">  Go My Code</div>
                </div>
                <br />
                <div className="bottom">
                  <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/">
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="btn btn-danger btn-sm" rel="publisher" href="https://plus.google.com">
                    <i className="fa fa-google-plus" />
                  </a>
                  <a className="btn btn-primary btn-sm" rel="publisher" href="https://plus.google.com">
                    <i className="fa fa-facebook" />
                  </a>
                </div>
                <div className="rating"><StarsRating /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="plats-user">
          <i className="fas fa-angle-double-right" />
          {'Les Plats Disponibles'}
        </div>
        <div className="cardlistdetails">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          {/* <CardList style={{ width: '50%' }} /> */}
        </div>
      </div>


    );
  }
}

export default UserDetails;
