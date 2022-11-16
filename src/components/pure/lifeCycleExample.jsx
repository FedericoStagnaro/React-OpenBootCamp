import React from "react";
import PropTypes from 'prop-types';

class LifeCycleExample extends React.Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: cuando se inicia el componente')
    }

    componentDidMount(){
        console.log('DID-MOUNT: justo al montaje del componente')
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Controla si el componemnte debe o no actualizarce
        // return true or false
    }

    componentDidUpdate() {
        console.log('DID-UPDATE: cuando se actualiza el componente')
    }

    componentWillUnmount(){
        console.log('WILL-UNMOUNT: cuando el componente esta por desaparecer')
    }

    render() {
        return (
            <div>
                <h1>LifeCycleExample</h1>
            </div>
        )
    }
}

export default LifeCycleExample