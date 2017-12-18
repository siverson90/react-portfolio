import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
