import React, { Component } from "react";
import PropTypes from 'prop-types';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { age: 22 }
    }

    render() {
        return (
            <div>
                <p>Greeting class</p>
                <p>
                    Hola {this.props.name}
                </p>
                <p>
                    Tu edad es {this.state.age}
                </p>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir Años
                    </button>
                </div>
            </div>
        )
    }

    birthday = () => {
        this.setState((prev) => {
            return ({ age: prev.age + 1 })
        })
    }
}

Greeting.propTypes = {
    name: PropTypes.string,
}

export default Greeting;