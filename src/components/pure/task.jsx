import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import TaskModel from "../../models/task.class";
import '../../styles/task.scss'

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


    render() {
        return (
            <div>
                <h2 className='task-name'>{this.task.name}</h2>
                <p>{this.task.description}</p>
                <p>{this.task.level}</p>
                <p>This task is {this.task.completed ? 'Completed' : 'pending'}</p>
            </div>
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
