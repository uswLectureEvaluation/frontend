import { majorTypeApi, versionApi } from '../api/Api';

export const versionCheck = () => {
  if (!window.localStorage.getItem('version') || !window.localStorage.getItem('majorType')) {
    versionApi().then((res) => {
      // console.log('버전없어서 세팅');
      window.localStorage.setItem('version', res.version.toFixed(1));
    });
    majorTypeApi().then((res) => {
      // console.log('전공없어서 세팅');
      window.localStorage.setItem('majorType', ['전체', res.data]);
    });
    window.sessionStorage.setItem('version-check', true);
    // console.log('버전 체크 완료');
  } else if (!window.sessionStorage.getItem('version-check')) {
    versionApi().then((res) => {
      if (window.localStorage.getItem('version') !== res.version.toFixed(1)) {
        // console.log('버전 다름');
        window.localStorage.setItem('version', res.version.toFixed(1));
        // console.log('버전 최신화');
        majorTypeApi().then((res) => {
          window.localStorage.setItem('majorType', ['전체', res.data]);
          // console.log('전공 최신화');
        });
      }
      window.sessionStorage.setItem('version-check', true);
      // console.log('버전 체크 완료');
    });
  }
};
