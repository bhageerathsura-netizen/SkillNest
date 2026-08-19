import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold text-blue-200">
            ABOUT SkillNest
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Learning made simple.
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            SkillNest is designed to bring courses, faculty, lectures,
            assignments and academic progress together in one simple
            learning experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["🎓", "Learn", "Access structured courses from expert faculty."],
            ["🚀", "Practice", "Reinforce your knowledge through assignments."],
            ["📊", "Grow", "Track your progress and results over time."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 p-7 text-center shadow-sm"
            >
              <div className="text-3xl">{icon}</div>

              <h2 className="mt-4 text-xl font-bold text-gray-900">
                {title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-blue-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to start?
          </h2>

          <p className="mt-2 text-gray-500">
            Explore our courses and begin your journey.
          </p>

          <Link
            to="/courses"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;