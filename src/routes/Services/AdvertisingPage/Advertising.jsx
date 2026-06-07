import { Link } from"react-router-dom";
import { AdvertisingCompany } from"./AdvertisementDetailPageData";
import { ServicesCoverImage } from"../../../assets/data/Imagedata";
import { GlobalData } from"../../../assets/data/GlodalData";
import seoData from"../../../assets/data/seo.json";
import { Helmet } from"react-helmet-async";
import { FontAwesomeIcon } from"@fortawesome/react-fontawesome";
import { FaArrowRight, FaPhone, FaQuestion, FaWhatsapp, FaRocket } from "react-icons/fa";

const { title, description, keywords, canonical, ogImage } =
  seoData.advertising;

const Advertising = () => {
  return (
    <div className="">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Leor Media" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <main className="space-y-8 my-6">
        {/* Section-1: Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900 mt-14">
          <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0">
            <img 
              src={AdvertisingCompany.coverimage} 
              alt="Advertising Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
          <div className="relative z-20 text-center text-white px-4 max-w-5xl">
            <h1 className="text-[18px] md:text-5xl lg:text-[52px] font-bold mb-6 font-TuskerGrotesk tracking-wider animate-fade-in-up uppercase">
              Advertisement Services in Visakhapatnam | Leor Media
            </h1>
            <p className="text-[12px] md:text-lg mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Leor Media offers comprehensive ATL, BTL, and Digital advertising solutions to help your brand reach the right audience across all channels.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contactus" className="button1 text-sm py-4 px-10">
                Start Your Brand Journey
              </Link>
              <Link to="/contactus" className="button2 text-sm py-4 px-10 border-white text-white hover:bg-white hover:text-black">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-2">
              {AdvertisingCompany.section2.tagline}
            </p>
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent mb-3 leading-tight">
              {AdvertisingCompany.section2.heading}
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              {AdvertisingCompany.section2.description}
            </p>

            <Link
              to="/frequently-asked-questions"
              className="inline-flex items-center bg-primary hover:bg-orange-500 text-white px-4 py-2 rounded-md  font-medium transition-colors"
            >
              <FaQuestion className="mr-2" /> FAQ
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {AdvertisingCompany.services.map((service, index) => (
              <div
                key={index}
                className="text-center p-3 bg-gray-50 rounded-lg border hover:bg-white transition-colors flex flex-col items-center"
              >
                <div className="w-10 h-10 flex items-center justify-center text-primary mb-2">
                  {typeof service.icon ==="string" ? (
                    <img
                      src={service.icon}
                      className="w-8 h-8 object-contain"
                      alt={service.title}
                      loading="lazy"
                    />
                  ) : (
                    <FontAwesomeIcon icon={service.icon} className="" />
                  )}
                </div>
                <h4 className="text-lg md:text-xl lg:text-[22px] font-bold mb-1">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 mb-3">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-sm inline-flex items-center justify-center w-full bg-primary text-white px-2 py-1 rounded font-medium hover:bg-orange-500 transition-colors"
                >
                  Know More <FaArrowRight className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section
          className="py-12 md:py-20 px-4 rounded-lg mx-4"
          style={{
            backgroundImage: `url(${ServicesCoverImage})`,
            backgroundSize:"cover",
            backgroundPosition:"top",
          }}
        >
          <div className="text-center text-white bg-black/60 py-12 rounded-lg">
            <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-yellow-400">WE BUILD</span>
              <br />
              <span className="text-orange-600">SIMPLE BUT COMPLEX</span>
              <br />
              <span className="text-yellow-400">STABLE COMMUNITY</span>
            </h2>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="px-4 py-12 bg-white mx-4 my-8 rounded-xl shadow-sm border border-gray-100">
          <div className="max-w-5xl mx-auto space-y-12 text-gray-800">
            {/* Home section */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold text-primary mb-6 leading-tight">Grow Your Brand with Powerful Advertising</h2>
              <p className="text-sm md:text-base mb-4 text-gray-600 leading-relaxed">
                In today’s competitive market, advertising is more than promotion—it’s about creating visibility, trust, and real business growth. At Leor Media, we help businesses reach the right audience with creative and result-driven advertising solutions.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Whether you want to increase brand awareness, generate leads, promote a product, or grow sales, our team creates advertising campaigns that deliver measurable results.
              </p>
            </div>

            {/* Our Advertisement Services */}
            <div>
              <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold text-center mb-8 border-b pb-4 leading-tight">Our Advertisement Services</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-3 text-gray-800">Digital Advertising</h3>
                  <p className="text-sm md:text-base mb-4 text-gray-600">Reach your audience online through high-performing digital campaigns.</p>
                  <ul className="text-sm list-disc pl-5 space-y-2 text-gray-700 font-medium">
                    <li>Google Ads</li>
                    <li>YouTube Advertising</li>
                    <li>Social Media Ads</li>
                    <li>Display Advertising</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-3 text-gray-800">Lead Generation Campaigns</h3>
                  <p className="text-sm md:text-base text-gray-600">We create targeted campaigns that help businesses attract quality customers and improve conversions.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-3 text-gray-800">Outdoor Advertising</h3>
                  <p className="text-sm md:text-base mb-4 text-gray-600">Make your brand visible everywhere with impactful outdoor promotions.</p>
                  <ul className="text-sm list-disc pl-5 space-y-2 text-gray-700 font-medium">
                    <li>Hoardings & Billboards</li>
                    <li>Flex & Banner Advertising</li>
                    <li>Bus & Auto Branding</li>
                    <li>Pole Kiosks</li>
                    <li>LED Screen Promotions</li>
                  </ul>
                  <p className="text-sm mt-4 text-gray-500 italic">Our outdoor advertising solutions help your business gain strong local visibility and brand recognition.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-3 text-gray-800">Print Advertising</h3>
                  <p className="text-sm md:text-base mb-4 text-gray-600">Professional print advertising solutions that create lasting impressions.</p>
                  <ul className="text-sm list-disc pl-5 space-y-2 text-gray-700 font-medium">
                    <li>Newspaper Ads</li>
                    <li>Magazine Promotions</li>
                    <li>Flyers & Pamphlets</li>
                    <li>Brochures & Catalogues</li>
                  </ul>
                  <p className="text-sm mt-4 text-gray-500 italic">We design attractive and informative print materials that effectively communicate your brand message.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 md:col-span-2">
                  <h3 className="text-2xl md:text-[26px] lg:text-3xl font-bold mb-3 text-gray-800">Branding & Promotional Campaigns</h3>
                  <p className="text-sm md:text-base mb-4 text-gray-600">Creative promotional strategies to increase customer engagement.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm list-disc pl-5 space-y-2 text-gray-700 font-medium">
                      <li>Product Launch Promotions</li>
                      <li>Event Promotions</li>
                      <li>Store Branding</li>
                    </ul>
                    <ul className="text-sm list-disc pl-5 space-y-2 text-gray-700 font-medium">
                      <li>Corporate Branding</li>
                      <li>Seasonal Campaigns</li>
                    </ul>
                  </div>
                  <p className="text-sm mt-4 text-gray-500 italic">We combine creativity and strategy to make your brand stand out in the market.</p>
                </div>
              </div>
            </div>

            {/* Why Choose Leor Media? */}
            <div className="bg-orange-50/50 p-8 rounded-2xl">
              <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold text-center mb-8 leading-tight">Why Choose Leor Media?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg md:text-xl lg:text-[22px] font-bold text-primary mb-2">Creative Advertising Strategies</h4>
                  <p className="text-sm md:text-base text-gray-600">We create campaigns that are visually attractive, engaging, and result-oriented.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg md:text-xl lg:text-[22px] font-bold text-primary mb-2">Targeted Audience Reach</h4>
                  <p className="text-sm md:text-base text-gray-600">Our advertising solutions focus on reaching the right people at the right time.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg md:text-xl lg:text-[22px] font-bold text-primary mb-2">Affordable & Effective</h4>
                  <p className="text-sm md:text-base text-gray-600">We provide cost-effective advertising services without compromising quality.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="text-lg md:text-xl lg:text-[22px] font-bold text-primary mb-2">End-to-End Support</h4>
                  <p className="text-sm md:text-base text-gray-600">From planning and design to execution and monitoring, we handle everything.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm md:col-span-2 lg:col-span-2">
                  <h4 className="text-lg md:text-xl lg:text-[22px] font-bold text-primary mb-2">Result-Driven Approach</h4>
                  <p className="text-sm md:text-base text-gray-600">Our focus is not just visibility but real business growth and customer engagement.</p>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="text-center">
              <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-6 leading-tight">Industries We Serve</h2>
              <p className="text-sm md:text-base mb-6 text-gray-600">We provide advertisement solutions for:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Real Estate","Restaurants & Cafes","Fashion & Retail","Education Institutes","Healthcare Businesses","Corporate Companies","Events & Entertainment","Startups & Local Businesses"].map((industry, index) => (
                  <span key={index} className="text-sm md:text-base bg-white border border-gray-200 text-gray-800 px-5 py-2.5 rounded-full font-semibold shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* Let’s Promote Your Brand */}
            <div className="bg-gradient-to-br from-primary to-orange-600 p-8 md:p-12 rounded-2xl text-center text-white shadow-lg">
              <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold mb-4 text-white leading-tight">Let’s Promote Your Brand</h2>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-white/90">
                At Leor Media, we help businesses build strong brand visibility through innovative advertising solutions. Whether you need digital campaigns or large-scale outdoor promotions, we are ready to take your brand to the next level.
              </p>
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-base md:text-lg font-semibold text-yellow-300">📞 Contact Us Today</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:+919666643456" className="text-primary hover:text-orange-600 font-bold bg-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105">+91-9666643456</a>
                  <a href="tel:+919542248999" className="text-primary hover:text-orange-600 font-bold bg-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105">+91-9542248999</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-primary py-8 px-4 rounded-lg mx-4">
          <h2 className="text-[26px] md:text-[38px] lg:text-5xl font-bold text-white mb-2 leading-tight">
            Need Help?
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-4">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${GlobalData.company.companyPhone}`}
              className="inline-flex items-center bg-white text-primary px-6 py-2 rounded-md  font-medium hover:bg-gray-100 transition-colors"
            >
              <FaPhone className="mr-2" /> Contact Us
            </a>
            <Link
              to="/frequently-asked-questions"
              className="inline-flex items-center bg-white text-primary px-6 py-2 rounded-md  font-medium hover:bg-gray-100 transition-colors"
            >
              <FaQuestion className="mr-2" /> FAQ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Advertising;
