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
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      
      {/* Profile Image */}
      <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-blue-50 bg-blue-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-blue-700">
            {name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
        {name}
      </h3>

      {/* Role */}
      <p className="mt-1 text-sm font-medium text-blue-600">
        {role}
      </p>

      {/* Department */}
      <p className="mt-2 text-sm text-gray-500">
        {department}
      </p>

      {/* Stats */}
      <div className="mt-5 flex items-center justify-center gap-5 border-t border-gray-100 pt-4">
        <div>
          <p className="text-sm font-bold text-gray-900">
            {experience}
          </p>

          <p className="text-xs text-gray-400">
            Experience
          </p>
        </div>

        <div className="h-8 w-px bg-gray-200" />

        <div>
          <p className="text-sm font-bold text-gray-900">
            ★ {rating}
          </p>

          <p className="text-xs text-gray-400">
            Rating
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-5 w-full rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
        View Profile
      </button>
    </div>
  );
};

export default FacultyCard;