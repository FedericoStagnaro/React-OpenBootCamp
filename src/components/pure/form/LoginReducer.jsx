import React, { useReducer } from 'react'

// initial state
const initialState = {
    username: '',
    password: '',
    error: '',
    isLoading: false,
    isLoggedIn: false
}

// actions
const FIELD = 'FIELD'
const LOGIN = 'LOGIN'
const SUCCESS = 'SUCCESS'
const ERROR = 'ERROR'
const LOGOUT = 'LOGOUT'

// loginReducer
const loginReducer = (state,action) => {
    switch(action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case LOGIN:
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: true
            }
        case SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: true
            }
        case ERROR:
            return {
                ...state,
                error: 'Invalid USername or Password',
                isLoading: false,
                isLoggedIn: false,
                password: '',
                username: ''
            }
        case LOGOUT:
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: false,
                password: '',
                username: ''
            }
        default:
            return state
    }
}

export default function LoginReducer() {
    const [state, dispatch] = useReducer(loginReducer, initialState)
    const { username, password, error, isLoading, isLoggedIn } = state


    const login =  (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'admin' && password === 'admin') {
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
        try {
            await login(username,password)
            dispatch({type: SUCCESS})
        } catch (error) {
            dispatch({type: ERROR})
        }
    }

    return (
        <div>
            LoginReducer
            {
                isLoggedIn
                    ? (<h1>Welcomem {username} <button onClick={() => dispatch({type: LOGOUT})}>Logout</button></h1>)
                    : (
                        <form onSubmit={(e) => submit(e)}>
                            {error && <p style={{ color: 'tomato' }}>{error}</p>}

                            <input type='text' placeholder='Username' name='username' value={username} 
                            onChange={(e)=> dispatch({type: FIELD, fieldName: 'username', payload: e.currentTarget.value})}></input>

                            <input type='text' placeholder='Password' name='password' value={password} 
                            onChange={(e)=> dispatch({type: FIELD, fieldName: 'password', payload: e.currentTarget.value})}></input>

                            <div>
                                <button type='submit'>Submit</button>
                                { isLoading && <p>Is loading...</p>}
                            </div>
                        </form>
                    )
            }

        </div>
    )
}
