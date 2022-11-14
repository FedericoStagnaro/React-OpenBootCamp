import React from "react";
import LEVELS from "../../models/levels.enum";
import Task from "../../models/task.class";
import TaskComponent from "../pure/task";

class TaskList extends React.Component {
    defaultTask = new Task('Learn React', 'Learn about react components and hooks', LEVELS.URGENT, false)

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <h1>Tus Tareas:</h1>
                <div>
                    {/** Aplicar for/map para muchas Tareas */}
                    <TaskComponent task={this.defaultTask}></TaskComponent>
                </div>
            </div>
        )
    }
}

export default TaskList