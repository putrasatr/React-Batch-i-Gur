export default function generateRandomNumber(arr) {
    let random = Math.random() * arr.length | 0
    return random
}