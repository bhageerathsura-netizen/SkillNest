export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  category: string;
  duration: string;
  level: string;
  rating: number;
  students: number;
  lessons: number;
  image?: string;
  syllabus: string[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Build modern websites and full-stack applications using HTML, CSS, JavaScript, React and backend technologies.",
    instructor: "Ms. Kusuma P",
    category: "Web Development",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4.9,
    students: 1240,
    lessons: 32,
    syllabus: [
      "HTML & CSS Fundamentals",
      "JavaScript Essentials",
      "React Fundamentals",
      "React Components & Hooks",
      "REST APIs",
      "Node.js & Express",
      "Database Fundamentals",
      "Full Stack Project",
    ],
  },

  {
    id: 2,
    title: "Python Programming",
    description:
      "Learn Python from the basics and build practical applications through hands-on programming projects.",
    instructor: "Mrs. Kalpa R",
    category: "Programming",
    duration: "10 Weeks",
    level: "Beginner",
    rating: 4.8,
    students: 980,
    lessons: 40,
    syllabus: [
      "Python Basics",
      "Variables & Data Types",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Lists, Tuples & Dictionaries",
      "Object-Oriented Programming",
      "File Handling",
      "Error Handling",
      "Python Project",
    ],
  },

  {
    id: 3,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Explore machine learning concepts, algorithms and practical artificial intelligence applications.",
    instructor: "Mrs. Kavyashree S",
    category: "AI & ML",
    duration: "12 Weeks",
    level: "Intermediate",
    rating: 4.9,
    students: 760,
    lessons: 48,
    syllabus: [
      "Introduction to AI",
      "Machine Learning Fundamentals",
      "Data Preprocessing",
      "Supervised Learning",
      "Unsupervised Learning",
      "Regression Algorithms",
      "Classification Algorithms",
      "Clustering",
      "Model Evaluation",
      "Introduction to Neural Networks",
      "Deep Learning Basics",
      "AI Project",
    ],
  },

  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Learn user interface and user experience design principles and create engaging digital experiences.",
    instructor: "Mrs. Rose Priyanka",
    category: "Design",
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.7,
    students: 640,
    lessons: 24,
    syllabus: [
      "Introduction to UI/UX",
      "Design Thinking",
      "User Research",
      "User Personas",
      "Wireframing",
      "Information Architecture",
      "Visual Design",
      "Typography & Colors",
      "Prototyping",
      "Usability Testing",
      "Portfolio Project",
    ],
  },

  {
    id: 5,
    title: "Data Science",
    description:
      "Learn data analysis, visualization and statistical techniques to solve real-world problems with data.",
    instructor: "Mrs. Kalyani S Kumar",
    category: "Data Science",
    duration: "10 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 850,
    lessons: 40,
    syllabus: [
      "Introduction to Data Science",
      "Python for Data Science",
      "NumPy",
      "Pandas",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Statistics",
      "Data Visualization",
      "Matplotlib & Seaborn",
      "Introduction to Machine Learning",
      "Data Science Project",
    ],
  },

  {
    id: 6,
    title: "Cloud Computing",
    description:
      "Understand cloud infrastructure, deployment, storage and modern cloud computing technologies.",
    instructor: "Dr. Chayadevi M L",
    category: "Cloud Computing",
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 590,
    lessons: 32,
    syllabus: [
      "Introduction to Cloud Computing",
      "Cloud Service Models",
      "Cloud Deployment Models",
      "Virtual Machines",
      "Cloud Storage",
      "Networking Fundamentals",
      "Cloud Security",
      "Containers & Docker",
      "Cloud Deployment",
      "Cloud Project",
    ],
  },
];