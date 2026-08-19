import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/Courses";

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(courses.map((course) => course.category))
    ),
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(
          (course) =>
            course.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-200">
            EXPLORE OUR COURSES
          </p>

          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Learn skills that move you forward.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore courses designed to help you build
            practical skills, strengthen your knowledge and
            achieve your learning goals.
          </p>
        </div>
      </section>

      {/* Courses */}
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const active =
              selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-600 text-white shadow-md"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Course Count */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Available Courses
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Showing {filteredCourses.length} course
              {filteredCourses.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                category={course.category}
                duration={course.duration}
                level={course.level}
                rating={course.rating}
                students={course.students}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              No courses found
            </h3>

            <p className="mt-2 text-gray-500">
              Try selecting another category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;