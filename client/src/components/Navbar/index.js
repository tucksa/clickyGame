import React from 'react';
import './style.css';

function Navbar(props) {
    return(
  
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Clicky Game</span>
            <span>You guessed {props.response}</span>
            <span>Score: {props.score}  |  Top Score: {props.topScore}</span>
        </nav>
      
    )
}

export default Navbar;