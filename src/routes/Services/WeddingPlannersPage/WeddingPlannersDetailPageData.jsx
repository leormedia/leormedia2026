// New Premium Service Images
import DestinationWeddingImg from "./WeddingPlannersImages/destination-wedding.png";
import RingCeremonyImg from "./WeddingPlannersImages/ring-ceremony.png";
import ReceptionsImg from "./WeddingPlannersImages/receptions.png";
import MehendiImg from "./WeddingPlannersImages/mehendi.png";
import SangeetImg from "./WeddingPlannersImages/sangeet.png";
import EntertainmentImg from "./WeddingPlannersImages/entertainment.png";
import HospitalityImg from "./WeddingPlannersImages/hospitality.png";
import GuestManagementImg from "./WeddingPlannersImages/guest-management.png";
import PhotographyImg from "./WeddingPlannersImages/photography.png";
import ThemeDecorImg from "./WeddingPlannersImages/theme-decor.png";
import BirthdayPartiesImg from "./WeddingPlannersImages/birthday-parties.png";
import PersonalCelebrationsImg from "./WeddingPlannersImages/personal-celebrations.png";
import CulturalEventsImg from "./WeddingPlannersImages/cultural-events.png";
import CorporateEventsImg from "./WeddingPlannersImages/corporate-events.png";
import ProductLaunchesImg from "./WeddingPlannersImages/product-launches.png";
import ConcertAndGigsImg from "./WeddingPlannersImages/concert-and-gigs.png";
import FashionShowsImg from "./WeddingPlannersImages/fashion-shows.png";
import {
  faGlobe,
  faPalette,
  faUtensils,
  faUsers,
  faMusic,
  faPlaneDeparture,
  faCheckCircle,
  faCamera,
  faRing,
  faChampagneGlasses,
  faMicrophone,
  faShapes,
  faCakeCandles,
  faGlassCheers,
  faMasksTheater,
  faBullhorn,
  faBriefcase,
  faUserTie,
  faAward,
  faStar,
  faChalkboard,
  faBuilding,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

// Wedding Planners Main Category Data
export const WeddingPlannersPageData = {
  SeoName: { seotitle: "wedding-planners" },
  coverimage: DestinationWeddingImg,
  title: "Wedding Planners in Visakhapatnam | Leor Media",
  subtitle: "Create unforgettable memories with Vizag's most trusted wedding planning agency. From beach weddings to grand celebrations, we handle it all.",
  coverImage: { src: DestinationWeddingImg, style: { backgroundSize: "cover", backgroundPosition: "center" } },
  section2: {
    tagline: "Your Dream, Our Design",
    heading: "Professional Wedding Planning & Management",
    description: "Leor Media is dedicated to making your special day perfect. We specialize in destination weddings, traditional ceremonies, and grand receptions with a focus on elegance and flawlessness."
  },
  services: [
    { icon: faRing, title: "Destination Wedding", description: "Seamless planning for luxury destination weddings.", link: "/services/wedding-planners/destination-wedding" },
    { icon: faMusic, title: "Engagement", description: "Elegant and thematic engagement ceremonies.", link: "/services/wedding-planners/ring-ceremony" },
    { icon: faGlassCheers, title: "Receptions", description: "Sophisticated and grand wedding receptions.", link: "/services/wedding-planners/receptions" },
    { icon: faPalette, title: "Mehendi", description: "Creative and traditional Mehendi ceremonies.", link: "/services/wedding-planners/mehendi" },
    { icon: faMusic, title: "Sangeet", description: "High-energy Sangeet and cocktail nights.", link: "/services/wedding-planners/sangeet" },
    { icon: faUsers, title: "Entertainment", description: "Live artists, DJs, and celebrity bookings.", link: "/services/wedding-planners/entertainment-and-artists" },
    { icon: faUtensils, title: "Hospitality", description: "Professional guest management and hospitality.", link: "/services/wedding-planners/hospitality" },
    { icon: faUsers, title: "Guest Management", description: "End-to-end guest logistics and coordination.", link: "/services/wedding-planners/guest-management" },
    { icon: faCamera, title: "Photography", description: "Cinematic and candid wedding photography.", link: "/services/wedding-planners/photography-and-videography" },
    { icon: faPalette, title: "Theme Decors", description: "Stunning theme-based wedding decorations.", link: "/services/wedding-planners/theme-decors" },
  ]
};

// Individual Wedding Planner Sub-Page Data
export const DestinationWeddingData = {
  SeoName: {
    seotitle: "destination-wedding",
  },
  coverimage: DestinationWeddingImg,
  title: "Destination Wedding Planners in Vizag",
  subtitle: "Create unforgettable wedding memories with beautifully planned destination weddings by Leor Media.",
  // 1. Hero Section
  hero: {
    title: "Destination Wedding Planners in Vizag",
    subtitle: "Create unforgettable wedding memories with beautifully planned destination weddings by Leor Media. From venue selection to complete event management, we handle everything with elegance and perfection.",
    highlights: [
      "Luxury Wedding Planning",
      "Beach & Resort Weddings",
      "Complete Wedding Coordination"
    ],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  // 2. Short Introduction Section
  introduction: {
    heading: "Unforgettable Memories",
    text: "A destination wedding is more than just a ceremony—it’s a once-in-a-lifetime experience. At Leor Media, we specialize in planning elegant and stress-free destination weddings tailored to your style, traditions, and budget.",
    details: "Our team manages every detail including venue booking, décor, entertainment, hospitality, photography, and guest coordination so you can enjoy your special day without worries."
  },
  // 3. Services
  services: [
    { title: "Venue Selection", description: "Finding the perfect luxury resort or beach front.", icon: faGlobe },
    { title: "Wedding Decoration", description: "Stunning theme-based decor and lighting.", icon: faPalette },
    { title: "Catering", description: "Exquisite multi-cuisine menus for all ceremonies.", icon: faUtensils },
    { title: "Photography & Videography", description: "Capturing your special moments with cinematic excellence.", icon: faCamera },
    { title: "Entertainment", description: "Celebrity artists, DJs, and live performances.", icon: faMusic },
    { title: "Guest Management", description: "End-to-end hospitality for your loved ones.", icon: faUsers },
    { title: "Makeup Artists", description: "Professional bridal and guest makeup services.", icon: faPalette },
    { title: "Travel & Accommodation", description: "Logistics and stay arrangements for outstation guests.", icon: faPlaneDeparture },
  ],
  // 4. Why Choose Leor Media
  whyChoose: [
    { title: "Experienced Wedding Team", description: "Years of expertise in organizing grand celebrations.", icon: faCheckCircle },
    { title: "Creative Theme Concepts", description: "Unique and personalized wedding themes.", icon: faPalette },
    { title: "Affordable Luxury Packages", description: "Premium services that fit your budget.", icon: faUtensils },
    { title: "End-to-End Management", description: "We handle everything from start to finish.", icon: faUsers },
    { title: "Customized Wedding Planning", description: "Tailored solutions for your specific needs.", icon: faShapes },
    { title: "On-Time Execution", description: "Perfect timing and flawless delivery.", icon: faCheckCircle },
  ],
  // 5. Wedding Gallery Section
  gallery: [
    { title: "Beach Weddings", image: DestinationWeddingImg },
    { title: "Resort Weddings", image: DestinationWeddingImg },
    { title: "Traditional Weddings", image: DestinationWeddingImg },
    { title: "Night Weddings", image: DestinationWeddingImg },
  ],
  // 6. Packages Section
  packages: [
    { 
      title: "Basic Package", 
      price: "Starting From ₹1.5L", 
      features: ["Essential Decor", "Basic Coordination", "Vendor Assistance"],
      highlighted: false 
    },
    { 
      title: "Premium Package", 
      price: "Starting From ₹5L", 
      features: ["Full Decor", "Artist Booking", "Hospitality Management", "Candid Photography"],
      highlighted: true 
    },
    { 
      title: "Luxury Package", 
      price: "Custom Pricing", 
      features: ["Exotic Venues", "Celebrity Guests", "Concierge Service", "Complete Branding"],
      highlighted: false 
    },
  ],
  // 7. Process Section
  process: [
    { title: "Consultation", description: "Understanding your vision and requirements." },
    { title: "Venue Finalization", description: "Selecting the perfect backdrop for your big day." },
    { title: "Theme Planning", description: "Designing the look and feel of the wedding." },
    { title: "Vendor Coordination", description: "Managing all third-party service providers." },
    { title: "Event Execution", description: "Bringing it all together on the wedding day." },
    { title: "Post Event Support", description: "Ensuring a smooth wrap-up and deliveries." },
  ],
  // 8. Testimonials
  testimonials: [
    { name: "Anjali & Rahul", review: "Leor Media made our beach wedding in Vizag a dream come true! Everything was perfect.", rating: 5 },
    { name: "Suresh Kumar", review: "Professional team and great attention to detail. Highly recommended for destination weddings.", rating: 5 },
  ],
  // 9. FAQ Section
  faqs: [
    { question: "How much does a destination wedding cost?", answer: "Costs vary significantly based on location and guest count. Our packages start from ₹1.5L for coordination." },
    { question: "Which locations are best for destination weddings?", answer: "Vizag's beach resorts, Udaipur's palaces, and Goa's sands are top choices. We specialize in Vizag beach weddings." },
    { question: "Do you provide complete wedding planning?", answer: "Yes, we handle everything from pre-wedding shoots to post-wedding logistics." },
    { question: "Can you arrange beach weddings?", answer: "Absolutely! We are experts in beach wedding permissions and setups in Vizag." },
    { question: "How early should we book?", answer: "For destination weddings, we recommend booking 6-12 months in advance to secure the best venues." },
  ],
  // 10. Final CTA Section
  finalCTA: {
    title: "Let’s Plan Your Dream Wedding",
    text: "Turn your dream destination wedding into reality with Leor Media. Our expert team ensures a stress-free and memorable celebration for you and your guests.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const RingCeremonyData = {
  SeoName: { seotitle: "ring-ceremony" },
  coverimage: RingCeremonyImg,
  title: "Elegant Ring Ceremony Planners in Vizag",
  subtitle: "Exchange your rings in a setting as beautiful as your love. We create magical engagement ceremonies.",
  hero: {
    title: "Ring Ceremony Planning by Leor Media",
    subtitle: "A ring ceremony is more than just exchanging rings — it’s the beautiful beginning of a lifelong journey together. At Leor Media, we create elegant, memorable, and perfectly organized ring ceremony events that reflect your love story, traditions, and personal style.",
    highlights: ["Elegant Organizations", "Memorable Experiences", "Perfect Planning"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Make Your Ring Ceremony Truly Special",
    text: "Our ring ceremony planning services are designed to create unforgettable moments filled with joy, elegance, and celebration. We focus on turning your vision into reality while ensuring every guest enjoys a premium experience.",
    details: "From intimate family gatherings to grand engagement celebrations, our expert planners handle every detail with creativity and precision."
  },
  services: [
    { title: "Stage & Backdrop", description: "Elegant stage and decoration setups customized to your theme.", icon: faRing },
    { title: "Floral Decor", description: "Beautiful floral arrangements for a romantic ambiance.", icon: faPalette },
    { title: "Lighting", description: "Romantic and thematic lighting to set the mood.", icon: faShapes },
    { title: "Photography", description: "Capturing your first step towards forever.", icon: faCamera },
    { title: "Entertainment", description: "Live music, DJs, and anchors for a lively event.", icon: faMusic },
    { title: "Catering", description: "Delicious food and beverage services for your guests.", icon: faUtensils },
    { title: "Guest Management", description: "Ensuring comfort and hospitality for all attendees.", icon: faUsers },
    { title: "Coordination", description: "Professional management of the entire ceremony.", icon: faCheckCircle },
  ],
  whyChoose: [
    { title: "Experienced Wedding Team", description: "Years of expertise in organizing grand celebrations.", icon: faCheckCircle },
    { title: "Creative Theme Concepts", description: "Unique and personalized ring ceremony themes.", icon: faPalette },
    { title: "Affordable Luxury Packages", description: "Premium services that fit your budget.", icon: faUtensils },
    { title: "End-to-End Management", description: "We handle everything from start to finish.", icon: faUsers },
    { title: "Customized Wedding Planning", description: "Tailored solutions for your specific needs.", icon: faShapes },
    { title: "On-Time Execution", description: "Perfect timing and flawless delivery.", icon: faCheckCircle },
  ],
  gallery: [
    { title: "Engagement Stages", image: RingCeremonyImg },
    { title: "Ring Reveal", image: RingCeremonyImg },
    { title: "Celebration", image: RingCeremonyImg },
    { title: "Themed Decor", image: RingCeremonyImg },
  ],
  packages: [
    { title: "Essential", price: "₹50K+", features: ["Decor", "Sound", "Basic Photography"], highlighted: false },
    { title: "Classic", price: "₹1.5L+", features: ["Premium Decor", "Full AV", "Candid Shoots"], highlighted: true },
    { title: "Royal", price: "Custom", features: ["Designer Sets", "Celebrity Artist", "Premium Hospitality"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "We understand your vision, traditions, and budget." },
    { title: "Venue & Vendors", description: "Finalizing the perfect venue and trusted vendors." },
    { title: "Design & Planning", description: "Creating personalized decoration themes and schedules." },
    { title: "Execution", description: "Handling setup and guest management professionally." },
    { title: "Celebration", description: "Enjoying your stress-free event smoothly." },
    { title: "Post Event", description: "Ensuring all details are closed with perfection." },
  ],
  testimonials: [
    { name: "Rahul & Sneha", review: "Our ring ceremony was exactly how we imagined it. Thank you Leor Media!", rating: 5 },
    { name: "Priya Sharma", review: "The decor was stunning and the team was very professional.", rating: 5 },
  ],
  faqs: [
    { question: "How early should we book ring ceremony planning?", answer: "We recommend booking at least 1–3 months in advance for better availability." },
    { question: "Can you arrange destination engagement events?", answer: "Yes, we provide complete destination ring ceremony planning across multiple locations." },
    { question: "Do you provide customized decoration themes?", answer: "Absolutely. We create fully personalized decor concepts based on your preferences." },
    { question: "Can you manage photography and entertainment?", answer: "Yes, we provide complete event solutions including photography and entertainment." },
    { question: "Do you offer budget-friendly packages?", answer: "Yes, we provide flexible packages suitable for both intimate and luxury celebrations." },
  ],
  finalCTA: {
    title: "Plan Your Dream Ring Ceremony with Leor Media",
    text: "Your engagement ceremony deserves elegance, emotion, and unforgettable memories. Let Leor Media transform your special occasion.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const ReceptionsData = {
  SeoName: { seotitle: "receptions" },
  coverimage: ReceptionsImg,
  title: "Reception Planning Services by Leor Media",
  subtitle: "A wedding reception is the grand celebration where families, friends, and emotions come together.",
  hero: {
    title: "Reception Planning Services by Leor Media",
    subtitle: "A wedding reception is the grand celebration where families, friends, emotions, music, and unforgettable memories come together. At Leor Media, we specialize in creating luxurious and perfectly organized wedding reception events that leave a lasting impression on every guest.",
    highlights: ["Grand Celebrations", "Luxurious Planning", "Memorable Moments"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Create a Grand Reception Celebration",
    text: "Every couple deserves a reception celebration that reflects their style, personality, and happiness. Our team carefully plans every detail to ensure a stress-free and beautifully managed event.",
    details: "A wedding reception is the grand celebration where families, friends, emotions, music, and unforgettable memories come together."
  },
  services: [
    { title: "Stage Decorations", description: "Premium floral stage setups and LED backdrop designs.", icon: faRing },
    { title: "Lighting", description: "Romantic lighting arrangements and crystal decor themes.", icon: faShapes },
    { title: "Seating", description: "Customized couple seating and royal entrance decorations.", icon: faUsers },
    { title: "Theme Design", description: "Traditional and contemporary reception themes.", icon: faPalette },
    { title: "Photography", description: "Cinematic coverage of your grand reception.", icon: faCamera },
    { title: "Entertainment", description: "Live music, DJs, and celebrity performances.", icon: faMusic },
    { title: "Hospitality", description: "Professional guest handling and hospitality.", icon: faUsers },
    { title: "Catering", description: "Exquisite multi-cuisine menus for your guests.", icon: faUtensils },
  ],
  whyChoose: [
    { title: "Premium Experiences", description: "Leor Media is known for delivering premium wedding experiences.", icon: faCheckCircle },
    { title: "Professionalism", description: "Experienced team manages everything from planning to execution.", icon: faUserTie },
    { title: "Attention to Detail", description: "Ensuring your reception celebration runs smoothly and beautifully.", icon: faCheckCircle },
    { title: "Creative Styling", description: "Unique and luxurious decor concepts.", icon: faPalette },
  ],
  gallery: [
    { title: "Luxury Setups", image: ReceptionsImg },
    { title: "Grand Entrances", image: ReceptionsImg },
    { title: "Stage Designs", image: ReceptionsImg },
    { title: "Celebration Moments", image: ReceptionsImg },
  ],
  packages: [
    { title: "Intimate", price: "₹1L+", features: ["Basic Decor", "Sound", "Guest Mgmt"], highlighted: false },
    { title: "Premium", price: "₹3L+", features: ["Full Decor", "Artist Booking", "Candid Shoots"], highlighted: true },
    { title: "Luxury", price: "Custom", features: ["Exotic Venues", "Celebrity Guests", "Elite Hospitality"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, event expectations, and budget." },
    { title: "Venue & Vendors", description: "Finalizing the perfect venue and trusted vendors." },
    { title: "Design", description: "Creating customized themes, stage designs, and entertainment." },
    { title: "Execution", description: "Managing setup and guest handling professionally." },
    { title: "Celebration", description: "Enjoying your special evening while we handle details." },
  ],
  testimonials: [
    { name: "Anand & Kavita", review: "The reception was grand and perfectly managed. Thank you!", rating: 5 },
  ],
  faqs: [
    { question: "How early should we book reception planning?", answer: "We recommend booking at least 2–4 months in advance." },
    { question: "Can you manage destination wedding receptions?", answer: "Yes, we provide complete destination reception planning across multiple cities." },
    { question: "Do you provide customized reception themes?", answer: "Absolutely. We create personalized reception concepts based on your style." },
    { question: "Can you handle entertainment and hospitality together?", answer: "Yes, our team manages entertainment, catering, hospitality, and coordination." },
    { question: "Do you provide budget-friendly reception packages?", answer: "Yes, we offer flexible packages suitable for various event scales." },
  ],
  finalCTA: {
    title: "Celebrate Your Wedding Reception with Leor Media",
    text: "Your wedding reception deserves elegance, energy, luxury, and unforgettable memories. Let Leor Media transform your special evening.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const MehendiData = {
  SeoName: { seotitle: "mehendi" },
  coverimage: MehendiImg,
  title: "Mehendi Planning by Leor Media",
  subtitle: "A Mehendi ceremony is a vibrant celebration of art, tradition, and love.",
  hero: {
    title: "Mehendi Planning by Leor Media",
    subtitle: "A Mehendi ceremony is a vibrant celebration of art, tradition, and love. At Leor Media, we specialize in creating colorful, fun, and beautifully organized Mehendi events that reflect your culture and joy.",
    highlights: ["Traditional Artistry", "Vibrant Decor", "Fun Celebrations"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Vibrant Mehendi Celebrations",
    text: "The Mehendi ceremony is one of the most fun-filled and auspicious rituals in Indian weddings. We focus on creating a lively atmosphere with beautiful decor and professional artists.",
    details: "From traditional floral setups to contemporary bohemian themes, we ensure your Mehendi is as colorful as your love story."
  },
  services: [
    { title: "Mehendi Artists", description: "Professional henna artists for the bride and guests.", icon: faPalette },
    { title: "Decor", description: "Colorful and thematic floral decorations.", icon: faRing },
    { title: "Seating", description: "Comfortable and stylish seating for the bride and guests.", icon: faUsers },
    { title: "Music", description: "Traditional folk songs and lively DJ music.", icon: faMusic },
    { title: "Catering", description: "Traditional snacks and refreshing beverages.", icon: faUtensils },
    { title: "Photography", description: "Capturing the intricate designs and happy moments.", icon: faCamera },
  ],
  whyChoose: [
    { title: "Expert Artists", description: "Highly skilled and professional mehendi artists.", icon: faCheckCircle },
    { title: "Creative Themes", description: "Unique and colorful decor concepts.", icon: faPalette },
    { title: "Complete Coordination", description: "Stress-free management of the entire event.", icon: faUsers },
    { title: "Traditional & Modern", description: "A perfect blend of culture and contemporary style.", icon: faShapes },
  ],
  gallery: [
    { title: "Floral Mehendi", image: MehendiImg },
    { title: "Outdoor Setups", image: MehendiImg },
    { title: "Intricate Designs", image: MehendiImg },
    { title: "Fun Moments", image: MehendiImg },
  ],
  packages: [
    { title: "Essential", price: "₹25K+", features: ["Basic Decor", "Mehendi Artist", "Music"], highlighted: false },
    { title: "Premium", price: "₹75K+", features: ["Floral Decor", "Multiple Artists", "Sound System"], highlighted: true },
    { title: "Royal", price: "Custom", features: ["Designer Sets", "Celebrity Artist", "Professional Photography"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "Planning the theme, artists, and guest count." },
    { title: "Design", description: "Finalizing the decor and mehendi patterns." },
    { title: "Setup", description: "Organizing the venue with beautiful decorations." },
    { title: "Celebration", description: "Managing the artists and event flow smoothly." },
  ],
  testimonials: [
    { name: "Sita & Ram", review: "The mehendi ceremony was so beautiful and well-organized!", rating: 5 },
  ],
  faqs: [
    { question: "Do you provide mehendi artists?", answer: "Yes, we have a team of professional mehendi artists for both the bride and guests." },
    { question: "Can we have a theme for Mehendi?", answer: "Absolutely! We offer various themes from traditional floral to modern colorful concepts." },
  ],
  finalCTA: {
    title: "Plan Your Colorful Mehendi with Leor Media",
    text: "Let us make your Mehendi ceremony a vibrant and unforgettable celebration.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const SangeetData = {
  SeoName: { seotitle: "sangeet" },
  coverimage: SangeetImg,
  title: "Sangeet Night Planning by Leor Media",
  subtitle: "A Sangeet night is the soul of any wedding — filled with music, dance, and laughter.",
  hero: {
    title: "Sangeet Night Planning by Leor Media",
    subtitle: "A Sangeet night is the soul of any wedding — filled with music, dance, and laughter. At Leor Media, we create high-energy, entertaining, and perfectly coordinated Sangeet events.",
    highlights: ["Musical Magic", "High Energy Dance", "Perfect Coordination"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "The Ultimate Sangeet Celebration",
    text: "Our Sangeet planning services are designed to bring out the fun and energy of your wedding celebrations. We handle everything from choreography to stage design.",
    details: "Whether it’s a traditional sangeet or a modern cocktail night, we ensure every performance is a hit and every guest is on their feet."
  },
  services: [
    { title: "Stage Design", description: "Thematic stages with LED screens and grand lighting.", icon: faPalette },
    { title: "Choreography", description: "Professional dance trainers for families and couples.", icon: faMusic },
    { title: "Sound & Light", description: "Concert-quality sound systems and stage effects.", icon: faShapes },
    { title: "Artist Booking", description: "DJs, MCs, and live bands for a lively night.", icon: faUsers },
    { title: "Catering", description: "Delicious snacks, dinner, and bar management.", icon: faUtensils },
    { title: "Photography", description: "Capturing every dance and emotional moment.", icon: faCamera },
  ],
  whyChoose: [
    { title: "Experienced Planners", description: "Specialists in managing high-energy events.", icon: faCheckCircle },
    { title: "Creative Concepts", description: "Unique themes and stage productions.", icon: faPalette },
    { title: "Seamless Execution", description: "Flawless management of performances and flow.", icon: faUsers },
  ],
  gallery: [
    { title: "Grand Stages", image: SangeetImg },
    { title: "Dance Nights", image: SangeetImg },
    { title: "LED Wall Setups", image: SangeetImg },
    { title: "Musical Gigs", image: SangeetImg },
  ],
  packages: [
    { title: "Essential", price: "₹1L+", features: ["Basic Stage", "Sound", "MC"], highlighted: false },
    { title: "Premium", price: "₹3L+", features: ["LED Wall", "Choreography", "Pro DJ"], highlighted: true },
    { title: "Royal", price: "Custom", features: ["Celebrity Artist", "Designer Sets", "Full Production"], highlighted: false },
  ],
  process: [
    { title: "Concept", description: "Deciding the theme and performance list." },
    { title: "Training", description: "Choreography sessions for the family." },
    { title: "Production", description: "Stage and sound setup at the venue." },
    { title: "Showtime", description: "Managing the entire event flow and performances." },
  ],
  testimonials: [
    { name: "Karan & Isha", review: "The sangeet was the highlight of our wedding. Amazing energy!", rating: 5 },
  ],
  faqs: [
    { question: "Can you provide choreographers?", answer: "Yes, we have professional choreographers for all types of dance styles." },
    { question: "Do you manage LED screens for sangeet?", answer: "Yes, we provide complete technical production including LED walls and sound." },
  ],
  finalCTA: {
    title: "Dance Your Heart Out with Leor Media",
    text: "Plan a Sangeet night that will be remembered for years to come.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const EntertainmentAndArtistsData = {
  SeoName: { seotitle: "entertainment-and-artists" },
  coverimage: EntertainmentImg,
  title: "Entertainment & Artist Management by Leor Media",
  subtitle: "Every great event needs great entertainment. We bring the best talent to make your celebration extraordinary.",
  hero: {
    title: "Entertainment & Artist Management by Leor Media",
    subtitle: "Every great event needs great entertainment. At Leor Media, we bring the best talent, performers, and artists to make your celebration extraordinary.",
    highlights: ["Celebrity Bookings", "Live Performances", "Star-Studded Events"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "World-Class Entertainment for Your Events",
    text: "From celebrity singers to high-energy DJs and traditional folk artists, we provide a wide range of entertainment options tailored to your event's theme and audience.",
    details: "Our artist management team ensures seamless coordination, technical riders, and flawless performances that leave your guests amazed."
  },
  services: [
    { title: "Celebrity Management", description: "Booking and managing movie stars and singers.", icon: faUsers },
    { title: "Live Bands", description: "Fusion, classical, and pop bands for any occasion.", icon: faMusic },
    { title: "DJs & MCs", description: "Professional anchors and high-energy DJs.", icon: faMicrophone },
    { title: "Dance Groups", description: "Traditional, bollywood, and international dance troupes.", icon: faMasksTheater },
    { title: "Technical Production", description: "Stage, sound, and lighting for performances.", icon: faShapes },
  ],
  whyChoose: [
    { title: "Exclusive Access", description: "Direct connections with top-tier artists.", icon: faCheckCircle },
    { title: "Professional Handling", description: "Managing all artist logistics and requirements.", icon: faUsers },
    { title: "Diverse Options", description: "Entertainment solutions for every budget and style.", icon: faMusic },
  ],
  gallery: [
    { title: "Live Concerts", image: EntertainmentImg },
    { title: "DJ Nights", image: EntertainmentImg },
    { title: "Traditional Acts", image: EntertainmentImg },
    { title: "Celebrity Events", image: EntertainmentImg },
  ],
  packages: [
    { title: "Standard", price: "₹50K+", features: ["Local DJ", "Professional MC", "Sound System"], highlighted: false },
    { title: "Premium", price: "₹2L+", features: ["Professional Band", "Dance Troupe", "Concert Lighting"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Celebrity Artist", "Full Event Production", "Technical Riders"], highlighted: false },
  ],
  process: [
    { title: "Requirements", description: "Understanding the type of entertainment needed." },
    { title: "Artist Selection", description: "Proposing and finalizing the best talent." },
    { title: "Coordination", description: "Managing contracts, travel, and stay for artists." },
    { title: "Showtime", description: "Ensuring flawless sound check and performance." },
  ],
  testimonials: [
    { name: "Vikram Sethi", review: "The artist lineup for our corporate gala was incredible!", rating: 5 },
  ],
  faqs: [
    { question: "Can you book celebrity artists?", answer: "Yes, we handle celebrity bookings and their complete hospitality and technical requirements." },
    { question: "Do you provide sound systems?", answer: "Yes, we provide high-end sound and light production for all entertainment acts." },
  ],
  finalCTA: {
    title: "Bring the Best Talent to Your Event",
    text: "Make your celebration unforgettable with world-class entertainment.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const HospitalityData = {
  SeoName: { seotitle: "hospitality" },
  coverimage: HospitalityImg,
  title: "Event Hospitality Services by Leor Media",
  subtitle: "True luxury lies in how your guests are treated. We provide professional hospitality and guest care.",
  hero: {
    title: "Event Hospitality Services by Leor Media",
    subtitle: "True luxury lies in how your guests are treated. At Leor Media, we provide professional hospitality and guest care services for grand celebrations.",
    highlights: ["VIP Treatment", "Seamless Logistics", "Guest Comfort"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Exceptional Hospitality for Your Guests",
    text: "We believe every guest should feel special. Our hospitality team manages everything from arrivals to comfortable stays and personalized services.",
    details: "Whether it’s a destination wedding or a corporate conference, we ensure professional and warm hospitality at every touchpoint."
  },
  services: [
    { title: "Airport Pickups", description: "Smooth transportation for outstation guests.", icon: faPlaneDeparture },
    { title: "Hotel Check-ins", description: "Personalized welcome and hassle-free stay management.", icon: faUsers },
    { title: "Help Desk", description: "24/7 assistance for guest queries and needs.", icon: faCheckCircle },
    { title: "Gift Distribution", description: "Managing hampers and welcome kits for guests.", icon: faPalette },
    { title: "F&B Coordination", description: "Ensuring timely and quality food services for guests.", icon: faUtensils },
  ],
  whyChoose: [
    { title: "Professional Staff", description: "Well-trained and courteous hospitality team.", icon: faUserTie },
    { title: "End-to-End Care", description: "Managing guest journey from arrival to departure.", icon: faUsers },
    { title: "Personalized Touch", description: "Customized welcome notes and guest services.", icon: faShapes },
  ],
  gallery: [
    { title: "VIP Lounges", image: HospitalityImg },
    { title: "Guest Welcomes", image: HospitalityImg },
    { title: "Logistics Fleet", image: HospitalityImg },
    { title: "Hampers & Kits", image: HospitalityImg },
  ],
  packages: [
    { title: "Basic", price: "₹20K+", features: ["Welcome Desk", "Check-in Support"], highlighted: false },
    { title: "Premium", price: "₹1L+", features: ["Airport Logistics", "24/7 Help Desk", "Hamper Mgmt"], highlighted: true },
    { title: "Luxury", price: "Custom", features: ["VIP Concierge", "Private Transfers", "Specialized Care"], highlighted: false },
  ],
  process: [
    { title: "Planning", description: "Creating a guest list and logistics plan." },
    { title: "Coordination", description: "Mapping arrivals and room allocations." },
    { title: "Execution", description: "Managing on-ground hospitality during the event." },
    { title: "Wrap-up", description: "Ensuring smooth departures and feedback." },
  ],
  testimonials: [
    { name: "Megha Rao", review: "The hospitality team was so helpful. Our guests were very happy!", rating: 5 },
  ],
  faqs: [
    { question: "Do you provide airport transfers?", answer: "Yes, we arrange private cars and buses for guest pickups and drops." },
    { question: "Can you manage room allocations?", answer: "Yes, we coordinate with hotels for room blocking and smooth check-ins." },
  ],
  finalCTA: {
    title: "Treat Your Guests to Premium Hospitality",
    text: "Ensure a comfortable and memorable experience for everyone attending your event.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const GuestManagementData = {
  SeoName: { seotitle: "guest-management" },
  coverimage: GuestManagementImg,
  title: "Professional Guest Management by Leor Media",
  subtitle: "From RSVP to Farewell — we manage your guests with care, precision, and a personal touch.",
  hero: {
    title: "Professional Guest Management by Leor Media",
    subtitle: "From RSVP to Farewell — we manage your guests with care, precision, and a personal touch.",
    highlights: ["RSVP Management", "Personalized Logistics", "Flawless Coordination"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Smart Solutions for Guest Management",
    text: "Managing hundreds of guests can be challenging. Our specialized team uses modern tools and personalized attention to ensure every guest is well-taken care of.",
    details: "We handle Invitations, RSVPs, Travel, Accommodation, and On-site coordination so you can focus on the celebration."
  },
  services: [
    { title: "Digital RSVPs", description: "Tracking guest confirmations efficiently.", icon: faGlobe },
    { title: "Travel Coordination", description: "Managing flights, trains, and local transport.", icon: faPlaneDeparture },
    { title: "Room Blocking", description: "Selecting and booking the best hotels.", icon: faUsers },
    { title: "On-site Hospitality", description: "Help desks at venues and hotels.", icon: faCheckCircle },
    { title: "Invitations", description: "Design and distribution of physical and digital invites.", icon: faPalette },
  ],
  whyChoose: [
    { title: "Tech-Driven", description: "Using apps and spreadsheets for real-time tracking.", icon: faShapes },
    { title: "Organized Approach", description: "Clear communication and structured planning.", icon: faCheckCircle },
    { title: "Guest Satisfaction", description: "A focus on making every guest feel welcome.", icon: faUsers },
  ],
  gallery: [
    { title: "RSVP Dashboards", image: GuestManagementImg },
    { title: "Hotel Logistics", image: GuestManagementImg },
    { title: "Welcome Kits", image: GuestManagementImg },
    { title: "Help Desks", image: GuestManagementImg },
  ],
  packages: [
    { title: "Basic", price: "₹30K+", features: ["RSVP Tracking", "Transport Coordination"], highlighted: false },
    { title: "Standard", price: "₹1L+", features: ["Full Travel Mgmt", "Hotel Desk", "Invitations"], highlighted: true },
    { title: "Luxury", price: "Custom", features: ["Personalized Concierge", "VIP Travel", "Mobile App"], highlighted: false },
  ],
  process: [
    { title: "RSVP Phase", description: "Reaching out to guests and confirming attendance." },
    { title: "Logistics Phase", description: "Booking travel and accommodation." },
    { title: "Event Phase", description: "On-ground management of guest needs." },
    { title: "Post-Event", description: "Thank you notes and return travel support." },
  ],
  testimonials: [
    { name: "Prashant Varma", review: "The guest management was top-notch. No one felt lost or neglected.", rating: 5 },
  ],
  faqs: [
    { question: "Do you handle outstation guests?", answer: "Yes, we specialize in managing travel and stay for outstation guests for destination weddings." },
    { question: "Can you manage digital invitations?", answer: "Yes, we design and manage digital invites and WhatsApp reminders." },
  ],
  finalCTA: {
    title: "Make Your Guests Feel at Home",
    text: "Let Leor Media handle the complexities of guest management for you.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const PhotographyAndVideographyData = {
  SeoName: { seotitle: "photography-and-videography" },
  coverimage: PhotographyImg,
  title: "Wedding Photography & Videography by Leor Media",
  subtitle: "Capturing your special moments today that will wow your heart tomorrow.",
  hero: {
    title: "Wedding Photography & Videography by Leor Media",
    subtitle: "Capturing your special moments today that will wow your heart tomorrow. We provide cinematic, candid, and traditional wedding photography.",
    highlights: ["Cinematic Excellence", "Candid Moments", "Storytelling Frames"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Capturing Memories That Last a Forever",
    text: "At Leor Media, we believe photography is an art of storytelling. Our team of expert photographers and cinematographers use high-end equipment to capture every emotion, laughter, and tear.",
    details: "From pre-wedding shoots at exotic locations to live streaming of your big day, we provide complete visual solutions for your wedding."
  },
  services: [
    { title: "Candid Photography", description: "Capturing natural emotions and spontaneous moments.", icon: faCamera },
    { title: "Cinematography", description: "Creating movie-like wedding films and teasers.", icon: faMusic },
    { title: "Traditional Shoots", description: "Structured family portraits and ritual coverage.", icon: faUsers },
    { title: "Pre-Wedding Shoot", description: "Thematic shoots at beautiful destination locations.", icon: faGlobe },
    { title: "Live Streaming", description: "Broadcasting your wedding to loved ones globally.", icon: faShapes },
    { title: "Drone Coverage", description: "Breathtaking aerial views of your celebration.", icon: faPlaneDeparture },
  ],
  whyChoose: [
    { title: "Expert Creative Team", description: "Award-winning photographers and editors.", icon: faCheckCircle },
    { title: "High-End Equipment", description: "Using the latest 4K cameras and stabilization gear.", icon: faShapes },
    { title: "Quick Delivery", description: "On-time delivery of edited photos and films.", icon: faCheckCircle },
  ],
  gallery: [
    { title: "Candid Frames", image: PhotographyImg },
    { title: "Wedding Films", image: PhotographyImg },
    { title: "Pre-Wedding Bliss", image: PhotographyImg },
    { title: "Ritual Coverage", image: PhotographyImg },
  ],
  packages: [
    { title: "Essential", price: "₹60K+", features: ["1 Photographer", "1 Videographer", "Traditional Album"], highlighted: false },
    { title: "Premium", price: "₹1.5L+", features: ["Candid Lead", "Cinematography", "Wedding Film", "Pre-Wedding"], highlighted: true },
    { title: "Luxury", price: "Custom", features: ["Multiple Leads", "4K Drone", "Live Stream", "Designer Albums"], highlighted: false },
  ],
  process: [
    { title: "Concept", description: "Discussing your style and preferred themes." },
    { title: "Shoot", description: "Thematic and professional coverage of all events." },
    { title: "Post-Production", description: "Professional editing, color grading, and album design." },
    { title: "Delivery", description: "Providing high-quality digital and physical memories." },
  ],
  testimonials: [
    { name: "Varun & Ananya", review: "The wedding film moved us to tears. Thank you for capturing our day so beautifully!", rating: 5 },
  ],
  faqs: [
    { question: "Do you provide cinematic wedding films?", answer: "Yes, we specialize in storytelling cinematic films and highlight teasers." },
    { question: "How long does it take to deliver photos?", answer: "We deliver digital copies within 4–6 weeks and physical albums within 8–10 weeks." },
  ],
  finalCTA: {
    title: "Capture Your Love Story with Leor Media",
    text: "Freeze your precious moments in time with our professional photography services.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const ThemeDecorsData = {
  SeoName: { seotitle: "theme-decors" },
  coverimage: ThemeDecorImg,
  title: "Exquisite Theme Decor Services by Leor Media",
  subtitle: "Turning your dream themes into breathtaking reality with creative and luxury decorations.",
  hero: {
    title: "Exquisite Theme Decor Services by Leor Media",
    subtitle: "Turning your dream themes into breathtaking reality. We specialize in creative, luxury, and personalized event decorations.",
    highlights: ["Artistic Concepts", "Luxury Setups", "Breathtaking Ambience"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Transforming Spaces with Creative Decor",
    text: "At Leor Media, we believe decor sets the soul of the event. Our team of creative designers and craftsmen work together to create immersive environments.",
    details: "From royal vintage palaces to modern minimalist designs and enchanted forest themes, we bring your vision to life."
  },
  services: [
    { title: "Floral Decor", description: "Fresh and exotic floral arrangements for any occasion.", icon: faPalette },
    { title: "Thematic Stages", description: "Customized stage designs that match your event's theme.", icon: faRing },
    { title: "Lighting Design", description: "Atmospheric and mood-enhancing lighting solutions.", icon: faShapes },
    { title: "Entrance Decor", description: "Grand and welcoming entrance setups.", icon: faGlobe },
    { title: "Furniture & Linen", description: "Premium seating and table arrangements.", icon: faUsers },
    { title: "Artistic Props", description: "Unique and handcrafted decor elements.", icon: faPalette },
  ],
  whyChoose: [
    { title: "Customized Concepts", description: "Tailor-made decor based on your unique style.", icon: faCheckCircle },
    { title: "High-Quality Materials", description: "Using premium flowers, fabrics, and lighting gear.", icon: faShapes },
    { title: "Flawless Execution", description: "Professional setup and on-site management.", icon: faCheckCircle },
  ],
  gallery: [
    { title: "Royal Themes", image: ThemeDecorImg },
    { title: "Bohemian Vibes", image: ThemeDecorImg },
    { title: "Modern Elegance", image: ThemeDecorImg },
    { title: "Floral Fantasy", image: ThemeDecorImg },
  ],
  packages: [
    { title: "Essential", price: "₹50K+", features: ["Basic Stage", "Entrance", "Standard Lighting"], highlighted: false },
    { title: "Premium", price: "₹2L+", features: ["Custom Theme", "Exotic Flowers", "Mood Lighting"], highlighted: true },
    { title: "Royal", price: "Custom", features: ["Designer Sets", "Mega Structures", "VIP Lounges"], highlighted: false },
  ],
  process: [
    { title: "Moodboard", description: "Selecting themes, colors, and styles." },
    { title: "Design", description: "Detailed floor plans and prop selection." },
    { title: "Setup", description: "On-site decoration and lighting installation." },
    { title: "Completion", description: "Final touches to ensure a perfect look." },
  ],
  testimonials: [
    { name: "Priya Varma", review: "The decor was magical. It looked like a dream!", rating: 5 },
  ],
  faqs: [
    { question: "Can you recreate a theme from a photo?", answer: "Yes, we specialize in customized decor and can bring any visual concept to life." },
    { question: "Do you handle outdoor event decor?", answer: "Yes, we manage decor for both indoor banquet halls and grand outdoor venues." },
  ],
  finalCTA: {
    title: "Create a Breathtaking Ambience",
    text: "Let Leor Media design a stunning theme for your next celebration.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const BirthdayPartiesData = {
  SeoName: { seotitle: "birthday-parties" },
  coverimage: BirthdayPartiesImg,
  title: "Unforgettable Birthday Parties by Leor Media",
  subtitle: "From 1st birthdays to grand milestones — we create fun and beautifully themed birthday celebrations.",
  hero: {
    title: "Unforgettable Birthday Parties by Leor Media",
    subtitle: "From 1st birthdays to grand milestones — we create fun, energetic, and beautifully themed birthday celebrations.",
    highlights: ["Fun Themes", "Kid-Friendly Setups", "Joyful Memories"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Celebrate Your Big Day with Us",
    text: "Birthdays are special moments for all ages. Our team handles everything from creative themes and activities to delicious catering and entertainment.",
    details: "Whether it’s a themed party for kids or a sophisticated dinner for adults, we ensure a celebration filled with happiness."
  },
  services: [
    { title: "Themed Decor", description: "Cartoon, superhero, fairy-tale, or classy themes.", icon: faPalette },
    { title: "Entertainment", description: "Magicians, mascots, DJs, and anchors.", icon: faUsers },
    { title: "Catering", description: "Kids' favorites and multi-cuisine menus.", icon: faUtensils },
    { title: "Cake Design", description: "Customized designer cakes to match the theme.", icon: faCakeCandles },
    { title: "Photography", description: "Capturing candid smiles and fun moments.", icon: faCamera },
    { title: "Game Stalls", description: "Interactive games and fun activities for guests.", icon: faShapes },
  ],
  whyChoose: [
    { title: "Creative & Fun", description: "Unique birthday concepts for all age groups.", icon: faCheckCircle },
    { title: "Hassle-Free", description: "We handle the entire planning and execution.", icon: faUsers },
    { title: "Affordable Joy", description: "Great celebrations that fit your budget.", icon: faUtensils },
  ],
  gallery: [
    { title: "Kids' Themes", image: BirthdayPartiesImg },
    { title: "1st Birthdays", image: BirthdayPartiesImg },
    { title: "Adult Milestones", image: BirthdayPartiesImg },
    { title: "Fun Activities", image: BirthdayPartiesImg },
  ],
  packages: [
    { title: "Basic", price: "₹20K+", features: ["Basic Decor", "Music", "Cake Assistance"], highlighted: false },
    { title: "Premium", price: "₹50K+", features: ["Themed Decor", "MC/Mascot", "Photography"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Grand Decor", "Celebrity Appearance", "Full Catering"], highlighted: false },
  ],
  process: [
    { title: "Discussion", description: "Choosing the theme and finalizing the guest list." },
    { title: "Planning", description: "Booking artists, vendors, and designing decor." },
    { title: "Party Day", description: "Seamless coordination of games and food." },
    { title: "Memories", description: "Enjoying the celebration with loved ones." },
  ],
  testimonials: [
    { name: "Rohit & Neha", review: "Our daughter's 1st birthday was a hit. The Jungle theme was amazing!", rating: 5 },
  ],
  faqs: [
    { question: "Do you provide birthday cakes?", answer: "Yes, we coordinate with the best bakers for customized designer cakes." },
    { question: "Can you organize games for kids?", answer: "Yes, we provide anchors, magicians, and game coordinators for kids' entertainment." },
  ],
  finalCTA: {
    title: "Plan a Fun-Filled Birthday Bash",
    text: "Let Leor Media make your birthday celebration truly special and stress-free.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const PersonalCelebrationsData = {
  SeoName: { seotitle: "personal-celebrations" },
  coverimage: PersonalCelebrationsImg,
  title: "Personal Celebrations by Leor Media",
  subtitle: "From Anniversaries to Baby Showers — we celebrate your life's most precious personal milestones.",
  hero: {
    title: "Personal Celebrations by Leor Media",
    subtitle: "From Anniversaries to Baby Showers — we celebrate your life's most precious personal milestones with elegance.",
    highlights: ["Elegant Gatherings", "Personalized Decor", "Intimate Settings"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Celebrate Your Personal Milestones",
    text: "Life is full of beautiful moments that deserve a celebration. We specialize in planning intimate and grand personal events that focus on family and love.",
    details: "Whether it’s a romantic anniversary dinner or a colorful baby shower, we bring a touch of luxury and emotion to your celebration."
  },
  services: [
    { title: "Anniversaries", description: "Romantic and grand anniversary celebrations.", icon: faRing },
    { title: "Baby Showers", description: "Creative and traditional baby shower themes.", icon: faPalette },
    { title: "House Warming", description: "Elegant arrangements for your new home.", icon: faBuilding },
    { title: "Retirement Parties", description: "Celebrating a lifetime of hard work and success.", icon: faUserTie },
    { title: "Private Dinners", description: "Exclusive and sophisticated dining experiences.", icon: faUtensils },
    { title: "Social Gatherings", description: "Fun get-togethers for family and friends.", icon: faUsers },
  ],
  whyChoose: [
    { title: "Personal Attention", description: "A focus on your specific traditions and style.", icon: faCheckCircle },
    { title: "Luxury & Comfort", description: "Ensuring a premium experience for your loved ones.", icon: faUtensils },
    { title: "Seamless Planning", description: "Stress-free management from start to finish.", icon: faUsers },
  ],
  gallery: [
    { title: "Anniversaries", image: PersonalCelebrationsImg },
    { title: "Baby Showers", image: PersonalCelebrationsImg },
    { title: "Social Events", image: PersonalCelebrationsImg },
    { title: "Grand Openings", image: PersonalCelebrationsImg },
  ],
  packages: [
    { title: "Intimate", price: "₹30K+", features: ["Basic Decor", "Photography", "Music"], highlighted: false },
    { title: "Premium", price: "₹80K+", features: ["Theme Decor", "Full AV", "Gourmet Catering"], highlighted: true },
    { title: "Royal", price: "Custom", features: ["Designer Sets", "Artist Management", "Elite Hospitality"], highlighted: false },
  ],
  process: [
    { title: "Personal Consultation", description: "Understanding the sentiment and vision." },
    { title: "Planning", description: "Selecting themes, venues, and specialized services." },
    { title: "Celebration Day", description: "Managing the event flow with care." },
    { title: "Happy Ending", description: "Ensuring memories that last a lifetime." },
  ],
  testimonials: [
    { name: "Anil & Sunita", review: "Our 25th anniversary was so romantic and perfect. Thank you team!", rating: 5 },
  ],
  faqs: [
    { question: "Do you handle traditional rituals?", answer: "Yes, we respect and incorporate all cultural and traditional rituals as per your needs." },
    { question: "Can you manage small home events?", answer: "Yes, we provide decor and catering services even for small intimate gatherings at home." },
  ],
  finalCTA: {
    title: "Celebrate Your Life’s Special Moments",
    text: "Let Leor Media add a touch of elegance to your personal milestones.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const CulturalEventsData = {
  SeoName: { seotitle: "cultural-events" },
  coverimage: CulturalEventsImg,
  title: "Grand Cultural Events & Festivals by Leor Media",
  subtitle: "Celebrating heritage, art, and traditions with grandeur and large-scale production.",
  hero: {
    title: "Grand Cultural Events & Festivals by Leor Media",
    subtitle: "Celebrating heritage, art, and traditions with grandeur. We specialize in large-scale cultural event management.",
    highlights: ["Tradition Meets Grandeur", "Artistic Showcases", "Large Scale Production"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Bringing Traditions to Life",
    text: "Cultural events are a vibrant expression of our heritage. Our team has the expertise to manage massive crowds and complex traditional setups while maintaining the sanctity and energy of the event.",
    details: "From community festivals and religious gatherings to art festivals and traditional music concerts, we provide end-to-end solutions."
  },
  services: [
    { title: "Stage Production", description: "Grand traditional and modern stage setups.", icon: faBuilding },
    { title: "Crowd Management", description: "Ensuring safety and flow for large audiences.", icon: faUsers },
    { title: "Artist Booking", description: "Folk, classical, and contemporary performers.", icon: faMusic },
    { title: "Sound & Light", description: "Professional concert-grade technical setups.", icon: faBullhorn },
    { title: "Permissions", description: "Managing government and local authority approvals.", icon: faCheckCircle },
    { title: "Branding & Promo", description: "Promotion and visibility for cultural sponsors.", icon: faBullseye },
  ],
  whyChoose: [
    { title: "Large-Scale Expertise", description: "Proven track record in managing thousands of guests.", icon: faUsers },
    { title: "Respect for Tradition", description: "Deep understanding of cultural sensitivities.", icon: faCheckCircle },
    { title: "Full Event Production", description: "One-stop solution for technical and decor needs.", icon: faBuilding },
  ],
  gallery: [
    { title: "Religious Festivals", image: CulturalEventsImg },
    { title: "Art & Music Shows", image: CulturalEventsImg },
    { title: "Community Events", image: CulturalEventsImg },
    { title: "Traditional Setups", image: CulturalEventsImg },
  ],
  packages: [
    { title: "Essential", price: "₹1L+", features: ["Basic Production", "Sound", "MC"], highlighted: false },
    { title: "Professional", price: "₹5L+", features: ["Grand Stage", "Crowd Control", "LED Screens"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["National Level Artists", "Mega Production", "Live Broadcast"], highlighted: false },
  ],
  process: [
    { title: "Strategy", description: "Defining the event scope, audience, and budget." },
    { title: "Execution", description: "On-ground management of technicals and artists." },
    { title: "On-Day Management", description: "Ensuring safety, flow, and quality." },
    { title: "Success Review", description: "Post-event report and media coverage." },
  ],
  testimonials: [
    { name: "Community Leader", review: "The festival was organized flawlessly. The crowd was happy and safe.", rating: 5 },
  ],
  faqs: [
    { question: "Do you manage government permissions?", answer: "Yes, we handle all necessary approvals for large public and cultural gatherings." },
    { question: "Can you provide traditional folk artists?", answer: "Yes, we have a network of traditional artists from various regions of India." },
  ],
  finalCTA: {
    title: "Host a Memorable Cultural Celebration",
    text: "Let Leor Media bring grandeur to your next cultural or festive event.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const ProductLaunchesData = {
  SeoName: { seotitle: "product-launches" },
  coverimage: ProductLaunchesImg,
  title: "Strategic Product Launches by Leor Media",
  subtitle: "Creating impactful brand reveals and product launches that capture market attention.",
  hero: {
    title: "Product Launch Event Management Services in Vizag by Leor Media",
    subtitle: "Create a powerful first impression with professionally managed product launch events. Leor Media specialize in product launch event planning, brand unveiling ceremonies, and corporate launch events in Vizag.",
    highlights: ["Brand Impact", "Creative Storytelling", "High-Tech Production"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Make Your Brand Stand Out",
    text: "A product launch is a critical moment for any brand. We focus on creating a 'Wow' factor that resonates with your audience and the media.",
    details: "From stage reveals and interactive demos to media management and influencer engagement, we handle it all."
  },
  services: [
    { title: "Product Launch Planning", description: "Strategic planning for high-impact brand unveilings.", icon: faShapes },
    { title: "Brand Unveiling", description: "Creative and dramatic product reveal ceremonies.", icon: faBullseye },
    { title: "Media Coordination", description: "Managing press launches and media interactions.", icon: faBullhorn },
    { title: "Celebrity Appearances", description: "Booking stars and influencers for launch events.", icon: faUsers },
    { title: "Stage & LED Production", description: "Premium stage, LED walls, and AV setups.", icon: faShapes },
    { title: "Promotional Branding", description: "Site-wide promotional setups and branding displays.", icon: faBullseye },
  ],
  whyChoose: [
    { title: "Creative Innovation", description: "Fresh and out-of-the-box launch concepts.", icon: faCheckCircle },
    { title: "Technical Expertise", description: "Seamless management of complex AV setups.", icon: faShapes },
    { title: "Result Oriented", description: "Focused on brand visibility and engagement.", icon: faBullseye },
  ],
  gallery: [
    { title: "Tech Launches", image: ProductLaunchesImg },
    { title: "Car Reveals", image: ProductLaunchesImg },
    { title: "Brand Events", image: ProductLaunchesImg },
    { title: "Media Days", image: ProductLaunchesImg },
  ],
  packages: [
    { title: "Basic", price: "₹2L+", features: ["Basic Setup", "AV", "MC"], highlighted: false },
    { title: "Premium", price: "₹5L+", features: ["High-Tech Reveal", "Media PR", "Experience Zone"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["National Level Launch", "Celebrity Guests", "Global Streaming"], highlighted: false },
  ],
  process: [
    { title: "Strategy", description: "Understanding the product and target audience." },
    { title: "Creative Design", description: "Designing the reveal and theme." },
    { title: "Production", description: "Setting up the venue and technicals." },
    { title: "The Launch", description: "Executing the event with precision." },
  ],
  testimonials: [
    { name: "Brand Manager", review: "The launch was a huge success. The reveal was breathtaking!", rating: 5 },
  ],
  faqs: [
    { question: "Do you handle media invites?", answer: "Yes, we coordinate with PR agencies and media houses for event coverage." },
    { question: "Can you manage digital product launches?", answer: "Yes, we provide virtual and hybrid launch solutions with live streaming." },
  ],
  finalCTA: {
    title: "Launch Your Brand with Confidence",
    text: "Let Leor Media create a high-impact launch for your next product.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const ConcertAndGigsData = {
  SeoName: { seotitle: "concert-and-gigs" },
  coverimage: ConcertAndGigsImg,
  title: "Concerts & Live Gigs by Leor Media",
  subtitle: "High-energy musical events, live concerts, and star-studded gigs managed with technical perfection.",
  hero: {
    title: "Concert & Live Gig Event Management in Vizag by Leor Media",
    subtitle: "Looking for the best concert and live gig organizers in Vizag to create a high-energy, grand, and professionally managed musical experience? Leor Media specializes in live music concerts, DJ nights, and music festivals.",
    highlights: ["Stellar Production", "A-List Artists", "Massive Crowd Management"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Bring the House Down",
    text: "Music is the heartbeat of any great event. Whether it's a stadium concert or a corporate gig, we provide the technical expertise and artist connections to make it a hit.",
    details: "We handle everything from stage production and sound engineering to security and ticketing."
  },
  services: [
    { title: "Concert Planning", description: "End-to-end management of large-scale concerts.", icon: faBuilding },
    { title: "Artist Booking", description: "Managing singers, bands, DJs, and live performers.", icon: faMusic },
    { title: "Stage & AV Production", description: "Premium stage, LED walls, and concert lighting.", icon: faBullhorn },
    { title: "Sound Engineering", description: "Concert-grade sound systems and technicians.", icon: faBullhorn },
    { title: "Crowd Management", description: "Bouncer teams and professional security services.", icon: faUsers },
    { title: "Permissions", description: "Handling police, fire, and local authority approvals.", icon: faCheckCircle },
  ],
  whyChoose: [
    { title: "Technical Mastery", description: "Experts in high-end audio and visual production.", icon: faShapes },
    { title: "Large-Scale Experience", description: "Proven ability to manage massive crowds safely.", icon: faUsers },
    { title: "Industry Connections", description: "Direct access to top music talent.", icon: faMusic },
  ],
  gallery: [
    { title: "Stadium Gigs", image: ConcertAndGigsImg },
    { title: "Club Performances", image: ConcertAndGigsImg },
    { title: "Music Festivals", image: ConcertAndGigsImg },
    { title: "Unplugged Nights", image: ConcertAndGigsImg },
  ],
  packages: [
    { title: "Standard", price: "₹3L+", features: ["Stage", "Sound", "Local Band"], highlighted: false },
    { title: "Premium", price: "₹10L+", features: ["Mega Stage", "Top DJ/Singer", "Full Security"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["National Tour", "International Artists", "Broadcast"], highlighted: false },
  ],
  process: [
    { title: "RFP & Artist", description: "Defining the scale and booking the talent." },
    { title: "Production Design", description: "Designing stage and sound layouts." },
    { title: "Load-in", description: "Setting up the massive equipment at the venue." },
    { title: "The Show", description: "Flawless execution of the live performance." },
  ],
  testimonials: [
    { name: "Event Sponsor", review: "The energy was insane! The production quality was top-notch.", rating: 5 },
  ],
  faqs: [
    { question: "Do you organize concerts in Vizag?", answer: "Yes, we specialize in music concerts, festivals, and live gigs in Vizag." },
    { question: "Can you provide LED walls and AV production?", answer: "Absolutely. We provide LED walls, sound systems, and concert lighting." },
    { question: "Do you manage artist hospitality?", answer: "Yes, we manage artist travel, stay, and backstage requirements." },
    { question: "Do you offer affordable concert packages?", answer: "Yes, we provide flexible packages for various scales of events." },
  ],
  finalCTA: {
    title: "Ready to Rock Your Next Event?",
    text: "Partner with Leor Media for world-class concert production.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};



export const FashionShowsData = {
  SeoName: { seotitle: "fashion-shows" },
  coverimage: FashionShowsImg,
  title: "High-Fashion Shows by Leor Media",
  subtitle: "Glamour, style, and professional ramp walk productions for designers and brands.",
  hero: {
    title: "Fashion Show Event Management in Vizag by Leor Media",
    subtitle: "Looking for the best fashion show organizers in Vizag to produce a high-glitz, stylish, and professionally managed runway event? Leor Media specializes in fashion show production, designer showcases, bridal expos, and luxury lifestyle events.",
    highlights: ["Runway Perfection", "Designer Spotlights", "High-Fashion Glitz"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Glamorous Fashion Shows",
    text: "Runway excellence is our specialty. We produce high-glitz fashion events with professional models, designers, and stunning stage setups that capture the essence of style.",
    details: "We handle everything from ramp fabrication and lighting to model coordination and designer management."
  },
  services: [
    { title: "Ramp Fabrication", description: "Customized fashion runways and stage designs.", icon: faBuilding },
    { title: "Model Coordination", description: "Managing professional models and makeup artists.", icon: faUsers },
    { title: "Designer Showcases", description: "Coordinating with fashion designers for collection reveals.", icon: faPalette },
    { title: "Stage & Lighting", description: "High-glamour lighting and sound production.", icon: faBullhorn },
    { title: "Choreography", description: "Professional ramp-walk training and show direction.", icon: faMusic },
    { title: "PR & Media", description: "Managing media coverage and fashion influencers.", icon: faGlobe },
  ],
  whyChoose: [
    { title: "Stylish Concepts", description: "Unique and creative fashion show themes.", icon: faPalette },
    { title: "Professional Models", description: "Direct access to top-tier fashion talent.", icon: faUsers },
    { title: "Premium Production", description: "World-class ramp, sound, and lighting quality.", icon: faBuilding },
  ],
  gallery: [
    { title: "Runway Shows", image: FashionShowsImg },
    { title: "Bridal Expos", image: FashionShowsImg },
    { title: "Designer Nights", image: FashionShowsImg },
    { title: "Backstage Glitz", image: FashionShowsImg },
  ],
  packages: [
    { title: "Standard", price: "₹2L+", features: ["Basic Ramp", "Local Models", "Sound"], highlighted: false },
    { title: "Premium", price: "₹6L+", features: ["Custom Ramp", "Pro Models", "LED Wall"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Designer Showcase", "Celebrity Guests", "National Media"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "Understanding the designer's vision and collection theme." },
    { title: "Show Design", description: "Planning ramp layout, lighting, and choreography." },
    { title: "Model Casting", description: "Selecting and training models for the runway." },
    { title: "Live Show", description: "Professionally managing the entire high-fashion event." },
  ],
  testimonials: [
    { name: "Designer", review: "The show was spectacular. The lighting and ramp were perfect!", rating: 5 },
  ],
  faqs: [
    { question: "Do you organize fashion shows in Vizag?", answer: "Yes, we specialize in fashion shows, designer showcases, and lifestyle events." },
    { question: "Can you provide models and makeup artists?", answer: "Absolutely. We provide professional models, choreographers, and makeup teams." },
    { question: "Do you handle ramp fabrication?", answer: "Yes, we design and build customized ramps and stage setups for fashion shows." },
    { question: "Do you offer affordable packages?", answer: "Yes, we provide flexible packages for designers and fashion brands." },
  ],
  finalCTA: {
    title: "Host a Glamorous Fashion Show",
    text: "Let Leor Media transform your collection reveal into a visually espectacular and professionally managed fashion experience.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const AwardNightsData = {
  SeoName: { seotitle: "award-nights" },
  coverimage: FashionShowsImg,
  title: "Grand Award Nights by Leor Media",
  subtitle: "Celebrating excellence with red-carpet glamour and flawless stage production.",
  hero: {
    title: "Award Night Event Management Services in Vizag by Leor Media",
    subtitle: "Looking for the best award night organizers in Vizag to host a prestigious, grand, and professionally managed award ceremony? Leor Media is one of the leading event management companies in Vizag specializing in corporate award ceremonies, celebrity award nights, annual recognition events, and luxury gala celebrations.",
    highlights: ["Red Carpet Glitz", "Sophisticated Production", "Celebrating Excellence"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Best Award Function Organizers in Vizag",
    text: "Award nights are all about celebrating achievements, recognizing excellence, and creating unforgettable experiences. Our professional event management team handles every detail from stage production to celebrity guest coordination.",
    details: "We specialize in corporate recognition, celebrity awards, and gala celebrations with premium production quality."
  },
  services: [
    { title: "Stage Production", description: "Grand stage fabrication and LED backdrop designs.", icon: faBuilding },
    { title: "Red Carpet Setups", description: "Premium red carpet entries and media zones.", icon: faGlassCheers },
    { title: "Trophy Design", description: "Customized trophies and recognition branding.", icon: faAward },
    { title: "Artist Booking", description: "Booking anchors, performers, and celebrity guests.", icon: faUsers },
    { title: "Sound & Light", description: "Concert-quality AV production and stage effects.", icon: faBullhorn },
    { title: "Hospitality", description: "VIP hospitality and delegate management services.", icon: faUsers },
  ],
  whyChoose: [
    { title: "Premium Production", description: "High-quality stage, LED walls, and AV support.", icon: faBuilding },
    { title: "Professional Coordination", description: "Seamless management of show flow and scripts.", icon: faCheckCircle },
    { title: "Celebrity Network", description: "Direct access to top performers and celebrities.", icon: faStar },
  ],
  gallery: [
    { title: "Red Carpet", image: FashionShowsImg },
    { title: "Stage Moments", image: FashionShowsImg },
    { title: "Award Reveals", image: FashionShowsImg },
    { title: "VIP Lounges", image: FashionShowsImg },
  ],
  packages: [
    { title: "Standard", price: "₹3L+", features: ["Basic Stage", "AV Production", "Anchor"], highlighted: false },
    { title: "Premium", price: "₹8L+", features: ["Grand Stage", "LED Screens", "Celebrity Guests"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Mega Production", "National PR", "International Artists"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "Understanding event goals and audience expectations." },
    { title: "Show Flow", description: "Designing sequence of awards and performances." },
    { title: "Production", description: "Setting up high-end AV and stage fabrication." },
    { title: "Execution", description: "Professionally managing the live award ceremony." },
  ],
  testimonials: [
    { name: "CEO, Enterprise", review: "The award night was managed with absolute precision. Truly professional.", rating: 5 },
  ],
  faqs: [
    { question: "Do you organize award functions in Vizag?", answer: "Yes, we specialize in corporate, celebrity, and educational award ceremonies in Vizag." },
    { question: "Can you provide LED walls and stage setups?", answer: "Absolutely. We provide red carpet, LED walls, lighting, and stage fabrication." },
    { question: "Do you arrange celebrity guests?", answer: "Yes, we provide emcees, DJs, performers, and celebrity coordination." },
    { question: "Do you offer affordable packages?", answer: "Yes, we provide flexible packages suitable for various organizations and events." },
  ],
  finalCTA: {
    title: "Book the Best Award Night Organizers in Vizag",
    text: "Let Leor Media transform your recognition event into a visually spectacular and professionally managed experience.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const CarnivalsData = {
  SeoName: { seotitle: "carnivals" },
  coverimage: PersonalCelebrationsImg,
  title: "Vibrant Carnivals & Fairs by Leor Media",
  subtitle: "High-energy public events filled with joy, entertainment, and creative themes.",
  hero: {
    title: "Vibrant Carnivals & Fairs by Leor Media",
    subtitle: "Joy, music, and massive fun. We produce large-scale carnivals with rides, games, food, and entertainment.",
    highlights: ["Massive Crowd Fun", "Colorful Setups", "Full Scaled Production"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "A World of Fun and Celebration",
    text: "Carnivals are about community and happiness. We create immersive environments filled with activities for all age groups, from kids to adults.",
    details: "We manage venue layout, ride safety, vendor stalls, and continuous entertainment to ensure a successful carnival."
  },
  services: [
    { title: "Ride Management", description: "Sourcing and managing safe amusement rides.", icon: faShapes },
    { title: "Game Stalls", description: "Interactive games and activity zones.", icon: faShapes },
    { title: "Food Courts", description: "Managing multiple cuisine stalls and cleanliness.", icon: faUtensils },
    { title: "Stage Acts", description: "Continuous live music, magic shows, and performances.", icon: faMusic },
    { title: "Security & Safety", description: "Crowd control, first-aid, and safety checks.", icon: faUsers },
  ],
  whyChoose: [
    { title: "Scale and Variety", description: "Capable of managing thousands of visitors daily.", icon: faUsers },
    { title: "Safety First", description: "Strict adherence to safety protocols for rides and crowds.", icon: faCheckCircle },
    { title: "Creative Themes", description: "Building unique carnival identities and decor.", icon: faPalette },
  ],
  gallery: [
    { title: "Joy Rides", image: PersonalCelebrationsImg },
    { title: "Food Stalls", image: PersonalCelebrationsImg },
    { title: "Live Stages", image: PersonalCelebrationsImg },
    { title: "Crowd Fun", image: PersonalCelebrationsImg },
  ],
  packages: [
    { title: "Standard", price: "₹5L+", features: ["Basic Stalls", "Stage", "Local Artists"], highlighted: false },
    { title: "Premium", price: "₹15L+", features: ["Multiple Rides", "Themed Decor", "PR Media"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Mega Carnival", "National Talent", "Full Scale Production"], highlighted: false },
  ],
  process: [
    { title: "Planning", description: "Designing the layout and activity list." },
    { title: "Setup", description: "Installing rides and stalls safely." },
    { title: "Live Days", description: "Managing the event flow and crowd daily." },
    { title: "Post Event", description: "Safe dismantling and venue cleanup." },
  ],
  testimonials: [
    { name: "City Council", review: "The annual carnival was a massive success. The team managed the crowd perfectly.", rating: 5 },
  ],
  faqs: [
    { question: "Do you handle ride safety certifications?", answer: "Yes, we ensure all rides have the necessary safety clearances and operators." },
    { question: "Can you manage ticket sales?", answer: "Yes, we provide digital and physical ticketing solutions for carnivals." },
  ],
  finalCTA: {
    title: "Bring a Carnival to Your City",
    text: "Partner with Leor Media for a safe, fun, and successful carnival event.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};


export const CorporateEventsData = {
  SeoName: { seotitle: "corporate-events" },
  coverimage: CorporateEventsImg,
  title: "Corporate Event Management by Leor Media",
  subtitle: "Professional excellence for your business events. We handle conferences, award nights, and summits.",
  hero: {
    title: "Corporate Event Management Services in Vizag by Leor Media",
    subtitle: "Looking for the best corporate event management company in Vizag to organize professional, impactful, and memorable business events? Leor Media is one of the leading event management companies in Vizag specializing in corporate event planning, annual meetings, conferences, and premium brand experiences.",
    highlights: ["Strategic Planning", "Professional Coordination", "Impactful Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Best Corporate Event Organizers in Vizag",
    text: "Corporate events require strategic planning, professional coordination, and flawless execution. Our corporate event experts carefully manage every detail to create engaging and successful business events.",
    details: "We specialize in corporate annual days, conferences, award functions, and product launches with a focus on brand image and excellence."
  },
  services: [
    { title: "Annual Day Events", description: "Grand annual day celebrations and milestones.", icon: faBuilding },
    { title: "Award Ceremonies", description: "Professional employee award nights and recognition.", icon: faAward },
    { title: "Stage & Production", description: "Premium stage, LED walls, and AV setups.", icon: faBullhorn },
    { title: "Entertainment", description: "Corporate entertainment shows and celebrity performers.", icon: faMusic },
    { title: "Hospitality", description: "Expert guest hospitality and delegate management.", icon: faUsers },
    { title: "Branding", description: "Complete event branding and backdrop setups.", icon: faBullseye },
  ],
  whyChoose: [
    { title: "Professional Execution", description: "Flawless management of complex corporate events.", icon: faCheckCircle },
    { title: "Creative Concepts", description: "Impactful event strategies and branding ideas.", icon: faPalette },
    { title: "Production Quality", description: "Premium stage, sound, and lighting production.", icon: faBuilding },
  ],
  gallery: [
    { title: "Annual Days", image: CorporateEventsImg },
    { title: "Award Nights", image: CorporateEventsImg },
    { title: "Conferences", image: CorporateEventsImg },
    { title: "Product Launches", image: CorporateEventsImg },
  ],
  packages: [
    { title: "Essential", price: "₹1L+", features: ["Basic Setup", "Standard AV", "Coordination"], highlighted: false },
    { title: "Professional", price: "₹5L+", features: ["Grand Stage", "LED Screens", "Professional MC"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Mega Production", "Celebrity Guests", "National PR"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "Understanding business goals and event objectives." },
    { title: "Strategy", description: "Creating customized event plans and branding concepts." },
    { title: "Coordination", description: "Finalizing production teams and hospitality support." },
    { title: "Execution", description: "Professionally managing the entire event from setup to end." },
  ],
  testimonials: [
    { name: "HR Director", review: "The annual day was organized with absolute perfection. Highly recommended!", rating: 5 },
  ],
  faqs: [
    { question: "Do you organize corporate events in Vizag?", answer: "Yes, we specialize in conferences, annual days, seminars, and product launches in Vizag." },
    { question: "Can you provide LED walls and technical production?", answer: "Absolutely. We provide LED walls, stage fabrication, and full AV support." },
    { question: "Do you manage product launch events?", answer: "Yes, we provide complete product launch planning and promotional management." },
    { question: "Can you arrange entertainment for corporate events?", answer: "Yes, we provide DJs, live bands, celebrity artists, and anchors." },
  ],
  finalCTA: {
    title: "Book the Best Corporate Event Management Company in Vizag",
    text: "Let Leor Media transform your corporate gathering into a professionally managed and memorable business experience.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

// Generic Wedding Planner Detail Page Data (Original fallback)
export const GenericWeddingPlannersDetailPageData = {
  SeoName: {
    seotitle: "weddingPlanners",
  },
  section2: {
    tagline: "Planning a special event?",
    heading: "Let Us Make Your Event Extraordinary.",
    description:
      "At Leor Media, we understand that every event is unique. Our expert planners work closely with you to design and execute an experience that exceeds your expectations, right here in Visakhapatnam.",
  },

  services: [
    {
      icon: faCheckCircle,
      title: "Full-Service Planning",
      description: "From venue selection to vendor management.",
      details: [
        "Conceptualization & Theme Design",
        "Venue Sourcing & Catering Coordination",
        "Guest List Management & Invitations",
      ],
      link: "/contactus",
    },
    {
      icon: faPalette,
      title: "Decor & Atmosphere",
      description: "Stunning visuals tailored to your theme.",
      details: [
        "Floral & Lighting Design",
        "Stage & Audio-Visual Setup",
        "Themed Decorations & Branding",
      ],
      link: "/contactus",
    },
    {
      icon: faUsers,
      title: "On-Site Management",
      description: "Smooth execution on the day of the event.",
      details: [
        "Timely Setup & Coordination",
        "Crowd Management & Guest Assistance",
        "Troubleshooting & Vendor Supervision",
      ],
      link: "/contactus",
    },
  ],

  pricing: [
    {
      title: "Basic Planning",
      price: "Contact Us",
      features: [
        "Initial Consultation",
        "Venue Recommendations",
        "Vendor Coordination",
        "On-Day Basics",
      ],
      link: "/contactus",
      highlighted: false,
    },
    {
      title: "Premium Execution",
      price: "Contact Us",
      features: [
        "Full Event Management",
        "Custom Decor & Theme",
        "Guest Management",
        "Photography & Video",
      ],
      link: "/contactus",
      highlighted: true,
    },
  ],

  coverimage: DestinationWeddingImg,
  title: "Event Planning Services",
  subtitle: "Turning your special moments into lifelong memories with professional planning and flawless execution.",
  coverImage: {
    src: DestinationWeddingImg,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },

  faqs: [
    {
      question: "How early should I book my event?",
      answer: "We recommend booking at least 1-3 months in advance depending on the scale of the event to ensure venue and vendor availability.",
    },
    {
      question: "Do you handle events outside Visakhapatnam?",
      answer: "While we primarily serve Vizag, we can handle regional events across Andhra Pradesh with prior discussion.",
    },
    {
      question: "Can you work within my budget?",
      answer: "Yes, we offer flexible planning services that can be tailored to suit various budgets without compromising on quality.",
    },
  ],
};

export const BrandPromotionalEventsData = {
  SeoName: { seotitle: "brand-promotional-events" },
  coverimage: ProductLaunchesImg,
  title: "Brand Promotional Events in Vizag",
  subtitle: "Strategic brand activations and promotional campaigns to boost your business visibility.",
  hero: {
    title: "Brand Promotional Event Management Services in Vizag by Leor Media",
    subtitle: "Looking for the best brand promotional event organizers in Vizag to increase brand visibility, customer engagement, and market presence? Leor Media is one of the leading event management companies in Vizag specializing in brand promotions, product launch events, roadshows, mall activations, and corporate branding events.",
    highlights: ["Customer Engagement", "High Visibility", "Brand Storytelling"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Best Brand Promotion Company in Vizag",
    text: "Brand promotional events help businesses connect directly with customers, improve visibility, and create memorable experiences. Our event experts carefully plan every promotional activity to ensure your brand stands out.",
    details: "We specialize in product launches, showroom openings, roadshows, and experiential marketing activities."
  },
  services: [
    { title: "Product Launches", description: "Professionally managed unveiling of your new products.", icon: faShapes },
    { title: "Mall Activations", description: "Interactive setups in high-traffic shopping areas.", icon: faBuilding },
    { title: "Roadshows", description: "Mobile brand promotions across multiple locations.", icon: faPlaneDeparture },
    { title: "Branding Setups", description: "Customized exhibition stalls and promotional displays.", icon: faBullseye },
    { title: "Engagement Activities", description: "Audience interaction, contests, and giveaways.", icon: faUsers },
    { title: "Celebrity Appearances", description: "Managing stars for showroom openings and launches.", icon: faStar },
  ],
  whyChoose: [
    { title: "Creative Campaigns", description: "Unique promotional ideas that build brand recall.", icon: faPalette },
    { title: "Marketing Focused", description: "Strategic planning to meet your business goals.", icon: faBullseye },
    { title: "Premium Production", description: "High-quality stalls, LED setups, and branding.", icon: faBuilding },
  ],
  gallery: [
    { title: "Product Launches", image: ProductLaunchesImg },
    { title: "Mall Activations", image: ProductLaunchesImg },
    { title: "Roadshows", image: ProductLaunchesImg },
    { title: "Showroom Openings", image: ProductLaunchesImg },
  ],
  packages: [
    { title: "Standard", price: "₹1L+", features: ["Basic Setup", "Promoters", "Standard Branding"], highlighted: false },
    { title: "Premium", price: "₹4L+", features: ["Mall Hub", "Influencer Collab", "Tech Interaction"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Multi-City Roadshow", "National PR", "Mega Launch"], highlighted: false },
  ],
  process: [
    { title: "Marketing Brief", description: "Understanding brand goals and target audience." },
    { title: "Concept Design", description: "Developing customized branding and engagement strategies." },
    { title: "Coordination", description: "Finalizing production, artists, and logistics." },
    { title: "Brand Activation", description: "Professionally managing the entire live campaign." },
  ],
  testimonials: [
    { name: "Brand Manager", review: "The promotional campaign was a huge success. Exceptional visibility!", rating: 5 },
  ],
  faqs: [
    { question: "Do you organize product launches in Vizag?", answer: "Yes, we specialize in product launches, showroom openings, and activations." },
    { question: "Can you provide exhibition stalls and LED setups?", answer: "Absolutely. We provide stalls, LED walls, stage production, and lighting." },
    { question: "Can you handle mall activations and roadshows?", answer: "Yes, we organize mall promotions, retail branding, and roadshows." },
    { question: "Do you offer affordable packages?", answer: "Yes, we provide flexible packages for startups and corporate brands." },
  ],
  finalCTA: {
    title: "Book the Best Brand Promotional Event Organizers in Vizag",
    text: "Let Leor Media transform your promotional campaign into a high-impact branding experience with creative concepts and seamless execution.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const CelebArtistManagementData = {
  SeoName: { seotitle: "celeb-artist-management" },
  coverimage: EntertainmentImg,
  title: "Celebrity & Artist Management in Vizag",
  subtitle: "Connecting you with top stars and managing entertainment for grand celebrations.",
  hero: {
    title: "Celebrity & Artist Management Services in Vizag by Leor Media",
    subtitle: "Looking for the best celebrity and artist management company in Vizag to make your event grand, energetic, and unforgettable? Leor Media specializes in celebrity management, artist coordination, live entertainment booking, and luxury entertainment events.",
    highlights: ["Star Access", "Seamless Logistics", "Professional Management"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Best Celebrity Management Company in Vizag",
    text: "Entertainment plays a major role in making events memorable. Our professional celebrity management team handles artist bookings, scheduling, hospitality, and live event execution.",
    details: "From movie stars and influencers to live bands and DJs, we provide complete entertainment solutions with professional artist care."
  },
  services: [
    { title: "Celeb Appearances", description: "Tollywood and social media celebrity guest appearances.", icon: faStar },
    { title: "Artist Booking", description: "Managing singers, bands, DJs, and live performers.", icon: faMusic },
    { title: "VIP Hospitality", description: "Premium hospitality and security for celebrity guests.", icon: faUsers },
    { title: "Influencer Collabs", description: "Managing social media influencers for brand events.", icon: faGlobe },
    { title: "Entertainment Mgmt", description: "Flawless coordination of live stage performances.", icon: faMasksTheater },
    { title: "Technical Riders", description: "Managing sound, lighting, and stage requirements.", icon: faShapes },
  ],
  whyChoose: [
    { title: "Vast Network", description: "Direct connections with artists and management agencies.", icon: faUsers },
    { title: "Professional Handling", description: "Managing every detail from travel to green rooms.", icon: faUserTie },
    { title: "Production Quality", description: "Premium event production for high-energy entertainment.", icon: faBuilding },
  ],
  gallery: [
    { title: "Star Appearances", image: EntertainmentImg },
    { title: "Live Concerts", image: EntertainmentImg },
    { title: "DJ Nights", image: EntertainmentImg },
    { title: "Celebrity Guests", image: EntertainmentImg },
  ],
  packages: [
    { title: "Coordination", price: "₹50K+", features: ["Booking Mgmt", "Logistics Planning"], highlighted: false },
    { title: "Full Mgmt", price: "₹2L+", features: ["Backstage Mgmt", "Security", "Hospitality"], highlighted: true },
    { title: "Production", price: "Custom", features: ["Star Integration", "Concert Setup", "Global Logistics"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "Matching the right talent to your event style." },
    { title: "Artist Selection", description: "Finalizing celebrity appearances and performers." },
    { title: "Hospitality Planning", description: "Managing sound, stay, and logistics for artists." },
    { title: "Live Coordination", description: "Managing performances and celebrity arrivals flawlessly." },
  ],
  testimonials: [
    { name: "Private Client", review: "The celebrity guest at our event was managed so professionally. Amazing energy!", rating: 5 },
  ],
  faqs: [
    { question: "Do you arrange celebrities for events in Vizag?", answer: "Yes, we specialize in celebrity appearances, influencers, and artist management." },
    { question: "Can you provide DJs and live bands?", answer: "Absolutely. We provide DJs, singers, bands, and entertainment performers." },
    { question: "Do you manage artist hospitality?", answer: "Yes, we provide VIP hospitality, security, and technical rider management." },
    { question: "Do you offer affordable entertainment packages?", answer: "Yes, we provide flexible packages for various scales of events." },
  ],
  finalCTA: {
    title: "Book the Best Celebrity & Artist Management Company",
    text: "Let Leor Media transform your celebration into a premium entertainment experience with professional artist management.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const CorporateSeminarsData = {
  SeoName: { seotitle: "corporate-seminars" },
  coverimage: CorporateEventsImg,
  title: "Corporate Seminar Event Management",
  subtitle: "Professional and engaging business seminars and leadership summits in Vizag.",
  hero: {
    title: "Corporate Seminar Event Management Services in Vizag by Leor Media",
    subtitle: "Looking for the best corporate seminar organizers in Vizag to create professional, engaging, and successfully managed business events? Leor Media specializes in corporate seminars, business conferences, leadership summits, and professional gatherings.",
    highlights: ["Professional Execution", "Business Focused", "Tech Expertise"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Best Corporate Seminar Organizers in Vizag",
    text: "Corporate seminars require proper planning, professional coordination, and technical expertise to deliver effective business communication. Our event team handles every aspect from planning to execution.",
    details: "We specialize in leadership summits, training programs, annual meetings, and networking events with premium coordination."
  },
  services: [
    { title: "Seminar Planning", description: "End-to-end management of business seminars.", icon: faBuilding },
    { title: "Conference Mgmt", description: "Large-scale business conference coordination.", icon: faChalkboard },
    { title: "AV & LED Setup", description: "Premium sound systems and LED wall production.", icon: faBullhorn },
    { title: "Speaker Support", description: "Managing speaker scheduling and technical needs.", icon: faUserTie },
    { title: "Hospitality", description: "Delegate registration and VIP hospitality services.", icon: faUsers },
    { title: "Branding", description: "Customized event branding and backdrop setups.", icon: faBullseye },
  ],
  whyChoose: [
    { title: "Business Focused", description: "Delivering informative and engaging corporate experiences.", icon: faBriefcase },
    { title: "Technical Expertise", description: "Flawless management of AV and presentation setups.", icon: faShapes },
    { title: "Professional Execution", description: "Stress-free and efficiently managed business events.", icon: faCheckCircle },
  ],
  gallery: [
    { title: "Business Summits", image: CorporateEventsImg },
    { title: "Training Programs", image: CorporateEventsImg },
    { title: "Leadership Meets", image: CorporateEventsImg },
    { title: "Seminar Halls", image: CorporateEventsImg },
  ],
  packages: [
    { title: "Essential", price: "₹1L+", features: ["Standard AV", "Catering Mgmt", "Registration"], highlighted: false },
    { title: "Professional", price: "₹3L+", features: ["High-End AV", "VIP Hospitality", "Full Branding"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["Hybrid Event", "Simultaneous Translation", "Global Feed"], highlighted: false },
  ],
  process: [
    { title: "Requirement Discussion", description: "Understanding seminar goals and audience size." },
    { title: "Event Strategy", description: "Creating customized event plans and technical designs." },
    { title: "Coordination", description: "Managing AV production, hospitality, and logistics." },
    { title: "Live Management", description: "Professionally managing the entire seminar experience." },
  ],
  testimonials: [
    { name: "CEO, Tech Corp", review: "The conference was managed with absolute precision. Highly recommended!", rating: 5 },
  ],
  faqs: [
    { question: "Do you organize corporate seminars in Vizag?", answer: "Yes, we specialize in seminars, conferences, and business meetings." },
    { question: "Can you provide LED walls and AV production?", answer: "Absolutely. We provide sound systems, projectors, and complete AV support." },
    { question: "Do you manage speaker coordination?", answer: "Yes, we provide speaker management, delegate registration, and hospitality." },
    { question: "Do you offer affordable seminar packages?", answer: "Yes, we provide flexible packages for startups and large companies." },
  ],
  finalCTA: {
    title: "Book the Best Corporate Seminar Organizers in Vizag",
    text: "Let Leor Media transform your business conference into a professionally managed and successful experience.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const ExhibitionsData = {
  SeoName: { seotitle: "exhibitions" },
  coverimage: ProductLaunchesImg,
  title: "Exhibition Event Management in Vizag",
  subtitle: "Creating high-traffic and visually attractive trade shows and business expos.",
  hero: {
    title: "Exhibition Event Management Services in Vizag by Leor Media",
    subtitle: "Looking for the best exhibition organizers in Vizag to create professional, high-traffic, and visually attractive exhibition events? Leor Media specializes in trade shows, business expos, fashion exhibitions, and industrial trade fairs.",
    highlights: ["High Traffic Expos", "Visual Impact", "Professional Mgmt"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Best Exhibition Organizers in Vizag",
    text: "Exhibitions are effective ways for brands to connect directly with customers and showcase products. Our professional team handles every detail to deliver impactful exhibition experiences.",
    details: "From shell scheme stalls and modular booths to visitor registration and site-wide branding, we handle the entire expo."
  },
  services: [
    { title: "Stall Fabrication", description: "Customized stalls and modular booth designs.", icon: faShapes },
    { title: "Exhibition Mgmt", description: "Full-scale trade show and business expo coordination.", icon: faBuilding },
    { title: "Branding", description: "Sponsor displays and site-wide promotional signage.", icon: faBullseye },
    { title: "Visitor Mgmt", description: "Efficient ticketing and entry registration systems.", icon: faUsers },
    { title: "LED Displays", description: "Premium LED walls and digital showcase setups.", icon: faShapes },
    { title: "Engagement", description: "Audience activities and influencer collaborations.", icon: faUsers },
  ],
  whyChoose: [
    { title: "Creativity", description: "Visually spectacular and attractive stall concepts.", icon: faPalette },
    { title: "Branding Expertise", description: "Helping businesses increase visibility and lead generation.", icon: faBullseye },
    { title: "Seamless Execution", description: "Stress-free management from installation to dismantling.", icon: faCheckCircle },
  ],
  gallery: [
    { title: "Business Expos", image: ProductLaunchesImg },
    { title: "Fashion Shows", image: ProductLaunchesImg },
    { title: "Lifestyle Events", image: ProductLaunchesImg },
    { title: "Stall Designs", image: ProductLaunchesImg },
  ],
  packages: [
    { title: "Standard", price: "₹5L+", features: ["Basic Shell Scheme", "Registration", "Basic AV"], highlighted: false },
    { title: "Premium", price: "₹15L+", features: ["Custom Booths", "PR Media", "Themed Lounges"], highlighted: true },
    { title: "Elite", price: "Custom", features: ["International Trade Fair", "Mega Production", "Government Expo"], highlighted: false },
  ],
  process: [
    { title: "Consultation", description: "Understanding exhibition goals and branding requirements." },
    { title: "Design Strategy", description: "Developing customized stall concepts and floor plans." },
    { title: "Coordination", description: "Finalizing fabrication, production, and logistics." },
    { title: "Live Management", description: "Professionally managing the entire exhibition experience." },
  ],
  testimonials: [
    { name: "Trade Assoc. Head", review: "The expo was extremely well-organized. Great visibility for brands!", rating: 5 },
  ],
  faqs: [
    { question: "Do you organize exhibitions in Vizag?", answer: "Yes, we specialize in business expos, trade fairs, and lifestyle events." },
    { question: "Can you provide stall fabrication?", answer: "Absolutely. We provide customized stalls, modular booths, and LED displays." },
    { question: "Do you organize fashion exhibitions?", answer: "Yes, we organize bridal expos and designer showcase events." },
    { question: "Do you offer affordable packages?", answer: "Yes, we provide flexible packages for startups and large corporate expos." },
  ],
  finalCTA: {
    title: "Host Your Next Big Expo with Leor Media",
    text: "Let Leor Media transform your exhibition into a professionally managed and high-impact business event.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const WeddingPlannersDetailPageData = {
  "destination-wedding": DestinationWeddingData,
  "ring-ceremony": RingCeremonyData,
  "receptions": ReceptionsData,
  "mehendi": MehendiData,
  "sangeet": SangeetData,
  "entertainment-and-artists": EntertainmentAndArtistsData,
  "hospitality": HospitalityData,
  "guest-management": GuestManagementData,
  "photography-and-videography": PhotographyAndVideographyData,
  "theme-decors": ThemeDecorsData,
  "birthday-parties": BirthdayPartiesData,
  "personal-celebrations": PersonalCelebrationsData,
  "cultural-events": CulturalEventsData,
  "corporate-events": CorporateEventsData,
  "product-launches": ProductLaunchesData,
  "concert-and-gigs": ConcertAndGigsData,
  "fashion-shows": FashionShowsData,
  "award-nights": AwardNightsData,
  "carnivals": CarnivalsData,
  "brand-promotional-events": BrandPromotionalEventsData,
  "celeb-artist-management": CelebArtistManagementData,
  "corporate-seminars": CorporateSeminarsData,
  "exhibitions": ExhibitionsData,
};

