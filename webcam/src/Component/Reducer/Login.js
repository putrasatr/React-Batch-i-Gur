import { secureLocalStorage } from '../../helpers'

import history from '../../history'

const login = (state = [], action) => {

    switch (action.type) {
        case 'REGISTER_SUCCESS':
            const { email, message, token } = action.data
            secureLocalStorage.setItem('token', token)
            secureLocalStorage.setItem('email', email)
            window.location.href = '/'
            history.push('/')
            return {
                email,
                messageReg: message,
                token,
                ...state
            }

        case 'REGISTER_FAILURE':
            return {
                messageReg: action.message,
                isLoading: false,
            }
        case 'LOGIN_SUCCESS':
            const data = action.data
            secureLocalStorage.setItem('token', data.token)
            secureLocalStorage.setItem('email', data.email)
            if (data.email === 'mir@admin.com') {
                window.location.href = '/admin/dashboard'
                return {
                    email: data.email,
                    messageReg: data.message,
                    token: data.token,
                    ...state
                }
            }
            window.location.href = '/'
            history.push('/')   
            return {
                email: data.email,
                messageReg: data.message,
                token: data.token,
                ...state
            }

        case 'LOGIN_FAILURE':
            return {
                isLoading: false,
                messageLog: action.message
            }
        default:
            return state
    }
}
export default login