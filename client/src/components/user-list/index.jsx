import React from 'react'
import './styles.css'

export default function UserList({ username, users }) {
  return (
    <div className='users'>
      <h3>Users</h3>
      <ul className='list'>
        {users.map((_username) => (
          <li>{username === _username ? 'You' : _username}</li>
        ))}
      </ul>
    </div>
  )
}
