import React from 'react'

export default function Join({ join, setUsername }) {
  return (
    <form onSubmit={join}>
      <label>Username</label>
      <input type='text' onChange={(e) => setUsername(e.target.value)} />
    </form>
  )
}
