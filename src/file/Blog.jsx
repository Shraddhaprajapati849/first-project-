// Blog.jsx
import React from "react";
import Slider from "react-slick";
import { FaRegBookmark, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const articles = [
  { id: 1, category: "Diseases", time: "12 hours ago", title: "Updates on COVID-19 vaccination efforts in your area", author: "Ralph Edwards", role: "MBBS, MD Gynaecology", img: "https://images.unsplash.com/photo-1584515933487-779824d29309", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 2, category: "Healthy Tips", time: "1 day ago", title: "New drug to halt dementia after multiple head injuries", author: "Jenny Wilson", role: "Ph.D. Physiology", img: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, category: "Psychology", time: "Nov 24, 2023", title: "Empowering women to make their health a priority", author: "Albert Flores", role: "M.Sc. Clinical Neuroscience", img: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 4, category: "Diseases", time: "12 hours ago", title: "Updates on COVID-19 vaccination efforts in your area", author: "Ralph Edwards", role: "MBBS, MD Gynaecology", img: "https://images.unsplash.com/photo-1584515933487-779824d29309", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 5, category: "Healthy Tips", time: "1 day ago", title: "New drug to halt dementia after multiple head injuries", author: "Jenny Wilson", role: "Ph.D. Physiology", img: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 6, category: "Psychology", time: "Nov 24, 2023", title: "Empowering women to make their health a priority", author: "Albert Flores", role: "M.Sc. Clinical Neuroscience", img: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
];

// 👈 Left Arrow Button
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous"
    className="absolute left-3 top-1/2 transform -translate-y-1/2 z-30 
               w-10 h-10 flex items-center justify-center 
               rounded-full bg-white border border-gray-300 shadow-lg 
               hover:bg-blue-800 transition"
  >
    <FaChevronLeft className="text-black text-lg hover:text-white" />
  </button>
);

// 👉 Right Arrow Button
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    className="absolute right-3 top-1/2 transform -translate-y-1/2 z-30 
               w-10 h-10 flex items-center justify-center 
               rounded-full bg-white border border-gray-300 shadow-lg 
               hover:bg-blue-800 transition"
  >
    <FaChevronRight className="text-black text-lg hover:text-white" />
  </button>
);

const Blog = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="h-[640px] w-full">
      <div className="mt-5">
        <h1 className="text-[40px] font-bold text-center">
          Latest News & Healthy Tips
        </h1>
      </div>

      <div className="w-full px-4 py-8">
        <div className="relative overflow-visible">
          <Slider {...settings} className="!flex gap-2">
            {articles.map((item) => (
              <div key={item.id} className="px-2"> {/* width kam karne ke liye */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-[300px] mx-auto">
                  <div className="relative">
                    <img src={item.img} alt={item.title} className="w-full h-52 object-cover" />
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                      <FaRegBookmark className="text-gray-700" />
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start text-sm text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-700">
                        {item.category}
                      </span>
                      <span>{item.time}</span>
                    </div>

                    <h3 className="font-semibold text-lg text-gray-900 mb-5">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                      <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full" />
                      <div>
                        <h4 className="font-semibold text-sm">{item.author}</h4>
                        <p className="text-xs text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
