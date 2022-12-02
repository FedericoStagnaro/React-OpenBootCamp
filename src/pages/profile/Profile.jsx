import React from 'react'

export default function Profile({user}) {
    const goBack = () => {
        window.history.back()
    }

    return (
            <div>
                <h1>Profile</h1> 
                <button onClick={()=> goBack()}>Go Back</button>
            </div>
        )
}
