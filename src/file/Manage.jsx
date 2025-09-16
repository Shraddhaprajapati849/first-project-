import React from "react";
import { Link } from "react-router-dom";

function Manage() {
  return (
    <section className="text-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        See What Makes Us Different
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
        Your best care begins here. Hurry up to get top health care quality
        from leading doctors of the world.
      </p>

      {/* Image with play button overlay */}
      <div className="relative max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg group">
        <img
          src="https://img.freepik.com/free-photo/group-doctors-standing-together-hospital_23-2148980721.jpg"
          alt="Doctors"
          className="w-full h-64 sm:h-80 md:h-[520px] object-cover"
        />

        {/* Overlay + Play Button */}
        <Link to="/Medicalvideo">
        <button className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-blue-50/20 transition duration-300">
          <span className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:bg-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6 text-black transition duration-300 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Manage;
