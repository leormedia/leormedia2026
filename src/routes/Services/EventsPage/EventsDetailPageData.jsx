import { EventHeroCover } from "../../../assets/data/Imagedata";
import {
  faBriefcase,
  faStar,
  faBullseye,
  faDraftingCompass,
  faScroll,
  faHandshake,
  faMusic,
  faBullhorn,
  faStore,
  faPrayingHands,
  faUsers,
  faGlassCheers,
  faSmile
} from "@fortawesome/free-solid-svg-icons";

// Events Company Main Category Data
export const EventsCompany = {
  SeoName: { seotitle: "events" },
  coverimage: EventHeroCover,
  title: "Events & Celebrations in Visakhapatnam | Leor Media",
  subtitle: "Vizag's premier event management partner. We create moments that last a lifetime, from grand corporate events to cultural festivals.",
  coverImage: { src: EventHeroCover, style: { backgroundSize: "cover", backgroundPosition: "center" } },
  section2: {
    tagline: "EXPERTISE IN EVERY DETAIL",
    heading: "Vizag's Leading Event Management Agency",
    description: "Leor Media is a full-service event management agency. We specialize in planning, designing, and executing events of all scales with a focus on creativity, quality, and excellence."
  },
  services: [
    { title: "Corporate Events", path: "/services/events/corporate-events", icon: faBriefcase, description: "Professional event management for businesses." },
    { title: "Entertainment Events", path: "/services/events/entertainment-events", icon: faStar, description: "Concerts, celebrity management, and live shows." },
    { title: "Promotional Events", path: "/services/events/promotional-events", icon: faBullseye, description: "Strategic brand activations and promotions." },
    { title: "Exhibition & Trade Shows", path: "/services/events/exhibition-and-trade-shows", icon: faDraftingCompass, description: "Creative exhibition stalls and trade shows." },
    { title: "Religious & Traditional Events", path: "/services/events/religious-and-traditional-events", icon: faScroll, description: "Cultural and religious event planning." }
  ]
};

export const CorporateEventsData = {
  SeoName: { seotitle: "corporate-events" },
  title: "Corporate Events - Leor Media",
  subtitle: "Precision, productivity, and professionalism. We manage your high-stakes meetings with absolute care.",
  coverimage: EventHeroCover,
  categoryLabel: "Corporate Events",
  hero: {
    title: "Corporate Events",
    subtitle: "Precision, productivity, and professionalism. We manage your high-stakes meetings with absolute care.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Us",
    text: "Corporate meetings require a distraction-free environment and seamless logistics. We provide the infrastructure needed for successful executive sessions.",
    details: "From boardroom setups and delegate registration to premium catering and secretarial support, we handle it all."
  },
  servicesTitle: "Events Section",
  services: [
    { title: "Corporate Meetings", description: "Professional setup for board and executive meetings.", icon: faBriefcase },
    { title: "Conferences & Seminars", description: "Large scale arrangements for industry seminars.", icon: faHandshake },
    { title: "Product Launch Events", description: "Impactful events to unveil your latest products.", icon: faBullhorn },
    { title: "Award Functions", description: "Glamorous setups for recognizing industry talent.", icon: faStar },
    { title: "Team Outings", description: "Engaging and refreshing outings for your team.", icon: faUsers },
    { title: "Annual Day Celebrations", description: "Grand celebrations to mark your company's milestones.", icon: faGlassCheers },
    { title: "Employee Engagement Events", description: "Fun and interactive events to boost employee morale.", icon: faSmile },
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed corporate gatherings.",
    phones: ["+91-9666643456"],
  }
};

