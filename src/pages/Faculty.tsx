import React from "react";
import Navbar from "../components/Navbar";
import FacultyCard from "../components/FacultyCard";

const Faculty: React.FC = () => {
  const faculty = [
    {
      name: "Ms. Kusuma P",
      role: "Web-Development Professor",
      department: "Computer Science",
      experience: "2 Months",
      rating: 4.5,
    },
    {
      name: "Mrs. Kalpa R",
      role: "Programming Instructor",
      department: "Programming",
      experience: "13 Years",
      rating: 4.8,
    },
    {
      name: "Mrs. Kavyashree S",
      role: "AI/ML Researcher",
      department: "Artificial Intelligence",
      experience: "7 Years",
      rating: 4.9,
    },
    {
      name: "Mrs. Rose Priyanka",
      role: "UI/UX Instructor",
      department: "Design",
      experience: "21 Years",
      rating: 4.9,
    },
    {
      name: "Mrs. Kalyani S Kumar",
      role: "Data Scientist",
      department: "Data Science",
      experience: "15 Years",
      rating: 4.9,
    },
    {
      name: "Dr. Chayadevi M L",
      role: "Cloud Architect",
      department: "Cloud Computing",
      experience: "27 Years",
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="w-full bg-blue-600 text-white">
        <div className="mx-auto w-full max-w-[1600px] px-8 py-20 lg:px-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Meet Our Educators
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white lg:text-6xl">
              Learn from expert faculty
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 lg:text-xl">
              Experienced educators and industry professionals dedicated
              to helping you build skills, achieve your goals, and grow
              your career.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FACULTY SECTION
      ====================================================== */}
      <main className="mx-auto w-full max-w-[1600px] px-8 py-16 lg:px-16 lg:py-20">
        
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
              Our Team
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              Meet your instructors
            </h2>

            <p className="mt-3 max-w-2xl text-base text-slate-500">
              Learn from experienced educators and industry professionals
              who are passionate about helping students succeed.
            </p>
          </div>

          {/* Faculty count */}
          <div className="w-fit rounded-xl border border-blue-100 bg-blue-50 px-5 py-3">
            <span className="text-sm font-semibold text-blue-700">
              6 Expert Faculty
            </span>
          </div>
        </div>

        {/* =================================================
            FACULTY GRID
        ================================================== */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {faculty.map((person) => (
            <FacultyCard
              key={person.name}
              {...person}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Faculty;