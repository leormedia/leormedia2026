
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Eventmanagementhomeslider,
  Digitalmarketinghomeslider,
  Luxeryweddinghomeslider
} from "../assets/data/Imagedata";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
  FaStar,
  FaRing,
  FaBullhorn,
  FaEye,
  FaBullseye,
} from "react-icons/fa";
import { CONTACTUS_API } from "../hooks/Apis";
import GoogleMapReviews from "../components/GoogleMapReviews/GoogleMapReviews"
import { FooterLogo1, FooterLogo2, FooterLogo3, FooterLogo4 } from "../assets/data/icon_data";
import { Calendar, Briefcase, PartyPopper, Smile } from 'lucide-react';

// Import generated images
import WeddingSliderImg from "../assets/Generated/wedding_slider.png";
import MarketingSliderImg from "../assets/Generated/marketing_slider.png";
import BrandingSliderImg from "../assets/Generated/branding_slider.png";
import AdvertisingBgImg from "../assets/Generated/advertising_bg.png";
import OurClientsComponent from "../components/OurClientsComponent";
import LogoOnly from "../assets/LogoOnly.svg";
import { GlobalData } from "../assets/data/GlodalData";

// Dynamically import all images from the gallery directory
const importAll = (r) => r.keys().map((item) => {
  const module = r(item);
  return module.default || module;
});
const galleryImages = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg|webp|avif)$/));

// Static configuration data moved outside component to optimize React renders
const subjectOptions = [
  "Wedding Planning",
  "Corporate Events",
  "Social & Birthday Parties",
  "Entertainment & Music Shows",
  "Digital Marketing & SEO",
  "Website & App Development",
  "Other",
];

const heroCategories = ["Events", "Weddings", "Digital Marketing"];

const heroData = {
  Events: {
    title: "EVENT MANAGEMENT",
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
    link: "/services/digital-media-marketing"
  }
};

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

