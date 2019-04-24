import React from 'react';
import '../css modules/Chat.css';

const Chat = props => (
  <div className="Chat">
    <div className="Chat-window">
      <div id="output">
      Chat/Gamelog
        <ul>
          <div>xbao: i am xbao</div>
          <div>xbao: i am xbao</div>
          <div>xbao: i am xbao</div>
        </ul>
      </div>
    </div>
    <div className="Chat-form">
      <input id="username" type="text" placeholder="Username" />
      <textarea id="message" type="text" placeholder="Message" />
      <button id="send" type="button">Send</button>
    </div>
  </div>
);

export default Chat;
