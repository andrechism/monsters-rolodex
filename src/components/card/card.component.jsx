import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"/>
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
        <p className="monster-id">monster ID: {props.monster.id}</p>
    </div>
)