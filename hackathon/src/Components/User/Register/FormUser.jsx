import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
// import { createHistory } from 'history/createBrowserHistory';
// const History = createHistory({forceRefresh:true,});

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
            //.then(() => History.push('/user'))
            .catch((e));
        }}
      >
        
        
        <div className="Registerform">
        <div className='header'>
          <h1>New user!</h1>
        </div>
        <div className="subForm">
          <div className="formGroup">
            <label>Username:</label>
            <input type='text' placeholder='Username' onChange={this.handleInput}
          value={username}/>
          </div>
          <div className="formGroup">
            <label>Email:</label>
            <input type='text' placeholder='Your email address' onChange={this.handleInput}
          value={email}/>
          </div>
          <div className="formGroup">
            <label>Company:</label>
            <input type='text' placeholder='Your company' onChange={this.handleInput}
          value={company}/>
          </div>
          <div className="formGroup">
            <label>Password:</label>
            <input type='password' placeholder='Your password' onChange={this.handleInput}
          value={password}/>
          </div>
          <div className='buttons'>
            <button id="submit" type="submit">Register</button>
            <button id="cancel" type="reset">Cancel</button>
          </div>
        </div>
        
      </div> 
    </form>
    );
  }
}
export default FormUser;