const HomePage = () => {
  const [selected, setSelected] = useState("Events");
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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

  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  // Auto-play interval for hero slider; restarts whenever the slide changes (manually or automatically)
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setSelected((prev) => {
        const nextIndex = (heroCategories.indexOf(prev) + 1) % heroCategories.length;
        return heroCategories[nextIndex];
      });
    }, 5000);

    return () => clearInterval(heroInterval);
  }, [selected]);

  useEffect(() => {
    const processInterval = setInterval(() => {
      setActiveProcessIndex((prev) => (prev + 1) % 4);
    }, 3500);

    return () => clearInterval(processInterval);
  }, []);

  return (
    <>
      {/* Slider */}
      <section className="relative w-full text-white h-[75vh] md:h-[80vh] bg-black mt-10 overflow-hidden">

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroData[selected].bg}
            alt={selected}
            className="w-full h-full object-cover object-center opacity-70 scale-105 transition-all duration-1000 ease-in-out"
            key={selected}
          />
        </div>

        {/* Dark gradient overlay to ensure text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/85 z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 w-full h-full max-w-5xl mx-auto px-6 pb-24 md:pb-28 flex flex-col items-center justify-center text-center">

          {/* Static Header Content */}


          <div className="flex my-auto flex-col items-center text-center leading-none text-white font-TuskerGrotesk uppercase tracking-wide mb-4">
            <span className="block text-[28px] md:text-5xl lg:text-[52px] font-extrabold drop-shadow-md">
              Crafting Extraordinary  Events
            </span>

            {/* Centerpiece ampersand - more compact */}
            <span className="text-primary text-[28px] md:text-5xl lg:text-[52px] font-black leading-none my-1 md:my-2 drop-shadow-lg">
              &
            </span>

            <span className="block text-[28px] md:text-5xl lg:text-[52px] font-extrabold text-primary drop-shadow-md mb-4">
              Digital Success Stories
            </span>

            <span className="inline-block text-gray-300 font-bold tracking-[0.4em] uppercase text-sm mt-2 mb-4 font-sans">
              SINCE 2016 | LEOR MEDIA
            </span>
          </div>

          {/* Dynamic Content (Animates on slide change) */}
          <div key={selected} className="animate-fade-in-up flex flex-col items-center">
            {/* Slide Description */}
            <p className="text-white/90 font-medium tracking-wide text-base md:text-lg leading-relaxed max-w-2xl mb-8 drop-shadow-md">
              {heroData[selected].desc}
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={heroData[selected].link}
                className="inline-flex items-center px-8 py-3.5 bg-primary text-black font-extrabold rounded-full hover:bg-primary/95 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 tracking-wider text-sm uppercase group"
              >
                Explore {selected}
                <FaArrowRight className="ml-2.5 text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>


      </section>

      {/* Registered On Section */}
      <section className="bg-white pt-6 pb-2">
        <div className=" mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 py-3">
            <div className="h-px w-16 sm:w-32 bg-gradient-to-r from-transparent to-gray-300"></div>
            <p className="text-gray-500 text-center text-sm font-bold uppercase tracking-[0.2em]">
              Registered On
            </p>
            <div className="h-px w-16 sm:w-32 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          <div className="flex justify-center items-center gap-6 md:gap-12 mt-6 flex-wrap opacity-70 transition-opacity duration-300 hover:opacity-100">
            {[FooterLogo1, FooterLogo2, FooterLogo3, FooterLogo4].map(
              (logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`registered_logo_${i}`}
                  className="h-10 md:h-14 hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0 rounded-sm"
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <OurClientsComponent />



      {/* Aboutus */}
      <section id="about" className="relative py-20 md:py-32 bg-slate-50 overflow-hidden text-black">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-orange-500/5 blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-6xl mx-auto relative">

            {/* Header Content */}
            <div className="text-center mb-16 relative z-10">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                Who We Are
              </span>
              <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-extrabold font-TuskerGrotesk tracking-wide text-gray-900 leading-tight uppercase">
                DRIVEN BY <span className="text-primary">PURPOSE</span>
              </h2>
            </div>

            {/* Background Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.12] select-none z-0">
              <img
                src={LogoOnly}
                alt="Logo Watermark"
                className="w-[280px] md:w-[250px] max-w-[85vw] h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Vision & Mission - Creative Edition */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

              {/* Vision Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                {/* Animated gradient orb */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:rotate-12"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:-rotate-12"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon with rotating ring */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center border border-primary/40 group-hover:border-primary/80 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg backdrop-blur-sm">
                      <FaEye className="text-4xl md:text-5xl text-primary drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-extrabold mb-4 uppercase tracking-wider text-gray-900 font-TuskerGrotesk">
                    Our <span className="text-primary relative inline-block">
                      Vision
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </span>
                  </h3>

                  <div className="h-0.5 w-12 bg-primary/50 rounded-full mb-6 group-hover:w-28 transition-all duration-500"></div>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium max-w-sm mx-auto">
                    To be the premier choice for event management and digital marketing, recognized for our creative brilliance, flawless execution, and commitment to transforming visionary ideas into unforgettable experiences.
                  </p>

                  {/* Decorative dot pattern */}
                  <div className="flex gap-1 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-xl border border-white/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                {/* Animated gradient orbs */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-bl from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:-rotate-12"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:rotate-12"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon with rotating ring */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center border border-primary/40 group-hover:border-primary/80 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg backdrop-blur-sm">
                      <FaBullseye className="text-4xl md:text-5xl text-primary drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-extrabold mb-4 uppercase tracking-wider text-gray-900 font-TuskerGrotesk">
                    Our <span className="text-primary relative inline-block">
                      Mission
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    </span>
                  </h3>

                  <div className="h-0.5 w-12 bg-primary/50 rounded-full mb-6 group-hover:w-28 transition-all duration-500"></div>

                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium max-w-sm mx-auto">
                    To deliver exceptional, tailor-made solutions that exceed client expectations. We are dedicated to building lasting relationships through transparency, passion, and an unwavering focus on bringing every project to life with perfection.
                  </p>

                  {/* Decorative dot pattern */}
                  <div className="flex gap-1 mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* Track Record Section - Compact with Icons */}
      <section className="py-12 md:py-16 bg-[#f37a20] text-white overflow-hidden border-y border-gray-900">
        <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
          {/* Heading & description */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 md:mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-sm text-white font-bold tracking-[0.2em] uppercase mb-3 block">
                Proven Experience
              </span>
              <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-extrabold font-TuskerGrotesk uppercase tracking-wider text-white leading-tight">
                Our Track Record
              </h2>
            </div>
            <p className="text-sm md:text-base text-white font-light leading-relaxed max-w-md lg:text-right border-l lg:border-l-0 lg:border-r border-white/30 pl-5 lg:pl-0 lg:pr-6">
              A decade of excellence, hundreds of ambitious projects, and thousands of unforgettable memories crafted flawlessly.
            </p>
          </div>

          {/* Stats grid with icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "10+", label: "Years Experience", icon: Calendar },
              { value: "600+", label: "Projects Delivered", icon: Briefcase },
              { value: "2K+", label: "Events & Projects", icon: PartyPopper },
              { value: "100%", label: "Client Satisfaction", icon: Smile }
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                {/* Hover background */}
                <div className="absolute -inset-3 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 border-t border-gray-800 group-hover:border-primary transition-colors duration-500 pt-5 md:pt-6">
                  {/* Icon + number row */}
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon
                      size={28}
                      className="text-white/80 group-hover:text-white transition-colors duration-300 shrink-0"
                      strokeWidth={1.5}
                    />
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-TuskerGrotesk tracking-wide group-hover:text-primary transition-colors duration-500">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-white uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <GoogleMapReviews />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-slate-50 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 ">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Our Gallery
            </span>
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-extrabold font-TuskerGrotesk tracking-wide text-gray-900 leading-tight uppercase">
              CAPTURING <span className="text-primary">MOMENTS</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((imgSrc, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white">
                <img 
                  src={imgSrc} 
                  alt={`Gallery Event ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
               
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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-4">
            UNFORGETTABLE EXPERIENCES
          </span>
          <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-extrabold mb-4 font-TuskerGrotesk tracking-wide">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto tracking-wide">
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
                    <div className="text-base md:text-lg text-white/80 font-semibold tracking-widest uppercase mb-2">
                      {sec.subtitle}
                    </div>
                    <h1 className="text-[28px] md:text-5xl lg:text-[52px] font-bold text-white leading-tight">
                      {sec.title}
                    </h1>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/90 mb-6 md:mb-8 leading-relaxed max-w-lg">
                    {sec.description}
                  </p>

                  {/* Detailed Services List */}
                  {sec.detailedServices && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                      {sec.detailedServices.map((service, idx) => (
                        <div key={idx} className="flex items-center text-white/80 text-sm">
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
                          <div className="text-2xl md:text-[26px] lg:text-3xl font-bold text-white">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white/70">
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
                  <div className="text-sm mb-2 opacity-70">
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
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  LET'S TALK
                </span>
                <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Call Us</p>
                    <p className="text-sm md:text-base font-bold text-gray-800">
                      {GlobalData.company.companyPhone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${GlobalData.company.companyEmail}`}
                  className="flex items-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Email Us</p>
                    <p className="text-sm md:text-base font-bold text-gray-800">
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
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">WhatsApp Us</p>
                    <p className="text-sm md:text-base font-bold text-gray-800">
                      Chat with our team
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors text-sm"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2.5 px-6 rounded-lg font-semibold transition-colors text-sm ${loading
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



      {/* CTA & Process Slider Section */}
      <section id="about" className="py-16 md:py-24 bg-white text-black">
        <div className="text-center mt-24 pt-16 border-t border-gray-100 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-widest mb-4">
            Our Methodology
          </span>
          <h3 className="text-[26px] md:text-[38px] lg:text-5xl font-extrabold mb-12 font-TuskerGrotesk tracking-wide text-gray-900">
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
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border transition-all duration-500 shadow-md ${activeProcessIndex === idx
                    ? "bg-primary text-white border-primary scale-110 shadow-primary/20"
                    : "bg-white text-gray-400 border-gray-100 group-hover:border-primary/30 group-hover:text-primary"
                    }`}
                >
                  0{idx + 1}
                </div>
                <span
                  className={`absolute top-12 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-500 ${activeProcessIndex === idx ? "text-primary opacity-100 translate-y-0" : "text-gray-400 opacity-60 group-hover:opacity-100"
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
                    <span className="text-sm font-extrabold uppercase tracking-widest text-primary mb-2">
                      STAGE {item.step}
                    </span>
                    <h4 className="text-lg md:text-xl lg:text-[22px] font-extrabold text-gray-900 mb-4 uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md mx-auto">
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

          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
