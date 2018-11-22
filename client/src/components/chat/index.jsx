import React from 'react'

import './styles.css'

export default function Chat({
  username,
  messages,
  newMessage,
  setNewMessage,
  sendMessage,
}) {
  return (
    <div
      className='chat'
      style={{
        height: document.documentElement.clientHeight * 0.9,
      }}
    >
      <div className='messages'>
        {messages.map((message, i) => (
          <div key={i}>
            {username === message.user ? 'You' : message.user}: {message.text}
          </div>
        ))}
      </div>
      <div className='new-message'>
        <form onSubmit={sendMessage}>
          <input
            type='text'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}
