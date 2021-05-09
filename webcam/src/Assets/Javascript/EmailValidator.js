export function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}
export function passValidate(pas) {
    if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/.test(pas)) {
        return (true)
    }
    return (false)
}