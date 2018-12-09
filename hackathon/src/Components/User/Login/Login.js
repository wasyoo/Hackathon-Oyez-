import React from 'react';
import './Login.css';

const Login = () => (
<div className="login-section">
<form class="login-form">
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
  <label htmlFor="rating">Mot de passe</label>
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
 
export default Login;