export const EntertainmentEventsData = {
  SeoName: { seotitle: "entertainment-events" },
  title: "Entertainment Events",
  subtitle: "Spectacular shows, live concerts, and celebrity management for unforgettable nights.",
  coverimage: EventHeroCover,
  categoryLabel: "Entertainment Events",
  hero: {
    title: "Entertainment Events",
    subtitle: "Spectacular shows, live concerts, and celebrity management for unforgettable nights.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Creating Unforgettable Nights",
    text: "We bring the best of entertainment to Vizag. Whether it is a live concert or a celebrity appearance, we ensure a flawless experience.",
    details: "Our team handles artist management, stage setup, sound and lighting, and security."
  },
  servicesTitle: "Events Section",
  services: [
    { title: "Celebrity Management", description: "Booking and managing top-tier celebrities.", icon: faStar },
    { title: "Live Concerts", description: "End-to-end management of live musical nights.", icon: faMusic },
    { title: "DJ Nights", description: "High-energy club events and DJ bookings.", icon: faMusic },
    { title: "Fashion Shows", description: "Glamorous runway setups and model management.", icon: faStar },
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for spectacular entertainment events.",
    phones: ["+91-9666643456"],
  }
};

export const PromotionalEventsData = {
  SeoName: { seotitle: "promotional-events" },
  title: "Promotional Events",
  subtitle: "Strategic brand activations, roadshows, and mall promotions to elevate your brand presence.",
  coverimage: EventHeroCover,
  categoryLabel: "Promotional Events",
  hero: {
    title: "Promotional Events",
    subtitle: "Strategic brand activations, roadshows, and mall promotions to elevate your brand presence.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Drive Brand Awareness",
    text: "We design promotional events that engage your target audience and drive measurable brand awareness.",
    details: "From creative concepts to on-ground execution, our activations make an impact."
  },
  servicesTitle: "Events Section",
  services: [
    { title: "Brand Promotions", description: "Engaging campaigns to boost your brand visibility.", icon: faBullhorn },
    { title: "Mall Activations", description: "High-footfall engagements in premium malls.", icon: faStore },
    { title: "Road Shows", description: "Mobile promotional campaigns across the city.", icon: faBullseye },
    { title: "Store Launches", description: "Grand openings that attract maximum attention.", icon: faStore },
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for high-impact promotional events.",
    phones: ["+91-9666643456"],
  }
};

export const ExhibitionTradeShowsData = {
  SeoName: { seotitle: "exhibition-and-trade-shows" },
  title: "Exhibition & Trade Shows",
  subtitle: "Custom stall designs and trade show management that make your brand stand out.",
  coverimage: EventHeroCover,
  categoryLabel: "Exhibition & Trade Shows",
  hero: {
    title: "Exhibition & Trade Shows",
    subtitle: "Custom stall designs and trade show management that make your brand stand out.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Stand Out in the Crowd",
    text: "We provide complete exhibition solutions, from innovative stall designs to full trade show management.",
    details: "Our fabricated stalls are designed to attract visitors and facilitate business networking."
  },
  servicesTitle: "Events Section",
  services: [
    { title: "Exhibition Stall Design", description: "Custom-fabricated, high-quality exhibition stalls.", icon: faDraftingCompass },
    { title: "Trade Show Management", description: "Comprehensive logistics for large trade shows.", icon: faBriefcase },
    { title: "Expo Promotions", description: "Pre-event and on-ground marketing for expos.", icon: faBullhorn },
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for standout exhibition stalls.",
    phones: ["+91-9666643456"],
  }
};

export const ReligiousTraditionalEventsData = {
  SeoName: { seotitle: "religious-and-traditional-events" },
  title: "Religious & Traditional Events",
  subtitle: "Reverent, beautiful, and culturally rich setups for traditional ceremonies and temple festivals.",
  coverimage: EventHeroCover,
  categoryLabel: "Religious Events",
  hero: {
    title: "Religious & Traditional Events",
    subtitle: "Reverent, beautiful, and culturally rich setups for traditional ceremonies and temple festivals.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Honoring Traditions",
    text: "We understand the cultural significance of religious events and provide respectful, flawless management.",
    details: "From floral decor and catering to seating and stage setups, we ensure a divine experience."
  },
  servicesTitle: "Events Section",
  services: [
    { title: "Pooja Events", description: "Serene and beautiful setups for home or office poojas.", icon: faPrayingHands },
    { title: "Temple Festivals", description: "Large-scale management for grand temple celebrations.", icon: faScroll },
    { title: "Traditional Ceremonies", description: "Culturally rich decor and catering for traditional events.", icon: faHandshake },
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for beautifully managed traditional events.",
    phones: ["+91-9666643456"],
  }
};


