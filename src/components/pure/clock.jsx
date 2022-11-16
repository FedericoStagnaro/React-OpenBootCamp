import React, { useState, useEffect } from 'react'
// import ‘../../styles/clock.scss’;

export const Clock = (props) => {
    const INITIAL_STATE = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }
    const [state, setState] = useState(INITIAL_STATE)

    useEffect(() => {
        console.log('CREATED')
        const intervalId = setInterval(() => {
            console.log('actualizando componente')
            tick()
        }, 1000)

        return () => {
            console.log('el componente desaparecera...')
            clearInterval(intervalId)
        }
    });

    const tick = () => {
        setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        })
    }
    return (
        <div>
            <h2> Hora Actual: {state.fecha.toLocaleTimeString()} </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )
}
