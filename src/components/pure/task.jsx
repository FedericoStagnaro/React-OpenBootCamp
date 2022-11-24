import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import TaskModel from "../../models/task.class";
import '../../styles/task.scss'
import LEVELS from "../../models/levels.enum";

// COMPONENT  CLASS
export class TaskComponentClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: this.props.task
        }
        this.setComplete = this.props.setComplete
        this.setDelete = this.props.setDelete

    }
    componentDidMount() {
        console.log('TASK-COMPONENT-CLASS: Created task')
    }

    componentWillUnmount() {
        console.log(`TASK-COMPONENT-CLASS: ${this.state.task.name} is going to unmount...`)
    }


    taskLevelBadge() {
        switch(this.state.task.level) {
            case LEVELS.NORMAL:
                return(<h6 className="mb-0"><span className="badge bg-primary">{this.state.task.level}</span></h6>)
            case LEVELS.URGENT:
                return(<h6 className="mb-0"><span className="badge bg-warning">{this.state.task.level}</span></h6>)
            case LEVELS.BLOCKING:
                return(<h6 className="mb-0"><span className="badge bg-danger">{this.state.task.level}</span></h6>)
            default:
                return(<h6 className="mb-0"><span className="badge bg-danger">{this.state.task.level}</span></h6>)      
        }
    }

    taskIconCompleted () {
       return this.state.task.completed 
        ? <span className='task-action'><svg onClick={()=> this.setComplete(this.state.task)} xmlns="http://www.w3.org/2000/svg"  color={'green'}  width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path  d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg></span>
        : <span className='task-action'><svg onClick={()=> this.setComplete(this.state.task)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg></span>

    }

    deleteTask () {
        return (<span className="task-action" onClick={() => this.setDelete(this.state.task)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg></span>)
    }

    render() {
        return (
            <tr className='fw-normal'>
                <th>
                    <span className='text-center'>{this.state.task.name}</span>
                </th>
                <td className='text-center'>
                    <span>{this.state.task.description}</span>
                </td>
                <td className='text-center'>
                    {/** Sustituior por un badge */}
                    {this.taskLevelBadge()}
                    {/* <span >{this.task.level}</span> */}
                </td>
                <td className='text-center'>
                    {/** Sustituir por Iconos */}
                    {this.taskIconCompleted()}
                    {this.deleteTask()}
                </td>
            </tr>
        )
    }
}

TaskComponentClass.propTypes = {
    task: PropTypes.instanceOf(TaskModel).isRequired,
    setComplete: PropTypes.func.isRequired,
    setDelete: PropTypes.func.isRequired
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
