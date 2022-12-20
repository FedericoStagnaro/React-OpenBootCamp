import React, { useReducer, useContext } from 'react'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

const myContext = React.createContext(null)

export default function Counter() {
    const initialState = {
        count: 0
    }

    // reducer to change state
    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT:
                return {
                    ...state,
                    count: state.count + 1
                }
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - 1
                }
            case RESET:
                return {
                    ...state,
                    count: 0
                }
            default:
                return state
        }
    }

    // asign reducer and initial state to get state and dispatch function
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <myContext.Provider value={state}>
          <div>
            <Points></Points>
            <div>
                <button onClick={()=> dispatch({ type: INCREMENT})}>Add one</button>
                <button onClick={()=> dispatch({ type: DECREMENT})}>Drop one</button>
                <button onClick={()=> dispatch({ type: RESET})}>Reset</button>
            </div>
        </div>  
        </myContext.Provider>
        
    )
}


const Points = () => {
    const state = useContext(myContext) 
    return (
        <p>Points: {state.count}</p>
    )
}