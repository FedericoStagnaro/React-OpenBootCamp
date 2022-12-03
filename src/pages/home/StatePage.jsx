import React from 'react'
import { useLocation } from 'react-router-dom'

export default function StatePage() {
    const location = useLocation()
    console.log('STATE:',location)
    console.log(location.search)


    return (
        <div>
            <h1>StatePage</h1>
            <h2>{location.state.online && <p>True</p>}</h2>
        </div>
    )
}
