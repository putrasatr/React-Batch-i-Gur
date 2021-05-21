import { secureLocalStorage } from ".";

const email = secureLocalStorage.getItem('email')

const isAdmin = email === 'mir@admin.com' ? true : false

export default isAdmin