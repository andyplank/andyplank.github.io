import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Header from './components/Header';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import PreLoader from './components/PreLoader';


function App() {

  return (
    <div>
      <PreLoader />
      <Router>
        <div>
        <Header />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
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
