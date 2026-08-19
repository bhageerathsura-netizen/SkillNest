import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";

const Assignment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar studentName="Abhijna" />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-blue-600"
          >
            ← Back to Dashboard
          </Link>

          {!submitted ? (
            <>
              <div className="mt-6">
                <p className="text-sm font-semibold text-blue-600">
                  PYTHON PROGRAMMING
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-900">
                  Assignment 03
                </h1>

                <p className="mt-2 text-gray-500">
                  Functions & Problem Solving
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <div className="rounded-lg bg-blue-50 px-4 py-3">
                  <p className="text-xs text-gray-500">Due Date</p>
                  <p className="mt-1 text-sm font-bold text-blue-700">
                    Aug 22, 2026
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 px-4 py-3">
                  <p className="text-xs text-gray-500">Total Marks</p>
                  <p className="mt-1 text-sm font-bold text-blue-700">
                    20
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      1
                    </span>

                    <div className="flex-1">
                      <h2 className="font-semibold text-gray-900">
                        Write a Python function that calculates the
                        factorial of a number.
                      </h2>

                      <textarea
                        rows={6}
                        placeholder="Write your answer here..."
                        className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600">
                      2
                    </span>

                    <div className="flex-1">
                      <h2 className="font-semibold text-gray-900">
                        Explain the difference between a function
                        parameter and an argument.
                      </h2>

                      <textarea
                        rows={5}
                        placeholder="Write your answer here..."
                        className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
              >
                Submit Assignment
              </button>
            </>
          ) : (
            <div className="mt-16 rounded-3xl border border-blue-100 bg-white p-10 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
                ✓
              </div>

              <h1 className="mt-6 text-3xl font-bold text-gray-900">
                Assignment Submitted!
              </h1>

              <p className="mx-auto mt-3 max-w-md text-gray-500">
                Your assignment has been submitted successfully and is
                now waiting for evaluation.
              </p>

              <div className="mx-auto mt-8 max-w-md rounded-xl bg-blue-50 p-5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Assignment</span>
                  <span className="font-semibold text-gray-900">
                    Assignment 03
                  </span>
                </div>

                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className="font-semibold text-blue-600">
                    Under Review
                  </span>
                </div>
              </div>

              <Link
                to="/dashboard"
                className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Back to Dashboard
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Assignment;