export const CorporateMeetingsData = {
  SeoName: { seotitle: "corporateMeetings" },
  title: "Corporate Meetings - Leor Media",
  subtitle: "Expert management for corporate meetings.",
  coverimage: EventHeroCover,
  categoryLabel: "Corporate Meetings",
  hero: {
    title: "Corporate Meetings",
    subtitle: "Expert management for corporate meetings.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Corporate Meetings",
    text: "We provide top-notch services for corporate meetings to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faBriefcase },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed corporate meetings.",
    phones: ["+91-9666643456"],
  }
};

export const ConferencesSeminarsData = {
  SeoName: { seotitle: "conferencesSeminars" },
  title: "Conferences & Seminars - Leor Media",
  subtitle: "Expert management for conferences & seminars.",
  coverimage: EventHeroCover,
  categoryLabel: "Conferences & Seminars",
  hero: {
    title: "Conferences & Seminars",
    subtitle: "Expert management for conferences & seminars.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Conferences & Seminars",
    text: "We provide top-notch services for conferences & seminars to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faHandshake },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed conferences & seminars.",
    phones: ["+91-9666643456"],
  }
};

export const ProductLaunchEventsData = {
  SeoName: { seotitle: "productLaunch" },
  title: "Product Launch Events - Leor Media",
  subtitle: "Expert management for product launch events.",
  coverimage: EventHeroCover,
  categoryLabel: "Product Launch Events",
  hero: {
    title: "Product Launch Events",
    subtitle: "Expert management for product launch events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Product Launch Events",
    text: "We provide top-notch services for product launch events to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faBullhorn },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed product launch events.",
    phones: ["+91-9666643456"],
  }
};

export const AwardFunctionsData = {
  SeoName: { seotitle: "awardFunctions" },
  title: "Award Functions - Leor Media",
  subtitle: "Expert management for award functions.",
  coverimage: EventHeroCover,
  categoryLabel: "Award Functions",
  hero: {
    title: "Award Functions",
    subtitle: "Expert management for award functions.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Award Functions",
    text: "We provide top-notch services for award functions to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faStar },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed award functions.",
    phones: ["+91-9666643456"],
  }
};

export const TeamOutingsData = {
  SeoName: { seotitle: "teamOutings" },
  title: "Team Outings - Leor Media",
  subtitle: "Expert management for team outings.",
  coverimage: EventHeroCover,
  categoryLabel: "Team Outings",
  hero: {
    title: "Team Outings",
    subtitle: "Expert management for team outings.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Team Outings",
    text: "We provide top-notch services for team outings to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faUsers },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed team outings.",
    phones: ["+91-9666643456"],
  }
};

export const AnnualDayCelebrationsData = {
  SeoName: { seotitle: "annualDay" },
  title: "Annual Day Celebrations - Leor Media",
  subtitle: "Expert management for annual day celebrations.",
  coverimage: EventHeroCover,
  categoryLabel: "Annual Day Celebrations",
  hero: {
    title: "Annual Day Celebrations",
    subtitle: "Expert management for annual day celebrations.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Annual Day Celebrations",
    text: "We provide top-notch services for annual day celebrations to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faGlassCheers },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed annual day celebrations.",
    phones: ["+91-9666643456"],
  }
};

