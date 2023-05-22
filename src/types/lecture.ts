export interface LectureItem {
  id: number;
  semesterList: string;
  professor: string;
  majorType: string;
  lectureType: string;
  lectureName: string;
  lectureTotalAvg: number;
  lectureSatisfactionAvg: number;
  lectureHoneyAvg: number;
  lectureLearningAvg: number;
  lectureDifficultyAvg?: number;
  lectureHomeworkAvg?: number;
  lectureTeamAvg?: number;
}

export interface MainLecture {
  data: LectureItem[];
  count: number;
}
