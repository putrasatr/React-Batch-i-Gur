import { secureLocalStorage } from '../../helpers'

import history from '../../history'

const login = (state = [], action) => {

    switch (action.type) {
        case 'REGISTER_SUCCESS':
            const { email, message, token } = action.data
            secureLocalStorage.setItem('token', token)
            secureLocalStorage.setItem('email', email)
            window.location.href = '/home'
            history.push('/home')
            return {
                email,
                messageReg: message,
                token,
                ...state
            }

        case 'REGISTER_FAILURE':
            return {
                ...state,
                messageReg: action.message,
                isLoading: false,
            }
        case 'LOGIN_SUCCESS':
            const data = action.data
            secureLocalStorage.setItem('token', data.token)
            secureLocalStorage.setItem('email', data.email)
            window.location.href = '/home'
            history.push('/home')
            return {
                email: action.email,
                messageReg: action.message,
                token: action.token,
                ...state
            }

        case 'LOGIN_FAILURE':
            console.log('ACtion', action.message)
            return {
                isLoading: false,
                messageLog: action.message,
                ...state,
            }
        default:
            return state
    }
}
export default login