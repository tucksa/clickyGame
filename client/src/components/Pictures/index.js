import React from 'react';
import './style.css';

function Pictures(props){
    return(
        <div className= "card">
            <div className= " img-container">
                <img  onClick={() => props.clicked(props.id)} alt= {props.name} src={props.image}/>
            </div>
        </div>
    )
}

export default Pictures;