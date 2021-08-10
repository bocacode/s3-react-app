import React, { useState } from 'react'

export default function Login() {
  const [user, setUser] = useState({})
  const [status, setStatus] = useState('login')

  const handleUserForm = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleUserLogin = () => {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => (res.ok ? setStatus('User logged in now') : setStatus('authentication failed')))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h2>Sign in form</h2>
      <input type='email' name='email' onChange={handleUserForm} />
      <input type='password' name='password' onChange={handleUserForm} />
      <button type='submit' onClick={handleUserLogin} disabled={user.email && user.password ? false : true}>
        Sign Me in!
      </button>
      <small>{status}</small>
    </>
  )
}
