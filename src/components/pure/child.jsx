import React, { useState, useEffect , useRef } from "react";
import PropTypes from 'prop-types';

export const Child = ({ name, showMessage ,update}) => {
    useEffect(() => {
        console.log('Child Created')
    }, [])

    const messageRef = useRef('')
    const nameRef = useRef('')


    function pressButton() {
        alert('Default Text')
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`)
    }

    function getTextInput () {
        return messageRef.current.value
    }

    function submitName (e) {
        e.preventDefault()
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'white', padding: '20px', borderRadius: '1em'}}>
            <p onMouseOver={() => console.log('On mouse over')}>Child Component</p>

            <h4>Hello {name}</h4>
            
            <button onClick={pressButton}>Button 1</button>
            <button onClick={() => pressButtonParams('Hello')}>Button 2</button>

            <input 
                placeholder="Insert a text" 
                onFocus={() => console.log('input focused')} 
                onChange={(e) => { console.log(e.target.value) }}
                ref={messageRef}
                defaultValue='Default Text'></input>

            <button onClick={() => showMessage(getTextInput())}>Send Message</button>

            <div style={{margin: '1em'}}>
                <form onSubmit={(e)=> submitName(e)}>
                    <label name='name'>New name: <input ref={nameRef} placeholder="New Name" name="name"></input></label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

Child.propTypes = {
    name: PropTypes.string.isRequired,
}