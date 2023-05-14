export interface MainLectureItem {
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

export interface MainLecture {
  data: MainLectureItem[];
  count: number;
}
