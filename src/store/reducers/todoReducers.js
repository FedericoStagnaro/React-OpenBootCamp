// initial todo state

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "../actions/actions";

const initialState = []

export const todosReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )

        case SET_VISIBILITY_FILTER:
            break;

        default:
            return state;
    }
} 