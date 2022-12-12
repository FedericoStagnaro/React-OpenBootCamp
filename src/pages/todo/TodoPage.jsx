import React from 'react'
import TodoForm from '../../components/pure/form/TodoForm'
import TodoList from '../../components/containers/TodoList'

import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/actions/actions'



export default function TodoPage() {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todoState)

    return (
        <div>
            <h1>TodoPage</h1>
            <div>
                <TodoList todos={todos}></TodoList>
            </div>
            <div>
                <h6>Form</h6>
                <TodoForm submit={(text)=> dispatch(addTodo(text))}></TodoForm>
            </div>
        </div>
    )
}


// {
//     type: 'ADD_TODO',
//       payload: {text: 'HoLA'}
//   }