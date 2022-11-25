import React from "react";
import { TaskListClass } from "../../components/containers/task.list";

export class TaskPage extends React.Component {

    render () {
        return (
            <div>
                <h1>Tasks page</h1>
                <TaskListClass></TaskListClass>
            </div>
        )
    }
}