import React, { Component, useEffect } from "react";

export class DidUpdateClass extends Component {
    componentDidUpdate() {
        console.log('Comportamiento cuando el componente es actualizado (props, estado privado) DOM !Class!')
    }

    render() {
        return (
            <div>
                <h1>Did Update (Class)</h1>
            </div>
        )
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente es actualizado (props, estado privado) DOM !Function!')
    }) // sin [], se ejecuta todas las veces


    return (
        <div>
            <h1>Did Update (Class)</h1>
        </div>
    )
}