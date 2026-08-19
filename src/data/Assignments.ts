export interface Question {
  id: number;
  question: string;
  marks: number;
  type: "text" | "code" | "multiple-choice";
  options?: string[];
  answer?: string;
}

export interface Assignment {
  id: number;
  courseId: number;
  title: string;
  description: string;
  topic: string;
  dueDate: string;
  totalMarks: number;
  status: "Pending" | "Submitted" | "Graded";
  score?: number;
  questions: Question[];
}

export const assignments: Assignment[] = [
  {
    id: 1,
    courseId: 2,
    title: "Python Basics",
    description:
      "Test your understanding of Python variables, data types and basic operations.",
    topic: "Python Fundamentals",
    dueDate: "August 20, 2026",
    totalMarks: 20,
    status: "Graded",
    score: 18,
    questions: [
      {
        id: 1,
        question:
          "What are the main built-in data types in Python?",
        marks: 5,
        type: "text",
      },
      {
        id: 2,
        question:
          "Write a Python program to swap two variables.",
        marks: 10,
        type: "code",
      },
      {
        id: 3,
        question:
          "Which symbol is used for comments in Python?",
        marks: 5,
        type: "multiple-choice",
        options: ["//", "#", "/*", "<!--"],
        answer: "#",
      },
    ],
  },

  {
    id: 2,
    courseId: 2,
    title: "Python Control Flow",
    description:
      "Practice conditional statements and loops by solving programming problems.",
    topic: "Control Flow",
    dueDate: "August 21, 2026",
    totalMarks: 20,
    status: "Graded",
    score: 17,
    questions: [
      {
        id: 1,
        question:
          "Explain the difference between a for loop and a while loop.",
        marks: 5,
        type: "text",
      },
      {
        id: 2,
        question:
          "Write a Python program to print numbers from 1 to 10.",
        marks: 10,
        type: "code",
      },
      {
        id: 3,
        question:
          "Which keyword is used to stop a loop?",
        marks: 5,
        type: "multiple-choice",
        options: ["stop", "exit", "break", "end"],
        answer: "break",
      },
    ],
  },

  {
    id: 3,
    courseId: 2,
    title: "Functions & Problem Solving",
    description:
      "Apply your knowledge of Python functions to solve practical programming problems.",
    topic: "Functions",
    dueDate: "August 22, 2026",
    totalMarks: 20,
    status: "Pending",
    questions: [
      {
        id: 1,
        question:
          "Write a Python function that calculates the factorial of a number.",
        marks: 10,
        type: "code",
      },
      {
        id: 2,
        question:
          "Explain the difference between a function parameter and an argument.",
        marks: 5,
        type: "text",
      },
      {
        id: 3,
        question:
          "Which keyword is used to define a function in Python?",
        marks: 5,
        type: "multiple-choice",
        options: ["function", "define", "def", "func"],
        answer: "def",
      },
    ],
  },

  {
    id: 4,
    courseId: 1,
    title: "HTML & CSS Fundamentals",
    description:
      "Create a responsive webpage using semantic HTML and modern CSS.",
    topic: "Web Development",
    dueDate: "August 24, 2026",
    totalMarks: 25,
    status: "Submitted",
    questions: [
      {
        id: 1,
        question:
          "Create a semantic HTML structure for a personal portfolio.",
        marks: 10,
        type: "code",
      },
      {
        id: 2,
        question:
          "Explain the CSS box model.",
        marks: 5,
        type: "text",
      },
      {
        id: 3,
        question:
          "Build a responsive navigation bar.",
        marks: 10,
        type: "code",
      },
    ],
  },

  {
    id: 5,
    courseId: 1,
    title: "React Components",
    description:
      "Build reusable React components and understand component-based architecture.",
    topic: "React",
    dueDate: "August 25, 2026",
    totalMarks: 20,
    status: "Pending",
    questions: [
      {
        id: 1,
        question:
          "What is a React component?",
        marks: 5,
        type: "text",
      },
      {
        id: 2,
        question:
          "Create a reusable React component for a course card.",
        marks: 10,
        type: "code",
      },
      {
        id: 3,
        question:
          "Which hook is commonly used to manage state?",
        marks: 5,
        type: "multiple-choice",
        options: ["useState", "useRoute", "usePage", "useData"],
        answer: "useState",
      },
    ],
  },
];

export const getAssignmentById = (
  id: number
): Assignment | undefined => {
  return assignments.find(
    (assignment) => assignment.id === id
  );
};

export const getAssignmentsByCourse = (
  courseId: number
): Assignment[] => {
  return assignments.filter(
    (assignment) => assignment.courseId === courseId
  );
};