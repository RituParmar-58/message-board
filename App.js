import React, { useState } from 'react';
import './App.css';
import MessageForm from './postMessage';
import MessageList from './listMessage';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const deleteAllMessages = () => {
    setMessages([]);
  };

  return (
    <div className="App">
      <h1>Chatter</h1>
      <p>Type something in the box below, then hit Post</p>
      <MessageForm addMessage={addMessage} />
      <button onClick={deleteAllMessages} className='del'>Delete All</button>
      <MessageList messages={messages} deleteMessage={deleteMessage} />
    </div>
  );
}
export default App;
