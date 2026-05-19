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
import { GlobalData } from "../../../assets/data/GlodalData";

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

const SubpagesBranding = ({ pageData, seoData }) => {
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
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LazyImage 
              src={data.coverimage} 
              alt={data.title} 
              className="w-full h-full scale-105" 
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary text-sm font-semibold tracking-wider uppercase">
                {data.categoryLabel || "Branding"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {data.hero?.title || data.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                {data.hero?.subtitle || data.subtitle}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
                {(data.hero?.ctas || [
                  { text: "Get Free Consultation", link: "/contactus", primary: true },
                  { text: "Call Now", link: `tel:${GlobalData.company.companyPhone}`, primary: false }
                ]).map((cta, idx) => (
                  <Link
                    key={idx}
                    to={cta.link.startsWith('tel:') ? '#' : cta.link}
                    onClick={cta.link.startsWith('tel:') ? () => window.location.href = cta.link : undefined}
                    className={`w-full md:w-auto px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                      cta.primary 
                      ? "bg-primary text-white hover:bg-orange-600 shadow-lg shadow-primary/25"
                      : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                    }`}
                  >
                    {cta.text} {cta.primary && <FaArrowRight className="text-sm" />}
                  </Link>
                ))}
              </div>
              
              {data.hero?.highlights && (
                <div className="flex flex-wrap justify-center gap-6 pt-10 text-sm md:text-base opacity-80">
                  {data.hero.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-primary" /> {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 2. Intro Section */}
        {data.introduction && (
          <section className="py-20 bg-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {data.introduction.heading}
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-left">
                  {data.introduction.text && <p>{data.introduction.text}</p>}
                  {data.introduction.details && <p>{data.introduction.details}</p>}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Services Grid Section */}
        {data.services && data.services.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-16">{data.servicesTitle || "Our Services"}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.services.map((service, index) => (
                  <div
                    key={index}
                    className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {service.icon ? (
                        typeof service.icon === "string" ? (
                          <FontAwesomeIcon icon={service.icon} />
                        ) : (
                          <FontAwesomeIcon icon={service.icon} />
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
        )}

        {/* 4. Why Choose Us Section */}
        {data.whyChoose && data.whyChoose.length > 0 && (
          <section className="py-24 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{data.whyChooseTitle || "Why Choose Leor Media"}</h2>
                {data.whyChooseDesc && <p className="text-gray-400 text-lg">{data.whyChooseDesc}</p>}
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                {data.whyChoose.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all">
                      {item.icon ? <FontAwesomeIcon icon={item.icon} /> : <FaStar />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description || item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Trust & Proof Section (Dynamic Stats or Industries) */}
        {(data.trustProof || data.gallery) && (
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-16">{data.trustTitle || "Trust & Proof"}</h2>
              
              {data.trustProof && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {data.trustProof.map((stat, idx) => (
                    <div key={idx} className="p-8 bg-white rounded-3xl shadow-sm">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-gray-600 font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {data.gallery && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                  {data.gallery.map((item, index) => (
                    <div
                      key={index}
                      className={`relative overflow-hidden rounded-3xl group ${item.col || "md:col-span-1 md:row-span-1"}`}
                    >
                      <LazyImage 
                        src={item.image || data.coverimage} 
                        alt={item.title || `Gallery ${index}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                        <div className="text-white text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="text-xl font-bold">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 6. FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-primary italic">Questions</span></h2>
                <p className="text-gray-600">Everything you need to know about our {data.title} services.</p>
              </div>
              
              <div className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-100 transition-colors"
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
        )}

        {/* 7. Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LazyImage src={data.coverimage} alt="Final CTA" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 opacity-90"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                {data.finalCTA?.title || "Ready to Build a Strong Brand?"}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                {data.finalCTA?.text || "Partner with Visakhapatnam's leading branding agency to establish your market presence."}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
                <a
                  href={`https://wa.me/${GlobalData.company.companyWhatsapp.replace(/[^0-9]/g, '')}`}
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
                {(data.finalCTA?.phones || [GlobalData.company.companyPhone]).map((phone, pIdx) => (
                  <a key={pIdx} href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-lg font-bold hover:text-white/80 transition-colors">
                    📞 {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default React.memo(SubpagesBranding);

