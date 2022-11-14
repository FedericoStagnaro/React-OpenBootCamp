import React from "react";
import PropTypes from 'prop-types';
import TaskModel from "../../models/task.class";

class TaskComponent extends React.Component {
    constructor(props) {
        super(props)
        this.task = this.props.task
    }

    render() {
        return (
            <div>
                <h2>{this.task.name}</h2>
                <p>{this.task.description}</p>
                <p>{this.task.level}</p>
                <p>This task is {this.task.completed ? 'Completed' : 'pending'}</p>
            </div>
        )
    } 
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(TaskModel)
}

export default TaskComponent