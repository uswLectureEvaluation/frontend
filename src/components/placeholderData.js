export const fakeLectureInfo = {
  id: 'fake',
  lectureDifficultyAvg: 1,
  lectureHomeworkAvg: 0,
  lectureHoneyAvg: 0,
  lectureLearningAvg: 0,
  lectureName: 'suwiki-lecture',
  lectureSatisfactionAvg: 0,
  lectureTeamAvg: 0,
  lectureTotalAvg: 0,
  lectureType: '로딩',
  majorType: 'suwiki',
  professor: 'suwiki',
  semesterList: '0000-0',
};

export const fakeLectureList = new Array(10);
for (let i = 0; i < fakeLectureList.length; i++) {
  fakeLectureList[i] = {
    id: 'fake' + i,
    lectureHoneyAvg: 0,
    lectureLearningAvg: 0,
    lectureName: '로딩중입니다',
    lectureSatisfactionAvg: 0,
    lectureTotalAvg: 0,
    lectureType: '로딩',
    majorType: '로딩',
    professor: '로딩중',
    semesterList: '0000-0',
    content:
      'suwiki-lecture-content-placeholder suwiki-lecture-content-placeholder suwiki-lecture-content-placeholder suwiki-lecture-content-placeholder',
  };
}

export const fakeEvaluationList = new Array(3);
for (let i = 0; i < fakeEvaluationList.length; i++) {
  fakeEvaluationList[i] = {
    id: 'fake' + i,
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
  };
}

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

export const sortOptions = [
  { sub: '날짜', name: '최근 올라온 강의', option: 'modifiedDate', icon: 'fire' },
  { sub: '꿀강', name: '꿀 강의', option: 'lectureHoneyAvg', icon: 'bee' },
  { sub: '만족도', name: '만족도가 높은 강의', option: 'lectureSatisfactionAvg', icon: 'thumbs' },
  { sub: '배움', name: '배울게 많은 강의', option: 'lectureLearningAvg', icon: 'book' },
  { sub: '종합', name: 'BEST 강의', option: 'lectureTotalAvg', icon: 'best' },
];
