import React from 'react'
import Todo from '../pure/Todo'

export default function TodoList({todos}) {
    console.log('TodoList:',todos)
    return (
        <ul>
            { todos && todos.map((t,index) => <Todo key={index} id={t.id} text={t.text} completed={t.completed}></Todo> ) }
        </ul>
    )
}
