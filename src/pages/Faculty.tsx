import React from "react";
import Navbar from "../components/Navbar";
import FacultyCard from "../components/FacultyCard";

const Faculty: React.FC = () => {
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
    {
      name: "Prof. Arjun Mehta",
      role: "UX Instructor",
      department: "Design",
      experience: "7+ Years",
      rating: 4.7,
    },
    {
      name: "Dr. Sneha Kapoor",
      role: "Data Scientist",
      department: "Data Science",
      experience: "9+ Years",
      rating: 4.8,
    },
    {
      name: "Prof. Vikram Singh",
      role: "Cloud Architect",
      department: "Cloud Computing",
      experience: "11+ Years",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-blue-200">
            MEET OUR EDUCATORS
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Learn from expert faculty
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Experienced educators and industry professionals dedicated
            to helping you reach your learning goals.
          </p>
        </div>
      </section>

      {/* Faculty */}
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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