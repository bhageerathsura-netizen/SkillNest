import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";
import ProgressBar from "../components/ProgressBar";

const Lecture: React.FC = () => {
  const lessons = [
    { title: "Introduction to Python", completed: true },
    { title: "Variables & Data Types", completed: true },
    { title: "Functions in Python", completed: false },
    { title: "Object-Oriented Programming", completed: false },
    { title: "Final Project", completed: false },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar studentName="Abhijna" />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Dashboard
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Video */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-gray-950 shadow-lg">
                <div className="flex h-full flex-col items-center justify-center text-white">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl shadow-lg">
                    ▶
                  </div>

                  <p className="mt-4 text-sm text-gray-300">
                    Video Lecture
                  </p>
                </div>
              </div>

              {/* Lecture Info */}
              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-sm font-medium text-blue-600">
                  PYTHON PROGRAMMING
                </p>

                <h1 className="mt-2 text-2xl font-bold text-gray-900">
                  Functions in Python
                </h1>

                <p className="mt-4 leading-7 text-gray-500">
                  In this lesson, you'll learn how to define functions,
                  pass arguments and return values in Python.
                </p>

                <div className="mt-6">
                  <ProgressBar
                    progress={82}
                    label="Course Progress"
                  />
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50">
                    ← Previous
                  </button>

                  <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                    Mark Complete
                  </button>

                  <button className="rounded-lg bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-100">
                    Next →
                  </button>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h2 className="font-bold text-gray-900">
                  Course Content
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  3 of 5 lessons completed
                </p>

                <div className="mt-5 space-y-2">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.title}
                      className={`rounded-xl p-3 ${
                        index === 2
                          ? "bg-blue-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                            lesson.completed
                              ? "bg-blue-600 text-white"
                              : index === 2
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {lesson.completed ? "✓" : index + 1}
                        </div>

                        <p
                          className={`text-sm font-medium ${
                            index === 2
                              ? "text-blue-700"
                              : "text-gray-700"
                          }`}
                        >
                          {lesson.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/assignments"
                  className="mt-5 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Go to Assignment →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lecture;