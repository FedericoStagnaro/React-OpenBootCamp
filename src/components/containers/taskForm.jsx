import React, { Component } from "react";
import PropTypes from "prop-types";
import LEVELS from "../../models/levels.enum";
import Task from "../../models/task.class";

export class TaskForm extends Component {
    constructor(props) {
        super(props)
        // this.state = this.props
        this.addTask = this.props.addTask
        this.nameRef = React.createRef()
        this.descriptionRef = React.createRef()
        this.levelRef = React.createRef()
        this.submitTask = this.submitTask.bind(this)
    }


    submitTask(e) {
        e.preventDefault()
        console.log(this.nameRef.current.value)
        console.log(this.descriptionRef.current.value)
        console.log(this.levelRef.current.value)
        const newTask = new Task(
            this.nameRef.current.value,
            this.descriptionRef.current.value,
            this.levelRef.current.value,
            false
        )

        this.addTask(newTask)
    }

    render() {
        return (
            <form onSubmit={this.submitTask} className='container card m-1'>
                <legend>Add a task</legend>
                <div className=" " >

                    <div className="form-floating my-3">
                        <input className="form-control" ref={this.nameRef} id='inputName'  type='text' placeholder="Enter the task name" required autoFocus ></input>
                        <label className="" htmlFor="inputName" >Name:</label>
                    </div>


                    <div className="form-floating mb-3" >
                        <textarea className="form-control" style={{height:"100px"}} ref={this.descriptionRef} id='inputDescription' placeholder="Enter the task description"  type='text'  required  ></textarea>
                        <label className="">Description: </label>
                    </div>

                    <div className="form-floating mb-3">
                        <select ref={this.levelRef} className="form-select" name="inputLevel" id="inputLevel" defaultValue={LEVELS.NORMAL}>
                            <option style={{backgroundColor: 'blue'}} value={LEVELS.NORMAL}>Normal</option>
                            <option style={{backgroundColor: 'yellow'}} value={LEVELS.URGENT}>Urgent</option>
                            <option style={{backgroundColor: 'red'}} value={LEVELS.BLOCKING}>Blocking</option>
                        </select>
                        <label htmlFor="inputLevel">Select urgency level </label>
                    </div>

                </div>
                <div className="d-flex justify-content-evenly mb-3">
                    <button type="submit"  style={{  width: '100px'}} id="" className=" btn btn-primary">Add</button> 
                    <button type="submit" name="" id="" className=" btn btn-secondary " style={{  width: '100px'}}>Cancel</button> 
                </div>
                
            </form>
            
        )
    }
}

TaskForm.propType = {
    addTask: PropTypes.func.isRequired,
} 

