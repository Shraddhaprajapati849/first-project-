// Services.jsx
import React from "react";
import Manage from "./Manage";

function Services() {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Services</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Quick access to doctors, emergency help and COVID-19 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Find a Doctor */}
          <article
            aria-labelledby="svc-find-doctor"
            className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition min-h-[260px]"
          >
            <div className="flex items-center justify-center bg-blue-50 rounded-full p-4">
              <i className="fa-solid fa-user-doctor text-4xl sm:text-5xl md:text-6xl text-blue-600" />
            </div>

            <h3 id="svc-find-doctor" className="font-bold text-lg sm:text-xl mt-4">
              Find a Doctor
            </h3>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Search the right doctor by location and specialty.
            </p>

            <a
              href="#"
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              See all doctors &rarr;
            </a>
          </article>

          {/* Card 2 - Emergency Service */}
          <article
            aria-labelledby="svc-emergency"
            className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition min-h-[260px]"
          >
            <div className="flex items-center justify-center bg-blue-50 rounded-full p-4">
              <i className="fa-solid fa-truck-medical text-4xl sm:text-5xl md:text-6xl text-blue-600" />
            </div>

            <h3 id="svc-emergency" className="font-bold text-lg sm:text-xl mt-4">
              Emergency Service
            </h3>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              24/7 emergency assistance. Call (406) 555-0120
            </p>

            <a
              href="#"
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Contact us &rarr;
            </a>
          </article>

          {/* Card 3 - COVID-19 Info */}
          <article
            aria-labelledby="svc-covid"
            className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition min-h-[260px]"
          >
            <div className="flex items-center justify-center bg-blue-50 rounded-full p-4">
              <i className="fa-solid fa-virus-covid text-4xl sm:text-5xl md:text-6xl text-blue-600" />
            </div>

            <h3 id="svc-covid" className="font-bold text-lg sm:text-xl mt-4">
              COVID-19 Info
            </h3>

            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Quick COVID-19 testing by appointment.
            </p>

            <a
              href="#"
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Learn more &rarr;
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
