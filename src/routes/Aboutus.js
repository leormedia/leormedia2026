import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  aboutcover, 
  CEO_OriginalImage, 
  FixedPrice,
  OntimeDelivery,
  TimeManage,
  HiringModel,
  DigitalMarketingImage,
  BrandingImage,
  AdvertisingImage,
  GoogleFavicon
} from "../assets/data/Imagedata.jsx";
import seoData from "../assets/data/seo.json";

const Aboutus = () => {
  const { title, description, keywords, canonical, ogImage } = seoData.aboutus;

  return (
    <div className="bg-white overflow-hidden">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img 
            src={aboutcover} 
            alt="About Leor Media" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up">
            Transforming Visions into <span className="text-primary">Memorable Experiences</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light">
            We don’t just plan events or run campaigns—we create unforgettable stories and powerful brand identities.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A Team of Passionate Creators Based in <span className="text-primary">Visakhapatnam</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Leor Media is a full-service event management, digital marketing, and branding company dedicated to helping businesses and individuals stand out in a crowded world. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From grand weddings to complete brand transformations, we bring creativity, strategy, and flawless execution together. Our goal is simple: deliver excellence, every single time.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Events Managed</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Brands Transformed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            <img 
              src={CEO_OriginalImage} 
              alt="Our Leadership" 
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">What We Do</h2>
            <p className="text-gray-600 text-lg">We offer a wide range of services designed to meet all your event and marketing needs under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Management */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <img src={AdvertisingImage} alt="Events" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Event Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Weddings & Pre-Wedding
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Corporate Events
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Birthday & Private Parties
                </li>
              </ul>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <img src={DigitalMarketingImage} alt="Marketing" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Digital Marketing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  SEO & Social Media
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Paid Ads & Campaigns
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Content Creation
                </li>
              </ul>
            </div>

            {/* Branding */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <img src={BrandingImage} alt="Branding" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Branding</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Brand Strategy & Identity
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Logo & Visual Design
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                  Business Positioning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 space-y-4">
              <img src={FixedPrice} alt="Creative" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Creative Excellence</h4>
              <p className="text-sm text-gray-500">Unique ideas that make your event or brand stand out from the crowd.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <img src={OntimeDelivery} alt="Solutions" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">End-to-End Solutions</h4>
              <p className="text-sm text-gray-500">Everything under one roof, from concept to final execution.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <img src={TimeManage} alt="Team" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Experienced Team</h4>
              <p className="text-sm text-gray-500">Skilled professionals with deep industry expertise and passion.</p>
            </div>
            <div className="text-center p-6 space-y-4">
              <img src={HiringModel} alt="Client-Centric" className="w-16 h-16 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Client-Centric</h4>
              <p className="text-sm text-gray-500">Your vision is our priority. We listen, plan, and deliver as promised.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400/10 text-yellow-700 rounded-full text-sm font-bold mb-6">
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                4.7/5 Based on 62+ Google Reviews
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-gray-600 text-lg">
                Don't just take our word for it. Here is what people have to say about their experience with Leor Media.
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://search.google.com/local/writereview?placeid=ChIJYUkDCiZDOToRaohqEOMBUqU" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2"
              >
                <img src={GoogleFavicon} alt="Google" className="w-4 h-4" />
                Write a Review
              </a>
              <a 
                href="https://www.google.com/search?sca_esv=3037e92767d15074&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObqM7PLJrr7NvDCJalAKXt9IxFxVcTZ_oheLMZU_bXxbin3PMCqMZukJCK1ZnvYFqI4XwR2T3j3LjhjbcHpwClAsWqI_&q=Leormedia+Reviews&sa=X&ved=2ahUKEwjQpefMo6mUAxVUR2cHHTLgGnYQ0bkNegQIPRAI&biw=1920&bih=945&dpr=1" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-primary text-gray-900 rounded-xl font-bold hover:shadow-lg transition-all shadow-sm"
              >
                View All Reviews
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                author: "surarapu rajesh",
                text: "Had a fantastic experience with Leor Media's event management team! The event was flawlessly organized, from the seamless registration process to the attention to detail during the entire event. Highly recommend their services.",
                rating: 5,
                time: "a month ago"
              },
              {
                author: "balu Jammana",
                text: "Amazing work by LEOR Media Event Management! ✨ Team coordination super, event chala smooth ga ayindi. Thank you for making it memorable 😊",
                rating: 5,
                time: "2 months ago"
              },
              {
                author: "Rajesh MKL",
                text: "Best event management company with good and well planned execution. They executed my brother's wedding perfectly. I highly recommend Leor for best event planning and wedding decor.",
                rating: 5,
                time: "3 months ago"
              },
              {
                author: "charishma aleti",
                text: "The best wedding planner! Pavan put extra effort to bring grandeur to the wedding mandap. Execution of design turned out beyond our expectations. Everything was natural and magnificent.",
                rating: 5,
                time: "4 months ago"
              },
              {
                author: "Sai Teja",
                text: "Exceptional digital marketing services. They helped our brand grow significantly in just a few months. The team is very professional and result-oriented.",
                rating: 5,
                time: "1 month ago"
              },
              {
                author: "Venkatesh P",
                text: "One of the top agencies in Vizag for branding and advertising. Their creative team is outstanding and very responsive to feedback.",
                rating: 4,
                time: "5 months ago"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative group">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-200 fill-current'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary uppercase">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-xs text-gray-400">{testimonial.time}</p>
                  </div>
                  <img src={GoogleFavicon} alt="Google" className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V7h2v9zm4 0h-2V7h2v9z"/>
              </svg>
              Verified Reviews via Google Maps
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary px-4 text-center text-gray-900">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Let’s Create Something Amazing</h2>
          <p className="text-xl font-medium opacity-80">Whether you are planning a once-in-a-lifetime event or looking to grow your business, Leor Media is here to make it happen.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
            <a href="tel:+919666643456" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              📞 +91 96666 43456
            </a>
            <a href="tel:+919542248999" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              📞 +91 95422 48999
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
