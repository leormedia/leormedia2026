import {
  DestinationWeddingImg,
  RingCeremonyImg,
  ReceptionsImg,
  MehendiImg,
  SangeetImg,
  EntertainmentImg,
  HospitalityImg,
  GuestManagementImg,
  PhotographyImg,
  ThemeDecorImg,
  BirthdayPartiesImg,
  PersonalCelebrationsImg,
  WPCulturalEventsImg as CulturalEventsImg,
  WPCorporateEventsImg as CorporateEventsImg,
  ProductLaunchesImg,
  ConcertAndGigsImg,
  WPFashionShowsImg as FashionShowsImg,
} from "../../../assets/data/Imagedata";

import {
  faGlobe,
  faPalette,
  faUtensils,
  faUsers,
  faMusic,
  faCheckCircle,
  faCamera,
  faRing,
  faMicrophone,
  faShapes,
  faCakeCandles,
  faGlassCheers,
  faBullhorn,
  faBriefcase,
  faUserTie,
  faAward,
  faBuilding,
  faBullseye,
  faSmile,
  faScroll,
} from "../../../assets/data/icon_data";

// Wedding Planners Main Category Data

export const WeddingPlannersPageData = {
  SeoName: { seotitle:"wedding-planners" },
  coverimage: DestinationWeddingImg,
  title:"Wedding Planners in Visakhapatnam | Leor Media",
  subtitle:"Create unforgettable memories with Andhra's most trusted wedding planning agency. From beach weddings to grand celebrations, we handle it all.",
  coverImage: { src: DestinationWeddingImg, style: { backgroundSize:"cover", backgroundPosition:"center" } },
  section2: {
    tagline:"Your Dream, Our Design",
    heading:"Professional Wedding Planning & Management",
    description:"Leor Media is dedicated to making your special day perfect. We specialize in destination weddings, traditional ceremonies, and grand receptions with a focus on elegance and flawlessness."
  },
  services: [
    { icon: faRing, title:"Destination Wedding", description:"Seamless planning for luxury destination weddings.", link:"/services/wedding-planners/destination-wedding" },
    { icon: faMusic, title:"Engagement", description:"Elegant and thematic engagement ceremonies.", link:"/services/wedding-planners/ring-ceremony" },
    { icon: faGlassCheers, title:"Receptions", description:"Sophisticated and grand wedding receptions.", link:"/services/wedding-planners/receptions" },
    { icon: faPalette, title:"Mehendi", description:"Creative and traditional Mehendi ceremonies.", link:"/services/wedding-planners/mehendi" },
    { icon: faMusic, title:"Sangeet", description:"High-energy Sangeet and cocktail nights.", link:"/services/wedding-planners/sangeet" },
    { icon: faUsers, title:"Entertainment", description:"Live artists, DJs, and celebrity bookings.", link:"/services/wedding-planners/entertainment-and-artists" },
    { icon: faUtensils, title:"Hospitality", description:"Professional guest management and hospitality.", link:"/services/wedding-planners/hospitality" },
    { icon: faUsers, title:"Guest Management", description:"End-to-end guest logistics and coordination.", link:"/services/wedding-planners/guest-management" },
    { icon: faCamera, title:"Photography", description:"Cinematic and candid wedding photography.", link:"/services/wedding-planners/photography-and-videography" },
    { icon: faPalette, title:"Theme Decors", description:"Stunning theme-based wedding decorations.", link:"/services/wedding-planners/theme-decors" },
  ]
};

