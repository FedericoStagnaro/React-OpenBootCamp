import React from 'react'
import {useNavigate} from 'react-router-dom'
import { RegisterFormik } from '../components/pure/form/registerFormik'

export default function RegisterPage() {
    const navigate = useNavigate()

    const submit = (data) => {
        console.log('Register User')
        localStorage.setItem('user', data)
        navigate('/login')
    }

    return (
        <div>
            <h1>RegisterPage</h1>
            <div>
                <RegisterFormik submit={submit}></RegisterFormik>
            </div>
        </div>
    )
}
