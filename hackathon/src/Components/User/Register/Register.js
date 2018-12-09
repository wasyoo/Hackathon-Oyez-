import React ,{Component} from 'react';
import {Mutation} from 'react-apollo';
import FormUser from './FormUser';
import ADD_USER from '../../../graphql/mutation/user/addUser';

class Register extends Component {
  state = {  }
  render() { 
    return ( 
      <Mutation mutation={ADD_USER}>
        {(createuser)=><FormUser onSubmit={createuser} />}
      </Mutation>
     );
  }
}

export default Register;
