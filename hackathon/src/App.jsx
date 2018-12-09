import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
import ListPlatsDetails from './Components/Plats/ListPlatsDetails';
// import PlatsDetails from './Components/Plats/PlatsDetails';
import {
  Home, UserDetails, Cart, PlatsDetails, Login,
} from './Components';

import AutoComplete from './Components/Home/AutoCompleteSearch';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <NavBar />
        <br />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/user:id" render={(id) => <UserDetails id={id} />} /> */}
        <Route exact path="/ListPlatsDetails" component={ListPlatsDetails} />
        <Route exact path="/PlatsDetails" component={PlatsDetails} />
        <Route exact path="/user" component={UserDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/auto" component={AutoComplete} />

        <Footer />
      </div>
    </Router>
  </div>
);

export default App;
