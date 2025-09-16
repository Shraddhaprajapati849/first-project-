// src/pages/ContactUs.jsx
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}, we have received your message!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Hero Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or want to work with us? Fill out the form
          below or reach us through the provided contact details.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md shadow"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Office
            </h3>
            <p className="text-gray-600">
              123 Silicon Street, Tech City, India
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Call Us
            </h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Email
            </h3>
            <p className="text-gray-600">support@silicon.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Working Hours
            </h3>
            <p className="text-gray-600">Mon – Fri: 9am – 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
