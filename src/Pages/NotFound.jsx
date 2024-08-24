// src/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-nero/80 mb-4">404</h1>
        <p className="text-xl text-nero/60 mb-4">Oops! Page not found.</p>
        <p className="text-nero/50 mb-8">
          The page you are looking for might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-nero rounded-lg hover:bg-nero/80"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
