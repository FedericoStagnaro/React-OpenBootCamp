import { takeLatest, call, put } from "@redux-saga/core/effects";
import axios from "axios";

import { API_CALL_REQUEST } from "../actions/asyncActions";


// watche saga
// lsiten the API_CALL_REQUEST actions
export function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

// worker saga// is called from watcher saga, does the login and dispatches an actions
export function* workerSaga(action) {
    try {
        const response = yield call(fetchHttp(action.payload))
        // we obtain the token from response
        const token = response.data.token
        yield put({
            type: action.payload.successAction,
            payload: {
                token: token
            }
        })
    } catch (error) {
        yield put({
            type: action.payload.failureAction,
            payload: {
                error: error
            }
        })
    }
}

function fetchHttp(request) {
    const returnedFunction = () => {
        return axios(request)
    }
    return returnedFunction
}