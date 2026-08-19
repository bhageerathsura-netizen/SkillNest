export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  instructorId: number;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  students: number;
  lessons: number;
  progress?: number;
  image?: string;
  color: string;
  modules: CourseModule[];
  whatYouWillLearn: string[];
}

export interface CourseModule {
  id: number;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl?: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Master modern web development by learning HTML, CSS, JavaScript, React and backend technologies. Build real-world applications from scratch.",
    instructor: "Dr. Ananya Rao",
    instructorId: 1,
    category: "Web Development",
    duration: "8 Weeks",
    level: "Beginner",
    rating: 4.9,
    students: 1240,
    lessons: 32,
    progress: 68,
    color: "blue",
    whatYouWillLearn: [
      "Build responsive websites",
      "Master HTML and CSS",
      "Learn modern JavaScript",
      "Build applications with React",
      "Understand REST APIs",
      "Create full-stack applications",
    ],
    modules: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        lessons: [
          {
            id: 101,
            title: "Introduction to Web Development",
            duration: "12 min",
            completed: true,
          },
          {
            id: 102,
            title: "HTML Fundamentals",
            duration: "25 min",
            completed: true,
          },
          {
            id: 103,
            title: "CSS Fundamentals",
            duration: "30 min",
            completed: true,
          },
        ],
      },
      {
        id: 2,
        title: "JavaScript",
        lessons: [
          {
            id: 201,
            title: "JavaScript Basics",
            duration: "22 min",
            completed: true,
          },
          {
            id: 202,
            title: "Functions & Objects",
            duration: "28 min",
            completed: true,
          },
          {
            id: 203,
            title: "DOM Manipulation",
            duration: "35 min",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "React",
        lessons: [
          {
            id: 301,
            title: "Introduction to React",
            duration: "18 min",
            completed: false,
          },
          {
            id: 302,
            title: "React Components",
            duration: "25 min",
            completed: false,
          },
          {
            id: 303,
            title: "React Hooks",
            duration: "30 min",
            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Python Programming",
    description:
      "Learn Python from the fundamentals to practical application development through hands-on examples, exercises and projects.",
    instructor: "Prof. Rahul Sharma",
    instructorId: 2,
    category: "Programming",
    duration: "10 Weeks",
    level: "Beginner",
    rating: 4.8,
    students: 980,
    lessons: 28,
    progress: 82,
    color: "blue",
    whatYouWillLearn: [
      "Understand Python fundamentals",
      "Work with variables and data types",
      "Write reusable functions",
      "Understand object-oriented programming",
      "Work with files and data",
      "Build practical Python applications",
    ],
    modules: [
      {
        id: 1,
        title: "Python Basics",
        lessons: [
          {
            id: 401,
            title: "Introduction to Python",
            duration: "15 min",
            completed: true,
          },
          {
            id: 402,
            title: "Variables & Data Types",
            duration: "24 min",
            completed: true,
          },
          {
            id: 403,
            title: "Operators & Expressions",
            duration: "20 min",
            completed: true,
          },
        ],
      },
      {
        id: 2,
        title: "Control Flow",
        lessons: [
          {
            id: 501,
            title: "Conditional Statements",
            duration: "22 min",
            completed: true,
          },
          {
            id: 502,
            title: "Loops in Python",
            duration: "26 min",
            completed: true,
          },
        ],
      },
      {
        id: 3,
        title: "Functions & OOP",
        lessons: [
          {
            id: 601,
            title: "Functions in Python",
            duration: "30 min",
            completed: false,
          },
          {
            id: 602,
            title: "Classes & Objects",
            duration: "35 min",
            completed: false,
          },
          {
            id: 603,
            title: "Inheritance",
            duration: "28 min",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        title: "Final Project",
        lessons: [
          {
            id: 701,
            title: "Building a Python Application",
            duration: "45 min",
            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Explore the foundations of artificial intelligence and machine learning with practical examples and real-world applications.",
    instructor: "Dr. Priya Nair",
    instructorId: 3,
    category: "AI & ML",
    duration: "12 Weeks",
    level: "Intermediate",
    rating: 4.9,
    students: 760,
    lessons: 36,
    progress: 40,
    color: "blue",
    whatYouWillLearn: [
      "Understand AI and ML concepts",
      "Learn supervised and unsupervised learning",
      "Work with datasets",
      "Build machine learning models",
      "Evaluate model performance",
      "Explore neural networks",
    ],
    modules: [
      {
        id: 1,
        title: "Introduction to AI",
        lessons: [
          {
            id: 801,
            title: "What is Artificial Intelligence?",
            duration: "20 min",
            completed: true,
          },
          {
            id: 802,
            title: "History of AI",
            duration: "18 min",
            completed: true,
          },
        ],
      },
      {
        id: 2,
        title: "Machine Learning",
        lessons: [
          {
            id: 901,
            title: "Introduction to Machine Learning",
            duration: "25 min",
            completed: true,
          },
          {
            id: 902,
            title: "Supervised Learning",
            duration: "32 min",
            completed: false,
          },
          {
            id: 903,
            title: "Unsupervised Learning",
            duration: "30 min",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        title: "Neural Networks",
        lessons: [
          {
            id: 1001,
            title: "Introduction to Neural Networks",
            duration: "28 min",
            completed: false,
          },
          {
            id: 1002,
            title: "Deep Learning Basics",
            duration: "35 min",
            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Learn how to design intuitive and beautiful digital experiences using modern UI/UX principles and design tools.",
    instructor: "Prof. Arjun Mehta",
    instructorId: 4,
    category: "Design",
    duration: "6 Weeks",
    level: "Beginner",
    rating: 4.7,
    students: 620,
    lessons: 20,
    progress: 55,
    color: "blue",
    whatYouWillLearn: [
      "Understand UX principles",
      "Create user personas",
      "Design wireframes",
      "Build high-fidelity prototypes",
      "Understand visual hierarchy",
      "Design responsive interfaces",
    ],
    modules: [
      {
        id: 1,
        title: "UX Fundamentals",
        lessons: [
          {
            id: 1101,
            title: "Introduction to UX",
            duration: "20 min",
            completed: true,
          },
          {
            id: 1102,
            title: "Understanding Users",
            duration: "25 min",
            completed: true,
          },
        ],
      },
      {
        id: 2,
        title: "UI Design",
        lessons: [
          {
            id: 1201,
            title: "Color & Typography",
            duration: "22 min",
            completed: true,
          },
          {
            id: 1202,
            title: "Design Systems",
            duration: "28 min",
            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "Data Science",
    description:
      "Learn how to analyze data, visualize insights and solve real-world problems using Python and statistical techniques.",
    instructor: "Dr. Sneha Kapoor",
    instructorId: 5,
    category: "Data Science",
    duration: "10 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 840,
    lessons: 30,
    progress: 35,
    color: "blue",
    whatYouWillLearn: [
      "Understand data science workflows",
      "Analyze datasets with Python",
      "Create data visualizations",
      "Apply statistical techniques",
      "Clean and transform data",
      "Build data science projects",
    ],
    modules: [
      {
        id: 1,
        title: "Data Science Fundamentals",
        lessons: [
          {
            id: 1301,
            title: "Introduction to Data Science",
            duration: "18 min",
            completed: true,
          },
          {
            id: 1302,
            title: "Data Collection",
            duration: "22 min",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Data Analysis",
        lessons: [
          {
            id: 1401,
            title: "Pandas Fundamentals",
            duration: "30 min",
            completed: false,
          },
          {
            id: 1402,
            title: "Data Cleaning",
            duration: "25 min",
            completed: false,
          },
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Cloud Computing",
    description:
      "Understand cloud infrastructure, deployment and modern cloud technologies used by companies around the world.",
    instructor: "Prof. Vikram Singh",
    instructorId: 6,
    category: "Technology",
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.6,
    students: 510,
    lessons: 24,
    progress: 20,
    color: "blue",
    whatYouWillLearn: [
      "Understand cloud computing",
      "Learn cloud infrastructure",
      "Explore virtual machines",
      "Understand cloud storage",
      "Deploy applications",
      "Learn cloud security basics",
    ],
    modules: [
      {
        id: 1,
        title: "Cloud Fundamentals",
        lessons: [
          {
            id: 1501,
            title: "Introduction to Cloud Computing",
            duration: "20 min",
            completed: true,
          },
          {
            id: 1502,
            title: "Cloud Service Models",
            duration: "24 min",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Cloud Deployment",
        lessons: [
          {
            id: 1601,
            title: "Deploying Applications",
            duration: "30 min",
            completed: false,
          },
          {
            id: 1602,
            title: "Cloud Security",
            duration: "25 min",
            completed: false,
          },
        ],
      },
    ],
  },
];

export const getCourseById = (id: number): Course | undefined => {
  return courses.find((course) => course.id === id);
};
