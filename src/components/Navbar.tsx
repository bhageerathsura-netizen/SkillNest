import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center px-8 lg:px-12">
        
        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <span className="text-xl font-bold">S</span>
          </div>

          <span className="text-2xl font-bold tracking-tight text-blue-600">
            SkillNest
          </span>
        </Link>

        {/* =====================================================
            NAVIGATION
        ====================================================== */}
        <div className="ml-16 hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-7 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.name}

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            RIGHT ACTIONS
        ====================================================== */}
        <div className="ml-auto flex items-center gap-5">
          <Link
            to="/login"
            className="hidden px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-600 sm:block"
          >
            Login
          </Link>

          <Link
            to="/login"
            className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:border-blue-300"
        >
            Get Started
         </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;