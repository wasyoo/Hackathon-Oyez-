import React, { Component } from 'react';
import './PlatsDetails.css';
// import { List } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import StarsRating from '../UserDetails/Raiting';

class PlatsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="container1">
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-12">
                  <h3 className="product-title">Nouasser A Poulet</h3>
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></div>
                    <div className="tab-pane" id="pic-2"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></div>
                    <div className="tab-pane" id="pic-3"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></div>
                    <div className="tab-pane" id="pic-4"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></div>
                    <div className="tab-pane" id="pic-5"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active"><a href="#pic-1" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></a></li>
                    <li><a href="#pic-2" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></a></li>
                    <li><a href="#pic-3" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></a></li>
                    <li><a href="#pic-4" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></a></li>
                    <li><a href="#pic-5" data-toggle="tab"><img src="https://365recettes.com/wp-content/uploads/2015/06/nwasser-tunisien-610x300.jpg" alt="details" /></a></li>
                  </ul>

                </div>
                <div className="details col-md-11">
                  <p className="product-description">
                    {'Les nouasser sont des pâtes de formes carrées très connues en Tunisie, les femmes tunisiennes les préparent à la maison avec du semoules, œufs et d’huile. La préparation de cette pâtes est presque comme le couscous, elle est cuite à la vapeur dans un couscoussier et ensuite arroser avec de la sauce. Découvrez sans attendre ce plat traditionnel Tunisien avec notre recette facile qui sera parfait aussi pour le mois de Ramadan.'}
                    <br />
                    <br />
                    <h4> Liste Des Ingrédients : </h4>
                    <div role="list" className="ui bulleted list" style={{ marginLeft: '22%' }}>
                      <div role="listitem" className="item">
                        { '1.5 kg de poulet'}
                      </div>
                      <div role="listitem" className="item">


                        {'2 petits oignons'}
                      </div>
                      <div role="listitem" className="item">
                        {'1 dl d"huile d"olive'}
                      </div>
                      <div role="listitem" className="item">
                        {' 1 kg de NOUASSAR'}
                      </div>
                      <div role="listitem" className="item">
                        {' 2 pommes de terre moyennes'}
                      </div>
                      <div role="listitem" className="item">
                        {' 100 g de pois chiche trempées la veille'}
                      </div>
                      <div role="listitem" className="item">
                        {' 1 c.à.c de harissa'}
                      </div>
                      <div role="listitem" className="item">
                        {'1 pointe de cannelle'}
                      </div>
                    </div>

                  </p>
                  <h4 className="price">
                    <span>
                      {'Prix : 7 DT'}
                    </span>
                  </h4>
                  <div className="action">
                    <div>
                      <StarsRating />
                    </div>
                    <br />
                    <button className="add-to-cart btn btn-default" type="button">
                      {' Ajout Au Panier'}
                      <Icon name="cart" size="big" />
                    </button>

                  </div>
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
