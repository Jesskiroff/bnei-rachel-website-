import React from 'react';
import './Card.css';

function Card(props) {
    return (
      <div className={props.className}> 
        <img src={props.img} alt="contact_img" className="contact_img" />
        <h2>{props.name}</h2>
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    );
  }
export default Card;
