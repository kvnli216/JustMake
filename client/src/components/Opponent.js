import React from 'react';
import '../css modules/Opponent.css';

const Opponent = ({ player }) => (
  <div className="Opponent">
    <div className="Username">
      {player.username}
    </div>
    <div className="Bid">
      {player.bid}
    </div>
  </div>
);

export default Opponent;
