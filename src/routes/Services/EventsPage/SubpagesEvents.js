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
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
          }`}
        {...props}
      />
    </div>
  );
};

const SubpagesEvents = ({ pageData, seoData }) => {
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
              <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary  font-semibold tracking-wider uppercase">
                {data.categoryLabel || "Events"}
              </span>
              <h1 className="font-bold leading-tight">
                {data.hero?.title || data.title}
              </h1>
              <p className="opacity-90 max-w-2xl mx-auto leading-relaxed">
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
                    className={`w-full md:w-auto px-8 py-4 rounded-full font-bold  transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${cta.primary
                      ? "bg-primary text-white hover:bg-orange-600 shadow-lg shadow-primary/25"
                      : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
                      }`}
                  >
                    {cta.text} {cta.primary && <FaArrowRight className="" />}
                  </Link>
                ))}
              </div>

              {data.hero?.highlights && (
                <div className="flex flex-wrap justify-center gap-6 pt-10   opacity-80">
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
                <h2 className="font-bold text-gray-900 leading-tight">
                  {data.introduction.heading}
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed  text-left">
                  {data.introduction.text && <p className="">{data.introduction.text}</p>}
                  {data.introduction.details && <p className="">{data.introduction.details}</p>}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Services Grid Section */}
        {data.services && data.services.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-bold mb-16">{data.servicesTitle || "Our Services"}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left"> {/* Changed text-center to text-left for better layout alignment */}
                {data.services.map((service, index) => (
                  <div
                    key={index}
                    className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Header Flex Container: Icon beside Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {service.icon ? (
                          <FontAwesomeIcon icon={service.icon} />
                        ) : (
                          <FaCheckCircle />
                        )}
                      </div>
                      <h5 className=" leading-tight">{service.title}</h5  >
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
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
              <h2 className="font-bold leading-tight">
                {data.finalCTA?.title || "Ready to Host an Unforgettable Event?"}
              </h2>
              <p className="opacity-90 max-w-2xl mx-auto">
                {data.finalCTA?.text || "Partner with Visakhapatnam's leading event management company to bring your vision to life."}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
                <a
                  href={`https://wa.me/${GlobalData.company.companyWhatsapp.replace(/[^0-9]/g, '')}`}
                  className="w-full md:w-auto px-10 py-5 bg-white text-primary rounded-full font-bold  hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="" /> WhatsApp Us
                </a>
                <Link
                  to="/contactus"
                  className="w-full md:w-auto px-10 py-5 bg-black text-white rounded-full font-bold  hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
                >
                  Get Free Quote
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 pt-10">
                {(data.finalCTA?.phones || [GlobalData.company.companyPhone]).map((phone, pIdx) => (
                  <a key={pIdx} href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="font-bold hover:text-white/80 transition-colors">
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

export default React.memo(SubpagesEvents);

