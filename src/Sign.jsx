import React from "react";
import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Sign() {
  return (
    <footer className="bg-[rgba(243,247,255,1)] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left: logo + description + newsletter */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-md flex items-center justify-center text-white font-bold bg-[rgba(243,247,255,1)]">
                <img src="/Logo.svg" alt="Logo" className="h-[40px] w-[40px]" />
              </div>
              <span className="text-lg font-semibold">Silicon</span>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Proin ipsum pharetra, senectus eget scelerisque varius pretium plateau velit. Lacus, eget eu
              vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec.
            </p>

            <div className="mb-4">
              <label htmlFor="footer-email" className="block text-sm font-medium mb-2">
                Subscribe to our newsletter
              </label>
              <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-1">
                  <label htmlFor="footer-email" className="sr-only">Your email</label>
                  <div className="flex items-center border rounded-l-md bg-white">
                    <span className="px-3 text-gray-400"><FaEnvelope /></span>
                    <input
                      id="footer-email"
                      type="email"
                      placeholder="Your email"
                      className="w-full py-2 pr-3 text-sm outline-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[rgb(99,102,241)] hover:bg-[rgb(79,84,221)] text-white px-4 rounded-r-md text-sm font-medium shadow transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Middle columns: links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                <li className="text-sm font-medium text-gray-800">Home</li>
                <li className="text-sm text-gray-600">About</li>
                <li className="text-sm text-gray-600">Services</li>
                <li className="text-sm text-gray-600">Prices</li>
                <li className="text-sm text-gray-600">News</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li className="text-sm font-medium text-gray-800">Facebook</li>
                <li className="text-sm text-gray-600">LinkedIn</li>
                <li className="text-sm text-gray-600">Twitter</li>
                <li className="text-sm text-gray-600">Instagram</li>
                <li className="text-sm text-gray-600">Terms & Conditions</li>
                <li className="text-sm text-gray-600">Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Right: contact */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact Us</h3>
            <a href="mailto:email@example.com" className="text-sm text-indigo-600 hover:underline mb-6 inline-block">
              email@example.com
            </a>

            <div className="mt-6">
              <div className="flex items-center gap-3 mb-3">
                <a href="#" aria-label="facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-indigo-50">
                  <FaFacebookF className="text-indigo-600 w-4 h-4" />
                </a>
                <a href="#" aria-label="linkedin" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-indigo-50">
                  <FaLinkedinIn className="text-indigo-600 w-4 h-4" />
                </a>
                <a href="#" aria-label="twitter" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-indigo-50">
                  <FaTwitter className="text-indigo-600 w-4 h-4" />
                </a>
                <a href="#" aria-label="instagram" className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-indigo-50">
                  <FaInstagram className="text-indigo-600 w-4 h-4" />
                </a>
              </div>

              <p className="text-sm text-gray-600">© All rights reserved. Made by <span className="font-medium text-gray-800">StackBros</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Sign;
