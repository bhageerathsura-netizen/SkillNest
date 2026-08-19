import React from "react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: number | string;
  title: string;
  description?: string;
  instructor: string;
  category?: string;
  duration?: string;
  level?: string;
  rating?: number;
  students?: number;
  progress?: number;
  image?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  instructor,
  category = "Technology",
  duration = "8 Weeks",
  level = "Beginner",
  rating = 4.8,
  students = 500,
  progress,
  image,
}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      
      {/* Course Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-white">
              <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-2xl font-bold backdrop-blur">
                {title.charAt(0)}
              </div>

              <p className="text-sm font-medium text-blue-100">
                {category}
              </p>
            </div>
          </div>
        )}

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-700">
          {title}
        </h3>

        {description && (
          <p className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500">
            {description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
            {instructor.charAt(0)}
          </div>

          <span className="text-sm text-gray-600">
            {instructor}
          </span>
        </div>

        {/* Course Info */}
        <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
          <span>◷ {duration}</span>
          <span>•</span>
          <span>{level}</span>
        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-gray-800">
              ★ {rating}
            </span>

            <span className="text-xs text-gray-400">
              ({students})
            </span>
          </div>

          {progress !== undefined && (
            <span className="text-xs font-semibold text-blue-600">
              {progress}% complete
            </span>
          )}
        </div>

        {/* Progress */}
        {progress !== undefined && (
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Button */}
        <Link
          to={`/courses/${id}`}
          className="mt-5 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          {progress !== undefined ? "Continue Learning" : "View Course"}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;