import { Major } from 'api';
import { floatFix } from 'utils/floatFix';
import { getStorage, setStorage } from 'utils/loginStorage';

export const versionCheck = () => {
  const { version, type } = Major();

  if (!getStorage('version') || !getStorage('majorType')) {
    version().then((res) => {
      // console.log('버전없어서 세팅');
      if (res) setStorage('version', floatFix(res.version, 1));
    });
    type().then((res) => {
      // console.log('전공없어서 세팅');
      if (res) setStorage('majorType', ['전체', res.data]);
    });
    window.sessionStorage.setItem('version-check', 'true');
    // console.log('버전 체크 완료');
  } else if (!window.sessionStorage.getItem('version-check')) {
    version().then((res) => {
      if (!res) return;
      if (getStorage('version') !== floatFix(res.version, 1)) {
        // console.log('버전 다름');
        setStorage('version', floatFix(res.version, 1));
        // console.log('버전 최신화');
        type().then((res) => {
          if (res) setStorage('majorType', ['전체', res.data]);
          // console.log('전공 최신화');
        });
      }
      window.sessionStorage.setItem('version-check', 'true');
      // console.log('버전 체크 완료');
    });
  }
};
