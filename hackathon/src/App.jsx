import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
import {
  Home, UserDetails, Cart, PlatsDetails, Login,
} from './Components';

import AutoComplete from './Components/Home/AutoCompleteSearch';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({uri: 'http://localhost:4000'})

const App = () => (
  <ApolloProvider client={client}>
  <div className="App">
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/user:id" render={(id) => <UserDetails id={id} />} /> */}
        <Route exact path="/PlatsDetails" component={PlatsDetails} />
        <Route exact path="/user" component={UserDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/auto" component={AutoComplete} />
        AutoComplete
        <Footer />
      </div>
    </Router>
  </div>
  </ApolloProvider>
);

export default App;
