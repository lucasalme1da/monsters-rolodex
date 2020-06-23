import React from 'react';
import './style.css'

import { Card } from '../Card'

export const CardList = props => (
  <div className="cardList">
    {
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))
    }
  </div>
)