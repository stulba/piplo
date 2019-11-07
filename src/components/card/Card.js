import React from 'react';
import './card.css'

export default props => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${Math.floor(Math.random() * 20)}/set_set5/?size=100x100`} alt={props.person.name} />
      <h4>{props.person.name}</h4>
    </div>
  )
}