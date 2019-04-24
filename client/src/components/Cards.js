import React from 'react';
import '../css modules/Table.css';

const Cards = ({ hand }) => (
  <div className="Hand">
    {hand.map(card => (
      <div className="Cards" id={`${card.value}${card.suit}`}>
        {`${card.value}${card.suit}`}
      </div>
    ))}
  </div>
);

export default Cards;
