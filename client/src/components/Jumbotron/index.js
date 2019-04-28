import React from 'react';
import Background from '../../images/70sbkgrnd.jpg';

var myStyle = {
    backgroundImage:"url("+{Background}+")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
    backgroundColor: "#e5771e",
    color: "white"
}

function Jumbotron(){
        return(
            <div  style={myStyle} className="myJumbotron jumbotron jumbotron-fluid">
                <div  className="container">
                    <h1 className="display-4">That 70's Clicky Game</h1>
                    <p className="lead">Click on images to earn points, but don't click the same one twice!</p>
                </div>
            </div>
        )
}

export default Jumbotron;