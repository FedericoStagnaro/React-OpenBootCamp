import React, { useState } from "react";
import PropTypes from 'prop-types'

const GreetingF = ({ name }) => {
    // variable con el estado + funcion para cambiar el estado = estado inicial
    const [age, setAge] = useState(22)

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <p>Greeting Funcional</p>
            <p>
                HolaF {name}
            </p>
            <p>Edad { age } </p>
            <button onClick={birthday}>
                Cumplir Años
            </button>
        </div>
    )
}

GreetingF.prototype = {
    name: PropTypes.string,
}

export default GreetingF