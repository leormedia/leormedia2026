import React from"react";
import { Link } from"react-router-dom";
import { Helmet } from"react-helmet-async";
import Slider from"react-slick";
import { 
  FaRocket, FaSearch, FaGoogle, FaHashtag, FaPenNib, 
  FaBullhorn, FaPalette, FaChartLine, FaQuoteLeft,
  FaCheckCircle, FaUserFriends, FaBuilding, FaGlobe
} from"react-icons/fa";
import { MdOutlineWeb, MdAdsClick } from"react-icons/md";
import { BiNetworkChart } from"react-icons/bi";
import { 
  DigitalMarketingCoverImage, 
  DigitalMarketingImage 
} from"../../../assets/data/Imagedata";
import { GlobalData } from"../../../assets/data/GlodalData";
import SEO from "../../../components/SEO/SEO";
import"slick-carousel/slick/slick.css";
import"slick-carousel/slick/slick-theme.css";

const DigitalMarketing = () => {
  const services = [
    { title:"Performance Marketing", icon: <FaChartLine />, desc:"Data-driven campaigns focused on ROI and measurable growth." },
    { title:"Website Design", icon: <MdOutlineWeb />, desc:"Modern, responsive, and high-conversion web experiences." },
    { title:"SEO", icon: <FaSearch />, desc:"Boost your organic visibility and rank higher on search engines." },
    { title:"Google Ads", icon: <FaGoogle />, desc:"Targeted PPC campaigns to reach your customers instantly." },
    { title:"Social Media Marketing", icon: <FaHashtag />, desc:"Engage your audience where they spend most of their time." },
    { title:"Content Writing", icon: <FaPenNib />, desc:"Compelling storytelling that resonates with your brand voice." },
    { title:"Branding", icon: <FaBullhorn />, desc:"Creating unique brand identities that stand out in the market." },
    { title:"Lead Generation Campaigns", icon: <MdAdsClick />, desc:"High-quality lead acquisition strategies for your sales team." },
    { title:"Logo & Brand Design", icon: <FaPalette />, desc:"Visual identity systems that leave a lasting impression." },
  ];

  const stats = [
    { label:"Years", value:"10" },
    { label:"Team", value:"100+" },
    { label:"Brands", value:"250+" },
    { label:"Generated", value:"200+M" },
  ];

  const processSteps = [
    { title:"Discovery", desc:"Understanding your business goals and audience." },
    { title:"Strategy", desc:"Developing a tailored roadmap for success." },
    { title:"Execution", desc:"Implementing campaigns with precision." },
    { title:"Optimization", desc:"Continuous monitoring and improvements." },
  ];

  const reviews = [
    { name:"John Doe", company:"Tech Solutions", text:"Leor Media transformed our online presence. Our leads increased by 300% in just six months!", image:"https://i.pravatar.cc/150?u=1" },
    { name:"Sarah Smith", company:"Fashion Hub", text:"The team is professional and highly creative. Their social media strategies are top-notch.", image:"https://i.pravatar.cc/150?u=2" },
    { name:"Robert Wilson", company:"Global Exports", text:"Best digital marketing agency in Vizag. They really understand the local and global market.", image:"https://i.pravatar.cc/150?u=3" },
  ];

  const reviewSettings = {
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
      <SEO pageKey="digitalmarketing" />

      {/* Section-1: Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={DigitalMarketingCoverImage}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40 z-0"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-world-map-with-glowing-lines-32617-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-[28px] md:text-5xl lg:text-[52px] font-bold mb-6 font-TuskerGrotesk tracking-wider animate-fade-in-up uppercase">
            DIGITAL MARKETING <span className="text-primary">EXCELLENCE</span>
          </h1>
          <p className="text-base md:text-lg mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Drive growth, build authority, and dominate your niche with Vizag's most trusted digital marketing partner.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contactus" className="button1 text-sm py-4 px-10">
              Get Started
            </Link>
            <a href="#services" className="button2 text-sm py-4 px-10 border-white text-white hover:bg-white hover:text-black">
              Explore Services
            </a>
          </div>
          <div className="mt-12">
             <Link to="/contactus" className="text-sm text-white/60 hover:text-primary transition-colors font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                Grow Your Brand Today <FaRocket />
             </Link>
          </div>
        </div>
      </section>

      {/* Section-2: About & Form */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <span className="text-sm text-primary font-bold tracking-[0.2em] uppercase mb-4 block">ABOUT OUR AGENCY</span>
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              We are the <br />
              <span className="text-primary">Digital Marketing in Vizag</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              Leor Media is more than just an agency; we are your strategic partners in the digital world. 
              Based in the heart of Visakhapatnam, we specialize in creating 360-degree digital solutions 
              that help brands connect with their audience effectively.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 w-fit">
              <div className="bg-primary/10 p-4 rounded-full text-primary">
                <FaUserFriends />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">Join Our Success</p>
                <p className="text-sm md:text-base font-bold text-gray-900">Partner with Experts</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <img 
              src={DigitalMarketingImage} 
              alt="Digital Marketing Excellence" 
              className="rounded-[2rem] shadow-xl w-full h-[300px] object-cover"
            />
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
               <ul className="space-y-4">
                {["Strategic Brand Growth","Data-Driven Campaigns","Local Market Expertise","Innovative Creative Solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-sm md:text-base text-gray-700">
                    <FaCheckCircle className="text-primary mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1 bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              Enquire Now
            </h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 text-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 text-sm" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 text-sm" />
              <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 text-gray-500 text-sm">
                <option>Select Service</option>
                {services.map((s, i) => <option key={i}>{s.title}</option>)}
              </select>
              <textarea placeholder="Tell us about your project" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 h-32 text-sm"></textarea>
              <button type="submit" className="button1 text-sm w-full py-5 font-bold rounded-xl shadow-lg shadow-primary/20">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section-3: Services Grid */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-bold tracking-[0.2em] uppercase mb-4 block">WHAT WE OFFER</span>
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-6 text-gray-900">Comprehensive Marketing Services</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 flex flex-col items-start"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/contactus" className="text-sm text-primary font-bold inline-flex items-center group/link hover:underline">
                  Learn More <FaRocket className="ml-2 transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-4: Company Stats */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 font-TuskerGrotesk tracking-widest group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-[0.3em] font-bold text-gray-400 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section-5: Infographic Process */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm text-primary font-bold tracking-[0.2em] uppercase mb-4 block">OUR STRATEGY</span>
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-6 text-gray-900">The Growth Process</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">A systematic approach to scale your business and achieve predictable results.</p>
          </div>
          
          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-primary transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section-6: Client Reviews */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-bold tracking-[0.2em] uppercase mb-4 block">TESTIMONIALS</span>
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
          </div>
          
          <div className="bg-gray-50 p-8 md:p-16 rounded-[3rem] relative shadow-inner">
            <FaQuoteLeft className="absolute top-10 left-10 text-gray-200   -z-0" />
            <Slider {...reviewSettings} className="relative z-10 testimonial-slider">
              {reviews.map((review, i) => (
                <div key={i} className="outline-none">
                  <p className="text-sm md:text-base text-gray-700 italic mb-10 leading-relaxed">"{review.text}"
                  </p>
                  <div className="flex items-center gap-5">
                    <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-[22px] font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-primary font-medium">{review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold text-black mb-8 leading-tight">
            Ready to Take Your Brand to the <br /> <span className="text-white">Next Level?</span>
          </h2>
          <p className="text-base md:text-lg text-black/80 mb-12 max-w-2xl mx-auto">
            Contact us today for a free digital audit and discovery session with our experts.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contactus" className="button1black text-sm py-4 px-12">
              Start Your Project
            </Link>
            <a href={`tel:${GlobalData.company.companyPhone}`} className="text-sm md:text-base flex items-center gap-3 text-black font-bold hover:scale-105 transition-transform">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <FaRocket />
              </div>
              Call Us Now
            </a>
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
      `}} />
    </div>
  );
};

export default DigitalMarketing;

