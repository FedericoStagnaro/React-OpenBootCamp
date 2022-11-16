import React, { Component ,useEffect } from "react";

export class DidmountClass extends Component {
    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM !Class!')
    }

    render() {
        return (
            <div>
                <h1>Did Mount (Class)</h1>
            </div>
        )
    }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM !Function!')
    }, []) // solo se ejecuta 1 vez

    return (
        <div>
            <h1>Did Mount (Hook)</h1>
        </div>
    )
}