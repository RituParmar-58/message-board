import React from 'react';
import "./styles.css"

function MessageList({ messages, deleteMessage }) {
  return (
    <div >
      {messages.map((message) => (
        <div key={message.id} className='message-box'>
          <p>
            <strong>{message.source}  </strong> - {message.timestamp}  
            <button onClick={() => deleteMessage(message.id)}>Delete</button>
          </p>
          <p>{message.text}</p>
          
        </div>
      ))}
    </div>
  );
}

export default MessageList;
