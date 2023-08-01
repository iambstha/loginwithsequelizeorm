"use client"
import { useState } from "react"

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()


    const objData = {
      username: username,
      password: password
    }

    console.log(objData)

    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        body: JSON.stringify(objData),
        headers: {
          'content-type': 'application/json'
        }
      })
      console.log(res)
      if (res.ok) {
        console.log("Succesfully passed.")
      }
      else {
        console.log("Pass unsuccessful.")
      }
    } catch (error) {
      console.log(error)
    }

    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="username">Username</label>
            <input value={username} type="text" name="username" onChange={e => setUsername(e.target.value)} className=" border p-2 px-4 rounded " />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} type="password" name="password" onChange={e => setPassword(e.target.value)} className=" border p-2 px-4 rounded " />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}