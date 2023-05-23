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
}

export interface LectureAverageRatings {
  lectureDifficultyAvg: number;
  lectureHomeworkAvg: number;
  lectureTeamAvg: number;
}

export type LectureDetailItem = LectureItem & Partial<LectureAverageRatings>;

export interface MainLecture {
  data: LectureDetailItem[];
  count: number;
}
