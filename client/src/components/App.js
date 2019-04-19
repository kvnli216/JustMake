import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './Chat.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: io('http://localhost:1337'),
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
