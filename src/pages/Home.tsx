import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import FacultyCard from "../components/FacultyCard";


const Home: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Master modern web development with HTML, CSS, JavaScript, React and backend technologies.",
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
        "Learn Python from the basics and build real-world applications through hands-on projects.",
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
        "Explore machine learning concepts, algorithms and practical AI applications.",
      instructor: "Dr. Priya Nair",
      category: "AI & ML",
      duration: "12 Weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 760,
    },
  ];

  const faculty = [
    {
      name: "Dr. Ananya Rao",
      role: "Professor",
      department: "Computer Science",
      experience: "10+ Years",
      rating: 4.9,
    },
    {
      name: "Prof. Rahul Sharma",
      role: "Senior Instructor",
      department: "Programming",
      experience: "8+ Years",
      rating: 4.8,
    },
    {
      name: "Dr. Priya Nair",
      role: "AI Researcher",
      department: "Artificial Intelligence",
      experience: "12+ Years",
      rating: 4.9,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              🎓 Learn without limits
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
              Learn today.
              <span className="block text-blue-600">
                Grow tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              SkillNest is a modern online learning platform that helps
              students learn from expert faculty, practice their skills and
              track their academic progress.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Explore Courses →
              </Link>

              <Link
                to="/login"
                className="rounded-lg border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Start Learning
              </Link>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Courses</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">20+</p>
                <p className="text-sm text-gray-500">Expert Faculty</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">5K+</p>
                <p className="text-sm text-gray-500">Students</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-100">
              <div className="rounded-2xl bg-blue-600 p-6 text-white">
                <p className="text-sm text-blue-100">
                  Your Learning Dashboard
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Welcome back, Student 👋
                </h3>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-xs text-blue-100">Courses</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-blue-100">Lessons</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-bold">78%</p>
                    <p className="text-xs text-blue-100">Progress</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Continue Learning
                    </p>
                    <p className="font-bold text-gray-900">
                      Python Programming
                    </p>
                  </div>

                  <span className="font-bold text-blue-600">82%</span>
                </div>

                <div className="mt-4 h-2 rounded-full bg-blue-50">
                  <div className="h-2 w-[82%] rounded-full bg-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-blue-600">WHY SkillNest?</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Everything you need to learn better
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Learn, practice and measure your progress — all from one
            platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["🎥", "Video Lectures", "Learn from structured video lessons."],
            ["👨‍🏫", "Expert Faculty", "Learn directly from experienced instructors."],
            ["📝", "Assignments", "Practice what you learn."],
            ["📊", "Track Progress", "Monitor your learning journey."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {icon}
              </div>

              <h3 className="mt-5 font-bold text-gray-900">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-blue-50/50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-semibold text-blue-600">
                POPULAR COURSES
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Start learning something new
              </h2>
            </div>

            <Link
              to="/courses"
              className="hidden font-semibold text-blue-600 hover:text-blue-700 sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-blue-600">OUR FACULTY</p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Learn from the best
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculty.map((person) => (
            <FacultyCard key={person.name} {...person} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-8 py-14 text-center text-white shadow-xl shadow-blue-100">
          <h2 className="text-3xl font-bold">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-blue-100">
            Join SkillNest and take the next step in your learning journey.
          </p>

            <Link
                to="/courses"
                className="rounded-xl border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:border-blue-300"
                >
                Explore Courses →
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;