import { secureLocalStorage } from ".";

const admin = {
    email: 'mir@admin.com'
}

const email = secureLocalStorage.getItem('email')

const isAdmin = email === admin.email ? true : false

export default isAdmin