import React, { useState } from 'react';

function MessageForm({ addMessage }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: new Date().getTime(),
      source: '~anonymous',
      text,
      timestamp : new Date().toLocaleTimeString(),
    };
    addMessage(newMessage);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your message"
        
      />
      <button type="submit" className='post-button'>Post !</button>
    </form>
  );
}

export default MessageForm;
