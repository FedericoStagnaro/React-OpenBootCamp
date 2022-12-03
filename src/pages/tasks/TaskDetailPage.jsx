import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import LEVELS from '../../models/levels.enum';
import Task from '../../models/task.class';

const defaultTask1 = new Task('Learn React', 'Learn about react components and hooks', LEVELS.URGENT, true)
const defaultTask2 = new Task('Learn React2', 'Learn about react components and hooks2', LEVELS.NORMAL, false)
const defaultTask3 = new Task('Learn React3', 'Learn about react components and hooks3', LEVELS.BLOCKING, false)
const array = [defaultTask1, defaultTask2, defaultTask3]

export default function TaskDetailPage() {
    const {id} = useParams()
    const [task, setTask] = useState('')
    

    useEffect(()=>{
        const newtask = getTask(id) 
        setTask(newtask)
    },[id])

    function getTask (id) {
        return array[id - 1]
    }

    return (
        <div>
            <h1>Task Detail- {id}</h1>
            <div>
                <h1>
                    {task.name}
                </h1>
                <h2>
                    {task.description}
                </h2>
            </div>
        </div>
    )
}
