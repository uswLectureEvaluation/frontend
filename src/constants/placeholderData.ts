import type { SortOption } from 'types/common';
import { ExamPost } from 'types/exam';
import type { LectureDetailItem } from 'types/lecture';
import createFakeData from 'utils/fakeData';

export const fakeLectureInfo: LectureDetailItem = {
  id: -1,
  semesterList: '0000-0',
  professor: '로딩중',
  lectureType: '로딩',
  lectureName: '로딩중입니다',
  lectureTotalAvg: 0,
  lectureSatisfactionAvg: 0,
  lectureHoneyAvg: 0,
  lectureLearningAvg: 0,
  majorType: '로딩',
  lectureDifficultyAvg: 0,
  lectureHomeworkAvg: 0,
  lectureTeamAvg: 0,
};

export const fakeLectureList = createFakeData(10, () => fakeLectureInfo);

export const fakeEvaluationList: ExamPost[] = createFakeData(3, (i) => ({
  id: i,
  selectedSemester: '0000-0',
  title: 'suwiki',
  learning: 0.0,
  honey: 0.0,
  satisfaction: 0.0,
  totalAvg: 0.0,
  homework: 0.0,
  difficulty: 0.0,
  team: 0.0,
  examDifficulty: '보통',
  examInfo: '보통, 보통, 보통',
  examType: '중간고사',
  content:
    'suwiki-lecture-content-placeholder suwiki-lecture-content-placeholder suwiki-lecture-content-placeholder suwiki-lecture-content-placeholder',
}));

export const fakeUserInfo = {
  email: '-',
  blurEmail: 'suwiki@suwiki.kr',
  loginId: '-',
  blurLoginId: 'suwki',
  point: 0,
  viewExam: 0,
  writtenEvaluation: 0,
  writtenExam: 0,
};

export const sortOptions: SortOption[] = [
  { sub: '날짜', name: '최근 올라온 강의', option: 'modifiedDate', icon: 'fire' },
  { sub: '꿀강', name: '꿀 강의', option: 'lectureHoneyAvg', icon: 'bee' },
  { sub: '만족도', name: '만족도가 높은 강의', option: 'lectureSatisfactionAvg', icon: 'thumbs' },
  { sub: '배움', name: '배울게 많은 강의', option: 'lectureLearningAvg', icon: 'book' },
  { sub: '종합', name: 'BEST 강의', option: 'lectureTotalAvg', icon: 'best' },
];

export const semesters = (semesterList: string) => ['선택', ...semesterList.split(', ')];
export const examTypes = ['선택', '중간고사', '기말고사', '쪽지', '기타'];

export const EvaluationSliderOptions = [
  {
    id: 'honey',
    name: '꿀강지수',
  },
  {
    id: 'learning',
    name: '배움지수',
  },
  {
    id: 'satisfaction',
    name: '만족도',
  },
];

export const EvaluationSelectOptions = [
  {
    id: 'team',
    title: '조모임',
    options: [
      { id: 'easy', name: '없음', value: 0 },
      { id: 'difficult', name: '있음', value: 1 },
    ],
  },
  {
    id: 'homework',
    title: '과제',
    options: [
      { id: 'easy', name: '없음', value: 0 },
      { id: 'normal', name: '보통', value: 1 },
      { id: 'difficult', name: '많음', value: 2 },
    ],
  },
  {
    id: 'difficulty',
    title: '학점',
    options: [
      { id: 'easy', name: '너그러움', value: 0 },
      { id: 'normal', name: '보통', value: 1 },
      { id: 'difficult', name: '까다로움', value: 2 },
    ],
  },
];

export const ExamSelectOptions = [
  {
    id: 'examDifficulty',
    title: '난이도',
    type: 'radio',
    options: [
      { id: 'easy', name: '쉬움', value: '쉬움' },
      { id: 'normal', name: '보통', value: '보통' },
      { id: 'difficult', name: '어려움', value: '어려움' },
    ],
  },
  {
    id: 'examInfo',
    title: '시험유형',
    subTitle: '(복수선택)',
    type: 'checkbox',
    options: [
      { id: 'normal', name: '족보', value: '족보' },
      { id: 'normal', name: '교재', value: '교재' },
      { id: 'normal', name: 'PPT', value: 'PPT' },
      { id: 'normal', name: '필기', value: '필기' },
      { id: 'normal', name: '응용', value: '응용' },
      { id: 'normal', name: '실습', value: '실습' },
      { id: 'normal', name: '과제', value: '과제' },
    ],
  },
];
