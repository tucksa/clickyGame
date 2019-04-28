import React from 'react';
import './style.css';

function Navbar(props) {
    return(
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span>You guessed </span>
            <span>Score: {}  |  Top Score: {}</span>
        </nav>
    )
}

export default Navbar;