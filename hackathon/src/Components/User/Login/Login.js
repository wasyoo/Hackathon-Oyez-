import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import FormLogin from './FormLogin';
import LOGIN_USER from '../../../graphql/mutation/user/loginUser';

<<<<<<< HEAD
class Login extends Component {
  state = { }

  render() {
    return (
      <Mutation mutation={LOGIN_USER}>
        {(login) => <FormLogin onSubmit={login} />}
      </Mutation>
    );
  }
}
=======
const Login = () => (
    <div className="login-section">
      <form className="login-form">
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
          <label htmlFor="password">Mot de passe</label>
          <input
            type="paasword"
            className="form-control"
            id="password"
            placeholder="veuillez entrer votre mot de passe"
          />
        </div>

        <button type="submit" className="btn btn-primary">
Login
        </button>
      </form>
    </div>
);
>>>>>>> b1d9a3fe01f5a8e76ac91cbc1e031111a09905c3

export default Login;
