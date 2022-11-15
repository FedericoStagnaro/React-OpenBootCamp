import React, { useState } from "react";

const Ejemplo1 = (props) => {
    const valorInicial = 0;
    const personaInicial = {
        name: 'Federico',
        email: 'federico@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    function incrementarContador() {
        setContador(contador + 1);
    }

    function actualizarPersona() {
        setPersona({name: 'pepe', email: 'pepe@email.com'})
    }

    return (
        <div>
            <h1>Ejemplo1: useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Persona :</h2>
            <h3>Nombre: {persona.name} </h3>
            <h3>Email: {persona.email} </h3>
            <button onClick={incrementarContador}>Automentar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )
}

export default Ejemplo1