import { combineReducers } from 'redux'

import login from './Login'
import news from './News'
import view from './View'

export default combineReducers({
    login,
    news,
    view
})
