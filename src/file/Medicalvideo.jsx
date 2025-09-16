// src/pages/Medicalvideo.jsx
import React, { useMemo, useState, useEffect } from "react";

/**
 * Medicalvideo.jsx
 * - Place at src/pages/Medicalvideo.jsx
 * - Usage: <Route path="/videos" element={<Medicalvideo />} />
 * - Requires Tailwind CSS
 */

const SAMPLE_VIDEOS = [
  {
    id: "v1",
    title: "Understanding Hypertension",
    desc: "Short explanation about blood pressure and prevention.",
    category: "Cardiology",
    sourceType: "youtube",
    src: "https://www.youtube.com/embed/ysz5S6PUM-U", // example embed
    thumb: "https://picsum.photos/seed/hypertension/640/360",
    duration: "5:12",
  },
  {
    id: "v2",
    title: "Basic CPR Steps",
    desc: "Step-by-step CPR demonstration for laypersons.",
    category: "Emergency",
    sourceType: "mp4",
    src: "/videos/cpr-demo.mp4", // local file in public/videos/
    thumb: "https://picsum.photos/seed/cpr/640/360",
    duration: "3:40",
  },
  {
    id: "v3",
    title: "Managing Diabetes - Diet Tips",
    desc: "Dietary guidelines and meal planning for diabetic patients.",
    category: "Endocrinology",
    sourceType: "youtube",
    src: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    thumb: "https://picsum.photos/seed/diabetes/640/360",
    duration: "7:20",
  },
  {
    id: "v4",
    title: "Yoga for Back Pain",
    desc: "Simple yoga routine to relieve lower back pain.",
    category: "Physiotherapy",
    sourceType: "mp4",
    src: "/videos/yoga-back.mp4",
    thumb: "https://picsum.photos/seed/yoga/640/360",
    duration: "9:05",
  },
];

export default function Medicalvideo() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null); // video object currently playing
  const [isOpen, setIsOpen] = useState(false);

  // derive categories
  const categories = useMemo(() => {
    const setC = new Set(SAMPLE_VIDEOS.map((v) => v.category));
    return ["All", ...Array.from(setC)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_VIDEOS.filter((v) => {
      const matchesQuery =
        !q ||
        v.title.toLowerCase().includes(q) ||
        v.desc.toLowerCase().includes(q);
      const matchesCategory = category === "All" || v.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        closePlayer();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openPlayer(video) {
    setActive(video);
    setIsOpen(true);
    // prevent page scroll while modal open
    document.body.style.overflow = "hidden";
  }

  function closePlayer() {
    setIsOpen(false);
    setActive(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Medical Videos</h1>
            <p className="text-gray-600 mt-1">
              Educational and demonstration videos to help patients and carers.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="search"
              placeholder="Search videos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-300"
            >
              {categories.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <article
              key={v.id}
              className="bg-white rounded-xl shadow overflow-hidden flex flex-col"
            >
              <div className="relative cursor-pointer" onClick={() => openPlayer(v)}>
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-40 rounded-full w-14 h-14 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-3 top-3 bg-indigo-600 text-white px-2 py-1 rounded text-sm">
                  {v.duration}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-gray-800">{v.title}</h3>
                <p className="text-sm text-gray-500 mt-2 flex-1">{v.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-600">{v.category}</span>
                  <button
                    onClick={() => openPlayer(v)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Play
                  </button>
                </div>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No videos found. Try another search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal player */}
      {isOpen && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            {/* close button */}
            <button
              onClick={closePlayer}
              className="absolute right-3 top-3 z-50 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full w-9 h-9 flex items-center justify-center"
              aria-label="Close player"
            >
              ✕
            </button>

            {/* video area */}
            <div className="aspect-w-16 aspect-h-9 bg-black">
              {active.sourceType === "mp4" ? (
                <video
                  key={active.id}
                  controls
                  autoPlay
                  className="w-full h-full object-cover bg-black"
                >
                  <source src={active.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  key={active.id}
                  title={active.title}
                  src={active.src + "?autoplay=1&rel=0"}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* info */}
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg text-gray-800">{active.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
