import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import UserDetails from './Components/UserDetails';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/user:id" render={(id) => <UserDetails id={id} />} /> */}
        <Route exact path="/user" component={UserDetails} />
        <Footer />
      </div>
    </Router>
  </div>
);

export default App;
