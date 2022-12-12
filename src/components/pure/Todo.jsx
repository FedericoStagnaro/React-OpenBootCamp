import React from 'react'

export default function Todo({id ,text, completed}) {
  return (
    <li>
        <p>ID: {id} - Text: {text} - Completed: {completed}</p>
    </li>
  )
}
