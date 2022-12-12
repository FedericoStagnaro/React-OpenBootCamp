import React from 'react'
import TodoForm from '../../components/pure/form/TodoForm'

export default function TodoPage() {

    return (
        <div>
            <h1>TodoPage</h1>
            <div>
                <TodoForm></TodoForm>
            </div>
        </div>
    )
}


// {
//     type: 'ADD_TODO',
//       payload: {text: 'HoLA'}
//   }