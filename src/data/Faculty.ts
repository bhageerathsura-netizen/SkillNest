export interface Faculty {
  id: number;
  name: string;
  role: string;
  department: string;
  experience: string;
  rating: number;
  courses: string[];
  qualification: string;
  bio: string;
  email: string;
}

export const faculty: Faculty[] = [
  {
    id: 1,
    name: "Dr. Ananya Rao",
    role: "Professor",
    department: "Computer Science",
    experience: "10+ Years",
    rating: 4.9,
    courses: [
      "Full Stack Web Development",
      "Advanced JavaScript",
    ],
    qualification: "Ph.D. in Computer Science",
    bio: "Dr. Ananya Rao is an experienced computer science educator specializing in modern web technologies and software engineering.",
    email: "ananya@learnova.com",
  },

  {
    id: 2,
    name: "Prof. Rahul Sharma",
    role: "Senior Instructor",
    department: "Programming",
    experience: "8+ Years",
    rating: 4.8,
    courses: [
      "Python Programming",
      "Data Structures",
    ],
    qualification: "M.Tech in Computer Science",
    bio: "Prof. Rahul Sharma focuses on programming fundamentals and helping students develop strong problem-solving skills.",
    email: "rahul@learnova.com",
  },

  {
    id: 3,
    name: "Dr. Priya Nair",
    role: "AI Researcher",
    department: "Artificial Intelligence",
    experience: "12+ Years",
    rating: 4.9,
    courses: [
      "Artificial Intelligence & Machine Learning",
      "Deep Learning",
    ],
    qualification: "Ph.D. in Artificial Intelligence",
    bio: "Dr. Priya Nair is an AI researcher and educator passionate about machine learning and emerging technologies.",
    email: "priya@learnova.com",
  },

  {
    id: 4,
    name: "Prof. Arjun Mehta",
    role: "UX Instructor",
    department: "Design",
    experience: "7+ Years",
    rating: 4.7,
    courses: [
      "UI/UX Design",
      "Design Thinking",
    ],
    qualification: "M.Des in Interaction Design",
    bio: "Prof. Arjun Mehta teaches user-centered design and helps students create intuitive and engaging digital experiences.",
    email: "arjun@learnova.com",
  },

  {
    id: 5,
    name: "Dr. Sneha Kapoor",
    role: "Data Scientist",
    department: "Data Science",
    experience: "9+ Years",
    rating: 4.8,
    courses: [
      "Data Science",
      "Data Analytics",
    ],
    qualification: "Ph.D. in Data Science",
    bio: "Dr. Sneha Kapoor combines academic research with industry experience to teach practical data science skills.",
    email: "sneha@learnova.com",
  },

  {
    id: 6,
    name: "Prof. Vikram Singh",
    role: "Cloud Architect",
    department: "Cloud Computing",
    experience: "11+ Years",
    rating: 4.7,
    courses: [
      "Cloud Computing",
      "Cloud Infrastructure",
    ],
    qualification: "M.Tech in Cloud Computing",
    bio: "Prof. Vikram Singh specializes in cloud infrastructure, application deployment and modern cloud technologies.",
    email: "vikram@learnova.com",
  },
];

export const getFacultyById = (
  id: number
): Faculty | undefined => {
  return faculty.find((person) => person.id === id);
};