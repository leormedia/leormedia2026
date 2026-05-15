import React, { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FaChevronRight,
  FaPhone,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft,
  FaPlay,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalData } from "../../assets/data/GlodalData";

// Lazy load image component
const LazyImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </div>
  );
};

const SubPages = ({ pageData, seoData }) => {
  const { category } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Get current data based on category
  const data = useMemo(() => {
    if (pageData && category && pageData[category]) {
      return pageData[category];
    }
    return pageData;
  }, [pageData, category]);

  // SEO Data
  const seo = useMemo(() => {
    if (!data?.SeoName?.seotitle) return {};
    return seoData[data.SeoName.seotitle] || {};
  }, [seoData, data?.SeoName?.seotitle]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (!data) return <div className="mt-32 text-center">Loading...</div>;

  return (
    <div className="bg-white">
      <Helmet>
        <title>{seo.title || data.title}</title>
        <meta name="description" content={seo.description || data.subtitle} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title || data.title} />
        <meta property="og:description" content={seo.description || data.subtitle} />
        <meta property="og:image" content={seo.ogImage || data.coverimage} />
        <link rel="canonical" href={seo.canonical} />
      </Helmet>

      <main className="overflow-hidden">
        {/* 1. Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LazyImage 
              src={data.coverimage} 
              alt={data.title} 
              className="w-full h-full scale-105" 
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary text-sm font-semibold tracking-wider uppercase">
                Premium Event Solutions
              </span>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                {data.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                {data.subtitle}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
                <Link
                  to="/contactus"
                  className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                >
                  Book Consultation <FaArrowRight className="text-sm" />
                </Link>
                <a
                  href={`tel:${GlobalData.company.companyPhone}`}
                  className="w-full md:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <FaPhone className="text-sm" /> Call Now
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 pt-10 text-sm md:text-base opacity-80">
                {["Luxury Experience", "End-to-End Planning", "Expert Coordination"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-primary" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* 2. Short Introduction Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Crafting Extraordinary Experiences <span className="text-primary italic">Tailored to You</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-10 text-left text-gray-600 leading-relaxed text-lg">
                <p>
                  {data.section2?.description || "At Leor Media, we believe every event is a story waiting to be told. Our approach combines creative vision with meticulous attention to detail, ensuring that your celebration is not just an event, but a lifelong memory."}
                </p>
                <p>
                  Our dedicated team manages every intricate detail—from venue selection and decor to entertainment and guest hospitality—allowing you to fully immerse yourself in the joy of the occasion without a single worry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Services Included Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Services Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {(data.services || [
                { title: "Venue Selection", description: "Finding the perfect backdrop for your big day.", icon: "faBuilding" },
                { title: "Decor & Theme", description: "Transforming spaces with creative concepts.", icon: "faPalette" },
                { title: "Catering", description: "Exquisite culinary experiences for your guests.", icon: "faUtensils" },
                { title: "Entertainment", description: "Engaging performances and music.", icon: "faMusic" },
                { title: "Guest Management", description: "Professional hospitality for everyone.", icon: "faUsers" },
                { title: "Photography", description: "Capturing every precious moment.", icon: "faCamera" },
                { title: "Coordination", description: "Seamless execution on the event day.", icon: "faCheckCircle" },
                { title: "Travel & Stay", description: "Logistics for out-of-town guests.", icon: "faPlane" },
              ]).map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon ? (
                      typeof service.icon === "string" ? (
                        <FontAwesomeIcon icon={service.icon} />
                      ) : service.icon.iconName || service.icon.prefix ? (
                        <FontAwesomeIcon icon={service.icon} />
                      ) : (
                        React.createElement(service.icon)
                      )
                    ) : (
                      <FaCheckCircle />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Leor Media */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose <span className="text-primary">Leor Media</span></h2>
              <p className="text-gray-400 text-lg">We bring years of expertise and a passion for perfection to every event we handle.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Expert Team", desc: "Professionals with decades of combined experience.", icon: <FaStar /> },
                { title: "Creative Concepts", desc: "Unique themes tailored to your personality.", icon: <FaStar /> },
                { title: "Transparent Pricing", desc: "Luxury packages that fit your budget.", icon: <FaStar /> },
                { title: "End-to-End Management", desc: "We handle everything from start to finish.", icon: <FaStar /> },
                { title: "Custom Planning", desc: "Every detail is planned just for you.", icon: <FaStar /> },
                { title: "Timely Execution", desc: "Perfect timing, every single time.", icon: <FaStar /> },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Gallery Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Event Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
              {[
                { col: "md:col-span-2", row: "md:row-span-2", title: "Luxury Settings" },
                { col: "md:col-span-1", row: "md:row-span-1", title: "Outdoor Events" },
                { col: "md:col-span-1", row: "md:row-span-2", title: "Traditional Decor" },
                { col: "md:col-span-1", row: "md:row-span-1", title: "Grand Entries" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-3xl group ${item.col} ${item.row}`}
                >
                  <LazyImage 
                    src={`${data.coverimage}?v=${index}`} 
                    alt={`Gallery ${index}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="text-white text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-semibold text-primary mb-1 uppercase tracking-wider">Showcase</p>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/contactus" className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all">
                View Full Portfolio <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Packages Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Packages</h2>
              <p className="text-gray-600">Choose a plan that fits your vision and budget.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Basic Package", price: "₹1.5L", features: ["Consultation", "Essential Decor", "Vendor Listing", "On-site Coordination"], highlighted: false },
                { title: "Premium Package", price: "₹5L", features: ["Custom Theme", "Luxury Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
                { title: "Luxury Package", price: "Custom", features: ["Full Event Design", "Celebrity Guests", "Exotic Venues", "Concierge Service"], highlighted: false },
              ].map((pkg, index) => (
                <div
                  key={index}
                  className={`p-10 rounded-[2.5rem] border ${
                    pkg.highlighted 
                    ? "bg-black text-white border-black shadow-2xl scale-105 z-10" 
                    : "bg-white text-gray-900 border-gray-100 hover:border-primary/30 transition-colors"
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-4 ${pkg.highlighted ? "text-primary" : ""}`}>{pkg.title}</h3>
                  <div className="mb-8">
                    <span className="text-sm opacity-60">Starting From</span>
                    <p className="text-4xl font-extrabold">{pkg.price}</p>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <FaCheckCircle className={pkg.highlighted ? "text-primary" : "text-primary"} />
                        <span className="opacity-80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contactus"
                    className={`block w-full py-4 rounded-full font-bold text-center transition-all ${
                      pkg.highlighted 
                      ? "bg-primary text-white hover:bg-orange-600 shadow-lg shadow-primary/30" 
                      : "bg-gray-100 text-gray-900 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Process Section */}
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">The Planning <span className="text-primary italic">Journey</span></h2>
            
            <div className="relative">
              {/* Desktop Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <div className="grid md:grid-cols-6 gap-8">
                {[
                  { step: "01", title: "Consultation", desc: "Initial meeting to understand your vision." },
                  { step: "02", title: "Finalization", desc: "Choosing the perfect venue and dates." },
                  { step: "03", title: "Theme Design", desc: "Conceptualizing the creative elements." },
                  { step: "04", title: "Coordination", desc: "Syncing with vendors and artists." },
                  { step: "05", title: "Execution", desc: "Bringing the vision to life seamlessly." },
                  { step: "06", title: "Support", desc: "Ensuring every post-event detail is met." },
                ].map((item, index) => (
                  <div key={index} className="relative text-center group">
                    <div className="w-16 h-16 bg-black border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/20">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials Section */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Stories</h2>
                <p className="text-gray-600 text-lg">Don't just take our word for it. Here's what our happy clients have to say.</p>
              </div>
              <div className="flex gap-4">
                <div className="p-4 rounded-full border border-gray-200 cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <FaChevronRight className="rotate-180" />
                </div>
                <div className="p-4 rounded-full border border-gray-200 cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <FaChevronRight />
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { name: "Rahul & Sneha", review: "Leor Media made our destination wedding a breeze. Every detail was perfect beyond imagination!", role: "Wedding Couple" },
                { name: "Kiran Kumar", review: "Professionalism at its best. They handled our corporate event with such precision and grace.", role: "CEO, Tech Corp" },
              ].map((testi, index) => (
                <div key={index} className="p-12 bg-gray-50 rounded-[3rem] relative">
                  <FaQuoteLeft className="text-primary/10 text-6xl absolute top-8 right-8" />
                  <div className="flex items-center gap-2 text-primary mb-6">
                    {[1, 2, 3, 4, 5].map(s => <FaStar key={s} />)}
                  </div>
                  <p className="text-xl text-gray-800 italic leading-relaxed mb-8">"{testi.review}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-lg">{testi.name}</h4>
                      <p className="text-gray-500 text-sm">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-primary italic">Questions</span></h2>
              <p className="text-gray-600">Everything you need to know about our services.</p>
            </div>
            
            <div className="space-y-4">
              {(data.faqs && data.faqs.length > 0 ? data.faqs : [
                { question: "How much does a destination wedding cost?", answer: "Costs vary based on location, guest count, and requirements. Contact us for a custom quote." },
                { question: "Which locations are best for destination weddings?", answer: "Vizag, Udaipur, Goa, and Jaipur are popular choices in India. We can help you pick based on your vision." },
                { question: "Do you provide complete wedding planning?", answer: "Yes, we handle everything from venue to post-event support." },
                { question: "Can you arrange beach weddings?", answer: "Absolutely! We specialize in luxury beach weddings in Vizag and beyond." },
                { question: "How early should we book?", answer: "We recommend booking at least 6 months in advance for big events." }
              ]).map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-transform duration-300 ${openFaqIndex === index ? "rotate-90 bg-primary border-primary text-white" : ""}`}>
                      <FaChevronRight className="text-xs" />
                    </div>
                  </button>
                  <div
                    className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LazyImage src={data.coverimage} alt="Final CTA" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 opacity-90"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight">
                Let's Plan Your <br /><span className="text-black/20">Dream Celebration</span>
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                Turn your dream destination wedding into reality with Leor Media. Our expert team ensures a stress-free and memorable celebration.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
                <a
                  href={GlobalData.company.companyWhatsapp}
                  className="w-full md:w-auto px-10 py-5 bg-white text-primary rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" /> WhatsApp Us
                </a>
                <Link
                  to="/contactus"
                  className="w-full md:w-auto px-10 py-5 bg-black text-white rounded-full font-bold text-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
                >
                  Get Free Quote
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 pt-10">
                <a href={`tel:${GlobalData.company.companyPhone}`} className="text-lg font-bold hover:text-black transition-colors">
                  📞 {GlobalData.company.companyPhone}
                </a>
                <a href="tel:+919542248999" className="text-lg font-bold hover:text-black transition-colors">
                  📞 +91 95422 48999
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default React.memo(SubPages);

