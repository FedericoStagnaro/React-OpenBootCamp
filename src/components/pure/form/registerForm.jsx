import React, { useState, useEffect, Component } from "react";

export class LoginFormClass extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export const LoginFormFunction = (props) => {
    const INITIAL_DATA = {
        user: '',
        name: '',
        email: '',
        password: ''
    }

    const [data, setData] = useState(INITIAL_DATA)


    return (
        <div>

        </div>
    )
}