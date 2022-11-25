import React from "react";

export class OptionalRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            access: true,
            messages: 0
        }
        this.changeAcces = this.changeAcces.bind(this)
        this.logoutAction = this.logoutAction.bind(this)
        this.loginAction = this.loginAction.bind(this)
        this.addMessages = this.addMessages.bind(this)
    }

    changeAcces() {
        this.setState({
            access: !this.state.access
        })
    }

    logoutAction() {
        this.setState({
            access: false
        })
    }

    loginAction() {
        this.setState({
            access: true
        })
    }

    addMessages() {
        this.setState({
            access: this.state.access,
            messages: this.state.messages + 1
        })
    }


    render() {
        return (
            <div>
                {/* Buttons */}
                {
                    this.state.access
                        ? <LogoutButton logoutAction={this.logoutAction}></LogoutButton>
                        : <LoginButton loginAction={this.loginAction}></LoginButton>
                }
                {/* Messages */}
                {this.state.messages > 0 && <p>You have messages {this.state.messages}</p>}
                {this.state.messages === 0 && <p>You don´t Have messages</p>}
                <button onClick={() => this.addMessages()}>Add a Message</button>
            </div>
        )
    }
}

export class LoginButton extends React.Component {
    constructor(props) {
        super(props)
        this.loginAction = this.props.loginAction
    }

    render() {
        return (
            <button onClick={() => this.loginAction()}>Login</button>
        )
    }
}

export class LogoutButton extends React.Component {
    constructor(props) {
        super(props)
        this.logoutAction = this.props.logoutAction
    }

    render() {
        return (
            <button onClick={() => this.logoutAction()}>Logout</button>
        )
    }
}