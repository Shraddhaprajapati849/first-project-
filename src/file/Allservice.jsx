// src/pages/Allservice.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Allservice.jsx
 * - Place at src/pages/Allservice.jsx
 * - Uses Tailwind classes (must have Tailwind configured)
 * - Route example: <Route path="/services" element={<Allservice />} />
 */

const SAMPLE_SERVICES = [
  { id: 1, title: "General Checkup", category: "General", price: 500, img: "https://picsum.photos/seed/s1/600/400", desc: "Routine health check and consultation." },
  { id: 2, title: "Dental Cleaning", category: "Dental", price: 800, img: "https://picsum.photos/seed/s2/600/400", desc: "Professional cleaning & oral hygiene check." },
  { id: 3, title: "ECG & Cardio Check", category: "Cardiology", price: 1200, img: "https://picsum.photos/seed/s3/600/400", desc: "ECG, BP and cardiology consultation." },
  { id: 4, title: "Pediatric Consultation", category: "Pediatrics", price: 700, img: "https://picsum.photos/seed/s4/600/400", desc: "Child health and vaccine advice." },
  { id: 5, title: "Skin Consultation", category: "Dermatology", price: 900, img: "https://picsum.photos/seed/s5/600/400", desc: "Treatment plan for skin conditions." },
  { id: 6, title: "Orthopedic Checkup", category: "Orthopedics", price: 1100, img: "https://picsum.photos/seed/s6/600/400", desc: "Bone and joint assessment." },
  { id: 7, title: "Neurology Consultation", category: "Neurology", price: 1500, img: "https://picsum.photos/seed/s7/600/400", desc: "Nervous system exam & tests." },
  { id: 8, title: "Diabetes Screening", category: "Endocrinology", price: 650, img: "https://picsum.photos/seed/s8/600/400", desc: "Blood sugar test and diet plan." },
  { id: 9, title: "ENT Consultation", category: "ENT", price: 700, img: "https://picsum.photos/seed/s9/600/400", desc: "Ear, nose and throat specialist." },
  { id: 10, title: "Eye Examination", category: "Ophthalmology", price: 600, img: "https://picsum.photos/seed/s10/600/400", desc: "Vision tests and prescription." },
];

export default function Allservice() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("recommended"); // recommended | price-asc | price-desc
  const [page, setPage] = useState(1);
  const perPage = 6;

  const categories = useMemo(() => {
    const setC = new Set(SAMPLE_SERVICES.map(s => s.category));
    return ["All", ...Array.from(setC)];
  }, []);

  // filter + sort
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = SAMPLE_SERVICES.filter(s => {
      const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
      const matchesCategory = category === "All" || s.category === category;
      return matchesQuery && matchesCategory;
    });

    if (sort === "price-asc") list = list.sort((a,b) => a.price - b.price);
    else if (sort === "price-desc") list = list.sort((a,b) => b.price - a.price);
    // recommended leaves original order
    return list;
  }, [query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  function gotoPage(p) {
    setPage(Math.max(1, Math.min(totalPages, p)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">All Services</h1>
            <p className="text-gray-600 mt-1">Browse our medical & health services and book online.</p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="search"
              placeholder="Search services..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              value={category}
              onChange={(e) => { setCategory(e.target.value); setPage(1); }}
              className="px-3 py-2 rounded-lg border border-gray-300"
            >
              {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map(s => (
            <div key={s.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <img src={s.img} alt={s.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                <div className="text-sm text-gray-500 mt-1">{s.category}</div>
                <p className="text-gray-600 mt-3 text-sm">{s.desc}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-indigo-600">₹{s.price}</div>
                  <div className="text-sm text-gray-500">per session</div>
                </div>

                <div className="flex gap-2">
                  <Link
                    to={`/service/${s.id}`}
                    className="inline-block px-4 py-2 rounded-md bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  >
                    View
                  </Link>

                  <Link
                    to="/appointment"
                    className="inline-block px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {paginated.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No services match your search. Try another keyword or category.</p>
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
