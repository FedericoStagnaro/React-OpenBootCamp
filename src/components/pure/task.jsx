import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import TaskModel from "../../models/task.class";
import '../../styles/task.scss'
import LEVELS from "../../models/levels.enum";

// COMPONENT  CLASS
export class TaskComponentClass extends React.Component {
    constructor(props) {
        super(props)
        this.task = this.props.task
    }
    componentDidMount() {
        console.log('TASK-COMPONENT-CLASS: Created task')
    }

    componentWillUnmount() {
        console.log(`TASK-COMPONENT-CLASS: ${this.task.name} is going to unmount...`)
    }


    taskLevelBadge() {
        switch(this.task.level) {
            case LEVELS.NORMAL:
                return(<h6 className="mb-0"><span className="badge bg-primary">{this.task.level}</span></h6>)
            case LEVELS.URGENT:
                return(<h6 className="mb-0"><span className="badge bg-warning">{this.task.level}</span></h6>)
            case LEVELS.BLOCKING:
                return(<h6 className="mb-0"><span className="badge bg-danger">{this.task.level}</span></h6>)
            default:
                return(<h6 className="mb-0"><span className="badge bg-danger">{this.task.level}</span></h6>)      
        }
    }

    taskIconCompleted () {
       return this.task.completed 
            ? <svg xmlns="http://www.w3.org/2000/svg" fontSize={'2em'} color={'green'}  width="16" height="16" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16"><path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16"><path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg>
    }

    render() {
        return (
            <tr className='fw-normal'>
                <th>
                    <span className='text-center'>{this.task.name}</span>
                </th>
                <td className='text-center'>
                    <span>{this.task.description}</span>
                </td>
                <td className='text-center'>
                    {/** Sustituior por un badge */}
                    {this.taskLevelBadge()}
                    {/* <span >{this.task.level}</span> */}
                </td>
                <td className='text-center'>
                    {/** Sustituir por Iconos */}
                    {this.taskIconCompleted()}
                </td>
            </tr>
        )
    }
}

TaskComponentClass.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
}

// =============== COMPONENT FUNCTION
export const TaskComponentFunction = (props) => {

    useEffect(() => {
        console.log('TASK-COMPONENT-FUNCTION: Created task')
        return () => {
            console.log(`TASK-COMPONENT-FUNCTION: ${props.task.name} is going to unmount...`)
        }
    }, [props.task])

    return (
        <div>
            <h2>{props.task.name}</h2>
            <p>{props.task.description}</p>
            <p>{props.task.level}</p>
            <p>This task is {props.task.completed ? 'Completed' : 'pending'}</p>
        </div>
    )
}

TaskComponentFunction.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
}
