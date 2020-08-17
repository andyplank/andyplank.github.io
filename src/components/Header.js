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
                <a href = {Resume} target = "_blank">Download Pdf</a>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            </ul>
        </nav>
        )}
        </div>
    );
}

export default Header;
