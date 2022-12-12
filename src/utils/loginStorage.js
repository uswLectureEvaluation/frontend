export const isLoginStorage = () => {
  return localStorage.getItem('login') || sessionStorage.getItem('login');
};
