export const fakeLectureInfo = {
  id: 'fake',
  lectureDifficultyAvg: 0,
  lectureHomeworkAvg: 0,
  lectureHoneyAvg: 0,
  lectureLearningAvg: 0,
  lectureName: '-',
  lectureSatisfactionAvg: 0,
  lectureTeamAvg: 0,
  lectureTotalAvg: 0,
  lectureType: '--',
  majorType: '-',
  professor: '-',
  semesterList: '-',
};

export const fakeLectureList = new Array(10);
for (let i = 0; i < fakeLectureList.length; i++) {
  fakeLectureList[i] = {
    id: 'fake' + i,
    lectureHoneyAvg: 0,
    lectureLearningAvg: 0,
    lectureName: '-',
    lectureSatisfactionAvg: 0,
    lectureTotalAvg: 0,
    lectureType: '-',
    majorType: '-',
    professor: '-',
    semesterList: '-',
  };
}

export const fakeUserInfo = {
  email: '-',
  loginId: '-',
  point: 0,
  viewExam: 0,
  writtenEvaluation: 0,
  writtenExam: 0,
};
