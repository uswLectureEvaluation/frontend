const storage = localStorage;

export const isLoginStorage = () => {
  const state = localStorage.login || sessionStorage.login;
  if (state === null) return false;
  if (state === undefined) return false;
  return state ? true : false;
};

export const getStorage = (key, defaultValue = undefined) => {
  try {
    const storedValue = storage.getItem(key);

    return storedValue || defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

export const setStorage = (key, value) => {
  try {
    storage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export const removeStorage = (key) => {
  try {
    storage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
