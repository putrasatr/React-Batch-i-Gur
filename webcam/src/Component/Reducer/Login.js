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
                messageReg: action.message,
                isLoading: false,
            }
        case 'LOGIN_SUCCESS':
            const data = action.data
            console.log('DATAA', data)
            console.log('actionnn', action)
            secureLocalStorage.setItem('token', data.token)
            secureLocalStorage.setItem('email', data.email)
            if (data.email === 'mir@gmail.com') {
                window.location.href = '/admin/dashboard'
                return {
                    email: data.email,
                    messageReg: message,
                    token: data.token,
                    ...state
                }
            }
            window.location.href = '/home'
            history.push('/home')
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