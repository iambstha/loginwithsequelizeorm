"use client"
import React, { useState } from 'react'

const SignInPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password)
        try {
            const response = await fetch('http://localhost:3000/api/signin', {
                method: 'POST',
                body: formData,
                headers: {
                    // 'Content-type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            if (response.ok) {
                response.json().then(d => setIsLoggedIn(d.message))
                console.log(isLoggedIn)
                console.log("Succesfully passed data")
            }
            else {
                console.log("Passing data unsuccessful.")
            }
        } catch (error) {
            console.log(error)
        }
        setUsername('')
        setPassword('')
    }
    return (
        <div>
            {!isLoggedIn ?
                <div className=' flex flex-col justify-center items-center w-full m-4  p-4 '>
                    <div className=' flex flex-col justify-center items-center w-1/2 border mt-4 p-8 '>
                        <h1 className=' felx justify-center items-center text-3xl font-semibold p-4 '>Sign In</h1>
                        <form onSubmit={handleSubmit} className=' flex gap-8 flex-col justify-center items-center '>
                            <div className=' flex gap-4 items-center '>
                                <label htmlFor="username">Username:</label>
                                <input className=' border p-2 px-4 outline-none ' value={username} type="text" name='username' onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className=' flex gap-4 items-center '>
                                <label htmlFor="password">Password:</label>
                                <input className=' border p-2 px-4 outline-none ' value={password} type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className=' border-blue- bg-blue-500 p-2 px-4 rounded text-white ' >Sign Up</button>
                        </form>
                        {isLoggedIn ? "Logged In" : "Logged Out"}
                    </div>
                </div>
                :
                <div>
                    <h2>You are logged in.</h2>
                </div>
            }
        </div>

    )
}

export default SignInPage