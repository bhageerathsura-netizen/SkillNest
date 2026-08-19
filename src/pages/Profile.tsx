import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";

const Profile: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar studentName="Abhijna" />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-8 lg:px-10">
          <p className="text-sm font-semibold text-blue-600">
            ACCOUNT
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-5 border-b border-gray-100 pb-8 sm:flex-row">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700">
                A
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Abhijna
                </h2>

                <p className="mt-1 text-gray-500">
                  Student • Learnova
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase text-gray-400">
                  Full Name
                </label>

                <p className="mt-2 font-medium text-gray-900">
                  Abhijna
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-400">
                  Email
                </label>

                <p className="mt-2 font-medium text-gray-900">
                  student@learnova.com
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-400">
                  Courses Enrolled
                </label>

                <p className="mt-2 font-medium text-gray-900">
                  4 Courses
                </p>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-400">
                  Average Progress
                </label>

                <p className="mt-2 font-medium text-blue-600">
                  78%
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/dashboard"
                className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;