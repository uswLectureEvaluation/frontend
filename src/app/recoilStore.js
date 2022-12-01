import { atom } from 'recoil';

export const lectureState = atom({
  key: 'lectureState',
  default: {
    selectId: '',
    lectureName: '',
    professor: '',
    semesterList: '',
  },
});
