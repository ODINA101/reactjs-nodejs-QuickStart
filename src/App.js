import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import About from './about/about';
import Home from './home/home';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
           
        </ul>
  
        <hr />
  
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    );

    
  }
}

export default App;
