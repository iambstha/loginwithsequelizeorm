"use client"
import Disclaimer from "@/components/Disclaimer"
import { useState } from "react"

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [responseMessage, setResponseMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const objData = { username, password }

    try {
      const res = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        body: JSON.stringify(objData),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (res.ok) {
        const msg = await res.json()
        setResponseMessage(msg)
      }
      else {
        setResponseMessage({message : "API failure."})
      }
    } catch (error) {
      console.log(error)
    }
    setUsername('')
    setPassword('')
  }


  return (
    <div className=" flex flex-col w-full justify-center items-center mt-4 ">
      <Disclaimer />
      <div className=" flex justify-center items-center flex-col w-1/3 border rounded-lg">
        <h1 className=" text-2xl font-semibold uppercase text-center w-full mb-4 text-white p-4 rounded-t-lg bg-blue-400 ">Sign Up</h1>
        <div className=" w-full p-8 ">
          <form onSubmit={handleSubmit} className=" w-full flex flex-col gap-8 justify-center items-center " >
            <div className=" w-full flex gap-6 items-center justify-center ">
              <label className=" w-24 text-right text-lg " htmlFor="username">Username:</label>
              <input required value={username} type="text" name="username" onChange={e => setUsername(e.target.value)} className=" border p-2 px-4 outline-none rounded w-full " />
            </div>
            <div className=" w-full flex gap-6 items-center justify-center ">
              <label className=" w-24 text-right text-lg " htmlFor="password">Password:</label>
              <input required value={password} type="password" name="password" onChange={e => setPassword(e.target.value)} className=" border p-2 px-4 outline-none rounded w-full " />
            </div>
            <button type="submit" className=" border-blue-500 bg-blue-500 p-2 px-4 text-white rounded-md ">Sign Up</button>
            <span>{responseMessage.message}</span>
          </form>
        </div>
      </div>
    </div>
  )
}