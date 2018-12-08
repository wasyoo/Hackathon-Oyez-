import React ,{Component} from 'react';
import { Button, Segment } from 'semantic-ui-react'

import './Register.css'
class Register extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Registerform">
        <div className='header'>
          <h1>New user!</h1>
        </div>
        <div className="subForm">
          <div className="formGroup">
            <label>Full name:</label>
            <input type='text' placeholder='Your full name'/>
          </div>
          <div className="formGroup">
            <label>Email:</label>
            <input type='text' placeholder='Your email address'/>
          </div>
          <div className="formGroup">
            <label>Phone:</label>
            <input type='text' placeholder='Your phone number'/>
          </div>
          <div className="formGroup">
            <label>Company:</label>
            <input type='text' placeholder='Your company'/>
          </div>
          <div className="formGroup">
            <label>Password:</label>
            <input type='text' placeholder='Your password'/>
          </div>
          <div className='buttons'>
            <button id="submit" type="button">Register</button>
            <button id="cancel" type="button">Cancel</button>
          </div>
        </div>
        
      </div>
     );
  }
}
 
export default Register;