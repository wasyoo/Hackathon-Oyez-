import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import FormLogin from './FormLogin';
import LOGIN_USER from '../../../graphql/mutation/user/loginUser';

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

export default Login;
