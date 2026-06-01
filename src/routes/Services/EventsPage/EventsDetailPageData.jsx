import { EventHeroCover } from"../../../assets/data/Imagedata";
import CorporateEventsImg from"./EventsImages/corporate_events.png";
import EntertainmentEventsImg from"./EventsImages/entertainment_events.png";
import PromotionalEventsImg from"./EventsImages/promotional_events.png";
import ExhibitionTradeImg from"./EventsImages/exhibition_trade.png";
import ReligiousTraditionalImg from"./EventsImages/religious_traditional.png";
import CorporateMeetingsImg from"./EventsImages/corporate_meetings.png";
import ConferencesSeminarsImg from"./EventsImages/conferences_seminars.png";
import ProductLaunchImg from"./EventsImages/product_launch.png";
import AwardFunctionsImg from"./EventsImages/award_functions.png";
import TeamOutingsImg from"./EventsImages/team_outings.png";
import AnnualDayImg from"./EventsImages/annual_day.png";
import EmployeeEngagementImg from"./EventsImages/employee_engagement.png";
import CelebrityManagementImg from"./EventsImages/celebrity_management.png";
import LiveConcertsImg from"./EventsImages/live_concerts.png";
import DjNightsImg from"./EventsImages/dj_nights.png";
import FashionShowsImg from"./EventsImages/fashion_shows.png";
import CulturalEventsImg from"./EventsImages/cultural_events.png";
import CollegeFestImg from"./EventsImages/college_fest.png";
import BrandPromotionsImg from"./EventsImages/brand_promotions.png";
import MallActivationsImg from"./EventsImages/mall_activations.png";
import RoadShowsImg from"./EventsImages/road_shows.png";
import StoreLaunchesImg from"./EventsImages/store_launches.png";
import PoliticalCampaignImg from"./EventsImages/political_campaign.png";
import PublicRelationImg from"./EventsImages/public_relation.png";
import ExhibitionStallImg from"./EventsImages/exhibition_stall.png";
import TradeShowImg from"./EventsImages/trade_show.png";
import ExpoPromotionsImg from"./EventsImages/expo_promotions.png";
import PoojaEventsImg from"./EventsImages/pooja_events.png";
import TempleFestivalsImg from"./EventsImages/temple_festivals.png";
import TraditionalCeremoniesImg from"./EventsImages/traditional_ceremonies.png";
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
  faSmile,
  faLeaf
} from"@fortawesome/free-solid-svg-icons";

// Events Company Main Category Data
export const EventsCompany = {
  SeoName: { seotitle:"events" },
  coverimage: EventHeroCover,
  title:"Events & Celebrations in Visakhapatnam | Leor Media",
  subtitle:"Vizag's premier event management partner. We create moments that last a lifetime, from grand corporate events to cultural festivals.",
  coverImage: { src: EventHeroCover, style: { backgroundSize:"cover", backgroundPosition:"center" } },
  section2: {
    tagline:"EXPERTISE IN EVERY DETAIL",
    heading:"Vizag's Leading Event Management Agency",
    description:"Leor Media is a full-service event management agency. We specialize in planning, designing, and executing events of all scales with a focus on creativity, quality, and excellence."
  },
  services: [
    { title:"Corporate Events", path:"/services/events/corporate-events", icon: faBriefcase, description:"Professional event management for businesses." },
    { title:"Entertainment Events", path:"/services/events/entertainment-events", icon: faStar, description:"Concerts, celebrity management, and live shows." },
    { title:"Promotional Events", path:"/services/events/promotional-events", icon: faBullseye, description:"Strategic brand activations and promotions." },
    { title:"Exhibition & Trade Shows", path:"/services/events/exhibition-and-trade-shows", icon: faDraftingCompass, description:"Creative exhibition stalls and trade shows." },
    { title:"Religious & Traditional Events", path:"/services/events/religious-and-traditional-events", icon: faScroll, description:"Cultural and religious event planning." }
  ]
};

export const CorporateEventsData = {
  SeoName: { seotitle:"corporate-events" },
  title:"Corporate Events - Leor Media",
  subtitle:"Precision, productivity, and professionalism. We manage your high-stakes meetings with absolute care.",
  coverimage: EventHeroCover,
  categoryLabel:"Corporate Events",
  hero: {
    title:"Corporate Events",
    subtitle:"Precision, productivity, and professionalism. We manage your high-stakes meetings with absolute care.",
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"About Us",
    text:"Corporate meetings require a distraction-free environment and seamless logistics. We provide the infrastructure needed for successful executive sessions.",
    details:"From boardroom setups and delegate registration to premium catering and secretarial support, we handle it all."
  },
  servicesTitle:"Events Section",
  services: [
    { title:"Corporate Meetings", description:"Professional setup for board and executive meetings.", icon: faBriefcase },
    { title:"Conferences & Seminars", description:"Large scale arrangements for industry seminars.", icon: faHandshake },
    { title:"Product Launch Events", description:"Impactful events to unveil your latest products.", icon: faBullhorn },
    { title:"Award Functions", description:"Glamorous setups for recognizing industry talent.", icon: faStar },
    { title:"Team Outings", description:"Engaging and refreshing outings for your team.", icon: faUsers },
    { title:"Annual Day Celebrations", description:"Grand celebrations to mark your company's milestones.", icon: faGlassCheers },
    { title:"Employee Engagement Events", description:"Fun and interactive events to boost employee morale.", icon: faSmile },
  ],
  finalCTA: {
    title:"Contact Us",
    text:"Partner with Leor Media for professionally managed corporate gatherings.",
    phones: ["+91-9666643456"],
  }
};

