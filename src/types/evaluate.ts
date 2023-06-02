export interface ReviewBase {
  id: number;
  selectedSemester: string;
  satisfaction: number;
  learning: number;
  honey: number;
  team: number;
  difficulty: number;
  homework: number;
  content: string;
}

export interface ReviewOptions {
  lectureName: string;
  professor: string;
  majorType: string;
  semesterList: string;
  totalAvg: number;
}

export interface Review extends ReviewBase, ReviewOptions {}

export interface PostReviewRequest extends ReviewBase {
  lectureName: string;
  professor: string;
}
