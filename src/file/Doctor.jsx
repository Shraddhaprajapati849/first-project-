import React from "react";
import { Clock } from "lucide-react"; // ✅ Clock icon import

function Doctor() {
  return (
    <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4 sm:gap-6 w-full px-6 sm:px-8 py-6 mt-10">
      {/* Icon + Timings + Button All Together */}
      <div className="flex items-start sm:items-center gap-6">
        {/* Icon + Timings */}
        <div className="flex items-start sm:items-center gap-3">
          {/* Clock Icon Box */}
          <div className="bg-indigo-50 p-3 rounded-lg">
            <Clock className="text-indigo-500 w-6 h-6" />
          </div>

          {/* Timings */}
          <div className="text-sm">
            <p>
              <span className="font-bold">Mon – Fri:</span>{" "}
              <span className="text-gray-600">9:00 am – 22:00 pm</span>
            </p>
            <p>
              <span className="font-bold">Sat – Sun:</span>{" "}
              <span className="text-gray-600">9:00 am – 20:00 pm</span>
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="w-full sm:w-auto bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-600">
          Make an appointment
        </button>
      </div>
    </div>
  );
}

export default Doctor;
