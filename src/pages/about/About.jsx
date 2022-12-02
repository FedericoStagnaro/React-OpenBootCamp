import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function About() {
    const location = useLocation()
    const navigate = useNavigate()
    
    console.log('Location:', location)

    const goBack = () => {
        window.history.back()
    }

    const goFoward = () => {
        window.history.forward()
    }

    return (
        <div>About
            <div>
                <button onClick={()=> goBack()}>Go Back</button>
                <button onClick={()=> navigate('/')}>Go to Home</button>
                <button onClick={()=> goFoward()}>Go Foward</button>
            </div>
        </div>
    )
}
