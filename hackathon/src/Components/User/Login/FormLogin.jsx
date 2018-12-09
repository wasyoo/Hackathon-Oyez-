/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory';
import './Login.css';

const HISTORY = createHistory({
  forceRefresh: true,
});

class FormLogin extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  static defaultProps = {
    user: {},
  };

  state = {
    email: '',
    password: '',
  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { onSubmit } = this.props;


    const {
      email, password,
    } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            variables: {
              input: {
                email,
                password,
              },
            },
          })
            .then(() => HISTORY.push('/user'))
            .catch((e));
        }}
      >
        <div className="login-section">
          <form className="login-form">
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
              <label htmlFor="rating">Mot de passe</label>
              <input
                type="paasword"
                className="form-control"
                name="password"
                placeholder="veuillez entrer votre mot de passe"
                onChange={this.handleInput}
                value={password}
              />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </form>
    );
  }
}
export default FormLogin;
