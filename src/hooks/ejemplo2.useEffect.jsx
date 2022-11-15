import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = (props) => {
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    // Caso 1: Cada vez q se renderice el componente , se ejecuta el contenido del useEffect
    // useEffect(() => {
    //     console.log('Cambio en el estado del componente Ejemplo 2')
    //     console.log('Mostrando referencia a elemento del DOM', miRef)
    // })

    // Caso 2: Cada vez q haya un cambio en el contador1 , se ejecuta ek contenido del useEffect
    useEffect(() => {
        console.log('Cambio en el estado del componente Ejemplo 2')
        console.log('Mostrando referencia a elemento del DOM', miRef)
    }, [contador1]) // una lista de elementos de los cuales el useEffect esta observando

    // asociar variable con un elemento del DOM con useRef()
    const miRef = useRef()

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    return (
        <div>
            <h1>Ejemplo2: useState, useRef, useEffect</h1>

            <p>Contador 1: {contador1} <button onClick={incrementar1}>Incrementar</button></p>
            <p>Contador 2: {contador2} <button onClick={incrementar2}>Incrementar</button></p>

            <h4 ref={miRef}>Elemento referenciado</h4>

        </div>
    )
}

export default Ejemplo2