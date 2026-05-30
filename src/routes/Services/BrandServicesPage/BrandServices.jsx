import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
import BrandServicesBg from "../../../assets/Images/pexels-photo-196644.jpeg";
import { 
  FaRocket, FaLightbulb, FaCheckCircle, FaUserCheck, 
  FaPalette, FaGlobe, FaPrint, FaStrategy, FaQuoteLeft,
  FaChevronDown, FaChevronUp, FaHandshake, FaPaintBrush,
  FaBullseye, FaMagic, FaRegSmileBeam
} from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineBrandingWatermark, MdCampaign } from "react-icons/md";
import { BiTask, BiSupport } from "react-icons/bi";
import { GlobalData } from "../../../assets/data/GlodalData";
import { BrandingCompany } from "./BrandingDetailPageData";
import seoData from "../../../assets/data/seo.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { title, description, keywords, canonical, ogImage } = seoData.branding;

const BrandingServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { title: "Brand Identity Design", icon: <FaPaintBrush />, desc: "Professional logo design, typography, color palette, and complete brand identity creation." },
    { title: "Social Media Branding", icon: <MdOutlineBrandingWatermark />, desc: "Creative social media designs, banners, profile branding, and promotional creatives." },
    { title: "Corporate Branding", icon: <FaHandshake />, desc: "Professional business branding solutions for companies, startups, and enterprises." },
    { title: "Digital Branding", icon: <FaGlobe />, desc: "Website branding, online marketing visuals, digital campaigns, and creative advertisements." },
    { title: "Packaging & Print Design", icon: <FaPrint />, desc: "Brochures, business cards, posters, flyers, banners, and product packaging designs." },
    { title: "Brand Strategy", icon: <FaBullseye />, desc: "Creating a unique brand voice, messaging, and business positioning strategy." },
  ];

  const processSteps = [
    { title: "Research & Strategy", desc: "We understand your business, audience, and competitors.", icon: <FaLightbulb /> },
    { title: "Creative Planning", desc: "Our creative team builds branding concepts based on your goals.", icon: <FaMagic /> },
    { title: "Design & Development", desc: "We create professional visual branding materials.", icon: <MdOutlineDesignServices /> },
    { title: "Brand Launch", desc: "We help launch your brand professionally across digital platforms.", icon: <FaRocket /> },
    { title: "Growth & Support", desc: "Continuous support to strengthen your brand presence online.", icon: <BiSupport /> },
  ];

  const whyChooseUs = [
    "Creative & Professional Team",
    "Modern Branding Strategies",
    "Unique Brand Identity Creation",
    "High-Quality Design Standards",
    "Affordable Branding Solutions",
    "Complete Digital Branding Support",
    "Trusted by Businesses in Vizag",
  ];

  const portfolioCategories = [
    "Logo Mockups",
    "Social Media Designs",
    "Brand Identity Projects",
    "Packaging Designs",
    "Corporate Presentation Designs",
    "Website Branding Samples",
  ];

  const faqs = [
    { q: "Why is branding important for business?", a: "Branding is essential because it makes a memorable impression on consumers and allows your customers to know what to expect from your company." },
    { q: "How long does branding take?", a: "A typical branding project can take anywhere from 2 to 6 weeks depending on the complexity and requirements." },
    { q: "Do you provide logo design services?", a: "Yes, we provide professional logo design services as part of our brand identity packages." },
    { q: "Can you redesign existing brands?", a: "Absolutely! We help existing businesses refresh their look and feel while maintaining their core values." },
    { q: "Do you offer social media branding?", a: "Yes, we create cohesive visual styles for all social media platforms to ensure brand consistency." },
    { q: "What industries do you work with?", a: "We work with a wide range of industries including technology, retail, hospitality, healthcare, and professional services." },
  ];

  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Helmet>

      {/* Section-1: Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0">
          <img 
            src={BrandingCompany.coverimage} 
            alt="Branding Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-[28px] md:text-[45px] font-bold mb-6 font-TuskerGrotesk tracking-wider animate-fade-in-up uppercase">
            Build a <span className="text-primary">Powerful Brand</span> <br />
            That People Remember
          </h1>
          <p className="text-[14px] md:text-[18px] mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Leor Media helps businesses create strong, professional, and memorable brands through creative design, strategy, and digital branding solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contactus" className="button1 text-[18px] py-4 px-10">
              Start Your Brand Journey
            </Link>
            <Link to="/contactus" className="button2 text-[18px] py-4 px-10 border-white text-white hover:bg-white hover:text-black">
              Get Free Consultation
            </Link>
          </div>
          <div className="mt-12">
             <Link to="/contactus" className="text-white/60 hover:text-primary transition-colors font-bold text-[14px] uppercase tracking-widest flex items-center justify-center gap-2">
                Build Your Brand Today <FaRocket />
             </Link>
          </div>
        </div>
      </section>

      {/* Section-2: Why Branding Matters */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[14px] mb-4 block">THE POWER OF IDENTITY</span>
              <h2 className="text-[28px] md:text-[45px] font-bold mb-8 text-gray-900 leading-tight">
                Why Branding is Important <br />
                <span className="text-primary text-[24px] md:text-[30px]">for Your Business</span>
              </h2>
              <p className="text-[14px] md:text-[18px] text-gray-600 mb-8 leading-relaxed">
                Branding is more than just a logo. A strong brand creates trust, improves recognition, and helps customers remember your business. Good branding gives your company a professional identity and makes your business stand out from competitors.
              </p>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-inner">
                <p className="text-[14px] md:text-[18px] font-bold text-gray-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
                  With proper branding, businesses can:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Build customer trust",
                    "Increase brand awareness",
                    "Create a professional image",
                    "Attract more customers",
                    "Improve business growth",
                    "Build long-term customer loyalty"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-primary mr-3 flex-shrink-0" />
                      <span className="text-[16px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-primary/20 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
               <img 
                src={BrandServicesBg} 
                alt="Branding Strategy" 
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Section-3: Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[14px] mb-4 block">OUR EXPERTISE</span>
            <h2 className="text-[28px] md:text-[45px] font-bold mb-6 text-gray-900">Our Branding Services</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-[30px] text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-[28px] md:text-[45px] font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-4: Process Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[14px] mb-4 block">HOW WE WORK</span>
            <h2 className="text-[28px] md:text-[45px] font-bold mb-6 text-gray-900">Our Branding Process</h2>
          </div>
          
          <div className="relative">
            {/* Background Step Numbers */}
            <div className="absolute top-1/2 left-0 w-full flex justify-between px-10 opacity-5 select-none -translate-y-1/2 hidden lg:flex">
              {processSteps.map((_, i) => (
                <span key={i} className="text-[150px] font-bold font-TuskerGrotesk">{i+1}</span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center text-[30px] text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-[28px] md:text-[45px] font-bold mb-3 text-gray-900 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section-5: Why Choose Leor Media */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {whyChooseUs.map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                      <FaUserCheck />
                    </div>
                    <span className="font-medium text-gray-200">{item}</span>
                 </div>
               ))}
             </div>
           </div>
           <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[14px] mb-4 block">WHY US</span>
              <h2 className="text-[28px] md:text-[45px] font-bold mb-8 leading-tight">
                Why Choose <span className="text-primary">Leor Media</span> <br />
                for Branding?
              </h2>
              <p className="text-[14px] md:text-[18px] text-gray-400 mb-8 leading-relaxed">
                We don't just design; we define. Our team combined with modern strategies and high-quality standards makes us the trusted choice for businesses in Visakhapatnam.
              </p>
              <div className="flex items-center gap-6 p-8 bg-white/5 rounded-3xl border border-white/10">
                 <div className="text-[48px] text-primary font-TuskerGrotesk">100%</div>
                 <div className="text-gray-300 font-bold uppercase tracking-widest text-[14px]">Satisfaction <br /> Guarantee</div>
              </div>
           </div>
        </div>
      </section>

      {/* Section-6: Portfolio Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[14px] mb-4 block">OUR WORK</span>
            <h2 className="text-[28px] md:text-[45px] font-bold mb-6 text-gray-900">Our Branding Works</h2>
            <p className="text-[14px] md:text-[18px] text-gray-600 max-w-2xl mx-auto">Explore some of our creative masterpieces across various branding domains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCategories.map((cat, i) => (
              <div key={i} className="relative group overflow-hidden rounded-3xl bg-gray-100 aspect-video flex items-center justify-center shadow-sm">
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col items-center justify-center text-black p-6">
                   <h3 className="text-[28px] md:text-[45px] font-bold mb-2 text-center">{cat}</h3>
                   <Link to="/contactus" className="bg-black text-white px-6 py-2 rounded-full text-[14px] font-bold mt-4 hover:scale-110 transition-transform">View Projects</Link>
                </div>
                <div className="text-center p-6">
                  <div className="text-[36px] text-primary/30 mb-4 flex justify-center"><FaPalette /></div>
                  <span className="text-[18px] font-bold text-gray-500">{cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-7: Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
           <span className="text-primary font-bold tracking-[0.2em] uppercase text-[14px] mb-4 block">FEEDBACK</span>
           <h2 className="text-[28px] md:text-[45px] font-bold mb-16 text-gray-900">What Our Clients Say</h2>
           
           <div className="bg-white p-10 md:p-20 rounded-[4rem] shadow-xl relative">
              <FaQuoteLeft className="absolute top-10 left-10 text-primary/10 text-[96px]" />
              <Slider {...reviewSettings}>
                 <div className="outline-none">
                   <p className="text-[14px] md:text-[18px] text-gray-800 italic mb-10 leading-relaxed font-light">
                     “Leor Media transformed our business branding with creative designs and professional strategy. Highly recommended for branding services in Vizag.”
                   </p>
                   <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary rounded-full mb-4 flex items-center justify-center text-black font-bold text-[24px] shadow-lg shadow-primary/20">S</div>
                      <h4 className="text-[28px] md:text-[45px] font-bold text-gray-900 uppercase tracking-widest">Successful Business Client</h4>
                      <p className="text-[14px] md:text-[18px] text-primary font-bold">Visakhapatnam, India</p>
                   </div>
                 </div>
              </Slider>
           </div>
        </div>
      </section>

      {/* Section-8: FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[14px] mb-4 block">QUESTIONS?</span>
            <h2 className="text-[28px] md:text-[45px] font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white transition-colors hover:bg-gray-50"
                >
                  <span className="text-[18px] font-bold text-gray-900">{faq.q}</span>
                  {activeFaq === i ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
                </button>
                {activeFaq === i && (
                  <div className="p-6 bg-gray-50 border-t border-gray-100 animate-fade-in-up">
                    <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-9: CTA Section */}
      <section className="py-24 px-4 bg-primary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[28px] md:text-[45px] font-bold text-black mb-8 font-TuskerGrotesk tracking-widest uppercase">
            Ready to <span className="text-white">Build Your Brand?</span>
          </h2>
          <p className="text-[14px] md:text-[18px] text-black/80 mb-12 max-w-2xl mx-auto font-medium">
            Create a strong and memorable business identity with professional branding services from Leor Media.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contactus" className="button1black text-[20px] py-5 px-14 shadow-2xl">
              Contact Us
            </Link>
            <Link to="/contactus" className="bg-white hover:bg-black hover:text-white text-black text-[20px] py-5 px-14 font-bold rounded-full transition-all duration-300 shadow-xl">
              Start Branding Today
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-slider .slick-dots li button:before {
          font-size: 12px;
          color: #FFB624;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #FFB624;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default BrandingServices;

