
import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Anand Kumar",
    text: "Leor Media made our wedding planning absolutely seamless! Pavan and his team are incredibly patient, organized, and creative. The floral mandap decor was stunning and exceeded all our expectations. Vizag's absolute best event management agency!",
    rating: 5,
    date: "1 week ago",
    initial: "A",
    color: "bg-orange-500"
  },
  {
    name: "Sita Mahalakshmi",
    text: "We hired Leor Media for our corporate annual day celebration and product launch in Vizag. They handled everything from stage setup, pristine AV systems, to celebrity guest management flawlessly. Extremely professional team!",
    rating: 5,
    date: "1 month ago",
    initial: "S",
    color: "bg-blue-500"
  },
  {
    name: "Kalyan Ram",
    text: "Outstanding experience working with Leor Media for our brand's advertising campaigns and social media marketing. Their high-end video commercials and strategic digital promotions helped us reach a wider audience across Andhra Pradesh.",
    rating: 5,
    date: "3 months ago",
    initial: "K",
    color: "bg-purple-500"
  },
  {
    name: "Priyanka Reddy",
    text: "Leor Media's attention to detail is spectacular! They planned our destination beach wedding in Vizag, from Haldi to the grand Reception. The theme decors and lighting made it look like a magical fairy-tale. Highly recommend them!",
    rating: 5,
    date: "6 months ago",
    initial: "P",
    color: "bg-red-500"
  },
  {
    name: "Ramesh Naidu",
    text: "Highly creative team for digital marketing, branding, and event production. They created a beautiful company profile video and managed our corporate exhibition stall design. They are prompt, reliable, and premium in every aspect.",
    rating: 5,
    date: "1 year ago",
    initial: "R",
    color: "bg-green-500"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-VictoryStriker uppercase tracking-widest leading-relaxed"
              style={{ lineHeight: "1.3" }}>
            Our Clients <span className="text-primary">Feedback</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-[14px] sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Discover why clients trust Leor Media for their events, branding, and digital success. Real feedback from real clients.
          </p>
        </div>

        <div className="testimonial-slider max-w-6xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-3 pb-16">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                  
                  <div className="absolute top-6 right-8 text-gray-100 group-hover:text-primary/20 transition-colors duration-500">
                    <FaQuoteLeft size={40} />
                  </div>
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                        {item.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-xs text-gray-400 font-medium">{item.date}</p>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <div className="flex">
                            {[...Array(item.rating)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400" size={10} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                      <FcGoogle size={22} />
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed flex-grow relative z-10 font-medium">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <style jsx="true">{`
          .testimonial-slider .slick-dots li button:before {
            color: #ff6b00;
            font-size: 10px;
            opacity: 0.2;
            transition: all 0.3s ease;
          }
          .testimonial-slider .slick-dots li.slick-active button:before {
            color: #ff6b00;
            opacity: 1;
            transform: scale(1.5);
          }
          .testimonial-slider .slick-dots {
            bottom: -40px;
          }
        `}</style>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
          <span className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[10px] text-gray-500">
            ✓
          </span>
          Verified Reviews via Google Maps
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
