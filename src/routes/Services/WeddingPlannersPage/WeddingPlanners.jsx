import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WeddingPlannersCoverimage, WeddingCoverImage } from "../../../assets/data/Imagedata";
import { GlobalData } from "../../../assets/data/GlodalData";
import seoData from "../../../assets/data/seo.json";
import { Helmet } from "react-helmet-async";
import { 
  FaArrowRight, 
  FaPhone, 
  FaWhatsapp, 
  FaCheckCircle, 
  FaStar, 
  FaQuoteLeft,
  FaPlayCircle
} from "react-icons/fa";
import {
  faRing,
  faPalette,
  faMusic,
  faChampagneGlasses,
  faGlobe,
  faImage,
  faCamera,
  faMasksTheater,
  faUserFriends,
  faCalendarAlt,
  faUserTie,
  faProjectDiagram,
  faAward
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { title, description, keywords, canonical, ogImage } = seoData.weddingPlanners;

// Counter Component for Why Choose Us Section
const Counter = ({ end, label, icon }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300">
      <div className="text-3xl text-yellow-400 mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-TuskerGrotesk">
        {count}+
      </div>
      <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-widest text-center">
        {label}
      </div>
    </div>
  );
};

const WeddingPlannersPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    { icon: faRing, title: "Engagement Planning", description: "Beginning your forever with a perfect ring ceremony." },
    { icon: faPalette, title: "Mehendi", description: "Traditional henna artistry with modern celebration vibes." },
    { icon: faMusic, title: "Sangeet", description: "High-energy musical nights and choreographed performances." },
    { icon: faChampagneGlasses, title: "Reception", description: "Grand finales that leave a lasting impression." },
    { icon: faGlobe, title: "Destination Weddings", description: "Exotic locations curated for your dream wedding." },
    { icon: faImage, title: "Decor", description: "Bespoke floral and theme designs for every mood." },
    { icon: faCamera, title: "Photography", description: "Cinematic memories captured by expert lensmen." },
    { icon: faMasksTheater, title: "Entertainment", description: "Artist management and celebrity performances." },
    { icon: faUserFriends, title: "Guest Management", description: "End-to-end hospitality for your loved ones." },
  ];

  const portfolioItems = [
    { id: 1, type: "image", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80", title: "Royal Palace Wedding" },
    { id: 2, type: "video", src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop&q=80", title: "Beachside Vows" },
    { id: 3, type: "image", src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&auto=format&fit=crop&q=80", title: "Floral Extravaganza" },
    { id: 4, type: "image", src: "https://images.unsplash.com/photo-1465495910483-0d554a3666b6?w=800&auto=format&fit=crop&q=80", title: "Traditional Heritage" },
    { id: 5, type: "video", src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&auto=format&fit=crop&q=80", title: "Celebrity Gala" },
    { id: 6, type: "image", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop&q=80", title: "Elegant Reception" },
  ];

  const testimonials = [
    {
      name: "Ananya & Rahul",
      photo: "https://images.unsplash.com/photo-1623091423300-999339739502?w=400&auto=format&fit=crop&q=80",
      review: "Leor Media turned our dream into a reality. Every detail of our destination wedding in Vizag was handled with such professionalism and care.",
      rating: 5
    },
    {
      name: "Sneha & Vikram",
      photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&auto=format&fit=crop&q=80",
      review: "The decor was out of this world! Our guests are still talking about the Sangeet night. Thank you for making it so special.",
      rating: 5
    },
    {
      name: "Priyanka & Arjun",
      photo: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=400&auto=format&fit=crop&q=80",
      review: "End-to-end planning at its best. We didn't have to worry about a single thing. Highly recommended for celebrity-style weddings.",
      rating: 5
    }
  ];

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${WeddingPlannersCoverimage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
            PREMIUM WEDDING PLANNERS
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-TuskerGrotesk tracking-tight leading-none animate-fade-in-up">
            Crafting Dream Weddings <br /> <span className="text-yellow-400">into Reality</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 font-light tracking-wide animate-fade-in-up">
            Luxury Wedding Planning • Destination Weddings • Decor • Entertainment
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            <Link 
              to="/contactus" 
              className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              Plan Your Wedding
            </Link>
            <a 
              href="#portfolio"
              className="px-10 py-4 bg-white/10 text-white font-bold rounded-full backdrop-blur-md border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* 2. QUICK SERVICES SECTION */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-TuskerGrotesk uppercase">
              Our Premium Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    LEARN MORE <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("${WeddingCoverImage}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-TuskerGrotesk uppercase tracking-widest">
              Why Choose Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A decade of crafting magical moments and turning visions into breathtaking celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Counter end={10} label="Years Experience" icon={faCalendarAlt} />
            <Counter end={500} label="Weddings Done" icon={faRing} />
            <Counter end={50} label="Expert Team" icon={faUserTie} />
            <Counter end={100} label="Premium Decor" icon={faPalette} />
            <Counter end={360} label="End-to-End Planning" icon={faProjectDiagram} />
          </div>
        </div>
      </section>

      {/* 4. WEDDING GALLERY / PORTFOLIO */}
      <section id="portfolio" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-TuskerGrotesk">
                OUR GALLERY
              </h2>
              <p className="text-gray-600 text-lg">
                Explore our portfolio of luxury cinematic weddings and breathtaking decors.
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === "all" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab("video")}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === "video" ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                Reels
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioItems.filter(item => activeTab === "all" || item.type === activeTab).map((item) => (
              <div 
                key={item.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  {item.type === "video" && <FaPlayCircle className="text-white text-5xl mb-4" />}
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">Luxury Cinematic Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-24 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FaQuoteLeft className="text-white/20 text-7xl mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-TuskerGrotesk uppercase tracking-tighter">
              Couple Testimonials
            </h2>
          </div>
          
          <Slider {...testimonialSettings}>
            {testimonials.map((testi, index) => (
              <div key={index} className="px-4 outline-none">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20">
                    <img src={testi.photo} alt={testi.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                    {[...Array(testi.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl italic mb-10 leading-relaxed font-light">
                    "{testi.review}"
                  </p>
                  <h4 className="text-xl font-bold uppercase tracking-widest">
                    - {testi.name}
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-white px-4 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-TuskerGrotesk">
            READY TO PLAN YOUR <br /> <span className="text-primary">BIG DAY?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contactus"
              className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-gray-900 transition-all duration-300 shadow-xl"
            >
              <FaPhone className="mr-3" /> Book Consultation
            </Link>
            <a
              href={GlobalData.company.companyWhatsapp}
              className="inline-flex items-center px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-xl"
            >
              <FaWhatsapp className="mr-3 text-xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPlannersPage;
