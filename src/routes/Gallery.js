import React, { useEffect } from 'react';
import SEO from "../components/SEO/SEO";

// Dynamically import all images from the gallery directory
const importAll = (r) =>
  r.keys().map((item) => {
    const module = r(item);
    return module.default || module;
  });
const galleryImages = importAll(
  require.context("../assets/gallery", false, /\.(png|jpe?g|svg|webp|avif)$/),
);

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Our Gallery | Leor Media" 
        description="Explore the moments we've captured. Check out our gallery of past events, weddings, and digital projects."
        keywords="gallery, events, weddings, projects, leor media"
        url="/gallery"
      />
      <section className="py-24 md:py-32 bg-slate-50 overflow-hidden border-y border-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-widest mb-4">
              Our Portfolio
            </span>
            <h1 className="text-[26px] md:text-[38px] lg:text-5xl font-extrabold font-TuskerGrotesk tracking-wide text-gray-900 leading-tight uppercase">
              GALLERY OF <span className="text-primary">MEMORIES</span>
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              >
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
    </>
  );
};

export default Gallery;
