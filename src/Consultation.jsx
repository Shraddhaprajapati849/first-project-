import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import Sign from "./Sign";
import { Link } from "react-router-dom";

function Consultation() {
 
  return (
    <section className="w-full px-10 py-12">
      <div className="max-w-7xl mx-auto">
        {/* increased gap: gap-20 (more space between left & right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: map/card (iframe so map always shows) */}
          <div>
            <div className="rounded-xl shadow-lg overflow-hidden">
              <iframe
  title="Noe Valley Bakery map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.387965161857!2d77.0941128!3d28.6464336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bbdbca6dcd%3A0x123456789abcdef!2sSome%20Location!5e0!3m2!1sen!2sin!4v1691234567890"
  className="w-full h-[430px] rounded-xl"
  width="100%"
  height="440"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            </div>
          </div>

          {/* Right: content (added extra left padding lg:pl-12 for more separation) */}
          <div className="px-4 lg:px-2h-[430px]">
            <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-6 text-left">
              Get Free Professional Consultation
            </h2>

            <ul className="space-y-4 text-gray-600 mb-8 mt-20">
              <li className="flex items-start gap-4">
                <span className="mt-1 text-indigo-600">
                  <MdLocationOn className="w-6 h-6" />
                </span>
                <div>
                  <div className="text-gray-800 font-medium">Noe Valley Bakery</div>
                  <div className="text-sm">24th Street, San Francisco, CA, USA</div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="text-indigo-600">
                  <FiPhone className="w-5 h-5" />
                </span>
                <span className="text-sm text-gray-700">(406) 555-0120</span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-1 text-indigo-600">
                  <FiClock className="w-5 h-5" />
                </span>
                <div className="text-sm text-gray-700">
                  <div>
                    <strong>Mon – Fri:</strong> 9:00 am – 22:00 pm
                  </div>
                  <div>
                    <strong>Sat – Sun:</strong> 9:00 am – 20:00 pm
                  </div>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="text-indigo-600">
                  <FiMail className="w-5 h-5" />
                </span>
                <span className="text-sm text-gray-700">example@email.com</span>
              </li>
            </ul> 
            
            

<Link to="/appointment">
  <button
    type="button"
    className="inline-block bg-[rgb(99,102,241)] hover:bg-[rgb(79,84,221)] text-white font-medium px-6 py-3 rounded-md shadow-lg transition transform hover:-translate-y-0.5"
  >
    Make an appointment
  </button>
</Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
