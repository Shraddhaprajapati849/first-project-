// src/pages/Learn.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Start Learning with Us 🚀
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
            Explore tutorials, guides, and resources to boost your knowledge
            and skills. Everything you need in one place!
          </p>
          <Link
            to="/appointment"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100"
          >
            Make an Appointment
          </Link>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What You’ll Learn</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">React Basics</h3>
            <p className="text-gray-600">
              Learn components, props, and hooks to build interactive UIs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Bootstrap & Tailwind</h3>
            <p className="text-gray-600">
              Style your app with modern CSS frameworks quickly and easily.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Routing</h3>
            <p className="text-gray-600">
              Master React Router for smooth navigation in your app.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">State Management</h3>
            <p className="text-gray-600">
              Understand useState, useReducer, and context API for state.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">API Integration</h3>
            <p className="text-gray-600">
              Fetch and display live data using REST APIs and Axios.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Deployment</h3>
            <p className="text-gray-600">
              Learn how to deploy your React app to production.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-gray-600 mb-6">
            Join us today and accelerate your learning journey.
          </p>
          <Link
            to="/signuppage"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md shadow"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
