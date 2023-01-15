export const isLoginStorage = () => {
  const state = localStorage.login || sessionStorage.login;
  if (state === null) return false;
  if (state === undefined) return false;
  return state ? true : false;
};
