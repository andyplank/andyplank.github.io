import React from 'react';
import {
    Link,
    useLocation
  } from "react-router-dom";
  import Resume from './../Photos/Internship.pdf'

function Header() {
    let location = useLocation();

    return (
        <div>
        {location.pathname!== "/" &&
        (
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <a href = {Resume} target = "_blank" rel="noopener noreferrer">Resume</a>
            </li>
            <li>
                <a href = "https://www.linkedin.com/in/andy-plank" target = "_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href = "https://github.com/Aplank14" target = "_blank" rel="noopener noreferrer">GitHub</a>
                <Link to="/about">About Me</Link>
                <Link to="/projects">My Work</Link>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
        )}
        </div>
    );
}

export default Header;
