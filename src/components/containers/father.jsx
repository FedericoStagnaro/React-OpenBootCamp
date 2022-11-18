import React, { useState, useEffect } from "react";
import { Child } from "../pure/child";

export const Father = () => {
    const [name, setName] = useState('Federico')

    const showMessage = (text) => {
        alert(`Message received : ${text}`)
    }

    function update (newName) {
        setName(newName)
    }
    return (
        <div style={{background: 'gray', padding: '10px'}} className='text-center'>
            Father Component
            <Child name={name} showMessage={showMessage} update={update}></Child>
        </div>
    )
}