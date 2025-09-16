// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // which dropdown is open on desktop (null | "landings" | "pages" | "account" | "uikit")
  const [openDropdown, setOpenDropdown] = useState(null);

  // mobile accordion state: object with keys true/false
  const [mobileDropdown, setMobileDropdown] = useState({
    landings: false,
    pages: false,
    account: false,
    uikit: false,
  });

  const headerRef = useRef(null);

  // close menus on Escape or click outside
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    }
    function onDocClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, []);

  // helpers
  function toggleMobileDropdown(key) {
    setMobileDropdown((s) => ({ ...s, [key]: !s[key] }));
  }

  // sample submenu items (you can replace links)
  const dropdownItems = {
    landings: [
      { to: "/landing", label: "Main Landing" },
      { to: "/getstarted", label: "Get Started" },
      { to: "/learn", label: "Learn" },
    ],
    pages: [
      { to: "/aboutus", label: "About" },
      { to: "/contactus", label: "Contact" },
      { to: "/seealldoctor", label: "Doctors" },
    ],
    account: [
      { to: "/loginpage", label: "Login" },
      { to: "/signuppage", label: "Sign up" },
      { to: "/profile", label: "Profile" }, // create /profile if needed
    ],
    uikit: [
      { to: "/uikit", label: "Components" },
      { to: "/uikit/forms", label: "Forms" },
      { to: "/uikit/modals", label: "Modals" },
    ],
  };

  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* NAV */}
      <header ref={headerRef} className="relative top-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="/Logo.svg" alt="Logo" className="h-10 w-10" />
                <span className="font-bold text-lg">Silicon</span>
              </div>

              {/* Desktop menu */}
              <nav className="hidden md:flex items-center gap-4 text-sm font-medium relative">
                {/* Generic dropdown button renderer */}
                {[
                  { key: "landings", label: "Landings" },
                  { key: "pages", label: "Pages" },
                  { key: "account", label: "Account" },
                  { key: "uikit", label: "UI Kit" },
                ].map((item) => {
                  const isOpen = openDropdown === item.key;
                  return (
                    <div
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.key)}
                      onMouseLeave={() => setOpenDropdown((k) => (k === item.key ? null : k))}
                    >
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onFocus={() => setOpenDropdown(item.key)}
                        onBlur={() => setOpenDropdown(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") setOpenDropdown(null);
                        }}
                        className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-2"
                      >
                        <span>{item.label}</span>
                        <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                        </svg>
                      </button>

                      {/* Dropdown panel */}
                      <div
                        className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-opacity duration-150 ${
                          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                        onMouseEnter={() => setOpenDropdown(item.key)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-2">
                          {dropdownItems[item.key].map((d) => (
                            <Link
                              key={d.to}
                              to={d.to}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {d.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              {/* Dark toggle */}
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-sm">Light</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dark}
                    onChange={() => setDark(!dark)}
                    className="sr-only"
                    aria-label="Toggle dark mode"
                  />
                  <span
                    className={`w-10 h-6 block rounded-full transition-colors ${
                      dark ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`absolute left-1 top-0.5 w-5 h-5 bg-white rounded-full transform transition-transform ${
                      dark ? "translate-x-4" : "translate-x-0"
                    }`}
                    aria-hidden="true"
                  />
                </label>
                <span className="text-sm">Dark</span>
              </div>

              {/* Login Button - desktop */}
              <Link
                to="/loginpage"
                className="hidden sm:inline-flex bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 3h18v2H3zM3 7h12v2H3zM3 11h18v2H3z" fill="currentColor" />
                </svg>
                Login
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen((s) => !s)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md"
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav (absolute so it appears below header and not pushed down) */}
        {menuOpen && (
          <div
            className={`${dark ? "bg-gray-800 text-white" : "bg-white text-black"} md:hidden border-t absolute top-full left-0 w-full shadow-lg z-50`}
            role="menu"
            aria-label="Mobile menu"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Mobile: clickable accordion menu items */}
              {[
                { key: "landings", label: "Landings" },
                { key: "pages", label: "Pages" },
                { key: "account", label: "Account" },
                { key: "uikit", label: "UI Kit" },
              ].map((it) => (
                <div key={it.key} className="border-b pb-2">
                  <button
                    className="w-full flex items-center justify-between px-2 py-2"
                    onClick={() => toggleMobileDropdown(it.key)}
                    aria-expanded={mobileDropdown[it.key]}
                    aria-controls={`${it.key}-submenu`}
                  >
                    <span>{it.label}</span>
                    <svg className={`w-4 h-4 transform transition-transform ${mobileDropdown[it.key] ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                    </svg>
                  </button>

                  <div id={`${it.key}-submenu`} className={`${mobileDropdown[it.key] ? "block" : "hidden"} pl-4`}>
                    {dropdownItems[it.key].map((d) => (
                      <Link key={d.to} to={d.to} className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
                        {d.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dark}
                    onChange={() => setDark(!dark)}
                    className="mr-2"
                    aria-label="Toggle dark mode"
                  />
                  Dark mode
                </label>

                <Link
                  to="/loginpage"
                  onClick={() => setMenuOpen(false)}
                  className="ml-auto bg-purple-600 text-white px-3 py-1 rounded"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO ... (baaki aapka same code) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left content */}
          <section className="w-full lg:w-1/2 flex flex-col justify-center">
            <p className="uppercase font-semibold text-gray-500">Professional Medical Center</p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
              We Take Care <br /> of Your Health
            </h1>

            <p className="mt-4 text-gray-600 max-w-xl">
              Don’t have insurance?{" "}
              <a href="#" className="text-blue-600 underline">Click here.</a>
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              {/* 👇 Link to GetStarted page */}
              <Link
                to="/getstarted"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg shadow inline-block"
              >
                Get Started
              </Link>

              <Link to="/learn">
                <button className="bg-white border border-gray-200 px-5 py-3 rounded-lg shadow text-gray-800">
                  Learn More
                </button>
              </Link>

            </div>

            {/* Hero image (below content on small screens) */}
            <div className="mt-6">
              <img
                src="/hero-img-2-QLwqa4Iq.jpg"
                alt="Hero"
                className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg"
              />
            </div>
          </section>

          {/* Right visual / background */}
          <section className="w-full lg:w-1/2 relative flex items-start">
            {/* Background block with image */}
            <div
              className="w-full rounded-lg overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/maa.jpg')",
                minHeight: "600px",
              }}
              aria-hidden="true"
            />

            {/* Banner card: positioned over the image on large screens, inline in mobile */}
            <div className="absolute -left-40 top-10 hidden lg:block w-[500px] h-[400px] bg-indigo-600 text-white p-10 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 leading-snug">Silicon Medical Center</h2>

              <p className="text-base leading-relaxed mb-6">
                Our medical center provides a wide range of health care services.
                We use only advanced technologies to keep your family happy and
                healthy, without any unexpected surprises. We appreciate your trust
                greatly. Our patients choose us and our services because they know
                we are the best.
              </p>
              <Link to="/aboutus">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium shadow hover:bg-gray-100">
                  About Us →
                </button>
              </Link>
            </div>

            {/* Banner for mobile (below image) */}
            <div className="lg:hidden mt-6 mt-6 w-full bg-indigo-600 text-white p-6 rounded-xl shadow-xl">
              <h2 className="text-xl font-bold mb-2">Silicon Medical Center</h2>
              <p className="text-sm leading-relaxed mb-3">
                Our medical center provides a wide range of health care services.
              </p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium shadow">
                About Us →
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Header;
