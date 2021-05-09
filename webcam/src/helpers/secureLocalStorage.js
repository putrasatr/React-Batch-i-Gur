// import { useEffect } from "react";
// import CryptoJS from "crypto-js";
// import { secret } from "common/config";

// const encr = (val) => CryptoJS.AES.encrypt(val, secret);
// const decr = (val) =>
//   CryptoJS.AES.decrypt(val, secret).toString(CryptoJS.enc.Utf8);

// export default {
//     setItem: (key, value) => localStorage.setItem(key, encr(value)),
//     getItem: (key) => decr(localStorage.getItem(key)),
//     removeItem: (key) => localStorage.removeItem(encr(key)),
//     clear: () => localStorage.clear(),
// }
const secureLocalStorage = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
  removeItem: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};
export default secureLocalStorage
