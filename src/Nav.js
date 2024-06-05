import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/v00/about">About</Link>
            <Link to="/v00/contact">Contact</Link>
        </nav>
    );
}

export default Nav;
