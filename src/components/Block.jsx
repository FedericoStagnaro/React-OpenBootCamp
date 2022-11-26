import React from "react";

function aleatorio(inferior, superior) {
    const numPosibilidades = superior - inferior
    let aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
}

function dame_color_aleatorio() {
    const hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F")
    let color_aleatorio = "#";
    for (let i = 0; i < 6; i++) {
        let posarray = aleatorio(0, hexadecimal.length)
        color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
}


const basicStyle = {
    width: '255px',
    height: '255px',
    textAlign: 'center',
    padding: 30,
    borderRadius: 12
}

export class Block extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            changeColor : false,
            style: { 
                ...basicStyle,
                backgroundColor: 'black',
            }
        }
        this.changeColorTrue = this.changeColorTrue.bind(this)
        this.changeColorFalse = this.changeColorFalse.bind(this)

    }

    changeColorTrue () {
        console.log('Hover true')
        this.setState({
            changeColor: true,
            style: {
                ...basicStyle,
                '--color-1': dame_color_aleatorio(),
                '--color-2': dame_color_aleatorio(),
                background: `
                  linear-gradient(
                    170deg,
                    var(--color-1),
                    var(--color-2) 80%
                  )
                `
            }
        })
    }

    changeColorFalse () {
        console.log('Hover False')
        this.setState({
            changeColor: false
        })
    }

    changeColorPaused () {
        console.log('Paused')
        this.setState({
            changeColor: false,
            style: this.state.style
        })
    }

    updateColor () {

    }


    render() {
        return (
            <div 
                onMouseOver={() => this.changeColorTrue()}
                onMouseOut={()=> this.changeColorFalse()} 
                onDoubleClick={()=>this.changeColorPaused()}
                style={this.state.style}>
                hola
            </div>
        )
    }
}