export const EmployeeEngagementEventsData = {
  SeoName: { seotitle: "employeeEngagement" },
  title: "Employee Engagement Events - Leor Media",
  subtitle: "Expert management for employee engagement events.",
  coverimage: EventHeroCover,
  categoryLabel: "Employee Engagement Events",
  hero: {
    title: "Employee Engagement Events",
    subtitle: "Expert management for employee engagement events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Employee Engagement Events",
    text: "We provide top-notch services for employee engagement events to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faSmile },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed employee engagement events.",
    phones: ["+91-9666643456"],
  }
};

export const CelebrityManagementData = {
  SeoName: { seotitle: "celebrityManagement" },
  title: "Celebrity Management - Leor Media",
  subtitle: "Expert management for celebrity management.",
  coverimage: EventHeroCover,
  categoryLabel: "Celebrity Management",
  hero: {
    title: "Celebrity Management",
    subtitle: "Expert management for celebrity management.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Celebrity Management",
    text: "We provide top-notch services for celebrity management to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faStar },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed celebrity management.",
    phones: ["+91-9666643456"],
  }
};

export const LiveConcertsData = {
  SeoName: { seotitle: "liveConcerts" },
  title: "Live Concerts - Leor Media",
  subtitle: "Expert management for live concerts.",
  coverimage: EventHeroCover,
  categoryLabel: "Live Concerts",
  hero: {
    title: "Live Concerts",
    subtitle: "Expert management for live concerts.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Live Concerts",
    text: "We provide top-notch services for live concerts to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faMusic },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed live concerts.",
    phones: ["+91-9666643456"],
  }
};

export const DjNightsData = {
  SeoName: { seotitle: "djNights" },
  title: "DJ Nights - Leor Media",
  subtitle: "Expert management for dj nights.",
  coverimage: EventHeroCover,
  categoryLabel: "DJ Nights",
  hero: {
    title: "DJ Nights",
    subtitle: "Expert management for dj nights.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About DJ Nights",
    text: "We provide top-notch services for dj nights to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faMusic },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed dj nights.",
    phones: ["+91-9666643456"],
  }
};

export const FashionShowsData = {
  SeoName: { seotitle: "fashionShows" },
  title: "Fashion Shows - Leor Media",
  subtitle: "Expert management for fashion shows.",
  coverimage: EventHeroCover,
  categoryLabel: "Fashion Shows",
  hero: {
    title: "Fashion Shows",
    subtitle: "Expert management for fashion shows.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Fashion Shows",
    text: "We provide top-notch services for fashion shows to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faStar },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed fashion shows.",
    phones: ["+91-9666643456"],
  }
};

export const CulturalEventsData = {
  SeoName: { seotitle: "culturalEvents" },
  title: "Cultural Events - Leor Media",
  subtitle: "Expert management for cultural events.",
  coverimage: EventHeroCover,
  categoryLabel: "Cultural Events",
  hero: {
    title: "Cultural Events",
    subtitle: "Expert management for cultural events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Cultural Events",
    text: "We provide top-notch services for cultural events to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faScroll },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed cultural events.",
    phones: ["+91-9666643456"],
  }
};

export const CollegeFestEventsData = {
  SeoName: { seotitle: "collegeFest" },
  title: "College Fest Events - Leor Media",
  subtitle: "Expert management for college fest events.",
  coverimage: EventHeroCover,
  categoryLabel: "College Fest Events",
  hero: {
    title: "College Fest Events",
    subtitle: "Expert management for college fest events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About College Fest Events",
    text: "We provide top-notch services for college fest events to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faStar },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed college fest events.",
    phones: ["+91-9666643456"],
  }
};

export const BrandPromotionsData = {
  SeoName: { seotitle: "brandPromotions" },
  title: "Brand Promotions - Leor Media",
  subtitle: "Expert management for brand promotions.",
  coverimage: EventHeroCover,
  categoryLabel: "Brand Promotions",
  hero: {
    title: "Brand Promotions",
    subtitle: "Expert management for brand promotions.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Brand Promotions",
    text: "We provide top-notch services for brand promotions to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faBullhorn },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed brand promotions.",
    phones: ["+91-9666643456"],
  }
};

