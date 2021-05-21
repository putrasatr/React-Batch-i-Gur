import { combineReducers } from 'redux'

import login from './Login'
import news from './News'

export default combineReducers({
    login,
    news
})
