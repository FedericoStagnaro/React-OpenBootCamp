import React, { useRef } from 'react'

export default function TodoForm({submit}) {
    const textRef = useRef('')

    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            submit(textRef.current.value)
        }}>
            <input ref={textRef} type='text' placeholder='Text'></input>
            <button type='submit'>Add todo</button>
        </form>
    )
}
