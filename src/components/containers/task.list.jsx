import React, { useState, useEffect } from "react";
import LEVELS from "../../models/levels.enum";
import Task from "../../models/task.class";
import { TaskForm } from "./taskForm";
import { TaskComponentClass, TaskComponentFunction } from "../pure/task";

const defaultTask1 = new Task('Learn React', 'Learn about react components and hooks', LEVELS.URGENT, true)
const defaultTask2 = new Task('Learn React2', 'Learn about react components and hooks2', LEVELS.NORMAL, false)
const defaultTask3 = new Task('Learn React3', 'Learn about react components and hooks3', LEVELS.BLOCKING, false)
const array = [defaultTask1, defaultTask2, defaultTask3]
export class TaskListClass extends React.Component {


    constructor(props) {
        super(props)
        console.log('PASS CONSTRUCTOR')
        this.state = {
            tasks: this.getTasks(),
            loading: true
        }
        this.completeTask = this.completeTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.addTask = this.addTask.bind(this)
        this.taskTable = this.taskTable.bind(this)
        this.getTasks = this.getTasks.bind(this)
    }
    getTasks () {
        setTimeout(()=>{
            console.log(this)
            this.setState({tasks:[...array], loading:false })
        },1500)
    }

    componentDidMount() {
        console.log('TASKLIST-COMPONENT-CLASS: has been created')
    }

    componentDidUpdate() {
        console.log('TASKLIST-COMPONENT-CLASS: has been updated')
    }

    componentWillUnmount() {
        console.log('TASKLIST-COMPONENT-CLASS: is going to unmount...')
    }

    completeTask(task) {
        console.log('Complete this task', task)
        const index = this.state.tasks.indexOf(task)
        const tempTask = [...this.state.tasks]
        tempTask[index].completed = !tempTask[index].completed
        this.setState({ tasks: tempTask })
    }

    deleteTask(task) {
        console.log('Delete this task: ', task)
        const index = this.state.tasks.indexOf(task)
        const tempTask = [...this.state.tasks]
        tempTask.splice(index, 1)
        this.setState({ tasks: tempTask })
    }

    addTask(task) {
        console.log('Add task: ', task)
        const tempTasks = [...this.state.tasks].concat(task)
        this.setState({ tasks: tempTasks })
    }

    printTask() {
        return this.state.tasks.map((t, index) => <TaskComponentClass key={Math.random() * 100} task={t} setComplete={this.completeTask} setDelete={this.deleteTask} />)
    }


    taskTable() {
        if (this.state.tasks.length > 0) {
            return (
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
                        {this.printTask()}
                    </tbody>
                </table>
        )} else {
            return (
                <div>
                    <p>There are no task </p>
                </div>
            )
        }
        
    }

    render() {
        return (
            <div className="card">
                {/** Card Header */}
                <div className="card-header ">
                    <h5>Your Task (CLASS)</h5>
                </div>
                {/** Card Body */}
                <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ position: 'relative' }}>
                    
                    { this.state.loading 
                        ? <p>Loading task...</p>
                        : this.taskTable()
                    }
                    
                </div>
                <TaskForm addTask={this.addTask}></TaskForm>
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