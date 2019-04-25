import React from 'react';
import './Opponent.css';

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

// Opponent.propTypes = {
//   player: PropTypes.shape({
//     bid: PropTypes.number,
//   })
// };

export default Opponent;

// {
//   hand: [
//     { value: 'A', suit: 'S' },
//     { value: 'J', suit: 'S' },
//     { value: '3', suit: 'H' },
//     { value: 'K', suit: 'C' },
//     { value: '2', suit: 'D' },
//   ],
//   bid: 2,
//   username: 'player',
//   avatar: 'image',
//   scores: [1, 1, 3],
//   playedCard: { value: 'A', suit: 'S' }, // or null
// },
