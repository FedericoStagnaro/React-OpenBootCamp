import React, { useReducer } from 'react'
import LEVELS from '../../models/levels.enum'
import { TaskListClass } from './task.list'

// initialState
const initialState = {
    tasks: [],
    taskForm: {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }
}

// actions
export const DELETE_TASK = 'DELETE_TASK'
export const ADD_TASK = 'ADD_TASK'
export const FIELD_TASK = 'FIELD_TASK'

// reducer
const taskReducer = (state, action) => {
    switch (state.type) { 
        case ADD_TASK:
            return {
                ...state,
                taskForm: {
                    name: action.taskForm.name,
                    description: action.taskForm.description,
                    level: action.taskForm.level
                }
            }
        case DELETE_TASK:
            const index = state.tasks.indexOf(action.taskToDelete)
            const tempTask = [...state.tasks]
            tempTask.splice(index, 1)
            return {
                ...state,
                tasks: [tempTask]
            }
        case FIELD_TASK:
            return {
                ...state,
                taskForm: {
                    ...state.taskForm,
                    [action.fieldName] : action.value
                }
            }
        default:
            return {...state}
    }
}

export default function WrapperTaskList(props) {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    return (
        <TaskListClass {...props} {...{ state, dispatch }}></TaskListClass>
    )
}