export const EntertainmentEventsData = {
  SeoName: { seotitle:"entertainment-events" },
  title:"Entertainment Events",
  subtitle:"Spectacular shows, live concerts, and celebrity management for unforgettable nights.",
  coverimage: EventHeroCover,
  categoryLabel:"Entertainment Events",
  hero: {
    title:"Entertainment Events",
    subtitle:"Spectacular shows, live concerts, and celebrity management for unforgettable nights.",
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Creating Unforgettable Nights",
    text:"We bring the best of entertainment to Vizag. Whether it is a live concert or a celebrity appearance, we ensure a flawless experience.",
    details:"Our team handles artist management, stage setup, sound and lighting, and security."
  },
  servicesTitle:"Events Section",
  services: [
    { title:"Celebrity Management", description:"Booking and managing top-tier celebrities.", icon: faStar },
    { title:"Live Concerts", description:"End-to-end management of live musical nights.", icon: faMusic },
    { title:"DJ Nights", description:"High-energy club events and DJ bookings.", icon: faMusic },
    { title:"Fashion Shows", description:"Glamorous runway setups and model management.", icon: faStar },
  ],
  finalCTA: {
    title:"Contact Us",
    text:"Partner with Leor Media for spectacular entertainment events.",
    phones: ["+91-9666643456"],
  }
};

export const PromotionalEventsData = {
  SeoName: { seotitle:"promotional-events" },
  title:"Promotional Events",
  subtitle:"Strategic brand activations, roadshows, and mall promotions to elevate your brand presence.",
  coverimage: EventHeroCover,
  categoryLabel:"Promotional Events",
  hero: {
    title:"Promotional Events",
    subtitle:"Strategic brand activations, roadshows, and mall promotions to elevate your brand presence.",
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Drive Brand Awareness",
    text:"We design promotional events that engage your target audience and drive measurable brand awareness.",
    details:"From creative concepts to on-ground execution, our activations make an impact."
  },
  servicesTitle:"Events Section",
  services: [
    { title:"Brand Promotions", description:"Engaging campaigns to boost your brand visibility.", icon: faBullhorn },
    { title:"Mall Activations", description:"High-footfall engagements in premium malls.", icon: faStore },
    { title:"Road Shows", description:"Mobile promotional campaigns across the city.", icon: faBullseye },
    { title:"Store Launches", description:"Grand openings that attract maximum attention.", icon: faStore },
  ],
  finalCTA: {
    title:"Contact Us",
    text:"Partner with Leor Media for high-impact promotional events.",
    phones: ["+91-9666643456"],
  }
};

export const ExhibitionTradeShowsData = {
  SeoName: { seotitle:"exhibition-and-trade-shows" },
  title:"Exhibition & Trade Shows",
  subtitle:"Custom stall designs and trade show management that make your brand stand out.",
  coverimage: EventHeroCover,
  categoryLabel:"Exhibition & Trade Shows",
  hero: {
    title:"Exhibition & Trade Shows",
    subtitle:"Custom stall designs and trade show management that make your brand stand out.",
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Stand Out in the Crowd",
    text:"We provide complete exhibition solutions, from innovative stall designs to full trade show management.",
    details:"Our fabricated stalls are designed to attract visitors and facilitate business networking."
  },
  servicesTitle:"Events Section",
  services: [
    { title:"Exhibition Stall Design", description:"Custom-fabricated, high-quality exhibition stalls.", icon: faDraftingCompass },
    { title:"Trade Show Management", description:"Comprehensive logistics for large trade shows.", icon: faBriefcase },
    { title:"Expo Promotions", description:"Pre-event and on-ground marketing for expos.", icon: faBullhorn },
  ],
  finalCTA: {
    title:"Contact Us",
    text:"Partner with Leor Media for standout exhibition stalls.",
    phones: ["+91-9666643456"],
  }
};

