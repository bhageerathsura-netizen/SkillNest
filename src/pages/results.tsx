import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";

const Results: React.FC = () => {
  const results = [
    {
      course: "Python Programming",
      instructor: "Prof. Rahul Sharma",
      assignments: [
        ["Assignment 1", "18 / 20"],
        ["Assignment 2", "17 / 20"],
        ["Quiz 1", "19 / 20"],
      ],
      overall: 90,
    },
    {
      course: "Web Development",
      instructor: "Dr. Ananya Rao",
      assignments: [
        ["HTML Assignment", "18 / 20"],
        ["CSS Quiz", "17 / 20"],
        ["React Quiz", "19 / 20"],
      ],
      overall: 85,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar studentName="Abhijna" />

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              ACADEMIC PERFORMANCE
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              My Results
            </h1>

            <p className="mt-2 text-gray-500">
              Track your performance across all your courses.
            </p>
          </div>

          {/* Overall */}
          <div className="mt-8 rounded-2xl bg-blue-600 p-7 text-white shadow-lg shadow-blue-100">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <p className="text-sm text-blue-100">
                  Overall Performance
                </p>

                <h2 className="mt-2 text-4xl font-bold">
                  88%
                </h2>

                <p className="mt-2 text-sm text-blue-100">
                  Excellent progress! Keep it up.
                </p>
              </div>

              <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-white/20">
                <span className="text-2xl font-bold">A</span>
              </div>
            </div>
          </div>

          {/* Course Results */}
          <div className="mt-8 space-y-6">
            {results.map((result) => (
              <div
                key={result.course}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {result.course}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {result.instructor}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-2xl font-bold text-blue-600">
                      {result.overall}%
                    </p>

                    <p className="text-xs text-gray-400">
                      Overall Score
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-gray-100">
                  {result.assignments.map(([name, score]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between border-b border-gray-100 px-5 py-4 last:border-0"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {name}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                        {score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/dashboard"
            className="mt-8 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Results;