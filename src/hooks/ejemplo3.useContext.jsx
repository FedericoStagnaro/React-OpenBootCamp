import React, { useState, useContext } from "react";

const miContexto = React.createContext(null)

const MiComponenteConContexto = () => {
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // creamos el estado del componente
    const [datosSesion, setDatosSesion] = useState(estadoInicial)

    function actualizarSesion() {
        setDatosSesion({
            token: '5ashj123',
            sesion: datosSesion.sesion + 1
        })
    }

    return (
        <div>
            <h1>Ejemplo3 : useContext </h1>
            <miContexto.Provider value={datosSesion}>
                {/** Todo lo q esta aqui, puede leer los datos de "datosSesion" */}
                {/** Ademas , si "datosSesion" se actualzia, los componentes de aqui tambien se actualizan */}
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar sesion</button>

            </miContexto.Provider>
        </div>
    )
}


/**
 * Contiene un valor q recibe del padre
 */
const Componente1 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h1>Componente1 :: Token : {state.token}</h1>
            <Componente2></Componente2>
        </div>
    )
}

const Componente2 = () => {
    const state = useContext(miContexto)

    return (
        <div>
            <h1>
               Componente2 :: Sesion : {state.sesion}
            </h1>
        </div>
    )
}


export default MiComponenteConContexto