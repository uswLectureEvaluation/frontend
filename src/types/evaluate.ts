export interface ReviewBase {
  selectedSemester: string;
  satisfaction: number;
  learning: number;
  honey: number;
  team: number;
  difficulty: number;
  homework: number;
  content: string;
}

export interface Review extends ReviewBase {
  id: number;
  lectureName?: string;
  professor?: string;
  majorType?: string;
  semesterList?: string;
  totalAvg?: number;
}

export interface PostReviewRequest extends ReviewBase {
  lectureName: string;
  professor: string;
}
