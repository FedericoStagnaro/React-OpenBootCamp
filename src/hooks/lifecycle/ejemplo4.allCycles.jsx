import React, { Component, useEffect } from "react";

export const AllCycles = () => {
    useEffect(() => {
        console.log('componente creado')

        const intervalId = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actalizacion del componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer')
            document.title = 'Tiempo detenido'
            clearInterval(intervalId)
        }
    })

    return (
        <div>
            <h1>AllCycles</h1>
        </div>
    )
}
