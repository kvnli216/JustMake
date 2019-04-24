import React, { Component } from 'react';
import '../css modules/Table.css';
import Cards from './Cards';
import Player from './Player';

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="Table">
        <div className="CenterTable">
          CenterTable
          {/* iterate through all players and build an array of all playedCards */}
        </div>


        <Cards
          hand={[
            { value: 2, suit: 'S' },
            { value: 4, suit: 'D' },
            { value: 11, suit: 'C' },
            { value: 1, suit: 'H' },
          ]}
        />

      </div>
    );
  }
}

export default Table;
