import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const slides = [
  { quote: "Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.", rating: 4, name: "Cameron Williamson", role: "Medical Center patient", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { quote: "Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.", rating: 3, name: "Fannie Summers", role: "Medical Center patient", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
  { quote: "Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.", rating: 5, name: "Robert Fox", role: "Medical Center patient", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere arcu, bibendum efficitur urna.", rating: 4, name: "Annette Black", role: "Medical Center patient", avatar: "https://randomuser.me/api/portraits/women/90.jpg" },
  { quote: "Curabitur ut sem euismod, posuere nisl id, posuere metus. Suspendisse potenti.", rating: 4, name: "Alex Johnson", role: "Medical Center patient", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
];

const Stars = ({ n = 0 }) => {
  const total = 5;
  return (
    <div className="stars">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={i < n ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
};

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,           // hide slick's built-in arrows
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h1 className="section-title">
        What Our Patients Say    
        </h1>

        <div className="slider-with-controls">
          <Slider ref={sliderRef} {...settings} className="testimonials-slider h-[330px] w-full">
            {slides.map((s, idx) => (
              <div key={idx} className="testimonial-card-wrap mt-10">
                <div className="testimonial-card h-[50px] w-[300px]">
                  <div className="quote-badge h-[90px] w-[40px] flex items-center justify-center text-lg font-bold">
                          “
                  </div>

                  <p className="quote-text">{s.quote}</p>
                  <Stars n={s.rating} />
                </div>

                <div className="testimonial-meta">
                  <img className="avatar" src={s.avatar} alt={s.name} />
                  <div className="meta-text">
                    <div className="meta-name">{s.name}</div>
                    <div className="meta-role">{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* CENTERED CONTROLS: placed right below the slider and centered */}
          <div className="center-controls">
            <button
              className="arrow-btn center-control-btn"
              aria-label="Previous testimonials"
              onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
            >
              {"<"}
            </button>

            <button
              className="arrow-btn center-control-btn"
              aria-label="Next testimonials"
              onClick={() => sliderRef.current && sliderRef.current.slickNext()}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
