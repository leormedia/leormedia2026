import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurClientsComponent = () => {
  // Dynamic import of all images from the Clients folder
  // This uses Webpack's require.context to load all images without manual imports
  let clientLogos = [];
  try {
    const importAll = (r) => r.keys().map(r);
    clientLogos = importAll(require.context('../assets/Clients', false, /\.(png|jpe?g|svg|webp)$/));
  } catch (err) {
    console.error("Error loading client logos:", err);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <section
      className="py-10 bg-gray-50/50 overflow-hidden border-y border-gray-100 cursor-pointer group hover:bg-gray-100/50 transition-colors"
      
    >
      <div className="container mx-auto px-4 mb-8 md:mb-16">
        <div className="text-center">

          <span className="inline-block px-4 py-1.5 bg-primary/20 text-black rounded-full text-[14px] font-semibold mb-4">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          <h2 className="text-[26px] md:text-[48px] tracking-wider font-bold text-gray-900 font-FKScreamerBold uppercase"
          >Our Clients</h2>

        </div>
      </div>

      <div className="client-slider-wrapper relative">
        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <Slider {...settings}>
          {clientLogos.map((logo, index) => (
            <div key={index} className="px-2 md:px-4 outline-none">
              <div className="h-20 md:h-[220px] w-full flex items-center justify-center bg-white/20 border border-transparent hover:border-gray-100/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/20 rounded-2xl transition-all duration-500 group cursor-pointer">
                <img
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="max-h-[70%] max-w-[80%] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
                .client-slider-wrapper .slick-track {
                    display: flex !important;
                    align-items: center !important;
                    transition-timing-function: linear !important;
                }
                .client-slider-wrapper .slick-slide {
                    display: flex !important;
                    justify-content: center !important;
                }
            `}} />
    </section>
  );
};

export default OurClientsComponent;
