import { CSDLogoAbout } from "../assets/data/icon_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Eventmanagementhomeslider,
  Digitalmarketinghomeslider,
  Luxeryweddinghomeslider
} from "../assets/data/Imagedata";
import {
  FaFileInvoiceDollar,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { CONTACTUS_API } from "../hooks/Apis";
import GoogleMapReviews from "../components/GoogleMapReviews/GoogleMapReviews"
// Import generated images
import WeddingSliderImg from "../assets/Generated/wedding_slider.png";
import MarketingSliderImg from "../assets/Generated/marketing_slider.png";
import BrandingSliderImg from "../assets/Generated/branding_slider.png";
import AdvertisingBgImg from "../assets/Generated/advertising_bg.png";
import OurClientsComponent from "../components/OurClientsComponent";
import LogoOnly from "../assets/LogoOnly.svg";
import { GlobalData } from "../assets/data/GlodalData";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState("Events");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Subject options for dropdown
  const subjectOptions = [
    "Wedding Planning",
    "Corporate Events",
    "Social & Birthday Parties",
    "Entertainment & Music Shows",
    "Digital Marketing & SEO",
    "Website & App Development",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    setLoading(true);
    try {
      const response = await fetch(CONTACTUS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  const heroSlides = [
    {
      title: "Wedding Mandapam",
      subtitle: "Timeless Elegance for Your Special Day",
      image: WeddingSliderImg,
      cta: "Plan Your Wedding",
      link: "/contactus"
    },
    {
      title: "Strategic Marketing",
      subtitle: "Driving Growth through Innovation",
      image: MarketingSliderImg,
      cta: "Grow Your Brand",
      link: "/contactus"
    },
    {
      title: "Powerful Branding",
      subtitle: "Creating Identities that Resonate",
      image: BrandingSliderImg,
      cta: "Start Branding",
      link: "/contactus"
    }
  ];

  const sections = [
    {
      title: "Event Management",
      subtitle: "UNFORGETTABLE EXPERIENCES",
      color: "bg-gradient-to-br from-blue-900/90 to-indigo-950/90",
      number: "01",
      description:
        "The success of any event largely depends on many tasks that go behind the scenes and tireless hard work of the team. At Leor Media, we believe in creating memories by organising events to perfection for which we customise every minute detail of the event and tailor accordingly with interest of our valued customers.",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&auto=format&fit=crop&q=80",
      stats: [
        { value: "2000+", label: "Events Managed" },
        { value: "220+", label: "Corporate Clients" },
        { value: "100%", label: "Execution" },
      ],
      cta: "Plan Your Event",
      detailedServices: [
        "Weddings",
        "Corporate Events & Product Launches",
        "Concerts, Award Nights & Music Shows",
        "Celebrity & Artist Management",
        "Protocol Events & Carnivals",
        "Sports Events & Marathons",
        "Exhibitions & Trade Fairs",
      ],
    },
    {
      title: "LUXURY WEDDINGS",
      subtitle: "TIMELESS CELEBRATIONS",
      color: "bg-gradient-to-br from-pink-900/90 to-rose-950/90",
      number: "02",
      description:
        "Turning your dream wedding into a reality. We specialize in breathtaking decor, seamless coordination, and creating memories that last a lifetime.",
      image: WeddingSliderImg,
      stats: [
        { value: "500+", label: "Weddings" },
        { value: "Luxury", label: "Decor" },
        { value: "End-to-End", label: "Planning" },
      ],
      cta: "Plan Your Wedding",
      detailedServices: [
        "Destination Wedding Planning",
        "Theme Decors & Floral Design",
        "Catering & Hospitality",
        "Photography & Cinematography",
        "Mehendi, Sangeet & Reception",
        "Guest Management",
      ],
    },
    {
      title: "DIGITAL MEDIA MARKETING",
      subtitle: "DOMINATE THE DIGITAL SPACE",
      color: "bg-gradient-to-br from-cyan-900/90 to-blue-950/90",
      number: "03",
      description:
        "Innovative digital strategies to boost your online presence. From social media growth to performance marketing, we help you win the digital game.",
      image: MarketingSliderImg,
      stats: [
        { value: "10M+", label: "Reach" },
        { value: "300%", label: "Growth" },
        { value: "Data", label: "Driven" },
      ],
      cta: "Go Digital",
      detailedServices: [
        "Social Media Management",
        "Performance Marketing (Ads)",
        "Search Engine Optimization",
        "Content & Video Marketing",
        "Influencer Marketing",
        "Email & WhatsApp Marketing",
      ],
    },
    {
      title: "BRANDING SOLUTIONS",
      subtitle: "CRAFTING UNIQUE IDENTITIES",
      color: "bg-gradient-to-br from-amber-900/90 to-orange-950/90",
      number: "04",
      description:
        "We create powerful brand identities that resonate with your audience. Our design-led approach ensures your brand stands out in a crowded market.",
      image: BrandingSliderImg,
      stats: [
        { value: "200+", label: "Brands Built" },
        { value: "360°", label: "Branding" },
        { value: "Unique", label: "Design" },
      ],
      cta: "Build Your Brand",
      detailedServices: [
        "Logo & Visual Identity Design",
        "Brand Strategy & Positioning",
        "Packaging & Label Design",
        "Corporate Stationery",
        "Brand Guidelines",
        "Rebranding Services",
      ],
    },
    {
      title: "STRATEGIC ADVERTISING",
      subtitle: "MAXIMUM REACH & IMPACT",
      color: "bg-gradient-to-br from-red-900/90 to-red-950/90",
      number: "05",
      description:
        "High-impact advertising campaigns across all platforms. We ensure your message reaches the right audience through strategic media placement.",
      image: AdvertisingBgImg,
      stats: [
        { value: "Wide", label: "Coverage" },
        { value: "High", label: "ROI" },
        { value: "Expert", label: "Buying" },
      ],
      cta: "Advertise Now",
      detailedServices: [
        "Outdoor Media (Billboards, Bus Ads)",
        "Print Media Advertising",
        "Radio & TV Commercials",
        "Cinema Advertising",
        "Transit & Airport Branding",
        "Mall & BTL Activations",
      ],
    },
  ];

  const heroCategories = ["Events", "Weddings", "Digital Marketing"];

  const heroData = {
    Events: {
      title: "EVENTS MANAGEMENT",
      desc: "Unforgettable experiences. From luxury weddings to high-impact corporate launches.",
      bg: Eventmanagementhomeslider,
      link: "/services/events"
    },
    Weddings: {
      title: "LUXURY WEDDINGS",
      desc: "Timeless Elegance for Your Special Day. Flawless execution and beautiful memories.",
      bg: Luxeryweddinghomeslider,
      link: "/services/wedding-planners"
    },
    "Digital Marketing": {
      title: "DIGITAL MARKETING",
      desc: "Driving Growth through Innovation. SEO, Social Media, and Performance Ads.",
      bg: Digitalmarketinghomeslider,
      link: "/digital-media-marketing"
    }
  };

  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const heroInterval = setInterval(() => {
      setSelected((prev) => {
        const nextIndex = (heroCategories.indexOf(prev) + 1) % heroCategories.length;
        return heroCategories[nextIndex];
      });
    }, 4000);

    const processInterval = setInterval(() => {
      setActiveProcessIndex((prev) => (prev + 1) % 4);
    }, 3500);

    return () => {
      clearInterval(heroInterval);
      clearInterval(processInterval);
    };
  }, []);

  return (
    <>
      <section className="relative w-full text-white h-[90vh] bg-black mt-10 overflow-hidden ">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroData[selected].bg}
            alt={selected}
            className="w-full h-full object-cover object-center opacity-50 scale-105 transition-all duration-1000 ease-in-out"
            key={selected}
          />
        </div>

        {/* Content Container (Full Height, Flex Between) */}
        <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center text-center justify-between">

          {/* Main Top Header (Positioned at Top) */}
          <div className="mt-10">
            <h2 className="text-[28px] md:text-[45px] font-bold text-white font-TuskerGrotesk uppercase tracking-wider">
              <span className="block">
                Crafting Extraordinary 
                <span className="block text-primary">Events & Creative Digital Success</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[18px] mt-2 text-white font-medium opacity-80 tracking-widest uppercase">
              Since 2016
            </p>
          </div>

          {/* Slider Content (Positioned at Bottom) */}
          <div className="w-full max-w-2xl flex flex-col items-center">
            <h1
              key={selected}
              className="text-[28px] md:text-[45px] font-extrabold text-white font-TuskerGrotesk tracking-wider uppercase animate-fade-in-up"
            >
              <span className="block text-primary drop-shadow-[0_4px_20px_rgba(255,165,0,0.4)]">
                {heroData[selected].title}
              </span>
            </h1>

            <p className="text-[14px] md:text-[18px] text-white mt-4 mb-8 opacity-90 leading-relaxed font-light">
              {heroData[selected].desc}
            </p>

            <Link
              to={heroData[selected].link}
              className="inline-flex mx-auto px-8 py-3.5 bg-primary text-black text-[14px] md:text-[16px] font-bold rounded-full hover:bg-white transition-all duration-300 items-center gap-2 group shadow-lg hover:shadow-primary/50"
            >
              Enquiry now! <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>


 {/* Our Clients Section */}
      <OurClientsComponent />
    


{/* Aboutus */}
      <section id="about" className="py-16 md:py-24 bg-white text-black">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Section Header */}
          <div className="max-w-5xl mx-auto relative">
            {/* Background Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.2] select-none z-0">
              <img
                src={LogoOnly}
                alt="Logo Watermark"
                className="w-[280px] md:w-[450px] lg:w-[500px] max-w-[85vw] h-auto object-contain"
              />
            </div>

            {/* Left Column: Mission & Journey */}
            <div className="mb-12 relative z-10">
              <div className="mb-10 text-center">
                <h3 className="text-[28px] md:text-[45px] font-bold mb-8">
                  Creating Memories,
                </h3>
                 <span className="text-primary">Delivering Excellence.</span>

                <p className="text-[14px] md:text-[18px] text-balck leading-relaxed mb-6">
                  Leor Media has been successfully organizing small to big scale weddings since 2016. We create the
                  perfect weddings for customers right from the planning to its execution. Our personalized wedding
                  packages and creative works, add that glam to your wedding while keeping customers budget in
                  mind.
                </p>
                <p className="text-[14px] md:text-[18px] text-black leading-relaxed">
                  Our packages incorporate even minute details from venue selection, theme recommendation, menu options
                  and to hospitality so that we can make worry-free big day. We believe making memories are the best gifts
                  to any events for which Leor Media strives 100% to make them more beautiful.
                </p>
              </div>


            </div>

          </div>

       
        </div>
      </section>


         {/* CTA & Process Slider Section */}
              <section id="about" className="py-16 md:py-24 bg-white text-black">
          <div className="text-center mt-24 pt-16 border-t border-gray-100 max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[12px] font-semibold uppercase tracking-widest mb-4">
              Our Methodology
            </span>
            <h3 className="text-[28px] md:text-[45px] font-extrabold mb-12 font-TuskerGrotesk tracking-wide text-gray-900">
              OUR PROFESSIONAL <span className="text-primary">WORK PROCESS</span>
            </h3>

            {/* Premium Stepper Headers */}
            <div className="relative flex justify-between items-center mb-12 max-w-2xl mx-auto px-4">
              {/* Stepper background line */}
              <div className="absolute left-8 right-8 top-1/2 h-[2px] bg-gray-100 -translate-y-1/2 z-0">
                <div
                  className="h-full bg-primary transition-all duration-500 ease-out"
                  style={{ width: `${(activeProcessIndex / 3) * 100}%` }}
                ></div>
              </div>

              {["Understand", "Plan", "Execution", "Delivery"].map((stepTitle, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProcessIndex(idx)}
                  className="relative z-10 flex flex-col items-center focus:outline-none group"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] border transition-all duration-500 shadow-md ${activeProcessIndex === idx
                      ? "bg-primary text-white border-primary scale-110 shadow-primary/20"
                      : "bg-white text-gray-400 border-gray-100 group-hover:border-primary/30 group-hover:text-primary"
                      }`}
                  >
                    0{idx + 1}
                  </div>
                  <span
                    className={`absolute top-12 text-[12px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-500 ${activeProcessIndex === idx ? "text-primary opacity-100 translate-y-0" : "text-gray-400 opacity-60 group-hover:opacity-100"
                      }`}
                  >
                    {stepTitle}
                  </span>
                </button>
              ))}
            </div>

            {/* Slider Container */}
            <div className="relative flex items-center justify-center px-4 md:px-12 mb-16">
              {/* Left Arrow Button */}
              <button
                onClick={() => setActiveProcessIndex((prev) => (prev === 0 ? 3 : prev - 1))}
                className="absolute left-0 md:left-4 z-20 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Steps Card Slider Stage */}
              <div className="w-full max-w-xl transition-all duration-500 transform">
                {[
                  {
                    step: "01",
                    title: "Understand",
                    desc: "Requirement Analysis. We carefully analyze your goals, expectations, brand parameters, and constraints to establish a bulletproof strategic alignment.",
                    color: "from-blue-500 to-indigo-600",
                    shadow: "shadow-indigo-500/10 hover:shadow-indigo-500/20",
                    icon: (
                      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient id="3d-grad-1" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#818CF8" />
                            <stop offset="60%" stopColor="#4F46E5" />
                            <stop offset="100%" stopColor="#312E81" />
                          </radialGradient>
                          <filter id="3d-shadow-1" x="-10%" y="-10%" width="130%" height="130%">
                            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#4F46E5" floodOpacity="0.4" />
                          </filter>
                        </defs>
                        <circle cx="32" cy="32" r="24" fill="url(#3d-grad-1)" filter="url(#3d-shadow-1)" />
                        <circle cx="26" cy="22" r="10" fill="#ffffff" opacity="0.15" />
                        <path d="M28 26C28 23.7909 29.7909 22 32 22C34.2091 22 36 23.7909 36 26C36 27.8244 34.7813 28.5 33.75 29.25C32.8438 29.9062 32 30.8125 32 32" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="32" cy="38" r="2" fill="white" />
                      </svg>
                    )
                  },
                  {
                    step: "02",
                    title: "Plan",
                    desc: "Strategy & Design. Laying down creative pathways, robust budgets, wireframes, mood boards, and highly organized schedules to streamline execution.",
                    color: "from-amber-400 to-orange-500",
                    shadow: "shadow-orange-500/10 hover:shadow-orange-500/20",
                    icon: (
                      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient id="3d-grad-2" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#FBBF24" />
                            <stop offset="60%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#7C2D12" />
                          </radialGradient>
                          <filter id="3d-shadow-2" x="-10%" y="-10%" width="130%" height="130%">
                            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#F97316" floodOpacity="0.4" />
                          </filter>
                        </defs>
                        <rect x="12" y="12" width="40" height="40" rx="10" fill="url(#3d-grad-2)" filter="url(#3d-shadow-2)" transform="rotate(-5 32 32)" />
                        <circle cx="24" cy="22" r="8" fill="#ffffff" opacity="0.15" />
                        <path d="M22 28L28 34L42 20" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 38H42" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
                      </svg>
                    )
                  },
                  {
                    step: "03",
                    title: "Execution",
                    desc: "Meticulous Implementation. Our cross-functional creative team goes all in, launching campaigns, coordinating high-end decoration, and monitoring execution dynamically.",
                    color: "from-pink-500 to-rose-600",
                    shadow: "shadow-rose-500/10 hover:shadow-rose-500/20",
                    icon: (
                      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient id="3d-grad-3" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#F472B6" />
                            <stop offset="60%" stopColor="#E11D48" />
                            <stop offset="100%" stopColor="#4C0519" />
                          </radialGradient>
                          <filter id="3d-shadow-3" x="-10%" y="-10%" width="130%" height="130%">
                            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#E11D48" floodOpacity="0.4" />
                          </filter>
                        </defs>
                        <polygon points="32,8 52,44 12,44" fill="url(#3d-grad-3)" filter="url(#3d-shadow-3)" />
                        <circle cx="32" cy="28" r="6" fill="#ffffff" opacity="0.2" />
                        <path d="M32 20V34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
                        <path d="M26 30H38" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
                      </svg>
                    )
                  },
                  {
                    step: "04",
                    title: "Delivery",
                    desc: "Final Result & Support. Launching your celebration or campaign flawlessly, measuring data impact, delivering assets, and offering long-term ongoing consultation.",
                    color: "from-emerald-400 to-teal-600",
                    shadow: "shadow-teal-500/10 hover:shadow-teal-500/20",
                    icon: (
                      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <radialGradient id="3d-grad-4" cx="30%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#34D399" />
                            <stop offset="60%" stopColor="#0D9488" />
                            <stop offset="100%" stopColor="#115E59" />
                          </radialGradient>
                          <filter id="3d-shadow-4" x="-10%" y="-10%" width="130%" height="130%">
                            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#0D9488" floodOpacity="0.4" />
                          </filter>
                        </defs>
                        <circle cx="32" cy="32" r="22" fill="url(#3d-grad-4)" filter="url(#3d-shadow-4)" />
                        <path d="M24 30L30 36L44 22" stroke="white" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 44H44" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                      </svg>
                    )
                  }
                ].map((item, idx) => {
                  if (activeProcessIndex !== idx) return null;
                  return (
                    <div
                      key={idx}
                      className="w-full bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:scale-102 flex flex-col items-center text-center relative overflow-hidden animate-fade-in-up"
                    >
                      {/* Glowing decorative corner */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-[0.06] rounded-bl-full`}></div>

                      {/* 3D Premium Icon */}
                      <div className="mb-6 transform hover:scale-115 hover:rotate-3 transition-transform duration-500">
                        {item.icon}
                      </div>

                      {/* Info */}
                      <span className="text-[12px] font-extrabold uppercase tracking-widest text-primary mb-2">
                        STAGE {item.step}
                      </span>
                      <h4 className="text-[28px] md:text-[45px] font-extrabold text-gray-900 mb-4 uppercase tracking-wider">
                        {item.title}
                      </h4>
                      <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed max-w-md mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={() => setActiveProcessIndex((prev) => (prev === 3 ? 0 : prev + 1))}
                className="absolute right-0 md:right-4 z-20 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/contactus"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
              >
                Let's Create Something Amazing
                <svg
                  className="w-5 h-5 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/get-quotation"
                className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-md shadow-gray-100"
              >
                <FaFileInvoiceDollar className="mr-2" />
                Get a Quotation
              </Link>
            </div>
          </div>
</section>

      {/* Fun Factor Section */}
     <section className="py-12 md:py-16 bg-primary text-white overflow-hidden relative">
  {/* Subtle Background Elements (Scaled down slightly and pushed to edges) */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div className="absolute -top-10 -left-10 w-48 h-48 border-[6px] border-white rounded-full"></div>
    <div className="absolute -bottom-10 -right-10 w-72 h-72 border-[6px] border-white rounded-full"></div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
    
    {/* Header - Tightened margins and text sizes */}
    <div className="text-center mb-10">
      <h2 className="text-[28px] md:text-[45px] font-bold mb-2 font-TuskerGrotesk tracking-wide uppercase">
        Our Track Record
      </h2>
      <p className="text-[14px] md:text-[18px] text-white/80 font-light max-w-xl mx-auto">
        A decade of excellence, hundreds of projects, and thousands of happy memories.
      </p>
    </div>

    {/* Stats Grid - Reduced gaps and card padding */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {[
        { value: "10+", label: "Years Experience", icon: "⏳" },
        { value: "600+", label: "Projects Delivered", icon: "💼" },
        { value: "2000+", label: "Events & Projects", icon: "🎉" },
        { value: "100%", label: "Client Satisfaction", icon: "😊" }
      ].map((stat, idx) => (
        <div 
          key={idx} 
          className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/20 transform hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col justify-center items-center group shadow-sm hover:shadow-lg"
        >
          {/* Icon with a subtle hover bounce */}
          <div className="text-[24px] md:text-[30px] mb-2 group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          
          {/* Value */}
          <div className="text-[30px] md:text-[36px] font-bold mb-1 font-TuskerGrotesk tracking-wide drop-shadow-sm">
            {stat.value}
          </div>
          
          {/* Label */}
          <div className="text-[10px] md:text-[12px] font-medium text-white/80 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
    
  </div>
</section>

     

      {/* Our Services Section Introduction */}
      <section className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[12px] font-bold uppercase tracking-widest mb-4">
            UNFORGETTABLE EXPERIENCES
          </span>
          <h2 className="text-[28px] md:text-[45px] font-extrabold mb-4 font-TuskerGrotesk tracking-wide">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-[14px] md:text-[18px] text-gray-200 max-w-2xl mx-auto tracking-wide">
            What we provide at Leor Media to craft your memorable events and creative digital success stories.
          </p>
        </div>
      </section>

      {/* Our Services Sticky list */}
      <div className="relative">
        {sections.map((sec, index) => (
          <div
            key={index}
            className="h-screen sticky top-0 flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
              style={{ backgroundImage: `url('${sec.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column */}
                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-6 md:mb-8">
                    <div className="text-white/80 text-[10px] md:text-[20px] font-semibold tracking-widest uppercase mb-2">
                      {sec.subtitle}
                    </div>
                    <h1 className="text-[28px] md:text-[45px] font-bold text-white leading-tight">
                      {sec.title}
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] md:text-[18px] text-white/90 mb-6 md:mb-8 leading-relaxed max-w-lg">
                    {sec.description}
                  </p>

                  {/* Detailed Services List */}
                  {sec.detailedServices && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                      {sec.detailedServices.map((service, idx) => (
                        <div key={idx} className="flex items-center text-white/80 text-[14px]">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {service}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats for Operations */}
                  {sec.stats && (
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {sec.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-[24px] md:text-[30px] font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-[12px] md:text-[14px] text-white/70">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column - Image Preview */}
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-white/20 rounded-xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-white/20 rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4">
                  <div className="text-white/70 text-[14px]">
                    {index + 1} / {sections.length}
                  </div>
                  <div className="flex space-x-2">
                    {sections.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-white w-8" : "bg-white/30"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll hint for first section */}
            {index === 0 && (
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="text-white text-center">
                  <div className="text-[14px] mb-2 opacity-70">
                    Scroll to explore
                  </div>
                  <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contactus form */}
      <section className="bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-400/5 blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Text content & Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:pr-6">
              <div>
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[14px] font-semibold mb-4">
                  LET'S TALK
                </span>
                <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 mb-4 leading-tight">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed">
                  Have a project in mind or need expert advice? Let's discuss how we can bring your ideas to life.
                </p>
              </div>

              {/* Premium Contact Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${GlobalData.company.companyPhone}`}
                  className="flex items-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-[18px]" />
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider font-semibold">Call Us</p>
                    <p className="text-[14px] md:text-[18px] font-bold text-gray-800">
                      {GlobalData.company.companyPhone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${GlobalData.company.companyEmail}`}
                  className="flex items-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-[18px]" />
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider font-semibold">Email Us</p>
                    <p className="text-[14px] md:text-[18px] font-bold text-gray-800">
                      {GlobalData.company.companyEmail}
                    </p>
                  </div>
                </a>

                <a
                  href={GlobalData.company.companyWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-[#128C7E]/10 text-[#128C7E] mr-4 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-[18px]" />
                  </div>
                  <div>
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Us</p>
                    <p className="text-[14px] md:text-[18px] font-bold text-gray-800">
                      Chat with our team
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  {["name", "email", "phone"].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-[14px] font-medium text-gray-700 mb-2 capitalize">
                        {field}
                      </label>
                      <input
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                              ? "tel"
                              : "text"
                        }
                        name={field}
                        placeholder={
                          field === "name"
                            ? "Your full name"
                            : field === "email"
                              ? "your.email@example.com"
                              : "+91 00000 00000"
                        }
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                        required
                      />
                    </div>
                  ))}

                  {/* Subject Dropdown */}
                  <div className="md:col-span-2">
                    <label className="block text-[14px] font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjectOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${loading
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-primary hover:bg-primary/90 text-white shadow-sm"
                    }`}
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <GoogleMapReviews />
    </>
  );
};

export default HomePage;
