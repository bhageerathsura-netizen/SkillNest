import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo login
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Left */}
      <div className="hidden flex-1 bg-blue-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="text-2xl font-bold">
          SkillNest
        </Link>

        <div className="max-w-lg">
          <p className="text-sm font-semibold text-blue-200">
            WELCOME BACK
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-tight">
            Continue your learning journey.
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Access your courses, track your progress, complete
            assignments and achieve your goals.
          </p>
        </div>

        <p className="text-sm text-blue-200">
          © 2026 SkillNest
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-700"
            >
              SkillNest
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-blue-100">
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome back 👋
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to continue learning.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-blue-600"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-md shadow-blue-100 transition hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-100" />
              <span className="text-xs text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-100" />
            </div>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Continue as Demo Student
            </button>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <button className="font-semibold text-blue-600">
                Create one
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;