export const MallActivationsData = {
  SeoName: { seotitle: "mallActivations" },
  title: "Mall Activations - Leor Media",
  subtitle: "Expert management for mall activations.",
  coverimage: EventHeroCover,
  categoryLabel: "Mall Activations",
  hero: {
    title: "Mall Activations",
    subtitle: "Expert management for mall activations.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Mall Activations",
    text: "We provide top-notch services for mall activations to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faStore },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed mall activations.",
    phones: ["+91-9666643456"],
  }
};

export const RoadShowsData = {
  SeoName: { seotitle: "roadShows" },
  title: "Road Shows - Leor Media",
  subtitle: "Expert management for road shows.",
  coverimage: EventHeroCover,
  categoryLabel: "Road Shows",
  hero: {
    title: "Road Shows",
    subtitle: "Expert management for road shows.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Road Shows",
    text: "We provide top-notch services for road shows to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faBullseye },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed road shows.",
    phones: ["+91-9666643456"],
  }
};

export const StoreLaunchesData = {
  SeoName: { seotitle: "storeLaunches" },
  title: "Store Launches - Leor Media",
  subtitle: "Expert management for store launches.",
  coverimage: EventHeroCover,
  categoryLabel: "Store Launches",
  hero: {
    title: "Store Launches",
    subtitle: "Expert management for store launches.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Store Launches",
    text: "We provide top-notch services for store launches to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faStore },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed store launches.",
    phones: ["+91-9666643456"],
  }
};

export const PoliticalCampaignEventsData = {
  SeoName: { seotitle: "politicalCampaign" },
  title: "Political Campaign Events - Leor Media",
  subtitle: "Expert management for political campaign events.",
  coverimage: EventHeroCover,
  categoryLabel: "Political Campaign Events",
  hero: {
    title: "Political Campaign Events",
    subtitle: "Expert management for political campaign events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Political Campaign Events",
    text: "We provide top-notch services for political campaign events to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faBullhorn },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed political campaign events.",
    phones: ["+91-9666643456"],
  }
};

export const PublicRelationEventsData = {
  SeoName: { seotitle: "publicRelations" },
  title: "Public Relation Events - Leor Media",
  subtitle: "Expert management for public relation events.",
  coverimage: EventHeroCover,
  categoryLabel: "Public Relation Events",
  hero: {
    title: "Public Relation Events",
    subtitle: "Expert management for public relation events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Public Relation Events",
    text: "We provide top-notch services for public relation events to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faHandshake },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed public relation events.",
    phones: ["+91-9666643456"],
  }
};

export const ExhibitionStallDesignData = {
  SeoName: { seotitle: "stallDesign" },
  title: "Exhibition Stall Design - Leor Media",
  subtitle: "Expert management for exhibition stall design.",
  coverimage: EventHeroCover,
  categoryLabel: "Exhibition Stall Design",
  hero: {
    title: "Exhibition Stall Design",
    subtitle: "Expert management for exhibition stall design.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Exhibition Stall Design",
    text: "We provide top-notch services for exhibition stall design to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faDraftingCompass },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed exhibition stall design.",
    phones: ["+91-9666643456"],
  }
};

export const TradeShowManagementData = {
  SeoName: { seotitle: "tradeShow" },
  title: "Trade Show Management - Leor Media",
  subtitle: "Expert management for trade show management.",
  coverimage: EventHeroCover,
  categoryLabel: "Trade Show Management",
  hero: {
    title: "Trade Show Management",
    subtitle: "Expert management for trade show management.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Trade Show Management",
    text: "We provide top-notch services for trade show management to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faBriefcase },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed trade show management.",
    phones: ["+91-9666643456"],
  }
};

