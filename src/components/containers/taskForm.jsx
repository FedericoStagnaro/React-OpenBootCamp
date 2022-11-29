import React, { Component } from "react";
import PropTypes from "prop-types";
import LEVELS from "../../models/levels.enum";
import Task from "../../models/task.class";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

export class TaskForm extends Component {
    constructor(props) {
        super(props)
        // this.state = this.props
        this.addTask = this.props.addTask
        this.nameRef = React.createRef()
        this.descriptionRef = React.createRef()
        this.levelRef = React.createRef()
        this.submitTask = this.submitTask.bind(this)
        this.showError = this.showError.bind(this)
    }

    showError(name) {
        return (
            <div className="alert alert-warning" role="alert">
                <ErrorMessage name={name}></ErrorMessage>
            </div>
        )
    }

    submitTask(values) {
        console.log(values)
        const newTask = new Task(
            values.name,
            values.description,
            values.level,
            false
        )

        this.addTask(newTask)
    }

    render() {
        return (
            <div>
                <h4>Add note</h4>
                <Formik
                    initialValues={initialValues}
                    validationSchema={taskSchema}
                    onSubmit={(values)=> this.submitTask(values)}>
                    {({ touched, errors, values, isSubmitting })=> {
                        return(
                            <Form>
                                
                                <div className="form-floating my-3">
                                    <Field className="form-control" id='name' name='name' type='text' placeholder='Enter the task name'></Field>
                                    <label htmlFor="name">Name</label>
                                    {errors.name && touched.name && this.showError('name')}
                                </div>
                                
                                <div className="form-floating my-3">
                                    <Field className="form-control" id='description' name='description' type='text' placeholder='Enter the task description'></Field>
                                    <label htmlFor="description">Description</label>
                                    {errors.description && touched.description && this.showError('description')}
                                </div>

                                <div className="form-floating mb-3">
                                    <Field as='select' className="form-select" name="level" id="level" >
                                        <option style={{backgroundColor: 'gray'}} value=''>Select One urgency level</option>
                                        <option style={{backgroundColor: 'blue'}} value={LEVELS.NORMAL}>Normal</option>
                                        <option style={{backgroundColor: 'yellow'}} value={LEVELS.URGENT}>Urgent</option>
                                        <option style={{backgroundColor: 'red'}} value={LEVELS.BLOCKING}>Blocking</option>
                                    </Field>
                                    <label htmlFor="level">Select urgency level </label>
                                    {errors.level && touched.level && this.showError('level')}
                                </div>
                                <div className="d-flex justify-content-evenly mb-3">
                                    <button type="submit"  style={{  width: '100px'}} id="" className=" btn btn-primary">Add</button> 
                                </div>

                            </Form>
                        )
                    }}


                </Formik>
            </div>
            
            
        )
    }
}
const initialValues = {
    name: '',
    description: '',
    level: ''
}

const taskSchema = Yup.object().shape({
    name: Yup.string().required('Name must be provided'),
    description: Yup.string().required('Description must be provided'),
    level: Yup.string().oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT]).required('Level must be selected')
})

TaskForm.propType = {
    addTask: PropTypes.func.isRequired,
} 

