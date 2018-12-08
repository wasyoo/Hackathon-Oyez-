import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="loginForm">
        <div className="header">
          <h1>Existing user login</h1>
        </div>
        <div className="subForm">
        <div className="formGroup">
            <label>Email:</label>
            <input className="Login" type='text' placeholder='Your email address'/>
          </div>
          <div className="formGroup">
            <label>Password:</label>
            <input className="Login" type='text' placeholder='Your password'/>
          </div>
          <div className='buttons'>
          <Button inverted color='green'>Login</Button>
          <Button inverted color='green'>Cancel</Button>
        </div>
        </div>
      </div>
     );
  }
}
 
export default Login;