import React from"react";
import { Link } from"react-router-dom";
import { Helmet } from"react-helmet-async";
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { 
  FaRocket, FaCheckCircle, FaUserFriends, FaPhone, FaQuestion,
  FaCalendarAlt, FaStar, FaAward, FaUsers, FaClock
} from"react-icons/fa";
import { EventsCompany } from"./EventsDetailPageData.jsx";
import { GlobalData } from"../../../assets/data/GlodalData";
import seoData from"../../../assets/data/seo.json";
import { eventsLinks } from"../../../components/Navbar/MenuItems.js";

const Events = () => {
  const { title, description, keywords, canonical, ogImage } = seoData.events;

  const stats = [
    { label:"Events Managed", value:"500+" },
    { label:"Happy Clients", value:"450+" },
    { label:"Team Experts", value:"50+" },
    { label:"Years Exp", value:"10+" },
  ];

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
        <meta property="og:url" content={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0">
          <img 
            src={EventsCompany.coverimage} 
            alt="Events Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-[28px] md:text-5xl lg:text-[52px] font-bold mb-6 font-TuskerGrotesk tracking-wider animate-fade-in-up uppercase">
            Creating <span className="text-primary">Unforgettable</span> <br />
            Moments
          </h1>
          <p className="text-base md:text-lg mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            From intimate celebrations to grand corporate galas, we bring your vision to life with passion and precision.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contactus" className="button1 text-sm py-4 px-10">
              Book Your Event
            </Link>
            <Link to="/contactus" className="button2 text-sm py-4 px-10 border-white text-white hover:bg-white hover:text-black">
              View Gallery
            </Link>
          </div>
          <div className="mt-12">
             <Link to="/contactus" className="text-sm text-white/60 hover:text-primary transition-colors font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                Plan Your Event Today <FaRocket />
             </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm text-primary font-bold tracking-[0.2em] uppercase mb-4 block">VIZAG'S PREMIER EVENT PLANNERS</span>
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              {EventsCompany.section2.heading}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              {EventsCompany.section2.description}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1 font-TuskerGrotesk">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src={EventsCompany.coverimage} 
              alt="Event Management" 
              className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-4 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-4 text-gray-900">Our Expertise</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EventsCompany.services.map((service, i) => {
              const categoryGroup = eventsLinks.find(
                (group) => group.category === service.title
              );
              return (
                <div key={i} className="group p-10 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center  text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-[22px] font-bold mb-4 text-gray-900">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  {categoryGroup && (
                    <ul className="space-y-3 mt-6 border-t border-gray-200/60 pt-6">
                      {categoryGroup.links.map((subLink, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={subLink.path}
                            className="text-sm flex items-center gap-2.5 text-gray-600 hover:text-primary transition-colors font-semibold group/link"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover/link:scale-150 transition-all duration-300"></span>
                            {subLink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-8 font-TuskerGrotesk tracking-widest uppercase">
            Ready to Plan Your <span className="text-primary">Next Big Event?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's start creating magic together.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contactus" className="button1  py-4 px-12">
              Contact Us
            </Link>
            <a href={`tel:${GlobalData.company.companyPhone}`} className="text-sm md:text-base flex items-center gap-3 text-white font-bold hover:scale-105 transition-transform">
              <div className="bg-primary p-3 rounded-full shadow-lg text-black">
                <FaPhone />
              </div>
              {GlobalData.company.companyPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
