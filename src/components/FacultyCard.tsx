import React from "react";

interface FacultyCardProps {
  name: string;
  role: string;
  department: string;
  experience?: string;
  rating?: number;
  image?: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  role,
  department,
  experience = "5+ Years",
  rating = 4.8,
  image,
}) => {
  const initials = name
    .split(" ")
    .filter((word) => !["Ms.", "Mrs.", "Mr.", "Dr.", "Prof."].includes(word))
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      
      {/* =====================================================
          PROFILE
      ====================================================== */}
      <div className="flex items-center gap-5">
        {/* Profile Image / Initials */}
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-blue-50 ring-4 ring-blue-50">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-blue-600">
              {initials}
            </div>
          )}
        </div>

        {/* Name + Role */}
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
            {name}
          </h3>

          <p className="mt-1 text-sm font-semibold text-blue-600">
            {role}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {department}
          </p>
        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ====================================================== */}
      <div className="my-6 h-px bg-slate-100" />

      {/* =====================================================
          STATS
      ====================================================== */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* Experience */}
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Experience
          </p>

          <p className="mt-1 text-base font-bold text-slate-900">
            {experience}
          </p>
        </div>

        {/* Rating */}
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Rating
          </p>

          <p className="mt-1 text-base font-bold text-slate-900">
            ★ {rating}
          </p>
        </div>
      </div>

      {/* =====================================================
          BUTTON
      ====================================================== */}
      <button
        type="button"
        className="mt-6 w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-blue-600 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
      >
        View Profile
      </button>
    </div>
  );
};

export default FacultyCard;