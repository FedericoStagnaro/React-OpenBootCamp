import React, { useReducer } from 'react'
import LEVELS from '../../models/levels.enum'
import { TaskListClass } from './task.list'
import { TaskContext } from './TaskContext'
import Task from "../../models/task.class";

const defaultTask1 = new Task('Learn React', 'Learn about react components and hooks', LEVELS.URGENT, true)
const defaultTask2 = new Task('Learn React2', 'Learn about react components and hooks2', LEVELS.NORMAL, false)
const defaultTask3 = new Task('Learn React3', 'Learn about react components and hooks3', LEVELS.BLOCKING, false)
const array = [defaultTask1, defaultTask2, defaultTask3]

// initialState
const initialState = {
    tasks: array,
    loading: false,
    taskForm: {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }
}

// actions
export const DELETE_TASK = 'DELETE_TASK'
export const ADDING_TASK = 'ADDING_TASK'
export const LOADING_TASK = 'LOADING_TASK'
export const ADD_TASK = 'ADDED_TASK'
export const FIELD_TASK = 'FIELD_TASK'

// reducer
const taskReducer = (state, action) => {
    switch (action.type) { 

        case ADD_TASK: 
            const tempTasks = [...state.tasks].concat(action.newTask)
            return {
                ...state,
                tasks: tempTasks,
                loading: false
            }
        case DELETE_TASK:
            const index = state.tasks.indexOf(action.taskToDelete)
            const tempTask = [...state.tasks]
            tempTask.splice(index, 1)
            return {
                ...state,
                tasks: tempTask
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



export function WrapperTaskList(props) {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    return (
        <TaskContext.Provider value={{state:state, dispatch: dispatch}} >
            <TaskListClass {...props} ></TaskListClass>
        </TaskContext.Provider>
    )
}
