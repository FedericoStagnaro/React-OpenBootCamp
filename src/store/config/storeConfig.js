import { combineReducers } from "redux";
import { filterReducer } from '../reducers/filterReducers'
import { todosReducers } from "../reducers/todoReducers";

import { configureStore} from "@reduxjs/toolkit"


/**
 * todoState es la propiedad del state del store para acceder a determinada informacion, lo mismo para filterState
 */
export const rootReducer = combineReducers(
    {
        // state name: Reducer that will control it
        todoState: todosReducers,
        filterState: filterReducer
        // ... add more state and reducers to include them in the store
    }
)

const store = configureStore({
    reducer: rootReducer
})

export default store