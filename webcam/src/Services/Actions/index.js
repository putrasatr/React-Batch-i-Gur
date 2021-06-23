/* ------<*****  L O G I N   *****>------ */
export const loginSuccess = (data, token, message) => ({
    type: 'LOGIN_SUCCESS',
    data: {
        email: data.email,
        token,
        message
    }
})

export const loginFailure = (message) => ({
    type: 'LOGIN_FAILURE',
    message
})

export const loginUser = (email, password) => ({
    type: 'LOGIN_VIEW',
    email, password
})


/* ------<*****  R E G I S T E R   *****>------ */
export const registerSuccess = (data, token, message) => ({
    type: 'REGISTER_SUCCESS',
    data: {
        email: data.email,
        token,
        message
    }
})

export const registerFailure = (message) => ({
    type: 'REGISTER_FAILURE',
    message
})

export const registerUser = (email, password) => ({
    type: 'REGISTER_VIEW',
    email, password
})

/* ------<*****  N E W S  *****>------ */
export const loadNewsSuccess = (data) => ({
    type: 'LOAD_NEWS_SUCCESS',
    data
})

export const loadNewsFailure = (message) => ({
    type: 'LOAD_NEWS_FAILURE',
    message
})

export const loadNews = () => ({
    type: 'LOAD_NEWS_VIEW',
})

export const addNewsSuccess = (data) => ({
    type: 'ADD_NEWS_SUCCESS',
    data
})

export const addNewsFailure = (message) => ({
    type: 'ADD_NEWS_FAILURE',
    message
})

export const addNews = (title, content, image, category, like) => ({
    type: 'ADD_NEWS_VIEW',
    title, content, image, category, like
})

export const deleteNewsSuccess = (data) => ({
    type: 'DELETE_NEWS_SUCCESS',
    data
})

export const deleteNewsFailure = (message) => ({
    type: 'DELETE_NEWS_FAILURE',
    message
})

export const deleteNews = (id) => ({
    type: 'DELETE_NEWS',
    id
})

/* ------<*****  V I E W  *****>------ */

export const menuView = (boolean) => ({
    type: 'MENU_VIEW',
    boolean
})
