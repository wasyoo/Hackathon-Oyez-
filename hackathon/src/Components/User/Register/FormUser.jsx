import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Register.css';
import createHistory from 'history/createBrowserHistory';

const HISTORY = createHistory({
  forceRefresh: true,
});

class FormUser extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  static defaultProps = {
    user: {},
  };

  state = {
    id: this.props.user.id || '',
    username: this.props.user.username || '',
    email: this.props.user.email || '',
    password: this.props.user.password || '',
    company: this.props.user.company || '',
  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;


    const {
      username, email, password, id, company,
    } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              input: {
                username,
                email,
                password,
                company,
              },
              id,
            },
          })
            .then(() => HISTORY.push('/login'))
            .catch((e));
        }}
      >


        <div className="form-group">
          <label htmlFor="name">Nom prenom</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="veuillez entrer votre nom et prénom"
            onChange={this.handleInput}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="veuillez entrer votre adresse mail"
            onChange={this.handleInput}
            value={email}
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
            name="company"
            placeholder="veuillez entrer l'entreprise"
            onChange={this.handleInput}
            value={company}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Password</label>
          <input
            type="paasword"
            className="form-control"
            name="password"
            placeholder="veuillez entrer votre mot de passe"
            onChange={this.handleInput}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">




                    Submit
                        </button>
      </form>
    );
  }
}
export default FormUser;
