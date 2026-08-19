import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

const CourseDetails: React.FC = () => {
  const { id } = useParams();

  const course = {
    id,
    title: "Python Programming",
    instructor: "Prof. Rahul Sharma",
    category: "Programming",
    duration: "10 Weeks",
    level: "Beginner",
    rating: 4.8,
    students: 980,
    description:
      "Learn Python programming from the fundamentals to practical application development. This course combines theory, examples and hands-on assignments to help you become confident in Python.",
  };

  const modules = [
    "Introduction to Python",
    "Variables & Data Types",
    "Conditional Statements",
    "Functions",
    "Object-Oriented Programming",
    "Working with Files",
    "Final Project",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-blue-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <Link
            to="/courses"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Courses
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {course.category}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold text-gray-900">
              {course.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {course.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
              <span>👨‍🏫 {course.instructor}</span>
              <span>◷ {course.duration}</span>
              <span>📈 {course.level}</span>
              <span>⭐ {course.rating}</span>
              <span>👥 {course.students} students</span>
            </div>

            {/* What you'll learn */}
            <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-7">
              <h2 className="text-2xl font-bold text-gray-900">
                What you'll learn
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  "Python fundamentals",
                  "Problem solving",
                  "Functions and OOP",
                  "Working with files",
                  "Build practical applications",
                  "Complete a final project",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-7">
              <h2 className="text-2xl font-bold text-gray-900">
                Course Curriculum
              </h2>

              <div className="mt-6 space-y-3">
                {modules.map((module, index) => (
                  <div
                    key={module}
                    className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 hover:bg-blue-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      {index + 1}
                    </span>

                    <span className="font-medium text-gray-700">
                      {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enrollment Card */}
          <div>
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-4xl font-bold backdrop-blur">
                  P
                </div>

                <p className="mt-5 text-center text-blue-100">
                  Start your learning journey
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span className="font-semibold text-gray-900">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Level</span>
                    <span className="font-semibold text-gray-900">
                      {course.level}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Lessons</span>
                    <span className="font-semibold text-gray-900">
                      24
                    </span>
                  </div>
                </div>

                <Link to="/dashboard" className="mt-7 block">
                  <Button className="w-full">
                    Enroll Now
                  </Button>
                </Link>

                <p className="mt-4 text-center text-xs text-gray-400">
                  Start learning instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;