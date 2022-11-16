import React, { Component, useEffect } from "react";


export class WillUnmountClass extends Component {
    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca !Class!')
    }

    render() {
        return (
            <div>
                <h1>Will Unmount (Class)</h1>
            </div>
        )
    }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        // aqui no ponemos nada
        return ()=>{
            console.log('Comportamiento antes de que el componente desaparezca !Class!')
        }
    }, []) 


    return (
        <div>
            <h1>Will Unmount (Function)</h1>
        </div>
    )
}