import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Faculty from "./pages/Faculty";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Student pages
import Dashboard from "./pages/Dashboard";
import Lecture from "./pages/Lecture";
import Assignment from "./pages/Assignment";
import Results from "./pages/results";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            PUBLIC ROUTES
        ====================================================== */}

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/courses/:id"
          element={<CourseDetails />}
        />

        <Route
          path="/faculty"
          element={<Faculty />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Registration */}
        <Route
          path="/register"
          element={<Register />}
        />


        {/* =====================================================
            STUDENT ROUTES
        ====================================================== */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/lecture/:id"
          element={<Lecture />}
        />

        <Route
          path="/assignments"
          element={<Assignment />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />


        {/* =====================================================
            FALLBACK
        ====================================================== */}

        <Route
          path="*"
          element={<Home />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;