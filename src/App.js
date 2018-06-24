import React, { Component } from 'react';
import './App.css';
// import {createBrowserHistory} from 'history';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Company from './components/Company';
import Login from './components/Login';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Company" component={Company} />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
