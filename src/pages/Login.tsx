import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      // Backend returned an error
      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      // =====================================================
      // LOGIN SUCCESSFUL
      // =====================================================

      // Store JWT token
      localStorage.setItem(
        "skillnest_token",
        data.token
      );

      // Store user information
      localStorage.setItem(
        "skillnest_user",
        JSON.stringify(data.user)
      );

      // Go to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);

      setError(
        "Unable to connect to the server. Please make sure the SkillNest backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-50">

      {/* =====================================================
          LEFT SIDE
      ====================================================== */}
      <div className="hidden flex-1 bg-blue-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          SkillNest
        </Link>

        {/* Main Message */}
        <div className="max-w-lg">

          <p className="text-sm font-semibold text-blue-200">
            WELCOME BACK
          </p>

          <h1 className="mt-3 text-5xl font-bold leading-tight text-white">
            Continue your learning journey.
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Access your courses, track your progress, complete
            assignments and achieve your goals.
          </p>

        </div>

        {/* Footer */}
        <p className="text-sm text-blue-200">
          © 2026 SkillNest
        </p>

      </div>

      {/* =====================================================
          RIGHT SIDE
      ====================================================== */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="mb-8 lg:hidden">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-700"
            >
              SkillNest
            </Link>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-blue-100">

            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome back 👋
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to continue learning.
            </p>

            {/* =================================================
                ERROR MESSAGE
            ================================================== */}
            {error && (
              <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* =================================================
                LOGIN FORM
            ================================================== */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div>

                <div className="mb-2 flex justify-between">

                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* =================================================
                  SIGN IN BUTTON
              ================================================== */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold !text-white shadow-md shadow-blue-100 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Signing in..."
                  : "Sign In"}
              </button>

            </form>

            {/* =================================================
                DEMO LOGIN
            ================================================== */}
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

            {/* =================================================
                REGISTER
            ================================================== */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create one
              </Link>

            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;