const secureLocalStorage = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
  removeItem: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};
export default secureLocalStorage
