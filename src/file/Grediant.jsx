// Grediant.jsx
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // keep your custom styles here if any
import { Link } from "react-router-dom";

const slides = [
  {
    img: "/doctr.jpg",
    title: "Support Groups for Depression & Anxiety",
    desc: "Magna cursus feugiat sed sodales praesent vehicula integer arcu. Felis duis lectus felis, tempus aliquet quis non.",
    btn: "Learn more",
  },
  {
    img: "/02--Npy3eSX.jpg",
    title: "Find Comfort in Community",
    desc: "Et facilisi vel, luctus sed interdum vitae nec, velit. Maecenas purus et pharetra, at volutpat aenean.",
    btn: "Join Now",
  },
];

const Grediant = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // we use custom arrows
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1024, settings: { adaptiveHeight: true } },
      { breakpoint: 640, settings: { adaptiveHeight: true } },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto my-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Custom arrows (overlay) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:flex items-center justify-between h-full pointer-events-auto">
          <button
            onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
            className="ml-1 sm:ml-4 lg:ml-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Previous"
          >
            &lt;
          </button>

          <button
            onClick={() => sliderRef.current && sliderRef.current.slickNext()}
            className="mr-1 sm:mr-4 lg:mr-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className="relative">
        {slides.map((slide, idx) => (
          <div key={idx} className="px-2">
            <div className="flex flex-col lg:flex-row items-stretch bg-gray-50 rounded-xl overflow-hidden shadow-md">
              {/* Image column */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover"
                />
              </div>

              {/* Content column */}
              <div className="lg:w-1/2 w-full p-6 sm:p-8 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {slide.title}
                </h2>
                <p className="text-gray-600 mb-6">{slide.desc}</p>

                <div className="flex items-center gap-4">
                  <Link to="Learn">
                  <button
                    className="inline-flex items-center justify-center px-5 py-2 rounded-md text-white bg-gradient-to-r from-rose-500 to-pink-500 shadow-md hover:opacity-95 transition"
                  >
                    {slide.btn}
                  </button>
                  </Link>

                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Mobile arrows (shown on small screens) */}
      <div className="flex sm:hidden items-center justify-between mt-4">
        <button
          onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          aria-label="Prev mobile"
        >
          &lt;
        </button>
        <button
          onClick={() => sliderRef.current && sliderRef.current.slickNext()}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          aria-label="Next mobile"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Grediant;
