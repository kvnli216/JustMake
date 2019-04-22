import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './Chat.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.gameState = {
      players: [
        {
          hand: [
            { value: 'A', suit: 'S' },
            { value: 'J', suit: 'S' },
            { value: '3', suit: 'H' },
            { value: 'K', suit: 'C' },
            { value: '2', suit: 'D' },
          ],
          bid: 2,
          username: 'player',
          avatar: 'image',
          scores: [1, 1, 3],
          playedCard: { value: 'A', suit: 'S' }, // or null
        },
      ],
      trump: 'S', // or null
      currentPlayerTurn: 0, // reference to player index
      gameState: 'game setup/middle/end of game',
    };
  }

  render() {
    return (
      <div className="App">
        <Chat />
      </div>
    );
  }
}

export default App;
