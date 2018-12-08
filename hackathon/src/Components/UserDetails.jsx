import React, { Component } from 'react';
import './UserDetails.css';
import logo from './logo1.png';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="UserDetails">
        <div className="container portfolio">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <p>User Details</p>
              </div>
            </div>
          </div>
          <div className="bio-info">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="bio-image">
                      <img src={logo} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="title">
                  <a href="https://google.com/">Foulen Ben Foulen</a>
                </div>
                <div className="label">Phone:+216 50 789 988</div>
                <div className="label">Email:Foulen@gmail.com</div>
                <div className="label">Company : Go My Code</div>
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

              </div>
            </div>
          </div>
        </div>

      </div>


    );
  }
}

export default UserDetails;
