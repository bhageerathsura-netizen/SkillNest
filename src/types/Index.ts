export interface Student {
  id: number;
  name: string;
  email: string;
  role: "student";
  coursesEnrolled: number;
  averageProgress: number;
}

export interface Result {
  id: number;
  courseId: number;
  courseName: string;
  assessment: string;
  score: number;
  totalMarks: number;
  percentage: number;
}

export interface DashboardStats {
  enrolledCourses: number;
  completedLessons: number;
  averageProgress: number;
}

export interface NavItem {
  name: string;
  path: string;
  icon?: string;
}