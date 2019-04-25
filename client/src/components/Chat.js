import React from 'react';

const Chat = props => (
  <div id="chat">
    <div id="chat-window">
      <div id="output" />
    </div>
    <input id="username" type="text" placeholder="Username" />
    <input id="message" type="text" placeholder="Message" />
    <button id="send">Send</button>
  </div>
);

export default Chat;
