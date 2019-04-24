import React, { Component } from 'react';
import '../css modules/GameInfo.css';
import Opponent from './Opponent';

class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleScores = this.toggleScores.bind(this);
    this.closeScores = this.closeScores.bind(this);
  }

  toggleScores(e) {
    console.log(this.state);
    e.stopPropagation();
    e.preventDefault();
    this.setState(currentState => ({
      isOpen: !currentState.isOpen,
    }));
  }

  closeScores() {
    this.setState(() => ({
      isOpen: false,
    }));
  }


  render() {
    const { isOpen } = this.state;
    return (
      <div className="GameInfo">
        gameinfo
        <div className="Opponents">
          <Opponent player={{ username: 'xbao', bid: '12' }} />
          <Opponent player={{ username: 'michelle', bid: '1' }} />
          <Opponent player={{ username: 'nicholas', bid: '3' }} />
        </div>

        <button className="Scores-button" type="button" onClick={this.toggleScores}>
          scores
          {isOpen ? (
            <div className="Score-board" onClick={this.toggleScores}>
              <table className="Score-table">
                <tbody>
                  <tr>
                    <th>Round</th>
                    <th>xbao</th>
                    <th>michelle</th>
                    <th>nicholas</th>
                  </tr>
                  <tr>
                    <th>1</th>
                    <th>-200</th>
                    <th>1</th>
                    <th>3</th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th>-200</th>
                    <th>1</th>
                    <th>3</th>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : '' }
        </button>
      </div>
    );
  }
}

export default GameInfo;
