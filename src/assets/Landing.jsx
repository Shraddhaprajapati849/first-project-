// src/pages/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="antialiased text-gray-800">
      {/* HERO */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Compassionate care. Advanced medicine. <br />
                <span className="text-yellow-300">Here for your health.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-indigo-100 max-w-xl">
                Trusted specialists, modern facilities and personalised treatment plans — all under one roof.
                Book appointments, consult online and access medical resources easily.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/getstarted"
                  className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md shadow hover:shadow-lg transition"
                >
                  Get Started
                </Link>

                <Link
                  to="/learn"
                  className="inline-block bg-indigo-500 bg-opacity-20 text-white px-6 py-3 rounded-md hover:bg-opacity-30 transition"
                >
                  Learn more
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-indigo-100">Emergency Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-indigo-100">Specialists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm text-indigo-100">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580281657521-0b3b08e8d2f7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-1.2.1&s=1b5b8b1c9a1c3f7f3f2baff4d8b4b3ea"
                alt="medical hero"
                className="w-full rounded-xl shadow-xl object-cover h-80 lg:h-[420px]"
              />
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow p-4 w-64">
                <div className="text-sm text-gray-500">Featured Doctor</div>
                <div className="mt-2 flex items-center gap-3">
                  <img src="https://i.pravatar.cc/72?img=65" alt="doc" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">Dr. Asha Verma</div>
                    <div className="text-xs text-gray-500">Cardiologist • 4.8 ★</div>
                  </div>
                </div>
                <Link to="/doctors" className="mt-3 inline-block text-sm text-indigo-600 font-medium">
                  View profile →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "General Checkup", icon: "stethoscope", desc: "Comprehensive health screening" },
            { title: "Dental Care", icon: "tooth", desc: "Cleaning, crowns, root canals" },
            { title: "Cardiology", icon: "heart", desc: "Heart checks & ECG" },
            { title: "Pediatrics", icon: "child", desc: "Child health & vaccines" },
          ].map((s, i) => (
            <article key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600">
                  {/* placeholder icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.656 0 3 1.343 3 3s-1.344 3-3 3-3-1.343-3-3 1.344-3 3-3z" />
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 14c0 3.314 2.686 6 6 6s6-2.686 6-6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why patients choose us</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3 items-start">
                <div className="text-indigo-600 mt-1">✔</div>
                <div>
                  <div className="font-medium">Experienced specialists</div>
                  <div className="text-sm text-gray-500">Board-certified doctors across multiple disciplines.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="text-indigo-600 mt-1">✔</div>
                <div>
                  <div className="font-medium">Modern diagnostic tools</div>
                  <div className="text-sm text-gray-500">CT, MRI, lab services with fast results.</div>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <div className="text-indigo-600 mt-1">✔</div>
                <div>
                  <div className="font-medium">Personalised care plans</div>
                  <div className="text-sm text-gray-500">Treatment plans built for each patient.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-2">Quick Booking</h4>
              <p className="text-sm text-gray-500">Book in a few clicks — in-person or teleconsultation.</p>
              <Link to="/appointment" className="mt-4 inline-block text-indigo-600 font-medium">Book Appointment →</Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-2">Online Consultation</h4>
              <p className="text-sm text-gray-500">Secure video consultations from home.</p>
              <Link to="/loginpage" className="mt-4 inline-block text-indigo-600 font-medium">Start Teleconsult →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Meet our specialists</h2>
          <Link to="/doctors" className="text-indigo-600">See all doctors →</Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow flex flex-col items-center text-center">
              <img src={`https://i.pravatar.cc/120?img=${20 + i}`} alt="doc" className="w-20 h-20 rounded-full object-cover mb-3" />
              <div className="font-semibold">Dr. Priya Sharma</div>
              <div className="text-sm text-gray-500">Pediatrics</div>
              <div className="mt-4 flex gap-2">
                <Link to="/doctor/1" className="text-sm inline-block px-3 py-1 rounded-md bg-indigo-600 text-white">Profile</Link>
                <Link to="/appointment" className="text-sm inline-block px-3 py-1 rounded-md border border-indigo-600 text-indigo-600">Book</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO + TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Educational video</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="medical intro"
                src="https://www.youtube.com/embed/ysz5S6PUM-U"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Patient stories</h3>
            <div className="space-y-4">
              <blockquote className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-gray-700">"The doctors here treated me with great care — my recovery was smooth and quick."</p>
                <cite className="text-sm text-gray-500 mt-2 block">— Ramesh K.</cite>
              </blockquote>
              <blockquote className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-gray-700">"Fast appointments and friendly staff. Highly recommended."</p>
                <cite className="text-sm text-gray-500 mt-2 block">— Sunita P.</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Frequently asked questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium cursor-pointer">How do I book an appointment?</summary>
            <p className="text-sm text-gray-600 mt-2">Use the Book button on doctor profiles or visit the appointment page to choose date/time.</p>
          </details>

          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium cursor-pointer">Do you offer teleconsultations?</summary>
            <p className="text-sm text-gray-600 mt-2">Yes — we provide secure video consultations. Login or sign up to schedule.</p>
          </details>

          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium cursor-pointer">What insurance do you accept?</summary>
            <p className="text-sm text-gray-600 mt-2">We accept most major insurers. Contact support for details.</p>
          </details>

          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium cursor-pointer">Are emergency services available?</summary>
            <p className="text-sm text-gray-600 mt-2">Yes — our emergency department is open 24/7.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Need care now?</h3>
            <p className="text-indigo-100">Call our helpline or book an urgent appointment online.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+919876543210" className="inline-block bg-white text-indigo-700 px-5 py-3 rounded-md font-semibold">Call Now</a>
            <Link to="/appointment" className="inline-block bg-indigo-50 text-indigo-700 px-5 py-3 rounded-md font-semibold">Book Appointment</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-white font-bold text-lg">Silicon Medical</div>
            <p className="mt-3 text-sm">Quality healthcare & personalised treatment plans.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/aboutus" className="hover:underline">About</Link></li>
              <li><Link to="/doctors" className="hover:underline">Doctors</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/contactus" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm">123 Silicon Street, Tech City</p>
            <p className="mt-2 text-sm">support@silicon.com</p>
            <p className="mt-2 text-sm">+91 98765 43210</p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Silicon Medical • All rights reserved</div>
      </footer>
    </div>
  );
}
