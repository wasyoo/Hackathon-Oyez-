/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-string-refs */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserDetails.css';
import {
  Button, Modal,
} from 'semantic-ui-react';
import CardList from '../Home/CardList';
import StarsRating from './Raiting';


class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      details: '',
      ingredients: '',
      img: '',
    };
  }

  handlechange=(event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handlechange1=(event) => {
    this.setState({
      details: event.target.value,
    });
  }

  handlechange2=(event) => {
    this.setState({
      ingredients: event.target.value,
    });
  }

  handlechange3=(event) => {
    this.setState({
      img: event.target.value,
    });
  }

  handlesumbit=() => {
    const { title } = this.state;
    const { details } = this.state;
    const { ingredients } = this.state;
    const { img } = this.state;
    this.props.plat(title, details, ingredients, img);
    this.setState({
      title: '', details: '', ingredients: '', img: '',
    });
  }

  render() {
    return (
      <div>
        <div className="UserDetails">
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
            <CardList />

          </div>
          <div className="center">

            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <button id="plus-button" data-toggle="modal" type="button" data-target="#squarespaceModal">
                    {'+'}
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="modal fade" id="squarespaceModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="lineModalLabel">Ajout Plat</h3>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label ref="title">Titre Du Plat</label>
                      <input type="text" value={this.state.title} onChange={this.handlechange} className="form-control" id="text" placeholder="Entrer le titre du plat" />
                    </div>
                    <div className="form-group">
                      <label ref="details"> Details </label>
                      <input type="text" value={this.state.details} onChange={this.handlechange1} className="form-control" id="details" placeholder="Details" />
                    </div>
                    <div className="form-group">
                      <label ref="ingredients"> Ingrédients </label>
                      <input type="text" value={this.state.ingredients} onChange={this.handlechange2} className="form-control" id="ingredients" placeholder="Ingredients" />
                    </div>
                    <div className="form-group">
                      <label ref="img">Import IMG : </label>
                      <br />
                      <input type="file" id="exampleInputFile" value={this.state.img} onChange={this.handlechange3} />
                      <br />
                      <p className="help-block" />
                    </div>
                  </form>
                </div>
                <Modal.Actions>
                  <Button negative type="button" data-dismiss="modal">Annuler</Button>
                  <Button positive icon="checkmark" labelPosition="right" content="Valider" onClick={this.handleSubmit} />
                </Modal.Actions>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    plat: (title, details, ingredients, img) => { dispatch(
      { type: 'ADD_TODO',
        title, // ES6
        details,
        ingredients,
        img,
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(UserDetails);
