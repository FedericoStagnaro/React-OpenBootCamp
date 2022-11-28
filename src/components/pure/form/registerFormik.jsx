import React from "react";
import { User } from "../../../models/user";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import ROLE from "../../../models/roles.enum";

const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLE.USER
}

const registerSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(6, 'Username too short')
        .max(12, 'Username too long')
        .required(),

    email: Yup
        .string()
        .email('Invalid email format')
        .required('Email is required'),

    password: Yup
        .string()
        .min(12, 'Password too short')
        .required('Password is required'),

    confirm: Yup
        .string()
        .when('password', {
            is: (value) => value && value.length > 0 ? true : false,
            then: Yup.string().oneOf(
                [Yup.ref('password')], 'Password must match'
            )
        })
        .required('You must confirm the password'),

    role: Yup
        .string()
        .oneOf([ROLE.ADMIN, ROLE.USER], 'You must select a Role')
        .required('Role is required')
})

export class RegisterFormik extends React.Component {
    constructor(props) {
        super(props)
    }

    submit() {
        console.log('Register User')
    }

    render() {
        return (
            <div>
                <h4>Register Formik</h4>
                <Formik initialValues={initialValues} onSubmit={this.submit} validationSchema={registerSchema}>
                    {({ touched, errors, isSubmitting, handleChange, handleBlur }) => {
                        return (
                            <Form>
                                <label htmlFor="username">Username</label>
                                <Field id='username' name='username' type='text' placeholder='Your username'></Field>
                                {errors.username && touched.username && (<ErrorMessage name='username' component='div'></ErrorMessage>)}

                                <label htmlFor="email">Email</label>
                                <Field id='email' name='email' type='email' placeholder='example@example.com'></Field>
                                {errors.email && touched.email && (<ErrorMessage name='email' component='div'></ErrorMessage>)}


                                <label htmlFor="password">Password</label>
                                <Field id='password' name='password' type='password' placeholder='Your password'></Field>
                                {errors.password && touched.password && (<ErrorMessage name='password' component='div'></ErrorMessage>)}


                                <label htmlFor="confirm">Confirm password</label>
                                <Field id='confirm' name='confirm' type='password' placeholder='Confirm your password'></Field>
                                {errors.confirm && touched.confirm && (<ErrorMessage name='confirm' component='div'></ErrorMessage>)}

                                <button type="submit">Register Account</button>
                                {isSubmitting ? (<p>Sending your crendentials...</p>) : null}


                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    }
}