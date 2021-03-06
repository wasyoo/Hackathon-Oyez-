import React from 'react';
import { Link } from 'react-router-dom';
import AutoComplete from '../Components/Home/AutoCompleteSearch';

const NavBarMenu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a className="navbar-brand" href="/">
      <Link to="/">
        <img src="/img/Chabaaani@300x.png" alt="logo" className="logo" />
      </Link>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">    
      <ul className="navbar-nav ml-auto">
        <li>
          <AutoComplete />
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#" data-toggle="modal" data-target="#register">Inscription</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Connexion</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBarMenu;
