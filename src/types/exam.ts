export interface ExamPost {
  id: number;
  selectedSemester: string;
  examInfo: string;
  examType: string;
  examDifficulty: string;
  content: string;
}

export interface ExamPostsResponse {
  data: ExamPost[];
  isExamDataExists: boolean;
}
