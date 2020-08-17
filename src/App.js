import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <div>
        <Header />
        <Switch>
          <Route path="/about">
            <Landing />
          </Route>
          <Route path='/resume' component={() => { 
              window.location.href = process.env.PUBLIC_URL + "Resume.pdf"; 
              return null;
          }}/>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
