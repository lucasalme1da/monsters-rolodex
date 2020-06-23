import React from 'react';
import './style.css'

export const Card = ({ monster }) => (
  <div className="cardContainer">
    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
    <h1> {monster.name} </h1>
    <p> {monster.email} </p>
  </div>
)
