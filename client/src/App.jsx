import React, { useState, useEffect, Fragment } from 'react'
import openSocket from 'socket.io-client'
import Chat from './components/chat'
import Join from './components/join'
import UserList from './components/user-list'

import './App.css'

export default function App() {
  const [users, setUsers] = useState([])
  const [signedIn, setSignedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const socket = openSocket('http://localhost:3000')

  useEffect(() => {
    socket.on('broadcast', (data) => {
      console.log('incoming broadcast')
      setMessages((messages) => [...messages, data])
    })

    socket.on('joined', (data) => {
      console.log('user joined:', data)
      setUsers((users) => [...users, data])
    })
    return () => socket.disconnect()
  }, [])

  function sendMessage(e) {
    e.preventDefault()
    socket.emit('chat', {
      text: newMessage,
      user: username,
    })
    setNewMessage('')
  }

  function join(e) {
    e.preventDefault()
    socket.emit('join', username)
    setSignedIn(true)
  }

  return (
    <div className='window'>
      {signedIn ? (
        <Fragment>
          <UserList users={users} username={username} />
          <Chat
            messages={messages}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sendMessage={sendMessage}
            username={username}
          />
        </Fragment>
      ) : (
        <Join join={join} setUsername={setUsername} />
      )}
    </div>
  )
}
