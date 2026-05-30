import React, { useState, useMemo } from "react";
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
  FaRegQuestionCircle,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const SubpagesWeddingplanners = ({ pageData, seoData }) => {
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

  if (!data) return <div className="mt-32 text-center text-slate-900 font-bold">Data Loading...</div>;

  return (
    <div className="bg-white">
      <Helmet>
        <title>{seo.title || (data.hero?.title || data.title)}</title>
        <meta name="description" content={seo.description || (data.hero?.subtitle || data.subtitle)} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title || (data.hero?.title || data.title)} />
        <meta property="og:description" content={seo.description || (data.hero?.subtitle || data.subtitle)} />
        <meta property="og:image" content={seo.ogImage || (data.coverimage || data.hero?.image)} />
        <link rel="canonical" href={seo.canonical} />
      </Helmet>

      <main className="overflow-hidden">
        {/* 1. Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LazyImage 
              src={data.coverimage || data.hero?.image} 
              alt={data.hero?.title} 
              className="w-full h-full scale-105" 
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary text-[14px] font-bold tracking-widest uppercase">
                Luxury Wedding Planners
              </span>
              <h1 className="text-[28px] md:text-[45px] font-extrabold leading-tight text-white drop-shadow-2xl">
                {data.hero?.title || data.title}
              </h1>
              <p className="text-[14px] md:text-[18px] opacity-90 max-w-3xl mx-auto leading-relaxed font-medium">
                {data.hero?.subtitle || data.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 py-4">
                {data.hero?.highlights?.map((highlight, idx) => (
                  <span key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-[14px] font-semibold">
                    <FaCheckCircle className="text-primary" /> {highlight}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                {data.hero?.ctas?.map((cta, idx) => (
                  <Link
                    key={idx}
                    to={cta.link}
                    className={`${
                      cta.primary 
                      ? "px-10 py-4 bg-primary text-white rounded-full font-bold text-[18px] hover:bg-primary-dark transition-all transform hover:scale-105 shadow-xl shadow-primary/30"
                      : "px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-[18px] hover:bg-white/20 transition-all transform hover:scale-105"
                    }`}
                  >
                    {cta.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* 2. Short Introduction Section */}
        {(data.introduction || data.section2) && (
          <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <span className="text-primary font-bold tracking-widest uppercase block">
                      {data.introduction?.heading || data.section2?.tagline}
                    </span>
                    <h2 className="text-[28px] md:text-[45px] font-bold text-slate-900 leading-tight">
                      {data.introduction?.heading ? "Crafting Stories That Last a Lifetime" : data.section2?.heading}
                    </h2>
                  </div>
                  <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed italic border-l-4 border-primary pl-6">
                    {data.introduction?.text || data.section2?.description}
                  </p>
                  {data.introduction?.details && (
                    <p className="text-[14px] md:text-[18px] text-gray-700 leading-relaxed">
                      {data.introduction.details}
                    </p>
                  )}
                </div>
                <div className="flex-1 relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
                    <LazyImage src={data.coverimage} alt="Introduction" className="w-full h-full" />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-900/10 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Services Section */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase block">Our Expertise</span>
              <h2 className="text-[28px] md:text-[45px] font-bold text-white">Premium Wedding Services</h2>
              <p className="text-[14px] md:text-[18px] text-gray-400">Comprehensive solutions for every aspect of your destination wedding.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.services?.map((service, idx) => (
                <div key={idx} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={service.icon} className="text-[24px] text-primary" />
                  </div>
                  <h3 className="text-[28px] md:text-[45px] font-bold mb-3">{service.title}</h3>
                  <p className="text-[14px] md:text-[18px] text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3 space-y-6">
                <span className="text-primary font-bold tracking-widest uppercase block">Why Choose Us</span>
                <h2 className="text-[28px] md:text-[45px] font-bold text-slate-900 leading-tight">
                  Vizag's Most Trusted Wedding Agency
                </h2>
                <p className="text-[14px] md:text-[18px] text-gray-600">
                  We don't just plan weddings; we create legacies. Our commitment to excellence ensures your special day is nothing short of magical.
                </p>
                <div className="pt-8">
                  <Link to="/contactus" className="inline-flex items-center gap-3 text-primary font-bold text-[18px] group">
                    Learn More About Our Values <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {data.whyChoose?.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={item.icon} className="text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[28px] md:text-[45px] font-bold text-slate-900">{item.title}</h3>
                      <p className="text-[14px] md:text-[18px] text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Gallery Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase block">Wedding Gallery</span>
              <h2 className="text-[28px] md:text-[45px] font-bold text-slate-900">A Glimpse of Perfection</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.gallery?.map((item, idx) => (
                <div key={idx} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <LazyImage src={item.image} alt={item.title} className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <h3 className="text-[28px] md:text-[45px] text-white font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Packages Section */}
        {(data.packages || data.pricing) && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase block">Our Packages</span>
                <h2 className="text-[28px] md:text-[45px] font-bold text-slate-900">Tailored Luxury Experiences</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {(data.packages || data.pricing).map((pkg, idx) => (
                  <div key={idx} className={`relative p-10 rounded-3xl border transition-all ${pkg.highlighted ? "border-primary bg-slate-900 text-white scale-105 z-10 shadow-2xl" : "border-gray-200 bg-white text-slate-900 hover:border-primary/50"}`}>
                    {pkg.highlighted && (
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-white text-[14px] font-bold rounded-full uppercase tracking-widest">
                        Most Popular
                      </span>
                    )}
                    <h3 className="text-[28px] md:text-[45px] font-bold mb-2">{pkg.title}</h3>
                    <div className="text-[30px] font-extrabold text-primary mb-8">{pkg.price}</div>
                    <ul className="space-y-4 mb-12">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <FaCheckCircle className="text-primary flex-shrink-0" />
                          <span className="opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/get-quotation" className={`block text-center py-4 rounded-xl font-bold transition-all ${pkg.highlighted ? "bg-primary text-white hover:bg-primary-dark" : "bg-gray-100 text-slate-900 hover:bg-primary hover:text-white"}`}>
                      Get Quote
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. Process Section */}
        {data.process && (
          <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase block">Our Process</span>
                <h2 className="text-[28px] md:text-[45px] font-bold text-white">Six Steps to Perfection</h2>
              </div>
              
              <div className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8 text-white">
                  {data.process.map((step, idx) => (
                    <div key={idx} className="relative z-10 text-center space-y-6 group">
                      <div className="w-16 h-16 bg-slate-900 border-4 border-primary rounded-full flex items-center justify-center mx-auto text-[24px] font-black text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        {idx + 1}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-[28px] md:text-[45px] font-bold">{step.title}</h3>
                        <p className="text-[14px] md:text-[18px] text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 8. Testimonials Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-black text-gray-50 -z-0 opacity-50 select-none uppercase tracking-tighter">Trust</div>
          <div className="container mx-auto px-6 relative z-10">
             <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase block">Testimonials</span>
              <h2 className="text-[28px] md:text-[45px] font-bold text-slate-900">What Couples Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {data.testimonials?.map((t, idx) => (
                <div key={idx} className="p-10 bg-gray-50 rounded-3xl relative">
                  <FaQuoteLeft className="text-[36px] text-primary/20 absolute top-10 left-10" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                    </div>
                    <p className="text-[14px] md:text-[18px] text-gray-700 font-medium italic leading-relaxed">"{t.review}"</p>
                    <div className="font-bold text-slate-900">— {t.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase block">Common Questions</span>
                <h2 className="text-[28px] md:text-[45px] font-bold text-slate-900">Expert Wedding Advice</h2>
              </div>
              
              <div className="space-y-4">
                {data.faqs?.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all hover:border-primary/30">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 group"
                    >
                      <span className="text-[18px] font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center gap-3">
                        <FaRegQuestionCircle className="text-primary flex-shrink-0" /> {faq.question}
                      </span>
                      <FaChevronRight className={`text-primary transition-transform duration-300 ${openFaqIndex === idx ? "rotate-90" : ""}`} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFaqIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. Final CTA Section */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-10">
              <h2 className="text-[28px] md:text-[45px] font-black leading-tight drop-shadow-xl">{data.finalCTA?.title}</h2>
              <p className="text-[14px] md:text-[18px] opacity-90 leading-relaxed">
                {data.finalCTA?.text}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-6">
                {data.finalCTA?.phones?.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone}`} className="flex items-center gap-4 text-[24px] md:text-[30px] font-black hover:scale-105 transition-transform group">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <FaPhone className="text-[18px]" />
                    </div>
                    {phone}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {data.finalCTA?.ctas?.map((cta, idx) => (
                  <Link 
                    key={idx} 
                    to={cta.link} 
                    className={`px-10 py-5 rounded-full font-bold text-[18px] flex items-center gap-3 transition-all transform hover:scale-105 ${idx === 0 ? "bg-green-500 hover:bg-green-600 text-white shadow-xl shadow-green-900/20" : "bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/20"}`}
                  >
                    {cta.icon === 'whatsapp' ? <FaWhatsapp className="text-[24px]" /> : <FaArrowRight />}
                    {cta.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SubpagesWeddingplanners;
