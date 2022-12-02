import React from 'react'
import { useParams } from 'react-router-dom'
import { TaskComponentClass } from '../../components/pure/task'

export default function TaskDetailPage(props) {
    const {id} = useParams()

    return (
        <div>
            <h1>Task - {id}</h1>
            <div>
                {/* <TaskComponentClass></TaskComponentClass> */}
            </div>
        </div>
    )
}
