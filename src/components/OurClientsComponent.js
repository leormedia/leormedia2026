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
        speed: 5000,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="py-20 bg-gray-50/50 overflow-hidden border-y border-gray-100">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-[12px] mb-3 block">TRUSTED BY INDUSTRY LEADERS</span>
                    <h2 className="font-bold text-gray-900 mb-6">Our Clients</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
            </div>
            
            <div className="client-slider-wrapper relative">
                {/* Gradient Overlays for Fade Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                <Slider {...settings}>
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="px-6 outline-none py-2">
                            <div className="h-40 flex items-center justify-center transition-all duration-500 group">
                                <img 
                                    src={logo} 
                                    alt={`Client Logo ${index + 1}`} 
                                    className="max-h-[85%] max-w-[90%] object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
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
