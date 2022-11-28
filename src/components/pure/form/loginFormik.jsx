import { Formik, Form, Field } from "formik";
import React from "react";
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

    showError(error) {
        return (
            <div class="alert alert-warning" role="alert">
                <p>{error}</p>
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
                    onSubmit={(values) => { 
                        console.log(values) 
                        localStorage.setItem('credentials', values )
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
                                {errors.email && touched.email && this.showError(errors.email)}

                                <label htmlFor="password">Password</label>
                                <Field id='password' name='password' type='password' placeholder='password'></Field>
                                {errors.password && touched.password && this.showError(errors.password)}

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