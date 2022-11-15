import React from "react";

const Ejemplo4 = (props) => {

    return (
        <div>
            <h1>Ejemplo4: children props</h1>
            <h2> Nombre: {props.name}</h2>
            {/** props.children renderizada cualquier elemento contenido dentro de las etiquetas de Ejemplo4 */}
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Ejemplo4