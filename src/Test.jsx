import React, { useRef, useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Test= [
  {
    id: 1,
    text:
      "Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.",
    name: "Cameron Williamson",
    role: "Medical Center patient",
    avatar: "/avatars/1.jpg",
    rating: 4,
  },
  {
    id: 2,
    text:
      "Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.",
    name: "Fannie Summers",
    role: "Medical Center patient",
    avatar: "/avatars/2.jpg",
    rating: 3,
  },
  {
    id: 3,
    text:
      "Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.",
    name: "Robert Fox",
    role: "Medical Center patient",
    avatar: "/avatars/3.jpg",
    rating: 5,
  },
  {
    id: 4,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum odio, bibendum efficitur urna.",
    name: "Annette Black",
    role: "Medical Center patient",
    avatar: "/avatars/4.jpg",
    rating: 4,
  },
  {
    id: 5,
    text:
      "Curabitur at lacus ac velit ornare lobortis. Donec posuere vulputate arcu. Phasellus accumsan cursus velit.",
    name: "Diane Cooper",
    role: "Medical Center patient",
    avatar: "/avatars/5.jpg",
    rating: 4,
  },
];

 function Test() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active dot based on scroll position
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.querySelector("[data-card]").offsetWidth + 24; // includes gap
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), testimonials.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll("[data-card]")[index];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 12, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
          What Our Patients Say
        </h2>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="relative flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
          style={{ paddingBottom: 20 }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              data-card
              className="snap-start flex-shrink-0 w-[320px] bg-white rounded-xl p-6 shadow-md relative"
            >
              {/* floating quote badge */}
              <div className="absolute -top-4 left-6 bg-[rgb(99,102,241)] text-white w-10 h-10 rounded-md flex items-center justify-center shadow">
                <FaQuoteLeft />
              </div>

              <p className="text-gray-600 leading-relaxed min-h-[120px]">{t.text}</p>

              {/* stars */}
              <div className="mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${i < t.rating ? "opacity-100" : "opacity-30"}`}
                    />
                  ))}
                </div>
              </div>

              {/* avatar + name below card */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://via.placeholder.com/48x48.png?text=AV";
                  }}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center mt-6 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === activeIndex ? "bg-[rgb(99,102,241)]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Test;
