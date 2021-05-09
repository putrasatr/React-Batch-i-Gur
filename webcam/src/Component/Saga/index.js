import { all, takeEvery, put, call } from 'redux-saga/effects';
import request from '../Actions/Connect';
import * as actions from '../Actions/index';

const login = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        })

// const PATH_API = '/api';
const PATH_USERS = '/users';

/* -----< *** USER LOGIN *** >----- */
function* loginUser(payload) {
    const { email, password } = payload
    try {
        const { data, message, token } = yield call(login, `${PATH_USERS}/login`, { email, password })
        console.log('token', token, data)
        if (data || token) return yield put(actions.loginSuccess(data, token, message))

        yield put(actions.loginFailure(message))
    } catch (error) {
        const errMessage = "Kesalahan Jaringan"
        console.log(error);
        yield put(actions.loginFailure(errMessage));
    }
}

function* registerUser(payload) {
    const { email, password } = payload
    try {
        const { data, message, token } = yield call(login, `${PATH_USERS}/register`, { email, password })
        if (data || token) return yield put(actions.registerSuccess(data, token, message))
        yield put(actions.registerFailure(message))
    } catch (error) {
        const errMessage = "Kesalahan Jaringan"
        console.log(error);
        yield put(actions.registerFailure(errMessage));
    }
}


/* -----< *** EXPORT DEFAULT *** >----- */
export default function* rootSaga() {
    yield all([
        takeEvery('LOGIN_VIEW', loginUser),
        takeEvery('REGISTER_VIEW', registerUser),
    ])
}