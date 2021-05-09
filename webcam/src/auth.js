import { secureLocalStorage } from "./helpers/index";
class Auth {
    constructor() {
        this.authenticated = false
    }
    isAuthenticated() {
        const token = secureLocalStorage.getItem('token')
        if (token) this.authenticated = true
        return this.authenticated;
    }
}

export default new Auth();