import React from 'react';
import './Landing.css';
import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom";

function Landing() {
  return (
    <div className="LandingImage">
        <div className="LandingText">
            <h1>Hi, I'm Andy!</h1>
            <span className="px-2">
              <Link to="/about"><Button variant="outline-primary">About</Button></Link>
            </span>
            <span className="px-2">
            <Link to="/projects"><Button variant="outline-primary">Projects</Button></Link>
            </span>
            <span className="px-2">
            <Link to="/contact"><Button variant="outline-primary">Contact</Button></Link>
            </span>
        </div>
    </div>
  );
}

export default Landing;
