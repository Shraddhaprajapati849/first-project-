// Medical.jsx
import React from "react";
import Consultation from "../Consultation";
import { Link } from "react-router-dom";


function Medical() {
  return (
    <>
      <div className="w-full py-8">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
          {/* Left side heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Qualified Medical Specialists</h1>

          {/* Right side button */}
          <div className="ml-auto">
            <Link to="/SeeAllDoctor">
            <button className="bg-white text-blue-700 font-medium px-6 sm:px-10 py-2 rounded border border-blue-600 shadow-sm hover:shadow-md transition">
              See all doctor →
            </button>
            </Link>
          </div>
        </div>

        {/* Images Section - responsive grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc1.jpg"
                  alt="Dr. Ronald Richards"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button
                    type="button"
                    aria-label="facebook"
                    className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow hover:bg-[rgb(99,102,241)] transition"
                  >
                    <i className="fa-brands fa-facebook-f text-[16px]" />
                  </button>
                  <button
                    type="button"
                    aria-label="linkedin"
                    className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow hover:bg-blue-900 transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-[16px]" />
                  </button>
                  <button
                    type="button"
                    aria-label="twitter"
                    className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow hover:bg-[rgb(99,102,241)] transition"
                  >
                    <i className="fa-brands fa-twitter text-[16px]" />
                  </button>
                </div>
              </div>

              {/* Info box */}
              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Ronald Richards</h1>
                <p className="text-gray-500 text-sm">Neurosurgeon</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(19 reviews)</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc2.jpg"
                  alt="Dr. Esther Howard"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-facebook-f text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-blue-900">
                    <i className="fa-brands fa-linkedin-in text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-twitter text-[16px]" />
                  </button>
                </div>
              </div>

              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Esther Howard</h1>
                <p className="text-gray-500 text-sm">Therapist</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(4 reviews)</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc3.jpg"
                  alt="Dr. Jerome Bell"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-facebook-f text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-blue-900">
                    <i className="fa-brands fa-linkedin-in text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-twitter text-[16px]" />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Jerome Bell</h1>
                <p className="text-gray-500 text-sm">Anesthesiologist</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(12 reviews)</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc4.jpg"
                  alt="Dr. Ralph Edwards"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-facebook-f text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-blue-900">
                    <i className="fa-brands fa-linkedin-in text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-twitter text-[16px]" />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Ralph Edwards</h1>
                <p className="text-gray-500 text-sm">Surgeon</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(8 reviews)</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc5.jpg"
                  alt="Dr. Darrell Steward"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-facebook-f text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-blue-900">
                    <i className="fa-brands fa-linkedin-in text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-twitter text-[16px]" />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Darrell Steward</h1>
                <p className="text-gray-500 text-sm">Cardiologist</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(14 reviews)</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc6.jpg"
                  alt="Dr. Annette Black"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-facebook-f text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-blue-900">
                    <i className="fa-brands fa-linkedin-in text-[16px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-twitter text-[16px]" />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Annette Black</h1>
                <p className="text-gray-500 text-sm">Pediatrician</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(10 reviews)</span>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc7.jpg"
                  alt="Dr. Dianne Russell"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-facebook-f text-[18px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-blue-900">
                    <i className="fa-brands fa-linkedin-in text-[18px]" />
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded flex items-center justify-center shadow transition hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-twitter text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Dianne Russell</h1>
                <p className="text-gray-500 text-sm">Dentist</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(5 reviews)</span>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded overflow-hidden shadow">
              <div className="relative group">
                <img
                  src="/doc8.jpg"
                  alt="Dr. Courtney Henry"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[rgb(99,102,241)]/50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="p-3 bg-white text-black rounded shadow w-[40px] h-[42px] hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-facebook-f text-[18px]" />
                  </button>
                  <button className="p-3 bg-white text-black rounded shadow w-[40px] h-[42px] hover:bg-blue-900">
                    <i className="fa-brands fa-linkedin-in text-[18px]" />
                  </button>
                  <button className="p-3 bg-white text-black rounded shadow w-[40px] h-[42px] hover:bg-[rgb(99,102,241)]">
                    <i className="fa-brands fa-twitter text-[18px]" />
                  </button>
                </div>
              </div>
              <div className="p-4 text-center bg-white">
                <h1 className="font-bold text-lg">Dr. Courtney Henry</h1>
                <p className="text-gray-500 text-sm">Gynecologist</p>
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 text-sm">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-500 text-xs">(16 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Medical;
