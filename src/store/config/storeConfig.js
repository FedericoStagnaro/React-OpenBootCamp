import { applyMiddleware, combineReducers } from "redux";
import { filterReducer } from '../reducers/filterReducers'
import { todosReducers } from "../reducers/todoReducers";
import { userReducer } from "../reducers/userReducers";
import { watcherSaga } from "../sagas/sagas";

import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit"


/**
 * todoState es la propiedad del state del store para acceder a determinada informacion, lo mismo para filterState
 */
export const rootReducer = combineReducers(
    {
        // state name: Reducer that will control it
        todoState: todosReducers,
        filterState: filterReducer,
        userState: userReducer
        // ... add more state and reducers to include them in the store
    }
)

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(watcherSaga)

export default store