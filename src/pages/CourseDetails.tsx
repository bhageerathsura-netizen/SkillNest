import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { courses } from "../data/Courses";

const CourseDetails: React.FC = () => {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  // Course not found
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="rounded-2xl bg-white p-12 shadow-sm">
            <h1 className="text-3xl font-bold text-gray-900">
              Course not found
            </h1>

            <p className="mt-3 text-gray-500">
              The course you are looking for does not
              exist.
            </p>

            <Link
              to="/courses"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Back to Courses
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Course Hero */}
      <section className="bg-blue-600 px-6 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/courses"
            className="text-sm font-medium text-blue-200 hover:text-white"
          >
            ← Back to Courses
          </Link>

          <div className="mt-8 max-w-4xl">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              {course.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              {course.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div>
                <p className="font-bold text-white">
                  {course.instructor}
                </p>

                <p className="text-blue-200">
                  Instructor
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  {course.duration}
                </p>

                <p className="text-blue-200">
                  Duration
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  {course.level}
                </p>

                <p className="text-blue-200">
                  Level
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  ★ {course.rating}
                </p>

                <p className="text-blue-200">
                  Rating
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  {course.students.toLocaleString()}
                </p>

                <p className="text-blue-200">
                  Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}
          <div className="lg:col-span-2">

            {/* About */}
            <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                About this course
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                {course.description}
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                This course is designed to provide practical
                knowledge through structured lessons,
                assignments and hands-on learning activities.
                By completing the course, students will build
                a strong foundation in {course.category.toLowerCase()}.
              </p>
            </section>

            {/* Syllabus */}
            <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Course Syllabus
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {course.lessons} lessons included in this
                course.
              </p>

              <div className="mt-6 space-y-3">
                {course.syllabus.map(
                  (lesson, index) => (
                    <div
                      key={lesson}
                      className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-blue-100 hover:bg-blue-50"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                        {index + 1}
                      </div>

                      <p className="font-medium text-gray-800">
                        {lesson}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Instructor */}
            <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Instructor
              </h2>

              <div className="mt-6 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
                  {course.instructor
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {course.instructor}
                  </h3>

                  <p className="mt-1 text-sm text-blue-600">
                    {course.category} Instructor
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Experienced educator dedicated to
                    helping students achieve their
                    learning goals.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Enrollment Card */}
          <aside>
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

              {/* Course Icon */}
              <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl font-bold text-white backdrop-blur">
                  {course.title.charAt(0)}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Course
                </p>

                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  {course.title}
                </h3>
              </div>

              <div className="mt-6 space-y-4 border-t border-gray-100 pt-5">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Duration
                  </span>

                  <span className="font-semibold text-gray-900">
                    {course.duration}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Level
                  </span>

                  <span className="font-semibold text-gray-900">
                    {course.level}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Lessons
                  </span>

                  <span className="font-semibold text-gray-900">
                    {course.lessons}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Students
                  </span>

                  <span className="font-semibold text-gray-900">
                    {course.students.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Rating
                  </span>

                  <span className="font-semibold text-gray-900">
                    ★ {course.rating}
                  </span>
                </div>
              </div>

              <Link
                to="/login"
                className="mt-7 flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md shadow-blue-100 transition hover:bg-blue-700"
              >
                Enroll Now
              </Link>

              <p className="mt-4 text-center text-xs text-gray-400">
                Start learning today with SkillNest.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;