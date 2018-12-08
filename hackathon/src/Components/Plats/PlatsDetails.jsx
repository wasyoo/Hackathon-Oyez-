import React, { Component } from 'react';
import './PlatsDetails.css';
import StarsRating from '../UserDetails/Raiting';

class PlatsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">

                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img1" /></div>
                  <div className="tab-pane" id="pic-2"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img3" /></div>
                  <div className="tab-pane" id="pic-4"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img4" /></div>
                  <div className="tab-pane" id="pic-5"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img5" /></div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active"><a href="https://github.com/wasyoo/Hackathon-Oyez-/tree/platDetails" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img0" /></a></li>
                  <li><a href="https://github.com/wasyoo/Hackathon-Oyez-/tree/platDetails" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img1" /></a></li>
                  <li><a href="https://github.com/wasyoo/Hackathon-Oyez-/tree/platDetails" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img2" /></a></li>
                  <li><a href="https://github.com/wasyoo/Hackathon-Oyez-/tree/platDetails" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img3" /></a></li>
                  <li><a href="https://github.com/wasyoo/Hackathon-Oyez-/tree/platDetails" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="img4" /></a></li>
                </ul>

              </div>
              <div className="details col-md-6">
                <h3 className="product-title">Nouasser A Poulet</h3>
                <StarsRating />
                <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                <h4 className="price">
                  {'current price:'}
                  <span>$180</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong>
                  {'of buyers enjoyed this product!'}
                  <strong>(87 votes)</strong>
                </p>
                <h5 className="sizes">
                  {' sizes:'}
                  <span className="size" data-toggle="tooltip" title="small">s</span>
                  <span className="size" data-toggle="tooltip" title="medium">m</span>
                  <span className="size" data-toggle="tooltip" title="large">l</span>
                  <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5>
                <h5 className="colors">
                  {'colors:'}
                  <span className="color orange not-available" data-toggle="tooltip" title="Not In store" />
                  <span className="color green" />
                  <span className="color blue" />
                </h5>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                  <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default PlatsDetails;
