/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import GameInfo from './GameInfo';
import Table from './Table';
import Chat from './Chat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 5, // 0: lobby, ...n: round n
      playerCount: 1,
      table: {
        inPlay: [],
        tableSuit: '',
        winner: {},
      },
      deck: [],
      player: {
        hand: [],
        bid: 0,
        username: '',
        avatar: null,
        scores: [],
        playedCard: null,
      },
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

    this.pickRandomCard = this.pickRandomCard.bind(this);
    this.testButton = this.testButton.bind(this);
  }

  // ----------------------------------------------------
  // -------------------- Game logic --------------------
  // ----------------------------------------------------
  componentDidMount() {
    this.generateDeck(); // [FOR DEV ONLY] - Generate deck for dev testing
  }

  generateDeck() {
    const { round, playerCount } = this.state;
    const deck = [];
    let val;
    class Card {
      constructor(value, suit) {
        this.value = value;
        this.suit = suit;
      }
    }
    for (let i = 1; i <= 14; i++) {
      if (i === 1) {
        val = 'A';
      } else if (i === 11) {
        val = 'J';
      } else if (i === 12) {
        val = 'Q';
      } else if (i === 13) {
        val = 'K';
      } else if (i === 14) {
        val = 'W';
      } else {
        val = i.toString();
      }
      deck.push(new Card(val, 'C'));
      deck.push(new Card(val, 'D'));
      deck.push(new Card(val, 'H'));
      deck.push(new Card(val, 'S'));
    }
    // save to state? perform only on server then distribute cards?
    this.setState(() => ({
      deck,
    }));
  }

  pickRandomCard(deck) {
    const index = Math.floor(Math.random() * deck.length);
    return (deck.splice(index, 1)[0]);
  }

  dealCards() { // refactor to cycle through all players (probably done on server-side)
    const {
      round, deck, playerCount, player,
    } = { ...this.state }; // may refactor to decouple generating the deck
    const currentState = player;
    const hand = [];
    for (let i = 0; i < round; i++) {
      hand.push(this.pickRandomCard(deck));
    }
    currentState.hand = hand;
    this.setState({ player: currentState });
  }

  playCard(card) {
    const {
      table, player,
    } = { ...this.state };
    // if table not empty
    //   then check table suit
    //   if no suit in hand
    //     can pick any card
    //   else only pick from matching suit or wizard
    // else pick any card

    // add card to table
    // remove card from hand

    // check/update table.winner
  }

  clearTable() {
    // set table to [];
  }

  // [FOR DEV ONLY] - Test game logic
  testButton(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.testButton}>TEST: pick button</button>
        <GameInfo />
        <Table />
        <Chat />
      </div>
    );
  }
}

export default App;
