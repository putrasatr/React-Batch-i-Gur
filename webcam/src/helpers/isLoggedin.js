import secureLocalStorage from "./secureLocalStorage";

const email = secureLocalStorage.getItem('email')

const isLoggedIn = email ? true : false

export default isLoggedIn