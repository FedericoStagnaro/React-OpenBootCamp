
import React, { useState } from 'react'

export default function LoginUseState() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)

    const login =  (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'admin') {
                    setLoading(false)
                    setLoggedIn(true)
                    resolve()
                }
                else {
                    reject(new Error('Wrong credentials'))
                }
            }, 2000)
        })
    }

    const submit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await login(username,password)
        } catch (error) {
            setError(`Invalid username or password : ${error}`)
            setLoading(false)
            setUsername('')
            setPassword('')
        }
    }

    const logout = () => {
        setLoggedIn(false)
    }
    return (
        <div>
            LoginUseState
            {
                loggedIn
                    ? (<h1>Welcomem {username} <button onClick={() => logout()}>Logout</button></h1>)
                    : (
                        <form onSubmit={(e) => submit(e)}>
                            {error && <p style={{ color: 'tomato' }}>{error}</p>}
                            <input type='text' placeholder='Username' name='username' value={username} onChange={(e)=> setUsername(e.currentTarget.value)}></input>
                            <input type='text' placeholder='Password' name='password' value={password} onChange={(e)=> setPassword(e.currentTarget.value)}></input>
                            <div>
                                <button type='submit'>Submit</button>
                                { loading && <p>Is loading...</p>}
                            </div>
                        </form>
                    )
            }

        </div>
    )
}
