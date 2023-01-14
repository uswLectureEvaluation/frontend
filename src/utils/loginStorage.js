export const isLoginStorage = () => {
  const state = localStorage.getItem('login') === null && sessionStorage.getItem('login') === null;
  if (state === null) return false;
  if (state === undefined) return false;
  return state ? true : false;
};
