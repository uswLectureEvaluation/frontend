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
