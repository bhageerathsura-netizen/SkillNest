import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const Courses: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Build modern websites and applications using HTML, CSS, JavaScript, React and backend technologies.",
      instructor: "Dr. Ananya Rao",
      category: "Web Development",
      duration: "8 Weeks",
      level: "Beginner",
      rating: 4.9,
      students: 1240,
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "Master Python fundamentals and build practical applications through hands-on projects.",
      instructor: "Prof. Rahul Sharma",
      category: "Programming",
      duration: "10 Weeks",
      level: "Beginner",
      rating: 4.8,
      students: 980,
    },
    {
      id: 3,
      title: "Artificial Intelligence & ML",
      description:
        "Learn machine learning algorithms and explore real-world AI applications.",
      instructor: "Dr. Priya Nair",
      category: "AI & ML",
      duration: "12 Weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 760,
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Learn the principles of user experience and create beautiful digital products.",
      instructor: "Prof. Arjun Mehta",
      category: "Design",
      duration: "6 Weeks",
      level: "Beginner",
      rating: 4.7,
      students: 620,
    },
    {
      id: 5,
      title: "Data Science",
      description:
        "Analyze data and discover insights using Python, statistics and visualization.",
      instructor: "Dr. Sneha Kapoor",
      category: "Data Science",
      duration: "10 Weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 840,
    },
    {
      id: 6,
      title: "Cloud Computing",
      description:
        "Understand cloud infrastructure, deployment and modern cloud technologies.",
      instructor: "Prof. Vikram Singh",
      category: "Technology",
      duration: "8 Weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 510,
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Programming",
    "AI & ML",
    "Design",
    "Data Science",
    "Technology",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-blue-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-200">
            LEARN SOMETHING NEW
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Explore our courses
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Discover courses designed to help you build skills and achieve
            your goals.
          </p>

          <div className="mt-8 max-w-2xl">
            <input
              type="text"
              placeholder="Search for a course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border-0 px-5 py-4 text-gray-900 shadow-lg outline-none ring-blue-300 placeholder:text-gray-400 focus:ring-4"
            />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              All Courses
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {filteredCourses.length} courses available
            </p>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-white p-12 text-center">
            <p className="text-lg font-semibold text-gray-900">
              No courses found
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Try searching for something else.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;