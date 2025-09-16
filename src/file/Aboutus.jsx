// src/pages/AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            We are passionate about delivering the best solutions to help people
            achieve their goals. Our mission is to make technology simple and
            accessible for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly explore new ideas and technologies to bring better
              solutions for our customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold honesty, transparency, and trust in everything we do.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Our customers are at the heart of our decisions and solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/200?img=11"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow"
              />
              <h3 className="text-lg font-semibold">Jane Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/200?img=12"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow"
              />
              <h3 className="text-lg font-semibold">John Smith</h3>
              <p className="text-gray-500">CTO</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/200?img=13"
                alt="Team member"
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow"
              />
              <h3 className="text-lg font-semibold">Emily Johnson</h3>
              <p className="text-gray-500">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Work With Us?</h2>
          <p className="text-gray-600 mb-6">
            We’re always looking for talented people to join our growing team.
          </p>
          <Link to="/ContactUs">
          <a
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md shadow"
          >
            Contact Us
          </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