export const ExpoPromotionsData = {
  SeoName: { seotitle: "expoPromotions" },
  title: "Expo Promotions - Leor Media",
  subtitle: "Expert management for expo promotions.",
  coverimage: EventHeroCover,
  categoryLabel: "Expo Promotions",
  hero: {
    title: "Expo Promotions",
    subtitle: "Expert management for expo promotions.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Expo Promotions",
    text: "We provide top-notch services for expo promotions to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faBullhorn },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed expo promotions.",
    phones: ["+91-9666643456"],
  }
};

export const PoojaEventsData = {
  SeoName: { seotitle: "poojaEvents" },
  title: "Pooja Events - Leor Media",
  subtitle: "Expert management for pooja events.",
  coverimage: EventHeroCover,
  categoryLabel: "Pooja Events",
  hero: {
    title: "Pooja Events",
    subtitle: "Expert management for pooja events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Pooja Events",
    text: "We provide top-notch services for pooja events to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faPrayingHands },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed pooja events.",
    phones: ["+91-9666643456"],
  }
};

export const TempleFestivalsData = {
  SeoName: { seotitle: "templeFestivals" },
  title: "Temple Festivals - Leor Media",
  subtitle: "Expert management for temple festivals.",
  coverimage: EventHeroCover,
  categoryLabel: "Temple Festivals",
  hero: {
    title: "Temple Festivals",
    subtitle: "Expert management for temple festivals.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Temple Festivals",
    text: "We provide top-notch services for temple festivals to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faScroll },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed temple festivals.",
    phones: ["+91-9666643456"],
  }
};

export const TraditionalCeremoniesData = {
  SeoName: { seotitle: "traditionalCeremonies" },
  title: "Traditional Ceremonies - Leor Media",
  subtitle: "Expert management for traditional ceremonies.",
  coverimage: EventHeroCover,
  categoryLabel: "Traditional Ceremonies",
  hero: {
    title: "Traditional Ceremonies",
    subtitle: "Expert management for traditional ceremonies.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "About Traditional Ceremonies",
    text: "We provide top-notch services for traditional ceremonies to ensure your event is a resounding success.",
    details: "From planning to execution, our team handles every detail with precision and care."
  },
  servicesTitle: "Highlights",
  services: [
    { title: "Comprehensive Planning", description: "End-to-end planning and coordination.", icon: faHandshake },
    { title: "Flawless Execution", description: "Smooth operations on the day of the event.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professionally managed traditional ceremonies.",
    phones: ["+91-9666643456"],
  }
};


// Mapping for individual pages
export const EventsDetailPageData = {
  "corporate-events": CorporateEventsData,
  "entertainment-events": EntertainmentEventsData,
  "promotional-events": PromotionalEventsData,
  "exhibition-and-trade-shows": ExhibitionTradeShowsData,
  "religious-and-traditional-events": ReligiousTraditionalEventsData,
  "corporate-meetings": CorporateMeetingsData,
  "conferences-seminars": ConferencesSeminarsData,
  "product-launch-events": ProductLaunchEventsData,
  "award-functions": AwardFunctionsData,
  "team-outings": TeamOutingsData,
  "annual-day-celebrations": AnnualDayCelebrationsData,
  "employee-engagement-events": EmployeeEngagementEventsData,
  "celebrity-management": CelebrityManagementData,
  "live-concerts": LiveConcertsData,
  "dj-nights": DjNightsData,
  "fashion-shows": FashionShowsData,
  "cultural-events": CulturalEventsData,
  "college-fest-events": CollegeFestEventsData,
  "brand-promotions": BrandPromotionsData,
  "mall-activations": MallActivationsData,
  "road-shows": RoadShowsData,
  "store-launches": StoreLaunchesData,
  "political-campaign-events": PoliticalCampaignEventsData,
  "public-relation-events": PublicRelationEventsData,
  "exhibition-stall-design": ExhibitionStallDesignData,
  "trade-show-management": TradeShowManagementData,
  "expo-promotions": ExpoPromotionsData,
  "pooja-events": PoojaEventsData,
  "temple-festivals": TempleFestivalsData,
  "traditional-ceremonies": TraditionalCeremoniesData,
};
