export const isLoginStorage = () => {
  const state = localStorage.getItem('login') || sessionStorage.getItem('login');
  if (state === null) return false;
  if (state === undefined) return false;
  return state ? true : false;
};
