// Incremental ID for TODOS...
let nextTodoID = 0;

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/**
 * Las Actions son funciones q retornan objetos con 2 propiedades:
 *  1 : (type) => Es el tipo o clase de evento que se esta ejecutando...
 *  2 : (payload) => Toda la info adicional que se requiera para ese estado
 */

/**
 * 
 * @param { string } text 
 * @returns action ADD_TODO
 */
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID++,
            text
        }
    }
}

/**
 * 
 * @param { number } id 
 * @returns action TOGGLE_TODO
 */
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload : { id }
    }
}

/**
 * 
 * @param { string } filter 
 * @returns  action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: { filter }
    }
}