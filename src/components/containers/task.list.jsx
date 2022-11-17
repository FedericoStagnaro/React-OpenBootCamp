import React, { useState, useEffect } from "react";
import LEVELS from "../../models/levels.enum";
import Task from "../../models/task.class";
import { TaskComponentClass, TaskComponentFunction } from "../pure/task";

export class TaskListClass extends React.Component {
    defaultTask = new Task('Learn React', 'Learn about react components and hooks', LEVELS.URGENT, false)

    constructor(props) {
        super(props)
        this.tasks = [this.defaultTask]
    }

    componentDidMount() {
        console.log('TASKLIST-COMPONENT-CLASS: has been created')
    }

    componentDidUpdate () {
        console.log('TASKLIST-COMPONENT-CLASS: has been updated')
    }

    componentWillUnmount() {
        console.log('TASKLIST-COMPONENT-CLASS: is going to unmount...')
    }

    render() {
        return (
            <div className="col-12">
                <div className="card">
                    {/** Card Header */}
                    <div className="card-header p-3">
                        <h5>Your Task</h5>
                    </div>
                    {/** Card Body */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Priority</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                    <div></div>
                </div>
                <h1>Tus Tareas: (CLASS)</h1>
                <div>

                    <h2> 1 - Task Class </h2>
                    <ul>
                        {this.tasks.map(t => <TaskComponentClass task={t}> </TaskComponentClass>)}
                    </ul>

                    <h2> 2 - Task Function </h2>
                    <ul>
                        {this.tasks.map(t => <TaskComponentFunction task={t}> </TaskComponentFunction>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export const TaskListFunction = (props) => {
    const defaultTask = new Task('Learn React', 'Learn about react components and hooks', LEVELS.URGENT, false)

    // estado del componente
    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(false)

    // control de ciclo de vida
    useEffect(() => {
        console.log('TASKLIST-COMPONENT-CLASS: has been created')
        setLoading(false)
        return () => {
            console.log('TaskList Componente is goind to unmount...')
        }
    }, [tasks])

    // eslint-disable-next-line no-unused-vars
    const fetchTask = () => {
        setLoading(!loading)
    }

    
    // eslint-disable-next-line no-unused-vars
    const updateTasks = (newTasks) => {
        setTasks(tasks.concat(newTasks))
    }

    return (
        <div>
            <h1>Tus Tareas: (FUNCTION)</h1>
            <div>

                <h2> 1-  Task Class </h2>
                <ul>
                    {tasks.map(t => <TaskComponentClass task={t}> </TaskComponentClass>)}
                </ul>

                <h2> 2 - Task Function </h2>
                <ul>
                    {tasks.map(t => <TaskComponentFunction task={t}> </TaskComponentFunction>)}
                </ul>

            </div>
        </div>
    )
}