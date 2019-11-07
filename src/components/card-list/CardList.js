import React from 'react';

import './card-list.css';
import Card from '../card/Card';

export default props => {
  return (
    <section className="card-list">
      {props.people.map((person, i) => {
        return (
          <div key={i} className="card-list__item">
            <Card person={person} />
          </div>
        )
      })}
    </section>
  );
}