export const CulturalEventsData = {
  SeoName: { seotitle:"cultural-events" },
  coverimage: CulturalEventsImg,
  title:"Grand Cultural Events & Festivals by Leor Media",
  subtitle:"Celebrating heritage, art, and traditions with grandeur and large-scale production.",
  hero: {
    title:"Grand Cultural Events & Festivals by Leor Media",
    subtitle:"Celebrating heritage, art, and traditions with grandeur. We specialize in large-scale cultural event management.",
    highlights: ["Tradition Meets Grandeur","Artistic Showcases","Large Scale Production"],
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
      { text:"Call Now", link:"tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading:"Bringing Traditions to Life",
    text:"Cultural events are a vibrant expression of our heritage. Our team has the expertise to manage massive crowds and complex traditional setups while maintaining the sanctity and energy of the event.",
    details:"From community festivals and religious gatherings to art festivals and traditional music concerts, we provide end-to-end solutions."
  },
  services: [
    { title:"Stage Production", description:"Grand traditional and modern stage setups.", icon: faBuilding },
    { title:"Crowd Management", description:"Ensuring safety and flow for large audiences.", icon: faUsers },
    { title:"Artist Booking", description:"Folk, classical, and contemporary performers.", icon: faMusic },
    { title:"Sound & Light", description:"Professional concert-grade technical setups.", icon: faBullhorn },
    { title:"Permissions", description:"Managing government and local authority approvals.", icon: faCheckCircle },
    { title:"Branding & Promo", description:"Promotion and visibility for cultural sponsors.", icon: faBullseye },
  ],
  whyChoose: [
    { title:"Large-Scale Expertise", description:"Proven track record in managing thousands of guests.", icon: faUsers },
    { title:"Respect for Tradition", description:"Deep understanding of cultural sensitivities.", icon: faCheckCircle },
    { title:"Full Event Production", description:"One-stop solution for technical and decor needs.", icon: faBuilding },
  ],
  gallery: [
    { title:"Religious Festivals", image: CulturalEventsImg },
    { title:"Art & Music Shows", image: CulturalEventsImg },
    { title:"Community Events", image: CulturalEventsImg },
    { title:"Traditional Setups", image: CulturalEventsImg },
  ],
  packages: [
    { title:"Essential", price:"₹1L+", features: ["Basic Production","Sound","MC"], highlighted: false },
    { title:"Professional", price:"₹5L+", features: ["Grand Stage","Crowd Control","LED Screens"], highlighted: true },
    { title:"Elite", price:"Custom", features: ["National Level Artists","Mega Production","Live Broadcast"], highlighted: false },
  ],
  process: [
    { title:"Strategy", description:"Defining the event scope, audience, and budget." },
    { title:"Execution", description:"On-ground management of technicals and artists." },
    { title:"On-Day Management", description:"Ensuring safety, flow, and quality." },
    { title:"Success Review", description:"Post-event report and media coverage." },
  ],
  testimonials: [
    { name:"Community Leader", review:"The festival was organized flawlessly. The crowd was happy and safe.", rating: 5 },
  ],
  faqs: [
    { question:"Do you manage government permissions?", answer:"Yes, we handle all necessary approvals for large public and cultural gatherings." },
    { question:"Can you provide traditional folk artists?", answer:"Yes, we have a network of traditional artists from various regions of India." },
  ],
  finalCTA: {
    title:"Host a Memorable Cultural Celebration",
    text:"Let Leor Media bring grandeur to your next cultural or festive event.",
    phones: ["+91-9666643456","+91-9542248999"],
    ctas: [
      { text:"WhatsApp Us", link:"https://wa.me/919666643456", icon:"whatsapp" },
      { text:"Get Free Quote", link:"/get-quotation", icon:"quote" }
    ]
  }
};

export const CorporateEventsData = {
  SeoName: { seotitle:"corporate-events" },
  coverimage: CorporateEventsImg,
  title:"Corporate Event Management by Leor Media",
  subtitle:"Professional excellence for your business events. We handle conferences, award nights, and summits.",
  hero: {
    title:"Corporate Event Management Services in Vizag by Leor Media",
    subtitle:"Looking for the best corporate event management company in Vizag to organize professional, impactful, and memorable business events? Leor Media is one of the leading event management companies in Vizag specializing in corporate event planning, annual meetings, conferences, and premium brand experiences.",
    highlights: ["Strategic Planning","Professional Coordination","Impactful Execution"],
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
      { text:"Call Now", link:"tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading:"Best Corporate Event Organizers in Vizag",
    text:"Corporate events require strategic planning, professional coordination, and flawless execution. Our corporate event experts carefully manage every detail to create engaging and successful business events.",
    details:"We specialize in corporate annual days, conferences, award functions, and product launches with a focus on brand image and excellence."
  },
  services: [
    { title:"Annual Day Events", description:"Grand annual day celebrations and milestones.", icon: faBuilding },
    { title:"Award Ceremonies", description:"Professional employee award nights and recognition.", icon: faAward },
    { title:"Stage & Production", description:"Premium stage, LED walls, and AV setups.", icon: faBullhorn },
    { title:"Entertainment", description:"Corporate entertainment shows and celebrity performers.", icon: faMusic },
    { title:"Hospitality", description:"Expert guest hospitality and delegate management.", icon: faUsers },
    { title:"Branding", description:"Complete event branding and backdrop setups.", icon: faBullseye },
  ],
  whyChoose: [
    { title:"Professional Execution", description:"Flawless management of complex corporate events.", icon: faCheckCircle },
    { title:"Creative Concepts", description:"Impactful event strategies and branding ideas.", icon: faPalette },
    { title:"Production Quality", description:"Premium stage, sound, and lighting production.", icon: faBuilding },
  ],
  gallery: [
    { title:"Annual Days", image: CorporateEventsImg },
    { title:"Award Nights", image: CorporateEventsImg },
    { title:"Conferences", image: CorporateEventsImg },
    { title:"Product Launches", image: CorporateEventsImg },
  ],
  packages: [
    { title:"Essential", price:"₹1L+", features: ["Basic Setup","Standard AV","Coordination"], highlighted: false },
    { title:"Professional", price:"₹5L+", features: ["Grand Stage","LED Screens","Professional MC"], highlighted: true },
    { title:"Elite", price:"Custom", features: ["Mega Production","Celebrity Guests","National PR"], highlighted: false },
  ],
  process: [
    { title:"Consultation", description:"Understanding business goals and event objectives." },
    { title:"Strategy", description:"Creating customized event plans and branding concepts." },
    { title:"Coordination", description:"Finalizing production teams and hospitality support." },
    { title:"Execution", description:"Professionally managing the entire event from setup to end." },
  ],
  testimonials: [
    { name:"HR Director", review:"The annual day was organized with absolute perfection. Highly recommended!", rating: 5 },
  ],
  faqs: [
    { question:"Do you organize corporate events in Vizag?", answer:"Yes, we specialize in conferences, annual days, seminars, and product launches in Vizag." },
    { question:"Can you provide LED walls and technical production?", answer:"Absolutely. We provide LED walls, stage fabrication, and full AV support." },
    { question:"Do you manage product launch events?", answer:"Yes, we provide complete product launch planning and promotional management." },
    { question:"Can you arrange entertainment for corporate events?", answer:"Yes, we provide DJs, live bands, celebrity artists, and anchors." },
  ],
  finalCTA: {
    title:"Book the Best Corporate Event Management Company in Vizag",
    text:"Let Leor Media transform your corporate gathering into a professionally managed and memorable business experience.",
    phones: ["+91-9666643456","+91-9542248999"],
    ctas: [
      { text:"WhatsApp Us", link:"https://wa.me/919666643456", icon:"whatsapp" },
      { text:"Get Free Quote", link:"/get-quotation", icon:"quote" }
    ]
  }
};

export const FashionShowsData = {
  SeoName: { seotitle:"fashion-shows" },
  coverimage: FashionShowsImg,
  title:"High-Fashion Shows by Leor Media",
  subtitle:"Glamour, style, and professional ramp walk productions for designers and brands.",
  hero: {
    title:"Fashion Show Event Management in Vizag by Leor Media",
    subtitle:"Looking for the best fashion show organizers in Vizag to produce a high-glitz, stylish, and professionally managed runway event? Leor Media specializes in fashion show production, designer showcases, bridal expos, and luxury lifestyle events.",
    highlights: ["Runway Perfection","Designer Spotlights","High-Fashion Glitz"],
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
      { text:"Call Now", link:"tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading:"Glamorous Fashion Shows",
    text:"Runway excellence is our specialty. We produce high-glitz fashion events with professional models, designers, and stunning stage setups that capture the essence of style.",
    details:"We handle everything from ramp fabrication and lighting to model coordination and designer management."
  },
  services: [
    { title:"Ramp Fabrication", description:"Customized fashion runways and stage designs.", icon: faBuilding },
    { title:"Model Coordination", description:"Managing professional models and makeup artists.", icon: faUsers },
    { title:"Designer Showcases", description:"Coordinating with fashion designers for collection reveals.", icon: faPalette },
    { title:"Stage & Lighting", description:"High-glamour lighting and sound production.", icon: faBullhorn },
    { title:"Choreography", description:"Professional ramp-walk training and show direction.", icon: faMusic },
    { title:"PR & Media", description:"Managing media coverage and fashion influencers.", icon: faGlobe },
  ],
  whyChoose: [
    { title:"Stylish Concepts", description:"Unique and creative fashion show themes.", icon: faPalette },
    { title:"Professional Models", description:"Direct access to top-tier fashion talent.", icon: faUsers },
    { title:"Premium Production", description:"World-class ramp, sound, and lighting quality.", icon: faBuilding },
  ],
  gallery: [
    { title:"Runway Shows", image: FashionShowsImg },
    { title:"Bridal Expos", image: FashionShowsImg },
    { title:"Designer Nights", image: FashionShowsImg },
    { title:"Backstage Glitz", image: FashionShowsImg },
  ],
  packages: [
    { title:"Standard", price:"₹2L+", features: ["Basic Ramp","Local Models","Sound"], highlighted: false },
    { title:"Premium", price:"₹6L+", features: ["Custom Ramp","Pro Models","LED Wall"], highlighted: true },
    { title:"Elite", price:"Custom", features: ["Designer Showcase","Celebrity Guests","National Media"], highlighted: false },
  ],
  process: [
    { title:"Consultation", description:"Understanding the designer's vision and collection theme." },
    { title:"Show Design", description:"Planning ramp layout, lighting, and choreography." },
    { title:"Model Casting", description:"Selecting and training models for the runway." },
    { title:"Live Show", description:"Professionally managing the entire high-fashion event." },
  ],
  testimonials: [
    { name:"Designer", review:"The show was spectacular. The lighting and ramp were perfect!", rating: 5 },
  ],
  faqs: [
    { question:"Do you organize fashion shows in Vizag?", answer:"Yes, we specialize in fashion shows, designer showcases, and lifestyle events." },
    { question:"Can you provide models and makeup artists?", answer:"Absolutely. We provide professional models, choreographers, and makeup teams." },
    { question:"Do you handle ramp fabrication?", answer:"Yes, we design and build customized ramps and stage setups for fashion shows." },
    { question:"Do you offer affordable packages?", answer:"Yes, we provide flexible packages for designers and fashion brands." },
  ],
  finalCTA: {
    title:"Host a Glamorous Fashion Show",
    text:"Let Leor Media transform your collection reveal into a visually espectacular and professionally managed fashion experience.",
    phones: ["+91-9666643456","+91-9542248999"],
    ctas: [
      { text:"WhatsApp Us", link:"https://wa.me/919666643456", icon:"whatsapp" },
      { text:"Get Free Quote", link:"/get-quotation", icon:"quote" }
    ]
  }
};

export const DestinationWeddingData = {
  SeoName: { seotitle: "destination-wedding" },
  coverimage: DestinationWeddingImg,
  title: "Destination Wedding Planning Services - Leor Media",
  subtitle: "Creating unforgettable destination weddings with stunning venues, personalized experiences, luxury décor, seamless planning, and flawless execution.",
  hero: {
    title: "Luxury Destination Wedding Planning Services",
    subtitle: "Creating unforgettable destination weddings with stunning venues, personalized experiences, luxury décor, seamless planning, and flawless execution.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Creating Extraordinary Weddings in Dream Destinations",
    text: "A destination wedding is more than a celebration—it's a once-in-a-lifetime experience filled with romance, luxury, breathtaking locations, and unforgettable memories. Whether you dream of exchanging vows by the beach, amidst scenic mountains, in a luxury resort, or at a heritage venue, every detail deserves perfection.",
    details: "At Leor Media, we specialize in destination wedding planning and management, creating elegant and personalized wedding experiences in some of the most beautiful destinations. From intimate ceremonies to grand luxury celebrations, our team handles every aspect of wedding planning, allowing you and your loved ones to enjoy every moment stress-free."
  },
  services: [
    { title: "Destination Selection & Venue Management", description: "Finding the perfect location is the foundation of a successful destination wedding. We help you choose stunning wedding destinations, luxury resorts, beachfront venues, heritage properties, and premium event spaces that match your dream wedding vision.", icon: faBriefcase },
    { title: "Wedding Planning & Coordination", description: "Our experienced wedding planners manage every detail, from initial planning and budgeting to guest coordination and event execution, ensuring a seamless celebration from start to finish.", icon: faBriefcase },
    { title: "Luxury Wedding Décor & Design", description: "Transform your wedding venue with breathtaking floral arrangements, elegant mandaps, customized themes, designer stages, ambient lighting, and stunning décor concepts that create unforgettable visual experiences.", icon: faPalette },
    { title: "Guest Hospitality & Travel Management", description: "We coordinate guest accommodations, transportation, airport transfers, welcome kits, hospitality services, and travel logistics to ensure a comfortable and enjoyable experience for every guest.", icon: faBriefcase },
    { title: "Wedding Entertainment & Celebrations", description: "From sangeet nights and cocktail parties to live music, celebrity performances, DJs, cultural programs, and grand receptions, we curate unforgettable entertainment experiences.", icon: faSmile },
    { title: "Photography & Cinematic Videography", description: "Capture every precious moment with professional wedding photography, cinematic films, drone coverage, pre-wedding shoots, and luxury wedding storytelling services.", icon: faCamera },
    { title: "Catering & Wedding Experiences", description: "We arrange exceptional catering services, customized menus, themed dining experiences, and premium hospitality that delight guests throughout the wedding celebrations.", icon: faUtensils }
  ],
  whyChoose: [
    { title: "Professional Destination Wedding Planners", description: "", icon: faUserTie },
    { title: "Luxury Wedding Planning Expertise", description: "", icon: faCheckCircle },
    { title: "Customized Wedding Experiences", description: "", icon: faCheckCircle },
    { title: "Premium Venue & Resort Coordination", description: "", icon: faBriefcase },
    { title: "Complete Guest Management Services", description: "", icon: faBriefcase },
    { title: "Creative Wedding Décor Solutions", description: "", icon: faCheckCircle },
    { title: "End-to-End Event Execution", description: "", icon: faCheckCircle },
    { title: "Dedicated Wedding Coordination Team", description: "", icon: faBriefcase }
  ],
  gallery: [
    { title: "Destination Wedding Planning Services", image: DestinationWeddingImg },
    { title: "Grand Celebrations", image: DestinationWeddingImg },
    { title: "Thematic Styling", image: DestinationWeddingImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book destination wedding planning services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Turning Your Dream Wedding into Reality",
    text: "At Leor Media, we believe every couple deserves a wedding experience that reflects their love story. Our expertise in destination wedding planning, luxury event management, and personalized experiences helps create celebrations that are elegant, memorable, and truly extraordinary. Whether you're planning a beachfront wedding, a luxury resort celebration, or a grand destination wedding with family and friends, Leor Media delivers exceptional Destination Wedding Services that transform your dream into reality.",
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
  title: "Ring Ceremony Planning Services - Leor Media",
  subtitle: "Creating elegant engagement celebrations with stunning décor, personalized planning, unforgettable entertainment, and seamless event execution.",
  hero: {
    title: "Professional Ring Ceremony Planning Services",
    subtitle: "Creating elegant engagement celebrations with stunning décor, personalized planning, unforgettable entertainment, and seamless event execution.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Celebrating the Beginning of a Beautiful Journey",
    text: "A ring ceremony is one of the most cherished milestones in a couple's journey toward marriage. It is a special occasion where two families come together to celebrate love, commitment, and the promise of a wonderful future. Every ring ceremony deserves elegance, joy, and flawless execution to create memories that last a lifetime.",
    details: "At Leor Media, we specialize in professional ring ceremony planning and management services, transforming engagement celebrations into unforgettable experiences. From intimate family gatherings to grand engagement events, we handle every detail with creativity, precision, and care."
  },
  services: [
    { title: "Personalized Event Planning", description: "Every couple has a unique love story. Our team works closely with you to understand your vision, preferences, traditions, and expectations to create a truly personalized ring ceremony experience.", icon: faCheckCircle },
    { title: "Elegant Stage & Venue Decoration", description: "Create a magical atmosphere with luxurious stage designs, floral arrangements, themed décor, romantic lighting, entrance setups, and customized engagement backdrops.", icon: faBriefcase },
    { title: "Theme-Based Ring Ceremonies", description: "Whether you prefer a traditional, modern, royal, floral, luxury, or destination-inspired engagement celebration, we design unique themes that reflect your personality and style.", icon: faScroll },
    { title: "Entertainment & Live Performances", description: "Enhance the celebration with live music, DJs, dance performances, celebrity appearances, cultural programs, emcee services, and entertainment experiences that keep guests engaged.", icon: faMusic },
    { title: "Guest Management & Hospitality", description: "From invitation coordination and guest assistance to seating arrangements, welcome services, catering support, and hospitality management, we ensure a smooth experience for every guest.", icon: faBriefcase },
    { title: "Photography & Cinematic Videography", description: "Capture every precious moment with professional photography, candid shoots, cinematic videography, drone coverage, and engagement highlight films.", icon: faCamera },
    { title: "Catering & Celebration Experiences", description: "Delight your guests with exceptional catering services, customized menus, dessert counters, live food stations, and premium dining experiences.", icon: faUtensils }
  ],
  whyChoose: [
    { title: "Professional Engagement & Ring Ceremony Planners", description: "", icon: faSmile },
    { title: "Creative Theme & Décor Concepts", description: "", icon: faCheckCircle },
    { title: "Complete Event Planning Solutions", description: "", icon: faCheckCircle },
    { title: "Luxury Stage & Floral Decorations", description: "", icon: faPalette },
    { title: "Personalized Couple-Centric Experiences", description: "", icon: faCheckCircle },
    { title: "Expert Guest Management Services", description: "", icon: faBriefcase },
    { title: "Professional Photography & Entertainment Coordination", description: "", icon: faBriefcase },
    { title: "Seamless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Ring Ceremony Planning Services", image: RingCeremonyImg },
    { title: "Grand Celebrations", image: RingCeremonyImg },
    { title: "Thematic Styling", image: RingCeremonyImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book ring ceremony planning services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional ring ceremony planning services services.",
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
  title: "Reception Event Planning Services - Leor Media",
  subtitle: "Creating elegant wedding receptions with stunning décor, exceptional hospitality, unforgettable entertainment, and flawless event execution.",
  hero: {
    title: "Luxury Reception Planning Services",
    subtitle: "Creating elegant wedding receptions with stunning décor, exceptional hospitality, unforgettable entertainment, and flawless event execution.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Creating Elegant Wedding Receptions That Leave Lasting Memories",
    text: "A wedding reception is the grand celebration of love, happiness, and new beginnings. It is a special occasion where family, friends, and loved ones gather to celebrate the couple's journey and create unforgettable memories together. Every reception deserves beautiful décor, exceptional hospitality, entertainment, and flawless event execution.",
    details: "At Leor Media, we specialize in professional Reception Event Planning and Management Services, creating extraordinary wedding receptions that reflect your style, personality, and vision. Whether you desire an intimate gathering or a grand luxury celebration, our experienced team ensures every detail is planned to perfection."
  },
  services: [
    { title: "Personalized Reception Planning", description: "Every celebration is unique. We work closely with couples and families to understand their preferences, traditions, themes, and expectations, creating a customized reception experience that perfectly reflects their vision.", icon: faGlassCheers },
    { title: "Luxury Venue & Stage Decoration", description: "Transform your reception venue with stunning stage designs, elegant floral arrangements, premium lighting, LED backdrops, entrance décor, and sophisticated wedding themes that create a breathtaking atmosphere.", icon: faBriefcase },
    { title: "Theme-Based Reception Events", description: "From royal and luxury themes to contemporary, floral, destination-inspired, and cultural celebrations, we create unique reception concepts that enhance the beauty of your special day.", icon: faGlassCheers },
    { title: "Entertainment & Live Performances", description: "Keep your guests engaged with live music, DJs, celebrity appearances, dance performances, emcee services, cultural entertainment, and interactive experiences that make the celebration unforgettable.", icon: faMusic },
    { title: "Guest Management & Hospitality", description: "We manage guest invitations, welcome services, seating arrangements, VIP coordination, accommodation support, transportation, and hospitality services to ensure a smooth experience for every attendee.", icon: faBriefcase },
    { title: "Photography & Cinematic Videography", description: "Capture every smile, celebration, and heartfelt moment with professional photography, candid shoots, cinematic videography, drone coverage, and wedding highlight films.", icon: faCamera },
    { title: "Catering & Dining Experiences", description: "Provide your guests with exceptional culinary experiences through customized menus, premium catering services, live food counters, dessert stations, and luxury dining arrangements.", icon: faUtensils }
  ],
  whyChoose: [
    { title: "Professional Reception Event Planners", description: "", icon: faGlassCheers },
    { title: "Luxury Wedding Reception Expertise", description: "", icon: faGlassCheers },
    { title: "Creative Décor & Theme Concepts", description: "", icon: faCheckCircle },
    { title: "Complete Guest Management Solutions", description: "", icon: faBriefcase },
    { title: "Premium Entertainment Coordination", description: "", icon: faBriefcase },
    { title: "Professional Photography & Videography Services", description: "", icon: faCamera },
    { title: "Personalized Event Planning", description: "", icon: faCheckCircle },
    { title: "Flawless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Reception Event Planning Services", image: ReceptionsImg },
    { title: "Grand Celebrations", image: ReceptionsImg },
    { title: "Thematic Styling", image: ReceptionsImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book reception event planning services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Turning Your Celebration into an Unforgettable Experience",
    text: "At Leor Media, we understand that a reception is more than an event—it's a celebration of love, family, and togetherness. Our expertise in luxury event planning, décor, entertainment, hospitality, and coordination ensures every reception becomes a remarkable experience filled with joy and elegance. Whether you're planning a lavish wedding reception or an intimate celebration, Leor Media delivers Reception Planning Services that create unforgettable moments and lifelong memories.",
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
  title: "Mehendi Ceremony Planning Services - Leor Media",
  subtitle: "Creating colorful Mehendi celebrations with stunning décor, beautiful traditions, vibrant entertainment, and unforgettable wedding memories.",
  hero: {
    title: "Luxury Mehendi Ceremony Planning Services",
    subtitle: "Creating colorful Mehendi celebrations with stunning décor, beautiful traditions, vibrant entertainment, and unforgettable wedding memories.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Creating Colorful, Joyful & Unforgettable Mehendi Celebrations",
    text: "A Mehendi ceremony is one of the most vibrant and cherished pre-wedding events, filled with laughter, music, dance, traditions, and beautiful memories. It is a celebration where family and friends come together to bless the couple and enjoy the festive spirit before the wedding day.",
    details: "At Leor Media, we specialize in professional Mehendi Ceremony Planning and Management Services, creating stunning celebrations that perfectly blend tradition, elegance, and entertainment. From intimate family gatherings to grand luxury Mehendi events, we ensure every detail is beautifully planned and flawlessly executed."
  },
  services: [
    { title: "Customized Mehendi Theme Planning", description: "Every couple has a unique style and vision. We create personalized Mehendi themes ranging from traditional and floral concepts to royal, bohemian, vibrant, and luxury celebrations.", icon: faCheckCircle },
    { title: "Mehendi Décor & Venue Styling", description: "Transform your venue with colorful floral décor, ethnic backdrops, vibrant seating lounges, decorative umbrellas, customized stages, themed installations, and elegant lighting arrangements.", icon: faBriefcase },
    { title: "Professional Mehendi Artists", description: "We arrange experienced Mehendi artists who create beautiful bridal Mehendi designs, family Mehendi services, guest Mehendi stations, and customized henna artwork.", icon: faCamera },
    { title: "Entertainment & Live Performances", description: "Keep the celebration lively with DJs, dhol artists, live musicians, dance performances, cultural entertainment, emcees, and interactive activities that create unforgettable moments.", icon: faMusic },
    { title: "Guest Management & Hospitality", description: "From guest invitations and welcome arrangements to seating management, refreshments, transportation assistance, and hospitality services, we ensure a seamless experience for everyone.", icon: faBriefcase },
    { title: "Photography & Videography", description: "Capture every joyful moment with professional photography, candid shoots, cinematic videography, drone coverage, and social media-worthy wedding content.", icon: faCamera },
    { title: "Food & Beverage Experiences", description: "Enhance the celebration with customized catering services, live food stations, themed menus, traditional delicacies, mocktail counters, and premium dining experiences.", icon: faUtensils }
  ],
  whyChoose: [
    { title: "Professional Mehendi Ceremony Planners", description: "", icon: faScroll },
    { title: "Creative Theme & Décor Concepts", description: "", icon: faCheckCircle },
    { title: "Luxury Wedding Event Expertise", description: "", icon: faCheckCircle },
    { title: "Professional Mehendi Artist Coordination", description: "", icon: faBriefcase },
    { title: "Complete Guest Management Services", description: "", icon: faBriefcase },
    { title: "Premium Entertainment Solutions", description: "", icon: faSmile },
    { title: "Personalized Wedding Experiences", description: "", icon: faCheckCircle },
    { title: "Flawless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Mehendi Ceremony Planning Services", image: MehendiImg },
    { title: "Grand Celebrations", image: MehendiImg },
    { title: "Thematic Styling", image: MehendiImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book mehendi ceremony planning services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Making Your Mehendi Celebration Truly Special",
    text: "At Leor Media, we believe every Mehendi ceremony should be filled with happiness, color, music, and unforgettable memories. Our expertise in wedding planning, creative décor, entertainment, hospitality, and event management helps create magical celebrations that reflect your personality and traditions. Whether you're planning an intimate Mehendi function or a grand pre-wedding celebration, Leor Media delivers exceptional Mehendi Ceremony Planning Services that make your special day vibrant, joyful, and truly unforgettable.",
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
  title: "Sangeet Ceremony Planning Services - Leor Media",
  subtitle: "Creating unforgettable Sangeet celebrations with spectacular décor, live entertainment, professional choreography, premium hospitality, and flawless event execution.",
  hero: {
    title: "Luxury Sangeet Ceremony Planning Services",
    subtitle: "Creating unforgettable Sangeet celebrations with spectacular décor, live entertainment, professional choreography, premium hospitality, and flawless event execution.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Creating Magical Nights Filled with Music & Memories",
    text: "At Leor Media, we believe a Sangeet ceremony should be a celebration of happiness, togetherness, and unforgettable entertainment. Our expertise in wedding planning, event production, choreography, décor, and hospitality helps create spectacular celebrations that leave lasting impressions on every guest.",
    details: "Whether you're planning a traditional Sangeet function or a glamorous pre-wedding extravaganza, Leor Media delivers exceptional Sangeet ceremony planning services that make your special celebration truly extraordinary."
  },
  services: [
    { title: "Customized Sangeet Theme Planning", description: "Every couple has a unique vision for their celebration. We create personalized Sangeet themes ranging from royal and glamorous setups to Bollywood-inspired, traditional, contemporary, and luxury concepts.", icon: faCheckCircle },
    { title: "Stunning Stage & Venue Decoration", description: "Transform your venue with elegant stage designs, LED backdrops, floral arrangements, thematic décor, ambient lighting, dance floors, and premium event styling that create a spectacular atmosphere.", icon: faBriefcase },
    { title: "Choreography & Dance Performances", description: "Make your Sangeet unforgettable with professional choreography services for couples, families, and friends. We coordinate dance performances, rehearsals, and stage presentations to ensure a memorable show.", icon: faMusic },
    { title: "Live Entertainment & Music", description: "Enhance the celebration with DJs, live bands, celebrity performances, singers, dhol artists, emcees, and interactive entertainment that keeps guests engaged throughout the event.", icon: faMusic },
    { title: "Sound, Lighting & Technical Production", description: "Our advanced production solutions include professional sound systems, LED walls, intelligent lighting, special effects, smoke machines, visual displays, and event technology for a world-class experience.", icon: faMusic },
    { title: "Guest Management & Hospitality", description: "From invitations and welcome arrangements to seating coordination, accommodation support, transportation, and hospitality services, we ensure a seamless experience for all guests.", icon: faBriefcase },
    { title: "Photography & Cinematic Videography", description: "Capture every dance, smile, and celebration with professional photography, candid moments, cinematic wedding films, drone coverage, and social media-ready content.", icon: faCamera },
    { title: "Catering & Food Experiences", description: "Delight your guests with premium catering services, live food stations, customized menus, dessert counters, mocktail bars, and luxury dining experiences.", icon: faUtensils }
  ],
  whyChoose: [
    { title: "Professional Sangeet Event Planners", description: "", icon: faUserTie },
    { title: "Luxury Wedding Celebration Expertise", description: "", icon: faCheckCircle },
    { title: "Creative Theme & Décor Concepts", description: "", icon: faCheckCircle },
    { title: "Professional Choreography Services", description: "", icon: faUserTie },
    { title: "Premium Entertainment Coordination", description: "", icon: faBriefcase },
    { title: "Complete Guest Management Solutions", description: "", icon: faBriefcase },
    { title: "Advanced Event Production Services", description: "", icon: faCheckCircle },
    { title: "Flawless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Sangeet Ceremony Planning Services", image: SangeetImg },
    { title: "Grand Celebrations", image: SangeetImg },
    { title: "Thematic Styling", image: SangeetImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book sangeet ceremony planning services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional sangeet ceremony planning services services.",
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
  title: "Entertainment & Artists Management Services - Leor Media",
  subtitle: "Bringing world-class entertainment, celebrity appearances, live performances, and unforgettable experiences to every event.",
  hero: {
    title: "Professional Entertainment & Artists Management Services",
    subtitle: "Bringing world-class entertainment, celebrity appearances, live performances, and unforgettable experiences to every event.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Creating Unforgettable Events with World-Class Entertainment",
    text: "Entertainment is the heart of every successful event. Whether it's a wedding, corporate gathering, cultural festival, concert, product launch, private celebration, or large-scale public event, exceptional entertainment transforms ordinary occasions into extraordinary experiences.",
    details: "At Leor Media, we specialize in Entertainment & Artists Management Services, providing access to talented performers, renowned artists, celebrity appearances, live entertainers, and customized entertainment solutions that captivate audiences and create lasting memories."
  },
  services: [
    { title: "Celebrity Management & Appearances", description: "Make your event truly memorable with celebrity appearances, guest interactions, brand ambassadors, influencers, and special guest performances that attract attention and create excitement.", icon: faBriefcase },
    { title: "Live Music & Band Performances", description: "Enhance your event with professional singers, live bands, instrumental artists, fusion music groups, and cultural performers who create engaging and memorable experiences.", icon: faMusic },
    { title: "DJ & Music Entertainment", description: "From wedding receptions and sangeet nights to corporate parties and nightlife events, our professional DJs deliver energetic performances tailored to your audience.", icon: faMusic },
    { title: "Dance & Cultural Performances", description: "Bring your event to life with traditional dance groups, cultural performers, Bollywood dance teams, folk artists, and contemporary entertainment acts.", icon: faMusic },
    { title: "Anchors, Emcees & Hosts", description: "Professional anchors and event hosts keep your audience engaged, manage event flow, and create an interactive atmosphere throughout the program.", icon: faMicrophone },
    { title: "Corporate Entertainment Solutions", description: "We provide customized entertainment experiences for conferences, annual day celebrations, employee engagement programs, award functions, product launches, and corporate gatherings.", icon: faSmile },
    { title: "Event Production & Technical Support", description: "Our services include stage production, sound systems, LED walls, intelligent lighting, special effects, visual displays, and technical management to ensure flawless performances.", icon: faCheckCircle }
  ],
  whyChoose: [
    { title: "Professional Artist Management Team", description: "", icon: faBriefcase },
    { title: "Access to Celebrity & Influencer Networks", description: "", icon: faCamera },
    { title: "Customized Entertainment Solutions", description: "", icon: faSmile },
    { title: "Experienced Event Production Specialists", description: "", icon: faCheckCircle },
    { title: "End-to-End Entertainment Coordination", description: "", icon: faBriefcase },
    { title: "Premium Technical Support Services", description: "", icon: faCheckCircle },
    { title: "Wide Range of Performance Options", description: "", icon: faMusic },
    { title: "Seamless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Entertainment & Artists Management Services", image: EntertainmentImg },
    { title: "Grand Celebrations", image: EntertainmentImg },
    { title: "Thematic Styling", image: EntertainmentImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book entertainment & artists management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Turning Every Event into an Extraordinary Experience",
    text: "At Leor Media, we believe great entertainment creates unforgettable memories. Our expertise in artist management, event production, talent coordination, and audience engagement helps deliver exceptional performances that leave a lasting impression. Whether you're planning a wedding, corporate event, festival, product launch, or large public gathering, Leor Media provides professional Entertainment & Artists Management Services that bring energy, excitement, and world-class performances to your event.",
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
  title: "Hospitality Management Services - Leor Media",
  subtitle: "Delivering exceptional guest experiences through personalized hospitality, seamless coordination, premium service, and professional event support.",
  hero: {
    title: "Professional Hospitality Management Services",
    subtitle: "Delivering exceptional guest experiences through personalized hospitality, seamless coordination, premium service, and professional event support.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Professional Hospitality Management Services",
    text: "Delivering exceptional guest experiences through personalized hospitality, seamless coordination, premium service, and professional event support.",
    details: ""
  },
  services: [
    { title: "Guest Reception & Welcome Management", description: "First impressions matter. Our hospitality team professionally manages guest arrivals, welcome desks, registration counters, greeting services, and assistance throughout the event.", icon: faBriefcase },
    { title: "Accommodation & Hotel Coordination", description: "We coordinate hotel bookings, room allocations, guest check-ins, check-outs, and accommodation arrangements to ensure a comfortable stay for attendees and VIP guests.", icon: faBriefcase },
    { title: "VIP Guest Management", description: "Our specialized hospitality team provides personalized assistance for VIPs, celebrities, executives, speakers, and special guests, ensuring premium service and attention to detail.", icon: faBriefcase },
    { title: "Transportation & Travel Assistance", description: "From airport pickups and drop-offs to local transportation, shuttle services, and travel coordination, we manage smooth and hassle-free guest movement.", icon: faBriefcase },
    { title: "Event Registration & Help Desk Services", description: "We organize registration counters, attendee management systems, information desks, and guest support services to enhance event efficiency and attendee satisfaction.", icon: faUsers },
    { title: "Catering & Dining Coordination", description: "We oversee catering arrangements, guest dining experiences, food service management, refreshment counters, and hospitality lounges to ensure high-quality service.", icon: faBriefcase },
    { title: "On-Site Guest Support", description: "Our hospitality professionals provide continuous assistance throughout the event, helping guests with seating, directions, schedules, accommodations, and special requests.", icon: faUsers }
  ],
  whyChoose: [
    { title: "Professional Hospitality Management Team", description: "", icon: faBriefcase },
    { title: "VIP & Celebrity Guest Coordination", description: "", icon: faBriefcase },
    { title: "Personalized Guest Experience Solutions", description: "", icon: faUsers },
    { title: "Complete Travel & Accommodation Support", description: "", icon: faBriefcase },
    { title: "Seamless Event Registration Services", description: "", icon: faUsers },
    { title: "End-to-End Hospitality Planning", description: "", icon: faUtensils },
    { title: "Experienced Event Management Professionals", description: "", icon: faBriefcase },
    { title: "Attention to Every Guest Detail", description: "", icon: faUsers }
  ],
  gallery: [
    { title: "Hospitality Management Services", image: HospitalityImg },
    { title: "Grand Celebrations", image: HospitalityImg },
    { title: "Thematic Styling", image: HospitalityImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book hospitality management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Delivering Exceptional Guest Experiences with Professional Hospitality Solutions",
    text: "Hospitality is one of the most important elements of any successful event. From welcoming guests and managing accommodations to ensuring comfort, convenience, and personalized service, exceptional hospitality creates lasting impressions and enhances the overall event experience. At Leor Media, we specialize in Hospitality Management Services for weddings, corporate events, conferences, exhibitions, destination weddings, cultural programs, VIP gatherings, and large-scale celebrations. Our dedicated hospitality team ensures every guest receives a warm welcome and outstanding service from arrival to departure.",
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
  title: "Guest Management Services - Leor Media",
  subtitle: "Ensuring seamless guest experiences through efficient coordination, personalized support, professional hospitality, and flawless event management.",
  hero: {
    title: "Professional Guest Management Services",
    subtitle: "Ensuring seamless guest experiences through efficient coordination, personalized support, professional hospitality, and flawless event management.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Professional Guest Management Services",
    text: "Ensuring seamless guest experiences through efficient coordination, personalized support, professional hospitality, and flawless event management.",
    details: ""
  },
  services: [
    { title: "Invitation & RSVP Management", description: "We assist with guest list planning, invitation distribution, RSVP tracking, attendance confirmations, and communication management to ensure organized event preparation.", icon: faBriefcase },
    { title: "Guest Registration & Check-In Services", description: "Our team manages registration desks, attendee verification, welcome counters, digital check-ins, badge distribution, and guest assistance for a hassle-free arrival experience.", icon: faUsers },
    { title: "Welcome & Reception Management", description: "Create a positive first impression with professional guest reception services, welcome assistance, information desks, and personalized guest support throughout the event.", icon: faBriefcase },
    { title: "VIP Guest Coordination", description: "We provide specialized services for VIP guests, executives, celebrities, speakers, and distinguished attendees, ensuring personalized attention and seamless coordination.", icon: faBriefcase },
    { title: "Accommodation & Travel Assistance", description: "From hotel reservations and room allocations to airport transfers and transportation arrangements, we ensure comfortable travel experiences for guests attending your event.", icon: faBriefcase },
    { title: "Seating & Venue Coordination", description: "Our guest management specialists oversee seating plans, venue navigation, guest flow management, and special seating requirements to ensure smooth event operations.", icon: faBriefcase },
    { title: "On-Site Guest Support", description: "Dedicated guest relations teams remain available throughout the event to assist attendees, answer queries, resolve concerns, and enhance the overall guest experience.", icon: faUsers }
  ],
  whyChoose: [
    { title: "Professional Guest Management Experts", description: "", icon: faBriefcase },
    { title: "Personalized Guest Experience Solutions", description: "", icon: faUsers },
    { title: "VIP & Executive Guest Coordination", description: "", icon: faBriefcase },
    { title: "Seamless Registration & Check-In Services", description: "", icon: faUsers },
    { title: "Travel & Accommodation Management", description: "", icon: faBriefcase },
    { title: "Dedicated Event Support Team", description: "", icon: faCheckCircle },
    { title: "End-to-End Guest Handling", description: "", icon: faUsers },
    { title: "Flawless Event Coordination", description: "", icon: faBriefcase }
  ],
  gallery: [
    { title: "Guest Management Services", image: GuestManagementImg },
    { title: "Grand Celebrations", image: GuestManagementImg },
    { title: "Thematic Styling", image: GuestManagementImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book guest management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Delivering Seamless Guest Experiences from Invitation to Departure",
    text: "A successful event is measured not only by its décor, entertainment, or venue but also by the experience of its guests. Efficient guest management ensures that every attendee feels welcomed, comfortable, valued, and well-informed throughout the event journey. At Leor Media, we specialize in professional Guest Management Services for weddings, corporate events, conferences, exhibitions, destination weddings, award ceremonies, product launches, and large-scale celebrations. Our dedicated team manages every guest-related detail, ensuring a smooth and memorable experience from start to finish.",
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
  title: "Photography & Videography Services - Leor Media",
  subtitle: "Capturing life's most important moments through stunning photography, cinematic videography, creative storytelling, and unforgettable visual experiences.",
  hero: {
    title: "Professional Photography & Videography Services",
    subtitle: "Capturing life's most important moments through stunning photography, cinematic videography, creative storytelling, and unforgettable visual experiences.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Capturing Every Moment, Preserving Every Memory",
    text: "Every event tells a unique story filled with emotions, celebrations, and unforgettable moments. Professional photography and videography ensure that these precious memories are beautifully captured and preserved for a lifetime.",
    details: "At Leor Media, we provide premium Photography & Videography Services for weddings, corporate events, destination weddings, product launches, conferences, cultural events, private celebrations, and large-scale functions. Our experienced photographers, cinematographers, and creative editors transform every moment into timeless memories through stunning visuals and cinematic storytelling."
  },
  services: [
    { title: "Professional Event Photography", description: "Our photographers capture candid emotions, key moments, guest interactions, stage events, décor details, and memorable highlights that tell the complete story of your event.", icon: faCamera },
    { title: "Cinematic Videography", description: "We create high-quality cinematic films that showcase the emotions, excitement, and atmosphere of your celebration through professional storytelling techniques.", icon: faCamera },
    { title: "Wedding Photography & Films", description: "From pre-wedding shoots and engagement ceremonies to weddings, receptions, mehendi, and sangeet celebrations, we create stunning visual memories that couples cherish forever.", icon: faCamera },
    { title: "Corporate Event Coverage", description: "Our team provides professional photography and videography services for conferences, seminars, product launches, award functions, corporate meetings, and business events.", icon: faBuilding },
    { title: "Drone Photography & Aerial Cinematography", description: "Capture breathtaking aerial views and unique perspectives with advanced drone photography and videography that add a cinematic touch to your event coverage.", icon: faCamera },
    { title: "Live Streaming Services", description: "Expand your event reach with professional live-streaming solutions for weddings, conferences, seminars, religious events, and corporate programs.", icon: faCheckCircle },
    { title: "Editing & Post Production", description: "Our creative editing team enhances every image and video through professional color correction, sound enhancement, cinematic editing, visual effects, and highlight reel creation.", icon: faCheckCircle }
  ],
  whyChoose: [
    { title: "Professional Photographers & Videographers", description: "", icon: faCamera },
    { title: "Cinematic Storytelling Expertise", description: "", icon: faCheckCircle },
    { title: "High-Resolution Photography Services", description: "", icon: faCamera },
    { title: "Advanced Drone Coverage", description: "", icon: faCheckCircle },
    { title: "Professional Editing & Post Production", description: "", icon: faUserTie },
    { title: "Creative & Candid Photography Style", description: "", icon: faCamera },
    { title: "Complete Event Coverage Solutions", description: "", icon: faCheckCircle },
    { title: "Customized Photography Packages", description: "", icon: faCamera }
  ],
  gallery: [
    { title: "Photography & Videography Services", image: PhotographyImg },
    { title: "Grand Celebrations", image: PhotographyImg },
    { title: "Thematic Styling", image: PhotographyImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book photography & videography services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Turning Moments into Timeless Memories",
    text: "At Leor Media, we believe every photograph should tell a story and every video should capture emotions that last forever. Our expertise in photography, cinematography, drone coverage, and creative production ensures your special moments are beautifully and professionally documented. Whether you're planning a wedding, corporate event, cultural festival, product launch, or private celebration, Leor Media delivers photography & videography services that preserve every memory with excellence, creativity, and cinematic perfection.",
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
  title: "Theme Décor Services - Leor Media",
  subtitle: "Designing extraordinary event experiences with stunning themes, elegant décor, creative styling, premium floral arrangements, and unforgettable visual concepts.",
  hero: {
    title: "Creative Theme Décor Services",
    subtitle: "Designing extraordinary event experiences with stunning themes, elegant décor, creative styling, premium floral arrangements, and unforgettable visual concepts.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Transforming Events into Extraordinary Experiences Through Creative Décor",
    text: "Every memorable event begins with a captivating atmosphere. The right décor not only enhances the beauty of a venue but also creates a unique experience that reflects your vision, personality, brand, and celebration style.",
    details: "At Leor Media, we specialize in premium Theme Décor Services, designing visually stunning environments for weddings, corporate events, social celebrations, cultural programs, exhibitions, product launches, and private gatherings. Our creative team transforms ordinary spaces into extraordinary experiences through innovative concepts, elegant styling, and flawless execution."
  },
  services: [
    { title: "Customized Theme Design", description: "Every event is unique. Our designers create personalized décor concepts based on your vision, event purpose, color palette, traditions, and style preferences.", icon: faPalette },
    { title: "Wedding Theme Décor", description: "From royal weddings and floral celebrations to luxury destination weddings and traditional ceremonies, we create breathtaking wedding décor experiences that leave lasting impressions.", icon: faCheckCircle },
    { title: "Stage & Backdrop Design", description: "Make your event the center of attention with stunning stage setups, designer backdrops, LED installations, floral walls, custom structures, and premium visual elements.", icon: faPalette },
    { title: "Floral Decoration Services", description: "Enhance the elegance of your event with fresh flower arrangements, floral arches, hanging installations, centerpieces, entrance décor, and customized floral concepts.", icon: faPalette },
    { title: "Corporate Event Décor", description: "We design professional event environments for conferences, product launches, award functions, annual day celebrations, exhibitions, and business gatherings that strengthen brand identity.", icon: faBuilding },
    { title: "Lighting & Ambience Creation", description: "Our décor solutions include ambient lighting, mood lighting, decorative fixtures, LED effects, and creative illumination techniques that elevate the overall event experience.", icon: faCamera },
    { title: "Entrance & Venue Styling", description: "Create unforgettable first impressions with grand entrance designs, welcome zones, photo booths, themed installations, lounge areas, and immersive décor elements.", icon: faBriefcase }
  ],
  whyChoose: [
    { title: "Creative Theme Décor Specialists", description: "", icon: faCheckCircle },
    { title: "Customized Event Design Solutions", description: "", icon: faPalette },
    { title: "Luxury Wedding & Corporate Décor Expertise", description: "", icon: faBuilding },
    { title: "Premium Floral Decoration Services", description: "", icon: faPalette },
    { title: "Innovative Stage & Venue Styling", description: "", icon: faBriefcase },
    { title: "High-Quality Event Production", description: "", icon: faCheckCircle },
    { title: "End-to-End Décor Management", description: "", icon: faBriefcase },
    { title: "Attention to Every Detail", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Theme Décor Services", image: ThemeDecorImg },
    { title: "Grand Celebrations", image: ThemeDecorImg },
    { title: "Thematic Styling", image: ThemeDecorImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book theme décor services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Bringing Your Event Vision to Life",
    text: "At Leor Media, we believe décor is more than decoration—it's an experience that defines the mood, atmosphere, and success of an event. Our expertise in creative event styling, floral artistry, lighting design, and theme execution helps transform celebrations into unforgettable visual experiences. Whether you're planning a wedding, corporate gathering, cultural event, exhibition, or private celebration, Leor Media delivers Theme Décor Services that combine creativity, elegance, and excellence to make your event truly remarkable.",
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
  title: "Birthday Party Planning Services - Leor Media",
  subtitle: "Creating fun-filled birthday celebrations with creative themes, beautiful décor, exciting entertainment, and unforgettable memories for all ages.",
  hero: {
    title: "Professional Birthday Party Planning Services",
    subtitle: "Creating fun-filled birthday celebrations with creative themes, beautiful décor, exciting entertainment, and unforgettable memories for all ages.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Creating Memorable Birthday Celebrations Filled with Joy & Fun",
    text: "A birthday is more than just a date on the calendar—it's a special occasion to celebrate life, happiness, and unforgettable moments with family and friends. Whether it's a child's first birthday, a sweet sixteen celebration, a milestone birthday, or a grand surprise party, every birthday deserves a unique and memorable experience.",
    details: "At Leor Media, we specialize in Birthday Party Planning and Management Services, creating fun-filled, creative, and beautifully organized celebrations for all age groups. From intimate family gatherings to extravagant birthday events, we handle every detail to ensure a stress-free and unforgettable celebration."
  },
  services: [
    { title: "Customized Birthday Themes", description: "Every birthday celebration is unique. We create personalized party themes based on your interests, favorite characters, colors, hobbies, and event vision, making every celebration truly special.", icon: faCakeCandles },
    { title: "Creative Venue Decoration", description: "Transform your party venue with stunning balloon decorations, themed backdrops, floral arrangements, entrance décor, table styling, photo booths, and creative event setups.", icon: faBriefcase },
    { title: "Kids Birthday Party Planning", description: "We organize exciting birthday celebrations for children with cartoon themes, games, magic shows, entertainers, fun activities, mascots, and interactive experiences that keep kids engaged and happy.", icon: faCakeCandles },
    { title: "Entertainment & Activities", description: "Make your celebration unforgettable with DJs, live music, games, emcees, dance performances, magicians, artists, performers, and customized entertainment programs.", icon: faSmile },
    { title: "Catering & Food Arrangements", description: "Delight your guests with customized menus, themed food counters, birthday cakes, dessert stations, snacks, beverages, and complete catering services.", icon: faUtensils },
    { title: "Photography & Videography", description: "Capture every smile and precious moment with professional photography, candid shoots, cinematic videos, drone coverage, and social media-ready event highlights.", icon: faCamera },
    { title: "Guest Management & Event Coordination", description: "From invitations and RSVP management to guest assistance and on-site coordination, our team ensures a smooth and enjoyable experience for everyone.", icon: faBriefcase }
  ],
  whyChoose: [
    { title: "Professional Birthday Party Planners", description: "", icon: faCakeCandles },
    { title: "Creative Theme & Decoration Concepts", description: "", icon: faPalette },
    { title: "Customized Event Solutions", description: "", icon: faCheckCircle },
    { title: "Fun-Filled Entertainment Programs", description: "", icon: faSmile },
    { title: "Complete Event Coordination", description: "", icon: faBriefcase },
    { title: "Professional Photography & Videography", description: "", icon: faCamera },
    { title: "Personalized Guest Experiences", description: "", icon: faUsers },
    { title: "Stress-Free Event Management", description: "", icon: faBriefcase }
  ],
  gallery: [
    { title: "Birthday Party Planning Services", image: BirthdayPartiesImg },
    { title: "Grand Celebrations", image: BirthdayPartiesImg },
    { title: "Thematic Styling", image: BirthdayPartiesImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book birthday party planning services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Turning Birthdays into Beautiful Memories",
    text: "At Leor Media, we believe every birthday should be celebrated in a special way. Our creativity, attention to detail, and passion for event planning help create joyful experiences that bring people together and create lasting memories. Whether you're planning a fun kids' birthday party, an elegant family celebration, or a grand birthday event, Leor Media delivers Birthday Party Planning Services that make every moment exciting, memorable, and truly extraordinary.",
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
  title: "Personal Celebrations Planning Services - Leor Media",
  subtitle: "Creating memorable celebrations for life's special moments with personalized planning, creative décor, exceptional hospitality, and flawless event execution.",
  hero: {
    title: "Professional Personal Celebrations Planning Services",
    subtitle: "Creating memorable celebrations for life's special moments with personalized planning, creative décor, exceptional hospitality, and flawless event execution.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Celebrating Life's Most Precious Moments",
    text: "At Leor Media, we believe every milestone deserves a memorable celebration. Our expertise in event planning, décor, entertainment, hospitality, and coordination helps create joyful experiences that leave lasting impressions on you and your guests.",
    details: "Whether it's a birthday, anniversary, family gathering, or any special occasion, Leor Media delivers Personal Celebration Planning Services that turn ordinary moments into extraordinary memories."
  },
  services: [
    { title: "Customized Event Planning", description: "Every celebration is unique. We work closely with you to understand your preferences, theme ideas, budget, and expectations to create a personalized event experience.", icon: faCheckCircle },
    { title: "Theme-Based Decorations", description: "Our creative décor team designs beautiful event setups with customized themes, elegant floral arrangements, lighting concepts, stage décor, entrance styling, and photo-worthy backdrops.", icon: faPalette },
    { title: "Birthday & Anniversary Celebrations", description: "From children's birthdays and milestone birthdays to wedding anniversaries and family celebrations, we create joyful events that bring loved ones together.", icon: faCakeCandles },
    { title: "Surprise Parties & Special Events", description: "Make your special moments even more memorable with professionally planned surprise parties, achievement celebrations, retirement functions, reunions, and personalized gatherings.", icon: faCheckCircle },
    { title: "Entertainment & Activities", description: "Keep your guests engaged with live music, DJs, performers, games, interactive activities, emcees, cultural programs, and customized entertainment options.", icon: faSmile },
    { title: "Photography & Videography", description: "Capture every smile, emotion, and celebration through professional photography, cinematic videography, candid moments, and high-quality event coverage.", icon: faCamera },
    { title: "Catering & Hospitality", description: "We coordinate delicious catering services, customized menus, guest hospitality, refreshments, and dining experiences that complement your event perfectly.", icon: faUtensils },
    { title: "Guest Management & Event Coordination", description: "From invitations and RSVP tracking to guest assistance and on-site coordination, our team ensures a smooth and enjoyable experience for everyone.", icon: faBriefcase }
  ],
  whyChoose: [
    { title: "Professional Event Planning Team", description: "", icon: faUserTie },
    { title: "Personalized Celebration Experiences", description: "", icon: faCheckCircle },
    { title: "Creative Theme & Décor Concepts", description: "", icon: faCheckCircle },
    { title: "Complete Event Management Solutions", description: "", icon: faBriefcase },
    { title: "Premium Entertainment Services", description: "", icon: faSmile },
    { title: "Professional Photography & Videography", description: "", icon: faCamera },
    { title: "Customized Packages for Every Occasion", description: "", icon: faCheckCircle },
    { title: "Seamless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Personal Celebrations Planning Services", image: PersonalCelebrationsImg },
    { title: "Grand Celebrations", image: PersonalCelebrationsImg },
    { title: "Thematic Styling", image: PersonalCelebrationsImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book personal celebrations planning services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Turning Life’s Special Moments into Unforgettable Celebrations",
    text: "Life is filled with precious milestones worth celebrating. From birthdays and anniversaries to family gatherings, milestone achievements, surprise parties, and special occasions, every celebration deserves thoughtful planning and memorable experiences. At Leor Media, we specialize in Personal Celebrations Planning and Management Services, creating unique and meaningful events that reflect your personality, style, and vision. Whether you're planning an intimate gathering or a grand celebration, our experienced team ensures every detail is handled with creativity, professionalism, and care.",
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
  title: "Product Launch Event Management Services - Leor Media",
  subtitle: "Creating powerful product launch experiences that generate excitement, maximize brand visibility, engage audiences, and drive business growth.",
  hero: {
    title: "Professional Product Launch Event Management Services",
    subtitle: "Creating powerful product launch experiences that generate excitement, maximize brand visibility, engage audiences, and drive business growth.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "# product-launches",
    text: "Professional Product Launch Event Management Services",
    details: "Creating powerful product launch experiences that generate excitement, maximize brand visibility, engage audiences, and drive business growth."
  },
  services: [
    { title: "Strategic Launch Planning", description: "Every successful launch begins with a strong strategy. Our team develops customized event concepts, launch plans, timelines, and promotional activities aligned with your business objectives.", icon: faCheckCircle },
    { title: "Venue Selection & Event Setup", description: "We help identify and transform the perfect venue for your launch event, ensuring it matches your brand identity, audience expectations, and event goals.", icon: faBriefcase },
    { title: "Stage Design & Brand Experience", description: "Create a memorable first impression with premium stage setups, product display zones, branded installations, LED screens, interactive experiences, and immersive event environments.", icon: faPalette },
    { title: "Product Unveiling & Demonstrations", description: "Showcase your product through engaging presentations, live demonstrations, interactive sessions, and impactful launch moments designed to capture audience attention.", icon: faCheckCircle },
    { title: "Media & Press Management", description: "We coordinate media invitations, press interactions, journalist engagement, photography coverage, and public relations support to maximize event exposure.", icon: faBriefcase },
    { title: "Celebrity & Influencer Engagement", description: "Boost visibility and credibility through celebrity appearances, influencers, brand ambassadors, keynote speakers, and industry experts who amplify your launch reach.", icon: faCamera },
    { title: "Audio Visual & Technical Production", description: "Our advanced event production services include LED walls, projection mapping, sound systems, lighting design, live streaming, and technical support for flawless presentations.", icon: faMusic },
    { title: "Guest Management & Hospitality", description: "We manage registrations, invitations, VIP coordination, attendee experiences, hospitality services, and on-site support to ensure a professional event atmosphere.", icon: faBriefcase }
  ],
  whyChoose: [
    { title: "Professional Product Launch Experts", description: "", icon: faUserTie },
    { title: "Creative Brand Activation Strategies", description: "", icon: faBullseye },
    { title: "End-to-End Event Management", description: "", icon: faBriefcase },
    { title: "Advanced Event Production Solutions", description: "", icon: faCheckCircle },
    { title: "Media & Influencer Coordination", description: "", icon: faBriefcase },
    { title: "Customized Launch Experiences", description: "", icon: faCheckCircle },
    { title: "Corporate Event Management Expertise", description: "", icon: faBriefcase },
    { title: "Flawless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Product Launch Event Management Services", image: ProductLaunchesImg },
    { title: "Grand Celebrations", image: ProductLaunchesImg },
    { title: "Thematic Styling", image: ProductLaunchesImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book product launch event management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional product launch event management services services.",
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
  subtitle: "Delivering extraordinary live entertainment experiences with world-class production, artist management, audience engagement, and flawless event execution.",
  hero: {
    title: "Professional Concerts & Gigs Management Services",
    subtitle: "Delivering extraordinary live entertainment experiences with world-class production, artist management, audience engagement, and flawless event execution.",
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
    { title: "Stage & AV Production", description: "Premium stage, LED walls, concert sound and lighting.", icon: faShapes },
    { title: "Crowd Control", description: "Strategic barricading and security protocols.", icon: faUsers },
    { title: "Ticketing & Gates", description: "Seamless ticket sales and venue entry management.", icon: faCheckCircle }
  ],
  whyChoose: [
    { title: "Technical Perfection", description: "Flawless sound, visual, and stage production.", icon: faShapes },
    { title: "Star Network", description: "Direct booking of national and international artists.", icon: faUsers },
    { title: "Crowd Safety", description: "Strict safety protocols for thousands of attendees.", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Live Concerts", image: ConcertAndGigsImg },
    { title: "Outdoor Music Festivals", image: ConcertAndGigsImg },
    { title: "Live Gigs", image: ConcertAndGigsImg }
  ],
  packages: [
    { title: "Standard Gig", price: "₹2L+", features: ["Sound & Light", "Local Artists", "Basic Stage"], highlighted: false },
    { title: "Mega Concert", price: "Custom", features: ["Line Array Sound", "A-List Artists", "Full Production", "LED Setup"], highlighted: true }
  ],
  process: [
    { title: "Concept", description: "Defining the scale, artists, and budget." },
    { title: "Artist Booking", description: "Securing contracts and travel requirements." },
    { title: "Technical Setup", description: "Fabricating stage, sound checks, and light designs." },
    { title: "Execution", description: "Managing the live performance and gates." }
  ],
  finalCTA: {
    title: "Plan Your Next Live Music Event with Leor Media",
    text: "Let Leor Media manage your concert or live gig with professional execution and world-class technical production.",
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
  title: "Award Night Event Management Services - Leor Media",
  subtitle: "Creating prestigious award ceremonies that celebrate excellence, recognize achievements, inspire success, and deliver unforgettable guest experiences.",
  hero: {
    title: "Professional Award Night Event Management Services",
    subtitle: "Creating prestigious award ceremonies that celebrate excellence, recognize achievements, inspire success, and deliver unforgettable guest experiences.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Celebrating Excellence, Achievements & Success in Grand Style",
    text: "An award night is more than just a ceremony—it's a celebration of hard work, dedication, achievements, and outstanding performance. Whether recognizing employees, business leaders, industry professionals, students, artists, or organizations, a well-planned award ceremony creates a memorable experience that inspires, motivates, and strengthens relationships.",
    details: "At Leor Media, we specialize in award night event management services, delivering elegant, engaging, and professionally managed recognition events. From corporate award functions and business excellence awards to educational ceremonies and entertainment industry events, we create extraordinary experiences that honor success with style and sophistication."
  },
  services: [
    { title: "Strategic Event Planning", description: "Every successful award night begins with careful planning. Our team develops customized event concepts, award categories, show flow, stage programs, guest experiences, and event timelines that align with your objectives.", icon: faCheckCircle },
    { title: "Venue Selection & Event Setup", description: "We help select the ideal venue and transform it into a prestigious award ceremony environment with elegant décor, branding elements, premium seating arrangements, and professional event infrastructure.", icon: faBriefcase },
    { title: "Stage Design & Award Presentation Setup", description: "Create a grand atmosphere with stunning stage designs, LED backdrops, award presentation areas, custom branding, red carpet setups, and immersive visual experiences.", icon: faCamera },
    { title: "Audio Visual & Technical Production", description: "Our advanced event production services include LED screens, sound systems, intelligent lighting, projection technology, live streaming, and technical support to ensure a world-class presentation experience.", icon: faMusic },
    { title: "Celebrity Hosts & Entertainment", description: "Enhance audience engagement with professional anchors, celebrity hosts, entertainers, live music performances, dance shows, and interactive event segments.", icon: faCamera },
    { title: "Award Coordination & Ceremony Management", description: "We manage award categories, winner announcements, trophy distribution, stage coordination, scripting, rehearsals, and overall ceremony flow to ensure a seamless experience.", icon: faBriefcase },
    { title: "Guest Management & Hospitality", description: "From invitations and registrations to VIP handling, hospitality services, accommodation support, and guest assistance, we provide exceptional attendee experiences.", icon: faBriefcase },
    { title: "Photography & Videography", description: "Capture every achievement and memorable moment with professional photography, cinematic videography, drone coverage, highlight reels, and media-ready event content.", icon: faCamera }
  ],
  whyChoose: [
    { title: "Professional Award Night Organizers", description: "", icon: faBriefcase },
    { title: "Creative Event Concepts & Production", description: "", icon: faCheckCircle },
    { title: "Elegant Stage & Décor Design", description: "", icon: faPalette },
    { title: "Celebrity & Host Management", description: "", icon: faBriefcase },
    { title: "Advanced Audio Visual Solutions", description: "", icon: faMusic },
    { title: "End-to-End Event Coordination", description: "", icon: faBriefcase },
    { title: "Premium Guest Management Services", description: "", icon: faBriefcase },
    { title: "Flawless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Award Night Event Management Services", image: FashionShowsImg },
    { title: "Grand Celebrations", image: FashionShowsImg },
    { title: "Thematic Styling", image: FashionShowsImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book award night event management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional award night event management services services.",
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
  title: "Carnival Event Management Services - Leor Media",
  subtitle: "Creating exciting carnival experiences with fun games, live entertainment, vibrant décor, interactive activities, and unforgettable moments for all ages.",
  hero: {
    title: "Professional Carnival Event Management SPervices",
    subtitle: "Creating exciting carnival experiences with fun games, live entertainment, vibrant décor, interactive activities, and unforgettable moments for all ages.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Professional Carnival Event Management SPervices",
    text: "Creating exciting carnival experiences with fun games, live entertainment, vibrant décor, interactive activities, and unforgettable moments for all ages.",
    details: ""
  },
  services: [
    { title: "Carnival Concept & Theme Development", description: "Every successful carnival begins with a creative concept. Our team develops unique themes, activity zones, entertainment programs, and interactive experiences tailored to your audience and objectives.", icon: faCheckCircle },
    { title: "Venue Design & Carnival Décor", description: "Transform any venue into a vibrant carnival destination with colorful decorations, themed installations, entrance arches, game booths, food zones, lighting arrangements, and engaging visual elements.", icon: faBriefcase },
    { title: "Fun Games & Activity Zones", description: "Keep guests entertained with exciting carnival games, children's activities, adventure zones, skill challenges, inflatable attractions, family entertainment areas, and interactive experiences.", icon: faSmile },
    { title: "Live Entertainment & Performances", description: "Create an energetic atmosphere with live music, DJs, dance performances, cultural shows, magicians, mascots, street performers, celebrity appearances, and stage entertainment.", icon: faMusic },
    { title: "Food Stalls & Festival Experiences", description: "Enhance the carnival experience with food courts, snack counters, dessert stations, beverage kiosks, live cooking stalls, and customized culinary experiences.", icon: faUtensils },
    { title: "Crowd Management & Safety Planning", description: "Our professional team manages visitor flow, security coordination, emergency planning, crowd control, and safety measures to ensure a secure and enjoyable event environment.", icon: faBriefcase },
    { title: "Sponsorship & Brand Activation", description: "Maximize event visibility with sponsorship opportunities, promotional activities, experiential marketing zones, brand engagement programs, and audience interaction campaigns.", icon: faBullseye },
    { title: "Photography & Event Coverage", description: "Capture the excitement and energy of your carnival through professional photography, videography, drone coverage, social media content, and live event documentation.", icon: faCamera }
  ],
  whyChoose: [
    { title: "Professional Carnival Event Organizers", description: "", icon: faBriefcase },
    { title: "Creative Theme & Experience Design", description: "", icon: faPalette },
    { title: "Complete Event Production Solutions", description: "", icon: faCheckCircle },
    { title: "Interactive Entertainment Planning", description: "", icon: faSmile },
    { title: "Family-Friendly Activity Management", description: "", icon: faBriefcase },
    { title: "Advanced Event Coordination", description: "", icon: faBriefcase },
    { title: "Crowd Management & Safety Expertise", description: "", icon: faBriefcase },
    { title: "End-to-End Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Carnival Event Management Services", image: PersonalCelebrationsImg },
    { title: "Grand Celebrations", image: PersonalCelebrationsImg },
    { title: "Thematic Styling", image: PersonalCelebrationsImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book carnival event management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional carnival event management services services.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const BrandPromotionalEventsData = {
  SeoName: { seotitle: "brand-promotional-events" },
  coverimage: ProductLaunchesImg,
  title: "Brand Promotional Event Management Services - Leor Media",
  subtitle: "Creating impactful brand experiences through innovative promotions, customer engagement, experiential marketing, and powerful brand activation campaigns.",
  hero: {
    title: "Professional Brand Promotional Event Management Services",
    subtitle: "Creating impactful brand experiences through innovative promotions, customer engagement, experiential marketing, and powerful brand activation campaigns.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Transforming Promotions into Powerful Brand Experiences",
    text: "At Leor Media, we believe successful promotional events should inspire engagement, create meaningful connections, and deliver measurable results. Our expertise in brand activation, experiential marketing, event production, and audience engagement helps businesses stand out in competitive markets.",
    details: "Whether you're launching a new product, increasing brand awareness, promoting a service, or engaging customers through interactive experiences, Leor Media delivers brand promotional event management services that elevate your brand and drive business success."
  },
  services: [
    { title: "Brand Activation Campaigns", description: "We create interactive brand activation experiences that encourage customer participation, increase engagement, and strengthen brand recall through meaningful interactions.", icon: faBullhorn },
    { title: "Product Promotion Events", description: "Launch and promote products through engaging demonstrations, customer experiences, live showcases, and promotional campaigns designed to generate excitement and awareness.", icon: faBullhorn },
    { title: "Mall Activations & Retail Promotions", description: "Connect directly with consumers through shopping mall activations, retail engagement programs, in-store promotions, experiential zones, and interactive brand displays.", icon: faBullhorn },
    { title: "Roadshows & Outdoor Promotions", description: "Take your brand directly to your target audience with professionally managed roadshows, mobile promotions, outdoor activations, and public engagement campaigns.", icon: faBullhorn },
    { title: "Experiential Marketing Events", description: "Create memorable customer experiences through immersive brand environments, interactive installations, product trials, gamification, and experiential marketing strategies.", icon: faBullhorn },
    { title: "Influencer & Celebrity Promotions", description: "Increase visibility through influencer collaborations, celebrity appearances, brand ambassadors, social media promotions, and public engagement activities.", icon: faCamera },
    { title: "Event Production & Branding", description: "Our services include custom stage setups, LED displays, promotional kiosks, branded installations, signage, audio-visual support, and complete event production solutions.", icon: faPalette },
    { title: "Lead Generation & Customer Engagement", description: "Drive business growth through customer interaction programs, lead collection activities, promotional contests, surveys, and audience engagement initiatives.", icon: faSmile }
  ],
  whyChoose: [
    { title: "Professional Brand Promotion Experts", description: "", icon: faBullhorn },
    { title: "Creative Marketing & Activation Strategies", description: "", icon: faBullhorn },
    { title: "Customized Promotional Campaigns", description: "", icon: faBullhorn },
    { title: "End-to-End Event Management", description: "", icon: faBriefcase },
    { title: "Strong Customer Engagement Solutions", description: "", icon: faSmile },
    { title: "Advanced Event Production Services", description: "", icon: faCheckCircle },
    { title: "Experienced Brand Activation Team", description: "", icon: faBullseye },
    { title: "Results-Driven Promotional Events", description: "", icon: faBullhorn }
  ],
  gallery: [
    { title: "Brand Promotional Event Management Services", image: ProductLaunchesImg },
    { title: "Grand Celebrations", image: ProductLaunchesImg },
    { title: "Thematic Styling", image: ProductLaunchesImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book brand promotional event management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional brand promotional event management services services.",
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
  title: "Celebrity & Artist Management Services - Leor Media",
  subtitle: "Connecting events with celebrities, influencers, performers, and talented artists to create memorable experiences and powerful audience engagement.",
  hero: {
    title: "Professional Celebrity & Artist Management Services",
    subtitle: "Connecting events with celebrities, influencers, performers, and talented artists to create memorable experiences and powerful audience engagement.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Professional Celebrity & Artist Management Services",
    text: "Connecting events with celebrities, influencers, performers, and talented artists to create memorable experiences and powerful audience engagement.",
    details: ""
  },
  services: [
    { title: "Celebrity Booking & Coordination", description: "We arrange celebrity appearances for corporate events, product launches, brand activations, award functions, inaugurations, cultural festivals, and special occasions, ensuring professional coordination from start to finish.", icon: faBriefcase },
    { title: "Artist Management Services", description: "Our team manages singers, musicians, DJs, dancers, comedians, motivational speakers, performers, and entertainers to deliver exceptional audience experiences.", icon: faBriefcase },
    { title: "Influencer Marketing & Brand Collaborations", description: "Boost your brand's visibility through influencer partnerships, social media promotions, celebrity endorsements, and strategic brand collaborations that maximize audience reach.", icon: faBullhorn },
    { title: "Live Concerts & Entertainment Shows", description: "From celebrity concerts and live music performances to cultural events and public entertainment programs, we manage every aspect of artist engagement and event execution.", icon: faMusic },
    { title: "Corporate Event Talent Solutions", description: "Enhance business events with keynote speakers, celebrity guests, motivational speakers, business influencers, anchors, and entertainment professionals who add value and engagement.", icon: faBuilding },
    { title: "Hospitality & Logistics Management", description: "We handle travel arrangements, accommodation, artist hospitality, security coordination, backstage management, transportation, and VIP services to ensure a seamless experience.", icon: faBriefcase },
    { title: "Contract & Performance Management", description: "Our professional team oversees artist negotiations, contracts, scheduling, performance requirements, technical arrangements, and event coordination.", icon: faBriefcase },
    { title: "Event Production & Technical Support", description: "We provide complete stage production, sound systems, LED walls, lighting design, visual displays, and technical management to support world-class performances.", icon: faCheckCircle }
  ],
  whyChoose: [
    { title: "Professional Celebrity Management Team", description: "", icon: faBriefcase },
    { title: "Extensive Network of Artists & Performers", description: "", icon: faCamera },
    { title: "Seamless Talent Coordination", description: "", icon: faBriefcase },
    { title: "End-to-End Event Support", description: "", icon: faCheckCircle },
    { title: "Corporate & Entertainment Event Expertise", description: "", icon: faSmile },
    { title: "VIP Hospitality Management", description: "", icon: faBriefcase },
    { title: "Advanced Event Production Solutions", description: "", icon: faCheckCircle },
    { title: "Reliable & Professional Execution", description: "", icon: faUserTie }
  ],
  gallery: [
    { title: "Celebrity & Artist Management Services", image: EntertainmentImg },
    { title: "Grand Celebrations", image: EntertainmentImg },
    { title: "Thematic Styling", image: EntertainmentImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book celebrity & artist management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional celebrity & artist management services services.",
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
  title: "Corporate Seminars Management Services - Leor Media",
  subtitle: "Empowering Businesses Through Professional Knowledge-Sharing Events",
  hero: {
    title: "corporate-seminars",
    subtitle: "Empowering Businesses Through Professional Knowledge-Sharing Events",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Empowering Businesses Through Professional Knowledge-Sharing Events",
    text: "Corporate seminars play a vital role in business growth, employee development, industry networking, and knowledge sharing. Whether it's a leadership seminar, business workshop, training session, educational conference, industry forum, or professional development event, successful execution requires strategic planning, seamless coordination, and a highly professional environment.",
    details: "At Leor Media, we specialize in Corporate Seminars Management Services, delivering impactful seminar experiences that inspire learning, encourage collaboration, and strengthen business relationships. From planning and venue management to technical production and attendee engagement, we ensure every seminar achieves its objectives while providing an exceptional participant experience."
  },
  services: [
    { title: "Strategic Seminar Planning", description: "Every successful seminar begins with a clear strategy. Our team works closely with clients to understand objectives, audience requirements, event goals, and content structure to create a well-organized and impactful seminar experience.", icon: faCheckCircle },
    { title: "Venue Selection & Setup", description: "We help identify and manage the ideal venue based on audience size, seminar format, accessibility, and technical requirements. Our team handles complete venue setup to ensure a professional atmosphere.", icon: faBriefcase },
    { title: "Speaker & Guest Coordination", description: "We coordinate keynote speakers, industry experts, trainers, panelists, moderators, and special guests, ensuring smooth communication and flawless session management.", icon: faBriefcase },
    { title: "Audio Visual & Technical Support", description: "Our advanced event technology solutions include LED screens, projectors, sound systems, microphones, presentation support, video conferencing, live streaming, and technical assistance throughout the event.", icon: faMusic },
    { title: "Registration & Attendee Management", description: "From online registrations and invitations to attendee check-ins and information desks, we manage the entire participant experience with professionalism and efficiency.", icon: faBriefcase },
    { title: "Branding & Event Production", description: "Enhance your seminar's impact with custom branding, stage backdrops, digital displays, signage, presentation screens, and professional event production solutions.", icon: faPalette },
    { title: "Hospitality & Guest Services", description: "We provide complete hospitality services, including refreshments, catering, VIP assistance, transportation coordination, accommodation arrangements, and guest support.", icon: faUsers },
    { title: "Photography & Event Coverage", description: "Capture every important moment with professional photography, videography, live coverage, social media content creation, and post-event highlight reels.", icon: faCamera }
  ],
  whyChoose: [
    { title: "Professional Corporate Event Experts", description: "", icon: faUserTie },
    { title: "Customized Seminar Solutions", description: "", icon: faCheckCircle },
    { title: "Experienced Speaker Management Team", description: "", icon: faBriefcase },
    { title: "Advanced Audio Visual Technology", description: "", icon: faMusic },
    { title: "End-to-End Event Coordination", description: "", icon: faBriefcase },
    { title: "Professional Registration Management", description: "", icon: faBriefcase },
    { title: "Premium Hospitality Services", description: "", icon: faUtensils },
    { title: "Flawless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Corporate Seminars Management Services", image: CorporateEventsImg },
    { title: "Grand Celebrations", image: CorporateEventsImg },
    { title: "Thematic Styling", image: CorporateEventsImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book corporate seminars management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional corporate seminars management services services.",
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
  title: "Exhibitions Management Services - Leor Media",
  subtitle: "Creating impactful exhibitions, trade shows, and business expos through innovative design, strategic planning, audience engagement, and flawless event execution.",
  hero: {
    title: "Professional Exhibition Management Services",
    subtitle: "Creating impactful exhibitions, trade shows, and business expos through innovative design, strategic planning, audience engagement, and flawless event execution.",
    highlights: ["Premium Services","Expert Planners","Flawless Execution"],
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
      { text: "Call Now", link: "tel:+919666643456", primary: false }
    ]
  },
  introduction: {
    heading: "Transforming Exhibitions into Business Opportunities",
    text: "At Leor Media, we understand that exhibitions are more than displays—they are opportunities to build connections, promote innovation, and drive business growth. Our expertise in exhibition planning, stall design, visitor engagement, and event management helps create successful events that deliver measurable results.",
    details: "Whether you're planning a trade fair, business expo, product showcase, or industry exhibition, Leor Media delivers exhibition management services that elevate your brand, attract audiences, and create meaningful business opportunities."
  },
  services: [
    { title: "Exhibition Strategy & Planning", description: "Every successful exhibition begins with a well-defined strategy. Our team develops customized event plans, exhibition layouts, participant coordination, visitor engagement strategies, and operational timelines to ensure seamless execution.", icon: faCheckCircle },
    { title: "Exhibition Stall Design & Fabrication", description: "Stand out from the competition with innovative exhibition stall designs, custom booths, interactive displays, branding elements, product showcase areas, and engaging visitor experiences.", icon: faPalette },
    { title: "Venue Selection & Space Management", description: "We assist in selecting suitable exhibition venues and manage floor plans, exhibitor allocations, visitor flow, and infrastructure arrangements to create an organized exhibition environment.", icon: faBriefcase },
    { title: "Branding & Promotional Solutions", description: "Enhance your exhibition presence through creative branding, digital displays, signage, promotional materials, experiential marketing zones, and audience engagement activities.", icon: faPalette },
    { title: "Audio Visual & Technical Production", description: "Our advanced event technology services include LED screens, sound systems, digital presentations, live demonstrations, lighting solutions, and technical support throughout the event.", icon: faMusic },
    { title: "Exhibitor & Visitor Management", description: "We manage exhibitor registrations, attendee registrations, visitor assistance, information desks, entry management, networking zones, and customer engagement activities.", icon: faBriefcase },
    { title: "Lead Generation & Business Networking", description: "Our exhibition solutions are designed to facilitate meaningful business interactions, networking opportunities, lead generation activities, and brand-building experiences.", icon: faBullseye },
    { title: "Photography & Event Documentation", description: "Capture every important moment through professional photography, videography, drone coverage, social media content creation, and event highlight production.", icon: faCamera }
  ],
  whyChoose: [
    { title: "Professional Exhibition Management Experts", description: "", icon: faBriefcase },
    { title: "Creative Stall Design & Fabrication", description: "", icon: faPalette },
    { title: "End-to-End Event Coordination", description: "", icon: faBriefcase },
    { title: "Advanced Event Technology Solutions", description: "", icon: faCheckCircle },
    { title: "Effective Visitor Engagement Strategies", description: "", icon: faSmile },
    { title: "Complete Branding & Promotional Support", description: "", icon: faPalette },
    { title: "Experienced Event Production Team", description: "", icon: faCheckCircle },
    { title: "Flawless Event Execution", description: "", icon: faCheckCircle }
  ],
  gallery: [
    { title: "Exhibitions Management Services", image: ProductLaunchesImg },
    { title: "Grand Celebrations", image: ProductLaunchesImg },
    { title: "Thematic Styling", image: ProductLaunchesImg }
  ],
  packages: [
    { title: "Essential", price: "Starting From ₹1.5L", features: ["Basic Setup", "Standard Decor", "On-Day Coordination"], highlighted: false },
    { title: "Premium", price: "Starting From ₹4L", features: ["Full Decor", "Artist Booking", "Hospitality Management"], highlighted: true },
    { title: "Luxury", price: "Custom Pricing", features: ["Exotic Venues", "Celebrity Guests", "Premium Experience"], highlighted: false }
  ],
  process: [
    { title: "Consultation", description: "Understanding your vision, budget, and requirements." },
    { title: "Design & Theme", description: "Creating visual concepts and layouts." },
    { title: "Vendor Booking", description: "Coordinating with top vendors and suppliers." },
    { title: "Execution", description: "Flawless on-site management on the event day." }
  ],
  testimonials: [
    { name: "Happy Couple / Client", review: "The event was organized with absolute perfection. Highly recommended!", rating: 5 }
  ],
  faqs: [
    { question: "How early should we book exhibitions management services planning?", answer: "We recommend booking at least 1-3 months in advance depending on the scale." },
    { question: "Can you customize the decoration theme?", answer: "Absolutely. We offer customized themes based on your vision and preferences." }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional exhibitions management services services.",
    phones: ["+91-9666643456", "+91-9542248999"],
    ctas: [
      { text: "WhatsApp Us", link: "https://wa.me/919666643456", icon: "whatsapp" },
      { text: "Get Free Quote", link: "/get-quotation", icon: "quote" }
    ]
  }
};

export const GenericWeddingPlannersDetailPageData = {
  SeoName: {
    seotitle:"weddingPlanners",
  },
  section2: {
    tagline:"Planning a special event?",
    heading:"Let Us Make Your Event Extraordinary.",
    description:"At Leor Media, we understand that every event is unique. Our expert planners work closely with you to design and execute an experience that exceeds your expectations, right here in Visakhapatnam.",
  },

  services: [
    {
      icon: faCheckCircle,
      title:"Full-Service Planning",
      description:"From venue selection to vendor management.",
      details: ["Conceptualization & Theme Design","Venue Sourcing & Catering Coordination","Guest List Management & Invitations",
      ],
      link:"/contactus",
    },
    {
      icon: faPalette,
      title:"Decor & Atmosphere",
      description:"Stunning visuals tailored to your theme.",
      details: ["Floral & Lighting Design","Stage & Audio-Visual Setup","Themed Decorations & Branding",
      ],
      link:"/contactus",
    },
    {
      icon: faUsers,
      title:"On-Site Management",
      description:"Smooth execution on the day of the event.",
      details: ["Timely Setup & Coordination","Crowd Management & Guest Assistance","Troubleshooting & Vendor Supervision",
      ],
      link:"/contactus",
    },
  ],

  pricing: [
    {
      title:"Basic Planning",
      price:"Contact Us",
      features: ["Initial Consultation","Venue Recommendations","Vendor Coordination","On-Day Basics",
      ],
      link:"/contactus",
      highlighted: false,
    },
    {
      title:"Premium Execution",
      price:"Contact Us",
      features: ["Full Event Management","Custom Decor & Theme","Guest Management","Photography & Video",
      ],
      link:"/contactus",
      highlighted: true,
    },
  ],

  coverimage: DestinationWeddingImg,
  title:"Event Planning Services",
  subtitle:"Turning your special moments into lifelong memories with professional planning and flawless execution.",
  coverImage: {
    src: DestinationWeddingImg,
    style: {
      backgroundSize:"cover",
      backgroundPosition:"center",
    },
  },

  faqs: [
    {
      question:"How early should I book my event?",
      answer:"We recommend booking at least 1-3 months in advance depending on the scale of the event to ensure venue and vendor availability.",
    },
    {
      question:"Do you handle events outside Visakhapatnam?",
      answer:"While we primarily serve Vizag, we can handle regional events across Andhra Pradesh with prior discussion.",
    },
    {
      question:"Can you work within my budget?",
      answer:"Yes, we offer flexible planning services that can be tailored to suit various budgets without compromising on quality.",
    },
  ],
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
