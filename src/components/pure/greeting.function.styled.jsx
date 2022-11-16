import React, { useState } from 'react'

// Definiendo stilos constantes

// Estilo para usuario logueado
const loggedStyle = {
    color: 'green'
}

// Estilo para usuario no logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

export const GreetingStyled = (props) => {
    const [logged, setLogged] = useState(false)

    const updateSesion = () => {
        console.log('Boton pulsado');
        setLogged(!logged)
    }



    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            { logged 
                    ? <p>Hola, {props.name}</p> 
                    : <p>Please Login</p> 
                    }
            <button onClick={updateSesion}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}