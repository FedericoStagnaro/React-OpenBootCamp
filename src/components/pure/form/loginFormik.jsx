import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export class LoginFormik extends React.Component {
    initialCredentials = {
        email: '',
        password: ''
    }

    constructor(props) {
        super(props)
        this.showError = this.showError.bind(this)
    }

    showError(name) {
        return (
            <div class="alert alert-warning" role="alert">
                <ErrorMessage name={name}></ErrorMessage>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h4>Login Formik</h4>
                <Formik
                    initialValues={this.initialCredentials}
                    validationSchema={loginSchema} // Yup validation schema
                    onSubmit={async (values) => { 
                        console.log(values) 
                        await localStorage.setItem('credentials', values )
                        window.history.pushState({},undefined,'/profile')
                    }}
                >

                    {props => {
                        //* Formik solo puede tener un child y solo despúes de invocarse, define los props de abajo 
                        const { touched, errors, values, isSubmitting } = props
                        console.log(props)
                        return (
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field id='email' name='email' type='email' placeholder='example@example.com'></Field>
                                {errors.email && touched.email && this.showError('email')}

                                <label htmlFor="password">Password</label>
                                <Field id='password' name='password' type='password' placeholder='password'></Field>
                                {errors.password && touched.password && this.showError('password')}

                                <button type="submit">Login</button>
                                {isSubmitting ? (<p>login your credentials</p>) : null}
                            </Form>
                        )
                    }}


                </Formik>

            </div>
        )
    }
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