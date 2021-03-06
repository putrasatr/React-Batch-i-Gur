import { all, takeEvery, put, call } from 'redux-saga/effects';
import request from '../Actions/Connect';
import * as actions from '../Actions/index';

const login = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        })
const post = async (path, params) =>
    await request.post(path, params)
        .then(response => response.data)
        .catch(err => {
            throw err
        })
const get = async (path) =>
    await request.get(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        })
const trash = async (path) =>
    await request.delete(path)
        .then(response => response.data)
        .catch(err => {
            throw err
        })

const PATH_NEWS = '/news';
const PATH_USERS = '/users';

/* -----< *** USER LOGIN *** >----- */
function* loginUser(payload) {
    const { email, password } = payload
    try {
        const { data, message, token } = yield call(login, `${PATH_USERS}/login`, { email, password })
        if (data || token) return yield put(actions.loginSuccess(data, token, message))
        yield put(actions.loginFailure(message))
    } catch (error) {
        const errMessage = "There is Something Wrong"
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
        const errMessage = "There Is Something Wrong"
        console.log(error);
        yield put(actions.registerFailure(errMessage));
    }
}

/* -----< *** PORTAL NEWS *** >----- */
function* addNews(payload) {
    const { title, image, content, category, like } = payload
    var formData = new FormData();
    formData.append('title', title)
    formData.append('content', content)
    formData.append('category', category)
    formData.append('like', like)
    formData.append('image', image)
    try {
        const message = "Success"
        const data = yield call(post, `${PATH_NEWS}/add`, formData)
        console.log(data)
        if (data) return yield put(actions.addNewsSuccess(data, message))
        yield put(actions.addNewsFailure(message))
    } catch (error) {
        const errMessage = "There Is Something Wrong"
        console.log(error);
        yield put(actions.addNewsFailure(errMessage));
    }
}
function* loadNews() {
    try {
        const { data, message } = yield call(get, `${PATH_NEWS}/list`)
        if (data) return yield put(actions.loadNewsSuccess(data, message))
        yield put(actions.loadNewsFailure(message))
    } catch (error) {
        const errMessage = "There Is Something Wrong"
        console.log(error);
        yield put(actions.loadNewsFailure(errMessage));
    }
}
function* deleteNews(payload) {
    try {
        const { id } = payload
        const { message } = yield call(trash, `${PATH_NEWS}/delete/${id}`)
        if (id) return yield put(actions.deleteNewsSuccess(id))
        yield put(actions.deleteNewsFailure(message))
    } catch (error) {
        const errMessage = "There Is Something Wrong"
        console.log(error);
        yield put(actions.deleteNewsFailure(errMessage));
    }
}
/* -----< *** EXPORT DEFAULT *** >----- */
export default function* rootSaga() {
    yield all([
        takeEvery('LOGIN_VIEW', loginUser),
        takeEvery('REGISTER_VIEW', registerUser),
        takeEvery('ADD_NEWS_VIEW', addNews),
        takeEvery('LOAD_NEWS_VIEW', loadNews),
        takeEvery('DELETE_NEWS', deleteNews),
    ])
}