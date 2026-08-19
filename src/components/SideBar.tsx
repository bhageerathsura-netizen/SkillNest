import React from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  studentName?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  studentName = "Student",
}) => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "⌂",
    },
    {
      name: "My Courses",
      path: "/courses",
      icon: "▣",
    },
    {
      name: "Assignments",
      path: "/assignments",
      icon: "✓",
    },
    {
      name: "Results",
      path: "/results",
      icon: "▤",
    },
  ];

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-blue-100 bg-white">
      
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-blue-100 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <span className="font-bold">L</span>
          </div>

          <span className="text-xl font-bold text-blue-700">
            SkillNest
          </span>
        </Link>
      </div>

      {/* Student */}
      <div className="border-b border-blue-100 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            {studentName.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              {studentName}
            </p>

            <p className="text-xs text-gray-500">
              Student
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Learning
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <span className="flex w-5 justify-center text-base">
                  {item.icon}
                </span>

                {item.name}
              </Link>
            );
          })}
        </div>

        <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Account
        </p>

        <Link
          to="/profile"
          className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all ${
            location.pathname === "/profile"
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
          }`}
        >
          <span className="flex w-5 justify-center">◉</span>
          Profile
        </Link>
      </nav>

      {/* Bottom Help Card */}
      <div className="p-4">
        <div className="rounded-xl bg-blue-50 p-4">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
            ?
          </div>

          <p className="text-sm font-semibold text-gray-900">
            Need help?
          </p>

          <p className="mt-1 text-xs leading-5 text-gray-500">
            Get assistance with your courses.
          </p>

          <button className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700">
            Contact Support →
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;