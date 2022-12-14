// ASYNC ACTIONS TYPES
export const API_CALL_REQUEST = 'API_CALL_REQUEST' // watcher saga listen
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS' // Dispached by worker saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE' // Dispached by worker saga

// Actions
export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email: email,
                password: password
            },
            successAction: API_CALL_SUCCESS,
            failureAction: API_CALL_FAILURE
        }
    }
}

/**
 * Generic HttpRequest action dispatcher
 * @param {*} method 
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            method,
            url,
            data,
            successAction: API_CALL_SUCCESS,
            failureAction: API_CALL_FAILURE
        }
    }
}