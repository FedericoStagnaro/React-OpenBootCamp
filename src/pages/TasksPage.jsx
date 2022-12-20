import React from 'react'
import { TaskListClass } from '../components/containers/task.list'
import WrapperTaskList from '../components/containers/WrapperTaskList'

export default function TasksPage() {


    return (
        <div>
            <h1>TasksPage</h1>
            <WrapperTaskList></WrapperTaskList>
            {/* <TaskListClass></TaskListClass> */}
        </div>
    )
}
