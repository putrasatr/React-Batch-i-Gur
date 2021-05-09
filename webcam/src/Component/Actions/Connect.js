import axios from 'axios';
import { default as baseURL  } from '../../config'
import { secureLocalStorage } from '../../helpers'

// const token = localStorage.getItem('token')
const request = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        // 'token': 'Bearer ' + token 
        "Authorization": 'Bearer' + secureLocalStorage.getItem("token")
    }
});

export default request;