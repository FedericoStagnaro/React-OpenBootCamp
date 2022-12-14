import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { connect } from "react-redux";
import { API_CALL_REQUEST, login } from "../../../store/actions/asyncActions";

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
                        const response = this.props.login(values.email, values.password)
                    }}
                >

                    {props => {
                        //* Formik solo puede tener un child y solo despúes de invocarse, define los props de abajo 
                        const { touched, errors, values, isSubmitting } = props
                        return (
                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field id='email' name='email' type='email' placeholder='example@example.com'></Field>
                                {errors.email && touched.email && this.showError('email')}

                                <label htmlFor="password">Password</label>
                                <Field id='password' name='password' type='password' placeholder='password'></Field>
                                {errors.password && touched.password && this.showError('password')}

                                <button type="submit">Login</button>
                                {this.props.fetching ? (<p>login your credentials</p>) : null}
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

const mapDispatchToProps = {
    login: login
}
const mapStateToProps = (state) => {
    return {
        fetching: state.userState.fetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormik)