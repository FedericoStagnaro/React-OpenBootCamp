import React from 'react'

import { createUser, deleteUser, getAll, getAllPagedUsers, getUserByID, login, updateUser } from '../../services/axiosCRUDservice'
import { Button } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';



export default function AxiosCRUDExample() {
    const initialCredentials = {
        email: '',
        password: ''
    }

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.status === 200) {
                    alert(JSON.stringify(response.data))
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login Failure')
                }

            })
            .catch((error) => {
                alert('Something went wrong' + error)
                sessionStorage.removeItem('token')
            })
            .finally()
    }



    const obtainAllUsers = () => {
        getAll()
            .then((response) => {
                if (response.status === 200) {
                    alert(JSON.stringify(response.data))

                } else {
                    throw new Error('Get Failure')
                }
            })
            .catch((error) => {
                alert('Something went wrong' + error)
            })
            .finally()
    }

    const obtainAllUsersPaged = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response.status === 200) {
                    alert(JSON.stringify(response.data))

                } else {
                    throw new Error('Get Failure')
                }
            })
            .catch((error) => {
                alert('Something went wrong' + error)
            })
            .finally()
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if (response.status === 200) {
                    alert(JSON.stringify(response.data))

                } else {
                    throw new Error('Get Failure')
                }
            })
            .catch((error) => {
                alert('Something went wrong' + error)
            })
            .finally()
    }

    const createNewUser = (name, job) => {
        createUser({ name, job })
            .then((response) => {
                if (response.status === 201) {
                    alert(JSON.stringify(response.data))

                } else {
                    throw new Error('Get Failure')
                }
            })
            .catch((error) => {
                alert('Something went wrong' + error)
            })
            .finally()
    }

    const updateUserByID = (id, name, job) => {
        updateUser(id, { name, job })
            .then((response) => {
                if (response.status === 200) {
                    alert(JSON.stringify(response.data))

                } else {
                    throw new Error('Get Failure')
                }
            })
            .catch((error) => {
                alert('Something went wrong' + error)
            })
            .finally()
    }

    const deleteUserByID = (id) => {
        deleteUser(id)
            .then((response) => {
                if (response.status === 204) {
                    alert('Deleted succesfully')

                } else {
                    throw new Error('Get Failure')
                }
            })
            .catch((error) => {
                alert('Something went wrong' + error)
            })
            .finally()
    }



    const showError = (name) => {
        return (
            <div class="alert alert-warning" role="alert">
                <ErrorMessage name={name}></ErrorMessage>
            </div>
        )
    }

    return (
        <div>
            <div>
                <h4>Login Crud example</h4>
                <Formik
                    initialValues={initialCredentials}
                    validationSchema={loginSchema} // Yup validation schema
                    onSubmit={(values) => authUser(values)}
                >
                    {props => {
                        //* Formik solo puede tener un child y solo despúes de invocarse, define los props de abajo 
                        const { touched, errors, values, isSubmitting } = props
                        return (
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field id='email' name='email' type='email' placeholder='eve.holt@reqres.in'></Field>
                                {errors.email && touched.email && showError('email')}

                                <label htmlFor="password">Password</label>
                                <Field id='password' name='password' type='password' placeholder='cityslicka'></Field>
                                {errors.password && touched.password && showError('password')}

                                <button type="submit">Login</button>
                                {isSubmitting ? (<p>login your credentials</p>) : null}
                            </Form>
                        )
                    }}
                </Formik>
            </div>
            <div>
                <Button variant='contained' onClick={() => obtainAllUsers()}>Get all Users</Button>
                <Button variant='outlined' onClick={() => obtainAllUsersPaged(2)}>Get all Users (paged)</Button>
                <Button variant='outlined' onClick={() => obtainUserByID(2)}>Get user by ID</Button>
                <Button variant='outlined' onClick={() => createNewUser({ name: 'Federico', job: 'Developer' })}>Create user : 'Federico' + 'Developer'</Button>
                <Button variant='outlined' onClick={() => updateUserByID(2, 'Federico', 'Developer')}>Update user by ID</Button>
                <Button variant='outlined' onClick={() => deleteUserByID(2)}>Delete User</Button>
            </div>
        </div>
    )
}

const loginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup
        .string()
        .required('Password is required')
})