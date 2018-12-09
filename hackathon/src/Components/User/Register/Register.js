import React , { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom prenom</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="veuillez entrer votre nom et prénom"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="veuillez entrer votre adresse mail"
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Tel</label>
          <input
            type="number"
            className="form-control"
            id="tel"
            placeholder="veuillez entrer votre numero de téléphone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Entreprise</label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="veuillez entrer l'entreprise"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Password</label>
          <input
            type="paasword"
            className="form-control"
            id="password"
            placeholder="veuillez entrer votre mot de passe"
          />
        </div>
        <button type="submit" className="btn btn-primary">
                    Valider
        </button>
      </form>
    );
  }
}

export default Register;
