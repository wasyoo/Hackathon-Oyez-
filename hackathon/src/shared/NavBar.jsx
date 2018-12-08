import React from 'react';
import { Link } from 'react-router-dom';

const NavBarMenu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a className="navbar-brand" href="/">Chaba3ni</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
          Home
            <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">User</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user" />
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#register">Inscription</a>
            <a className="dropdown-item" href="/">Connexion</a>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </nav>
);

export default NavBarMenu;
