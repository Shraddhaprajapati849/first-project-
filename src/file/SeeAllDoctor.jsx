// src/pages/SeeAllDoctor.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * SeeAllDoctor.jsx
 * - Place at src/pages/SeeAllDoctor.jsx
 * - TailwindCSS classes assumed
 * - Route: <Route path="/doctors" element={<SeeAllDoctor />} />
 * - "View profile" links to /doctor/:id (create that route if needed)
 */

const SAMPLE_DOCTORS = [
  { id: 1, name: "Dr. Asha Verma", specialty: "Cardiology", location: "Delhi", rating: 4.8, fee: "₹1200", img: "https://i.pravatar.cc/120?img=32" },
  { id: 2, name: "Dr. Rohit Singh", specialty: "General Physician", location: "Noida", rating: 4.5, fee: "₹600", img: "https://i.pravatar.cc/120?img=45" },
  { id: 3, name: "Dr. Neha Kapoor", specialty: "Dermatology", location: "Gurgaon", rating: 4.7, fee: "₹900", img: "https://i.pravatar.cc/120?img=12" },
  { id: 4, name: "Dr. Vikram Patel", specialty: "Orthopedics", location: "Mumbai", rating: 4.6, fee: "₹1000", img: "https://i.pravatar.cc/120?img=29" },
  { id: 5, name: "Dr. Sunita Rao", specialty: "Pediatrics", location: "Chennai", rating: 4.9, fee: "₹800", img: "https://i.pravatar.cc/120?img=10" },
  { id: 6, name: "Dr. Amit Chawla", specialty: "Neurology", location: "Delhi", rating: 4.4, fee: "₹1500", img: "https://i.pravatar.cc/120?img=5" },
  { id: 7, name: "Dr. Priya Sharma", specialty: "Gynecology", location: "Pune", rating: 4.6, fee: "₹1100", img: "https://i.pravatar.cc/120?img=14" },
  { id: 8, name: "Dr. Karan Mehta", specialty: "ENT", location: "Bengaluru", rating: 4.3, fee: "₹700", img: "https://i.pravatar.cc/120?img=22" },
  { id: 9, name: "Dr. Ritu Jain", specialty: "Endocrinology", location: "Hyderabad", rating: 4.5, fee: "₹1300", img: "https://i.pravatar.cc/120?img=19" },
  { id: 10, name: "Dr. Suresh Kumar", specialty: "Urology", location: "Kolkata", rating: 4.2, fee: "₹950", img: "https://i.pravatar.cc/120?img=8" },
];

export default function SeeAllDoctor() {
  // UI state
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 6;

  // derive specialties list
  const specialties = useMemo(() => {
    const setS = new Set(SAMPLE_DOCTORS.map(d => d.specialty));
    return ["All", ...Array.from(setS)];
  }, []);

  // filtered list
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_DOCTORS.filter(d => {
      const matchName = !q || d.name.toLowerCase().includes(q);
      const matchSpec = specialty === "All" || d.specialty === specialty;
      return matchName && matchSpec;
    });
  }, [query, specialty]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  function gotoPage(p) {
    setPage(Math.max(1, Math.min(totalPages, p)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Find a Doctor</h1>
            <p className="text-gray-600 mt-1">Search by name or specialty and book an appointment.</p>
          </div>

          {/* Search + filter */}
          <div className="flex gap-3 items-center">
            <input
              type="search"
              placeholder="Search by name..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              value={specialty}
              onChange={(e) => { setSpecialty(e.target.value); setPage(1); }}
              className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
            >
              {specialties.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map(doc => (
            <div key={doc.id} className="bg-white rounded-xl shadow p-5 flex flex-col">
              <div className="flex items-center gap-4">
                <img src={doc.img} alt={doc.name} className="w-20 h-20 rounded-full object-cover shadow-sm" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
                  <div className="text-sm text-gray-500">{doc.specialty} • {doc.location}</div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 rounded bg-green-100 text-green-800 font-medium">{doc.rating} ★</span>
                    <span className="text-gray-500">Fee: {doc.fee}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mt-4 flex-1">{/* short bio if any */} Experienced specialist with a patient-centric approach.</p>

              <div className="mt-4 flex gap-2">
                <Link
                  to={`/doctor/${doc.id}`}
                  className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  View Profile
                </Link>

                <Link
                  to="/appointment"
                  className="inline-block px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}

          {paginated.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No doctors found for your search. Try another query or specialty.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => gotoPage(page - 1)}
            disabled={page === 1}
            className={`px-3 py-1 rounded-md border ${page === 1 ? "text-gray-300 border-gray-200" : "text-gray-700 border-gray-300 hover:bg-gray-100"}`}
          >
            Prev
          </button>

          {/* show pages (compact) */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => gotoPage(p)}
                  className={`px-3 py-1 rounded-md ${p === page ? "bg-indigo-600 text-white" : "border border-gray-200 text-gray-700 hover:bg-gray-50"}`}
                >
                  {p}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => gotoPage(page + 1)}
            disabled={page === totalPages}
            className={`px-3 py-1 rounded-md border ${page === totalPages ? "text-gray-300 border-gray-200" : "text-gray-700 border-gray-300 hover:bg-gray-100"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