export const ReligiousTraditionalEventsData = {
  SeoName: { seotitle:"religious-and-traditional-events" },
  title:"Religious & Traditional Events",
  subtitle:"Reverent, beautiful, and culturally rich setups for traditional ceremonies and temple festivals.",
  coverimage: EventHeroCover,
  categoryLabel:"Religious Events",
  hero: {
    title:"Religious & Traditional Events",
    subtitle:"Reverent, beautiful, and culturally rich setups for traditional ceremonies and temple festivals.",
    ctas: [
      { text:"Book Consultation", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Honoring Traditions",
    text:"We understand the cultural significance of religious events and provide respectful, flawless management.",
    details:"From floral decor and catering to seating and stage setups, we ensure a divine experience."
  },
  servicesTitle:"Events Section",
  services: [
    { title:"Pooja Events", description:"Serene and beautiful setups for home or office poojas.", icon: faPrayingHands },
    { title:"Temple Festivals", description:"Large-scale management for grand temple celebrations.", icon: faScroll },
    { title:"Traditional Ceremonies", description:"Culturally rich decor and catering for traditional events.", icon: faHandshake },
  ],
  finalCTA: {
    title:"Contact Us",
    text:"Partner with Leor Media for beautifully managed traditional events.",
    phones: ["+91-9666643456"],
  }
};


export const CorporateMeetingsData = {
  SeoName: { seotitle: "corporate-meetings" },
  title: "Corporate Meetings Management - Leor Media",
  subtitle: "Seamless, professional, and distraction-free setups for your executive sessions.",
  coverimage: EventHeroCover,
  categoryLabel: "Corporate Meetings Management",
  hero: {
    title: "Corporate Meetings Management",
    subtitle: "Seamless, professional, and distraction-free setups for your executive sessions.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Elevate Your Corporate Gatherings",
    text: "High-stakes corporate meetings require flawless execution and an environment conducive to strategic decision-making. We provide comprehensive logistics, premium venues, and state-of-the-art AV equipment.",
    details: "From boardroom setups to comprehensive delegate management, we ensure your meetings run like clockwork."
  },
  servicesTitle: "Corporate Meetings Management Services",
  services: [
    { title: "Executive Venue Sourcing", description: "Finding the perfect distraction-free environment.", icon: faBriefcase },
    { title: "AV & Technical Support", description: "Crystal-clear audio and presentation setups.", icon: faStar },
    { title: "Catering & Hospitality", description: "Premium food and beverage arrangements.", icon: faGlassCheers }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with us for professional corporate meetings.",
    phones: ["+91-9666643456"],
  }
};

export const ConferencesSeminarsData = {
  SeoName: { seotitle: "conferences-seminars" },
  title: "Conferences & Seminars - Leor Media",
  subtitle: "Large-scale industry seminars and conferences managed with precision.",
  coverimage: EventHeroCover,
  categoryLabel: "Conferences & Seminars",
  hero: {
    title: "Conferences & Seminars",
    subtitle: "Large-scale industry seminars and conferences managed with precision.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Impactful Industry Conferences",
    text: "Organizing a successful conference requires meticulous planning and a deep understanding of audience engagement. We deliver end-to-end conference management from ticketing to stage production.",
    details: "We handle guest speakers, breakout sessions, sponsor booths, and comprehensive crowd management."
  },
  servicesTitle: "Conferences & Seminars Services",
  services: [
    { title: "Delegate Registration", description: "Smooth check-ins and digital ticketing solutions.", icon: faUsers },
    { title: "Stage & Set Design", description: "Professional stage fabrication and branding.", icon: faDraftingCompass },
    { title: "Speaker Management", description: "Coordinating travel and schedules for VIP guests.", icon: faHandshake }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Let us manage your next major industry conference.",
    phones: ["+91-9666643456"],
  }
};

export const ProductLaunchEventsData = {
  SeoName: { seotitle: "product-launch-events" },
  title: "Product Launch Events - Leor Media",
  subtitle: "Make a powerful statement in the market with an unforgettable product reveal.",
  coverimage: EventHeroCover,
  categoryLabel: "Product Launch Events",
  hero: {
    title: "Product Launch Events",
    subtitle: "Make a powerful statement in the market with an unforgettable product reveal.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Unveil Your Innovation",
    text: "A product launch is your brand's moment to shine. We create dramatic, highly engaging launch events that capture media attention and excite your target audience.",
    details: "Our team focuses on creative reveals, immersive brand experiences, and strong media integration."
  },
  servicesTitle: "Product Launch Events Services",
  services: [
    { title: "Creative Reveal Concepts", description: "Dramatic and innovative ways to unveil products.", icon: faBullhorn },
    { title: "Media & PR Integration", description: "Ensuring maximum press coverage and hype.", icon: faBullseye },
    { title: "Experiential Zones", description: "Interactive product demonstration areas.", icon: faSmile }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Launch your next product with unparalleled impact.",
    phones: ["+91-9666643456"],
  }
};

export const AwardFunctionsData = {
  SeoName: { seotitle: "award-functions" },
  title: "Award Functions - Leor Media",
  subtitle: "Glamorous and prestigious award ceremonies to celebrate industry excellence.",
  coverimage: EventHeroCover,
  categoryLabel: "Award Functions",
  hero: {
    title: "Award Functions",
    subtitle: "Glamorous and prestigious award ceremonies to celebrate industry excellence.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Celebrate Success in Style",
    text: "Recognizing talent and achievement deserves a grand stage. We design and execute prestigious award functions that leave attendees feeling honored and entertained.",
    details: "From red carpet arrivals to spectacular stage performances, we manage the entire show flow."
  },
  servicesTitle: "Award Functions Services",
  services: [
    { title: "Red Carpet & Media", description: "Glamorous entryways and photo-op management.", icon: faStar },
    { title: "Show Flow Direction", description: "Seamless transitions between awards and performances.", icon: faScroll },
    { title: "Trophy & Stage Design", description: "Custom trophies and elegant stage setups.", icon: faDraftingCompass }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Host an unforgettable award ceremony with our expert team.",
    phones: ["+91-9666643456"],
  }
};

export const TeamOutingsData = {
  SeoName: { seotitle: "team-outings" },
  title: "Corporate Team Outings - Leor Media",
  subtitle: "Engaging, fun-filled, and refreshing retreats for your workforce.",
  coverimage: EventHeroCover,
  categoryLabel: "Corporate Team Outings",
  hero: {
    title: "Corporate Team Outings",
    subtitle: "Engaging, fun-filled, and refreshing retreats for your workforce.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Rejuvenate Your Team",
    text: "Boost morale and foster team bonding with our expertly curated team outings. We plan exciting itineraries that balance relaxation with engaging team-building activities.",
    details: "Whether it's a weekend resort getaway or an adventure trip, we handle travel, stay, and activities."
  },
  servicesTitle: "Corporate Team Outings Services",
  services: [
    { title: "Resort & Travel Booking", description: "Comfortable logistics and premium stays.", icon: faBriefcase },
    { title: "Team Building Activities", description: "Engaging games and motivational sessions.", icon: faSmile },
    { title: "Gala Dinners", description: "Evening entertainment and grand dining.", icon: faGlassCheers }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Plan the ultimate corporate retreat for your employees.",
    phones: ["+91-9666643456"],
  }
};

export const AnnualDayCelebrationsData = {
  SeoName: { seotitle: "annual-day-celebrations" },
  title: "Annual Day Celebrations - Leor Media",
  subtitle: "Grand celebrations to mark your company's milestones and achievements.",
  coverimage: EventHeroCover,
  categoryLabel: "Annual Day Celebrations",
  hero: {
    title: "Annual Day Celebrations",
    subtitle: "Grand celebrations to mark your company's milestones and achievements.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Celebrate Your Company's Journey",
    text: "Your company's annual day is the perfect time to reflect on successes and energize the team for the future. We organize spectacular events featuring entertainment, awards, and fine dining.",
    details: "We manage employee performances, professional entertainment, thematic decor, and massive crowd logistics."
  },
  servicesTitle: "Annual Day Celebrations Services",
  services: [
    { title: "Thematic Decor", description: "Immersive themes to match your company vision.", icon: faDraftingCompass },
    { title: "Entertainment Curation", description: "Live bands, dance troupes, and stand-up comedy.", icon: faMusic },
    { title: "Employee Showcases", description: "Coordinating and choreographing staff performances.", icon: faUsers }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Make your next annual day the talk of the town.",
    phones: ["+91-9666643456"],
  }
};

export const EmployeeEngagementEventsData = {
  SeoName: { seotitle: "employee-engagement-events" },
  title: "Employee Engagement Events - Leor Media",
  subtitle: "Interactive and motivational events to boost employee satisfaction and morale.",
  coverimage: EventHeroCover,
  categoryLabel: "Employee Engagement Events",
  hero: {
    title: "Employee Engagement Events",
    subtitle: "Interactive and motivational events to boost employee satisfaction and morale.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Foster a Positive Workplace",
    text: "A motivated workforce is a productive one. We design continuous employee engagement programs, workshops, and fun Fridays to keep workplace energy high.",
    details: "From wellness programs and guest speaker sessions to festive office celebrations, we do it all."
  },
  servicesTitle: "Employee Engagement Events Services",
  services: [
    { title: "In-Office Activities", description: "Fun Friday events and desk-side engagements.", icon: faSmile },
    { title: "Wellness Workshops", description: "Health, fitness, and mental well-being sessions.", icon: faHandshake },
    { title: "Festival Celebrations", description: "Office decor and traditional festivities.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Enhance your company culture with our engagement events.",
    phones: ["+91-9666643456"],
  }
};

export const CelebrityManagementData = {
  SeoName: { seotitle: "celebrity-management" },
  title: "Celebrity Management - Leor Media",
  subtitle: "End-to-end booking and management of top-tier celebrities and artists.",
  coverimage: EventHeroCover,
  categoryLabel: "Celebrity Management",
  hero: {
    title: "Celebrity Management",
    subtitle: "End-to-end booking and management of top-tier celebrities and artists.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Bring Star Power to Your Event",
    text: "Elevate your event's prestige by bringing in A-list celebrities, influencers, and performers. We handle negotiations, contracts, and on-ground logistics for seamless celebrity integration.",
    details: "Our vast network ensures you get the right talent for endorsements, appearances, or performances."
  },
  servicesTitle: "Celebrity Management Services",
  services: [
    { title: "Artist Booking & Contracts", description: "Hassle-free negotiation and legal management.", icon: faHandshake },
    { title: "Travel & Security", description: "VIP logistics, bouncers, and luxury transport.", icon: faBriefcase },
    { title: "On-Ground Coordination", description: "Ensuring the artist's schedule runs smoothly.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Secure top talent for your next big event.",
    phones: ["+91-9666643456"],
  }
};

export const LiveConcertsData = {
  SeoName: { seotitle: "live-concerts" },
  title: "Live Concerts - Leor Media",
  subtitle: "Spectacular musical nights with flawless sound, lighting, and crowd control.",
  coverimage: EventHeroCover,
  categoryLabel: "Live Concerts",
  hero: {
    title: "Live Concerts",
    subtitle: "Spectacular musical nights with flawless sound, lighting, and crowd control.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Electrifying Live Music Experiences",
    text: "We produce massive live concerts featuring top bands and solo artists. Our expertise in technical production ensures an unforgettable auditory and visual experience.",
    details: "We manage ticketing, barricading, stage fabrication, heavy duty sound systems, and artist hospitality."
  },
  servicesTitle: "Live Concerts Services",
  services: [
    { title: "Technical Production", description: "Line array sound systems and intelligent lighting.", icon: faMusic },
    { title: "Crowd Management", description: "Strategic barricading and professional security.", icon: faUsers },
    { title: "Ticketing Solutions", description: "Online and offline box office management.", icon: faStore }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Produce a sold-out concert with our expert management.",
    phones: ["+91-9666643456"],
  }
};

export const DjNightsData = {
  SeoName: { seotitle: "dj-nights" },
  title: "DJ Nights & Club Events - Leor Media",
  subtitle: "High-energy club events, EDM festivals, and premium DJ bookings.",
  coverimage: EventHeroCover,
  categoryLabel: "DJ Nights & Club Events",
  hero: {
    title: "DJ Nights & Club Events",
    subtitle: "High-energy club events, EDM festivals, and premium DJ bookings.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Unstoppable Dance Floor Energy",
    text: "We organize electrifying DJ nights that keep the crowd moving until dawn. From club gigs to massive outdoor EDM festivals, we bring the best beats to Vizag.",
    details: "Our services include stage SFX, LED wall visuals, top DJ bookings, and premium bar setups."
  },
  servicesTitle: "DJ Nights & Club Events Services",
  services: [
    { title: "Top DJ Bookings", description: "Sourcing national and international DJs.", icon: faMusic },
    { title: "Special Effects (SFX)", description: "CO2 jets, cold pyros, and laser shows.", icon: faStar },
    { title: "Venue & Bar Management", description: "Optimizing flow for high-volume crowds.", icon: faGlassCheers }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Host an unforgettable night of music and dance.",
    phones: ["+91-9666643456"],
  }
};

export const FashionShowsData = {
  SeoName: { seotitle: "fashion-shows" },
  title: "Fashion Shows & Runways - Leor Media",
  subtitle: "Glamorous runway setups, model management, and backstage coordination.",
  coverimage: EventHeroCover,
  categoryLabel: "Fashion Shows & Runways",
  hero: {
    title: "Fashion Shows & Runways",
    subtitle: "Glamorous runway setups, model management, and backstage coordination.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Setting Trends on the Runway",
    text: "We produce high-end fashion shows for designers, brands, and colleges. Our eye for aesthetics ensures that your collection is presented in the most glamorous light.",
    details: "We handle model casting, choreography, backstage management, makeup artists, and thematic ramp designs."
  },
  servicesTitle: "Fashion Shows & Runways Services",
  services: [
    { title: "Ramp & Stage Design", description: "Custom-built runways with dynamic lighting.", icon: faDraftingCompass },
    { title: "Model & Choreographer Casting", description: "Sourcing top talent for your showcase.", icon: faUsers },
    { title: "Backstage Management", description: "Seamless coordination of quick changes and cues.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Showcase your fashion collection with elegance and style.",
    phones: ["+91-9666643456"],
  }
};

export const CulturalEventsData = {
  SeoName: { seotitle: "cultural-events" },
  title: "Cultural Events & Festivals - Leor Media",
  subtitle: "Celebrating heritage and arts with grand cultural showcases.",
  coverimage: EventHeroCover,
  categoryLabel: "Cultural Events & Festivals",
  hero: {
    title: "Cultural Events & Festivals",
    subtitle: "Celebrating heritage and arts with grand cultural showcases.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "A Celebration of Culture",
    text: "We organize vibrant cultural events that celebrate local heritage, arts, and traditions. Our events are designed to be inclusive, educational, and highly entertaining.",
    details: "From folk dance performances to art exhibitions, we manage venues, artists, and public relations."
  },
  servicesTitle: "Cultural Events & Festivals Services",
  services: [
    { title: "Folk & Classical Artists", description: "Booking authentic traditional performers.", icon: faMusic },
    { title: "Traditional Decor", description: "Authentic and vibrant thematic styling.", icon: faScroll },
    { title: "Community Engagement", description: "Marketing campaigns to draw local crowds.", icon: faBullhorn }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Bring your cultural vision to life with our team.",
    phones: ["+91-9666643456"],
  }
};

export const CollegeFestEventsData = {
  SeoName: { seotitle: "college-fest-events" },
  title: "College Fests - Leor Media",
  subtitle: "High-octane college festivals, pro-shows, and technical symposiums.",
  coverimage: EventHeroCover,
  categoryLabel: "College Fests",
  hero: {
    title: "College Fests",
    subtitle: "High-octane college festivals, pro-shows, and technical symposiums.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "The Ultimate Campus Experience",
    text: "We partner with universities to elevate their college fests into massive city-wide attractions. We bring professionalism to student-led events without losing the youthful energy.",
    details: "We assist with sponsor acquisition, pro-show artist bookings, stage setups, and security logistics."
  },
  servicesTitle: "College Fests Services",
  services: [
    { title: "Pro-Show Management", description: "Booking top bands and DJs for the main night.", icon: faMusic },
    { title: "Sponsorship Assistance", description: "Creating pitch decks to attract brand sponsors.", icon: faHandshake },
    { title: "Event Logistics", description: "Stage, sound, and barricading for large student crowds.", icon: faDraftingCompass }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Upgrade your college fest into a mega-event.",
    phones: ["+91-9666643456"],
  }
};

export const BrandPromotionsData = {
  SeoName: { seotitle: "brand-promotions" },
  title: "Brand Promotions - Leor Media",
  subtitle: "Engaging campaigns and activations to boost your brand visibility.",
  coverimage: EventHeroCover,
  categoryLabel: "Brand Promotions",
  hero: {
    title: "Brand Promotions",
    subtitle: "Engaging campaigns and activations to boost your brand visibility.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Amplify Your Brand Presence",
    text: "We design highly interactive brand promotion campaigns that capture attention and drive customer acquisition. Our strategies ensure your brand stands out in a crowded market.",
    details: "From BTL activations to guerrilla marketing, we deploy trained promoters and creative setups."
  },
  servicesTitle: "Brand Promotions Services",
  services: [
    { title: "BTL Activations", description: "Direct-to-consumer engagement strategies.", icon: faBullseye },
    { title: "Trained Promoters", description: "Providing skilled manpower to represent your brand.", icon: faUsers },
    { title: "Creative Fabrication", description: "Eye-catching promotional kiosks and standees.", icon: faDraftingCompass }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Boost your brand visibility with targeted promotions.",
    phones: ["+91-9666643456"],
  }
};

export const MallActivationsData = {
  SeoName: { seotitle: "mall-activations" },
  title: "Mall Activations - Leor Media",
  subtitle: "High-footfall engagements in premium malls to capture target audiences.",
  coverimage: EventHeroCover,
  categoryLabel: "Mall Activations",
  hero: {
    title: "Mall Activations",
    subtitle: "High-footfall engagements in premium malls to capture target audiences.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Engage Audiences Where They Shop",
    text: "Malls offer a captive audience ready to engage. We create immersive mall activations featuring interactive games, VR experiences, and product sampling to draw crowds.",
    details: "We handle mall permissions, setup fabrication, and weekend crowd management."
  },
  servicesTitle: "Mall Activations Services",
  services: [
    { title: "Interactive Engagement", description: "Gamification and contests to draw footfall.", icon: faSmile },
    { title: "Setup Fabrication", description: "Custom-built engaging zones within mall spaces.", icon: faStore },
    { title: "Lead Generation", description: "Data collection through engaging digital forms.", icon: faHandshake }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Launch your mall activation campaign today.",
    phones: ["+91-9666643456"],
  }
};

export const RoadShowsData = {
  SeoName: { seotitle: "road-shows" },
  title: "Road Shows - Leor Media",
  subtitle: "Mobile promotional campaigns taking your brand directly to the consumer.",
  coverimage: EventHeroCover,
  categoryLabel: "Road Shows",
  hero: {
    title: "Road Shows",
    subtitle: "Mobile promotional campaigns taking your brand directly to the consumer.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Take Your Brand to the Streets",
    text: "Maximize geographic reach with our dynamic roadshow campaigns. We design customized mobile vehicles that act as moving stages and experiential zones for your brand.",
    details: "Our services cover route planning, vehicle fabrication, RTO permissions, and on-board emcees."
  },
  servicesTitle: "Road Shows Services",
  services: [
    { title: "Canter Fabrication", description: "Customizing trucks and vans for brand displays.", icon: faDraftingCompass },
    { title: "Route & Permissions", description: "Strategic planning and legal clearances.", icon: faScroll },
    { title: "On-Board Entertainment", description: "Emcees and performers to gather local crowds.", icon: faBullhorn }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Hit the road with a powerful mobile marketing campaign.",
    phones: ["+91-9666643456"],
  }
};

export const StoreLaunchesData = {
  SeoName: { seotitle: "store-launches" },
  title: "Store Launches - Leor Media",
  subtitle: "Grand retail openings that attract massive footfall and media attention.",
  coverimage: EventHeroCover,
  categoryLabel: "Store Launches",
  hero: {
    title: "Store Launches",
    subtitle: "Grand retail openings that attract massive footfall and media attention.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Make a Grand Entrance",
    text: "A successful store launch sets the tone for your retail business. We create buzz-worthy opening events that draw massive crowds and generate immediate sales momentum.",
    details: "We manage ribbon-cutting ceremonies, celebrity guests, outdoor decor, and local PR."
  },
  servicesTitle: "Store Launches Services",
  services: [
    { title: "Celebrity Ribbon Cutting", description: "Bringing star power to your grand opening.", icon: faStar },
    { title: "Festive Decor", description: "Balloon arches, floral setups, and red carpets.", icon: faSmile },
    { title: "Crowd & Traffic Management", description: "Ensuring smooth operations on day one.", icon: faUsers }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Plan a blockbuster opening day for your new store.",
    phones: ["+91-9666643456"],
  }
};

export const PoliticalCampaignEventsData = {
  SeoName: { seotitle: "political-campaign-events" },
  title: "Political Campaign Events - Leor Media",
  subtitle: "Massive public rallies and strategic political campaign management.",
  coverimage: EventHeroCover,
  categoryLabel: "Political Campaign Events",
  hero: {
    title: "Political Campaign Events",
    subtitle: "Massive public rallies and strategic political campaign management.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Command the Public Stage",
    text: "We provide comprehensive event logistics for political campaigns, ensuring that your message reaches the masses with clarity and impact.",
    details: "Our team handles massive stage setups, line array audio, LED screens, and highly secure VIP protocols."
  },
  servicesTitle: "Political Campaign Events Services",
  services: [
    { title: "Massive Infrastructure", description: "Heavy-duty stages and weather-proof setups.", icon: faDraftingCompass },
    { title: "Audio Visual Dominance", description: "Ensuring your message is heard by thousands.", icon: faBullhorn },
    { title: "Security Protocols", description: "Strict crowd control and VIP safety measures.", icon: faHandshake }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Ensure your political rally is a resounding success.",
    phones: ["+91-9666643456"],
  }
};

export const PublicRelationEventsData = {
  SeoName: { seotitle: "public-relation-events" },
  title: "Public Relations Events - Leor Media",
  subtitle: "Press conferences, media meets, and strategic PR gatherings.",
  coverimage: EventHeroCover,
  categoryLabel: "Public Relations Events",
  hero: {
    title: "Public Relations Events",
    subtitle: "Press conferences, media meets, and strategic PR gatherings.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Control Your Narrative",
    text: "We organize seamless PR events and press conferences that help you communicate effectively with the media. We ensure a professional environment tailored for journalists and influencers.",
    details: "We provide media kits, backdrop branding, dedicated Q&A audio setups, and press hospitality."
  },
  servicesTitle: "Public Relations Events Services",
  services: [
    { title: "Media Coordination", description: "Inviting and managing key journalists.", icon: faBullhorn },
    { title: "Press Kits & Branding", description: "Professional backdrops and informative materials.", icon: faBriefcase },
    { title: "Q&A Management", description: "Flawless audio systems for press interactions.", icon: faMusic }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Host a flawless press conference with our expert team.",
    phones: ["+91-9666643456"],
  }
};

export const ExhibitionStallDesignData = {
  SeoName: { seotitle: "exhibition-stall-design" },
  title: "Exhibition Stall Design - Leor Media",
  subtitle: "Custom-fabricated, high-quality exhibition stalls that capture attention.",
  coverimage: EventHeroCover,
  categoryLabel: "Exhibition Stall Design",
  hero: {
    title: "Exhibition Stall Design",
    subtitle: "Custom-fabricated, high-quality exhibition stalls that capture attention.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Stand Out on the Expo Floor",
    text: "Your exhibition stall is your brand's physical identity at a trade show. We design and fabricate custom, high-impact stalls that attract footfall and facilitate business.",
    details: "Our 3D designers and skilled fabricators build modular and wooden stalls tailored to your needs."
  },
  servicesTitle: "Exhibition Stall Design Services",
  services: [
    { title: "3D Design & Rendering", description: "Visualizing your stall before fabrication.", icon: faDraftingCompass },
    { title: "Premium Fabrication", description: "High-quality woodwork, acrylics, and finishes.", icon: faStore },
    { title: "Turnkey Execution", description: "From installation to dismantling post-event.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Get a stunning 3D design for your next exhibition stall.",
    phones: ["+91-9666643456"],
  }
};

export const TradeShowManagementData = {
  SeoName: { seotitle: "trade-show-management" },
  title: "Trade Show Management - Leor Media",
  subtitle: "Comprehensive logistics and management for large-scale B2B trade shows.",
  coverimage: EventHeroCover,
  categoryLabel: "Trade Show Management",
  hero: {
    title: "Trade Show Management",
    subtitle: "Comprehensive logistics and management for large-scale B2B trade shows.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Seamless Expo Operations",
    text: "Organizing a trade show requires balancing the needs of hundreds of exhibitors and thousands of visitors. We provide the end-to-end infrastructure required for mega-expos.",
    details: "We handle octonorm stall setups, registration desks, carpeting, electrical distributions, and security."
  },
  servicesTitle: "Trade Show Management Services",
  services: [
    { title: "Octonorm Stall Setup", description: "Standardized booth creation for exhibitors.", icon: faStore },
    { title: "Layout & Floor Planning", description: "Optimizing space for maximum visitor flow.", icon: faDraftingCompass },
    { title: "Exhibitor Support", description: "Dedicated helpdesks and technical assistance.", icon: faHandshake }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with us to organize a world-class trade show.",
    phones: ["+91-9666643456"],
  }
};

export const ExpoPromotionsData = {
  SeoName: { seotitle: "expo-promotions" },
  title: "Expo Promotions - Leor Media",
  subtitle: "Pre-event marketing and on-ground activations to boost expo attendance.",
  coverimage: EventHeroCover,
  categoryLabel: "Expo Promotions",
  hero: {
    title: "Expo Promotions",
    subtitle: "Pre-event marketing and on-ground activations to boost expo attendance.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Drive Footfall to Your Trade Show",
    text: "A trade show is only successful if the right audience walks through the doors. We execute targeted marketing campaigns to ensure high visitor registration and attendance.",
    details: "From digital marketing to outdoor hoardings and radio ads, we create a multi-channel buzz."
  },
  servicesTitle: "Expo Promotions Services",
  services: [
    { title: "Visitor Registration Drives", description: "Targeted campaigns to gather B2B leads.", icon: faBullseye },
    { title: "Outdoor & Radio Marketing", description: "City-wide awareness campaigns.", icon: faBullhorn },
    { title: "On-Ground Signage", description: "Wayfinding and directional branding at the venue.", icon: faDraftingCompass }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Maximize visitor attendance for your upcoming expo.",
    phones: ["+91-9666643456"],
  }
};

export const PoojaEventsData = {
  SeoName: { seotitle: "pooja-events" },
  title: "Pooja Events - Leor Media",
  subtitle: "Serene, beautiful, and authentic setups for home or corporate poojas.",
  coverimage: EventHeroCover,
  categoryLabel: "Pooja Events",
  hero: {
    title: "Pooja Events",
    subtitle: "Serene, beautiful, and authentic setups for home or corporate poojas.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Divine Settings for Sacred Moments",
    text: "We provide complete decor and management for religious poojas, ensuring a serene and spiritually uplifting atmosphere. We honor traditions with authentic floral arrangements and staging.",
    details: "Whether it's a corporate office inauguration or a home ceremony, we handle all requirements respectfully."
  },
  servicesTitle: "Pooja Events Services",
  services: [
    { title: "Authentic Floral Decor", description: "Traditional flowers, garlands, and mandap setups.", icon: faLeaf },
    { title: "Seating & Hospitality", description: "Comfortable arrangements for guests and priests.", icon: faSmile },
    { title: "Traditional Catering", description: "Pure vegetarian, authentic festive menus.", icon: faGlassCheers }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Create a beautiful atmosphere for your next pooja.",
    phones: ["+91-9666643456"],
  }
};

export const TempleFestivalsData = {
  SeoName: { seotitle: "temple-festivals" },
  title: "Temple Festivals - Leor Media",
  subtitle: "Large-scale management and infrastructure for grand temple celebrations.",
  coverimage: EventHeroCover,
  categoryLabel: "Temple Festivals",
  hero: {
    title: "Temple Festivals",
    subtitle: "Large-scale management and infrastructure for grand temple celebrations.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Managing Grand Spiritual Gatherings",
    text: "Temple festivals attract massive crowds and require robust infrastructure. We provide safe, scalable, and beautifully designed setups for major religious festivities.",
    details: "We supply massive pandals, heavy-duty lighting, audio for mantras, and strict crowd control measures."
  },
  servicesTitle: "Temple Festivals Services",
  services: [
    { title: "Pandal & Tent Structures", description: "Weather-proof massive sheltering for devotees.", icon: faDraftingCompass },
    { title: "Crowd Barricading", description: "Safe and systematic queue management.", icon: faUsers },
    { title: "Audio & Illumination", description: "Clear PA systems and stunning temple lighting.", icon: faMusic }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Ensure a safe and grand celebration for your temple festival.",
    phones: ["+91-9666643456"],
  }
};

export const TraditionalCeremoniesData = {
  SeoName: { seotitle: "traditional-ceremonies" },
  title: "Traditional Ceremonies - Leor Media",
  subtitle: "Culturally rich decor, catering, and management for traditional events.",
  coverimage: EventHeroCover,
  categoryLabel: "Traditional Ceremonies",
  hero: {
    title: "Traditional Ceremonies",
    subtitle: "Culturally rich decor, catering, and management for traditional events.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true },
    ]
  },
  introduction: {
    heading: "Honoring Heritage in Every Detail",
    text: "From naming ceremonies to half-saree functions, we bring your cultural milestones to life with vibrant decor and flawless hospitality.",
    details: "We focus on the minute details of tradition, ensuring your cultural expectations are met perfectly."
  },
  servicesTitle: "Traditional Ceremonies Services",
  services: [
    { title: "Thematic Traditional Decor", description: "Using cultural motifs, brassware, and rich fabrics.", icon: faScroll },
    { title: "Catering Management", description: "Authentic regional cuisines served with care.", icon: faGlassCheers },
    { title: "Photography & Videography", description: "Capturing your timeless cultural moments.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Plan a beautifully authentic traditional ceremony with us.",
    phones: ["+91-9666643456"],
  }
};


// Assign unique cover images to each subpage data object
CorporateEventsData.coverimage = CorporateEventsImg;
EntertainmentEventsData.coverimage = EntertainmentEventsImg;
PromotionalEventsData.coverimage = PromotionalEventsImg;
ExhibitionTradeShowsData.coverimage = ExhibitionTradeImg;
ReligiousTraditionalEventsData.coverimage = ReligiousTraditionalImg;
CorporateMeetingsData.coverimage = CorporateMeetingsImg;
ConferencesSeminarsData.coverimage = ConferencesSeminarsImg;
ProductLaunchEventsData.coverimage = ProductLaunchImg;
AwardFunctionsData.coverimage = AwardFunctionsImg;
TeamOutingsData.coverimage = TeamOutingsImg;
AnnualDayCelebrationsData.coverimage = AnnualDayImg;
EmployeeEngagementEventsData.coverimage = EmployeeEngagementImg;
CelebrityManagementData.coverimage = CelebrityManagementImg;
LiveConcertsData.coverimage = LiveConcertsImg;
DjNightsData.coverimage = DjNightsImg;
FashionShowsData.coverimage = FashionShowsImg;
CulturalEventsData.coverimage = CulturalEventsImg;
CollegeFestEventsData.coverimage = CollegeFestImg;
BrandPromotionsData.coverimage = BrandPromotionsImg;
MallActivationsData.coverimage = MallActivationsImg;
RoadShowsData.coverimage = RoadShowsImg;
StoreLaunchesData.coverimage = StoreLaunchesImg;
PoliticalCampaignEventsData.coverimage = PoliticalCampaignImg;
PublicRelationEventsData.coverimage = PublicRelationImg;
ExhibitionStallDesignData.coverimage = ExhibitionStallImg;
TradeShowManagementData.coverimage = TradeShowImg;
ExpoPromotionsData.coverimage = ExpoPromotionsImg;
PoojaEventsData.coverimage = PoojaEventsImg;
TempleFestivalsData.coverimage = TempleFestivalsImg;
TraditionalCeremoniesData.coverimage = TraditionalCeremoniesImg;

// Mapping for individual pages
export const EventsDetailPageData = {"corporate-events": CorporateEventsData,"entertainment-events": EntertainmentEventsData,"promotional-events": PromotionalEventsData,"exhibition-and-trade-shows": ExhibitionTradeShowsData,"religious-and-traditional-events": ReligiousTraditionalEventsData,"corporate-meetings": CorporateMeetingsData,"conferences-seminars": ConferencesSeminarsData,"product-launch-events": ProductLaunchEventsData,"award-functions": AwardFunctionsData,"team-outings": TeamOutingsData,"annual-day-celebrations": AnnualDayCelebrationsData,"employee-engagement-events": EmployeeEngagementEventsData,"celebrity-management": CelebrityManagementData,"live-concerts": LiveConcertsData,"dj-nights": DjNightsData,"fashion-shows": FashionShowsData,"cultural-events": CulturalEventsData,"college-fest-events": CollegeFestEventsData,"brand-promotions": BrandPromotionsData,"mall-activations": MallActivationsData,"road-shows": RoadShowsData,"store-launches": StoreLaunchesData,"political-campaign-events": PoliticalCampaignEventsData,"public-relation-events": PublicRelationEventsData,"exhibition-stall-design": ExhibitionStallDesignData,"trade-show-management": TradeShowManagementData,"expo-promotions": ExpoPromotionsData,"pooja-events": PoojaEventsData,"temple-festivals": TempleFestivalsData,"traditional-ceremonies": TraditionalCeremoniesData,
};
