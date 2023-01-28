import { atom } from 'recoil';

export const lectureState = atom({
  key: 'lectureState',
  default: {
    id: '',
    lectureName: '',
    professor: '',
    semesterList: '',
  },
});

export const tokenState = atom({
  key: 'tokenState',
  default: null,
});
