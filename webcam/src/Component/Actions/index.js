/* ------<*****  L O G I N   *****>------ */
export const loginSuccess = (data,token , message) => ({
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