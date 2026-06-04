import { EventHeroCover } from "../../../assets/data/Imagedata";
import CorporateEventsImg from "./EventsImages/corporate_events.png";
import EntertainmentEventsImg from "./EventsImages/entertainment_events.png";
import PromotionalEventsImg from "./EventsImages/promotional_events.png";
import ExhibitionTradeImg from "./EventsImages/exhibition_trade.png";
import ReligiousTraditionalImg from "./EventsImages/religious_traditional.png";
import CorporateMeetingsImg from "./EventsImages/corporate_meetings.png";
import ConferencesSeminarsImg from "./EventsImages/conferences_seminars.png";
import ProductLaunchImg from "./EventsImages/product_launch.png";
import AwardFunctionsImg from "./EventsImages/award_functions.png";
import TeamOutingsImg from "./EventsImages/team_outings.png";
import AnnualDayImg from "./EventsImages/annual_day.png";
import EmployeeEngagementImg from "./EventsImages/employee_engagement.png";
import CelebrityManagementImg from "./EventsImages/celebrity_management.png";
import LiveConcertsImg from "./EventsImages/live_concerts.png";
import DjNightsImg from "./EventsImages/dj_nights.png";
import FashionShowsImg from "./EventsImages/fashion_shows.png";
import CulturalEventsImg from "./EventsImages/cultural_events.png";
import CollegeFestImg from "./EventsImages/college_fest.png";
import BrandPromotionsImg from "./EventsImages/brand_promotions.png";
import MallActivationsImg from "./EventsImages/mall_activations.png";
import RoadShowsImg from "./EventsImages/road_shows.png";
import StoreLaunchesImg from "./EventsImages/store_launches.png";
import PoliticalCampaignImg from "./EventsImages/political_campaign.png";
import PublicRelationImg from "./EventsImages/public_relation.png";
import ExhibitionStallImg from "./EventsImages/exhibition_stall.png";
import TradeShowImg from "./EventsImages/trade_show.png";
import ExpoPromotionsImg from "./EventsImages/expo_promotions.png";
import PoojaEventsImg from "./EventsImages/pooja_events.png";
import TempleFestivalsImg from "./EventsImages/temple_festivals.png";
import TraditionalCeremoniesImg from "./EventsImages/traditional_ceremonies.png";
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
//mianpage
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






//subpages
export const CorporateMeetingsData = {
  SeoName: { seotitle: "corporate-meetings" },
  title: "Corporate Meetings Management - Leor Media",
  subtitle: "Professional Corporate Meeting Planning & Management Services",
  coverimage: EventHeroCover,
  categoryLabel: "Corporate Meetings Management",
  hero: {
    title: "Corporate Meetings",
    subtitle: "Professional Corporate Meeting Planning & Management Services",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Professional Corporate Meeting Planning & Management Services",
    text: "Successful corporate meetings require more than just a venue. They demand strategic planning, flawless execution, and a professional environment that inspires collaboration and productivity. At Leor Media, we specialize in corporate meeting management, delivering seamless experiences for businesses of all sizes.",
    details: "Whether you are organizing board meetings, annual business conferences, client presentations, leadership summits, team-building sessions, or corporate networking events, our expert team ensures every detail is managed with precision and professionalism."
  },
  servicesTitle: "Corporate Meetings Management Services",
  services: [
    { title: "Venue Selection & Setup", description: "We help identify the perfect venue that aligns with your business objectives, audience size, and brand image. From conference halls to premium meeting spaces, we handle everything from setup to execution.", icon: faBriefcase },
    { title: "Audio Visual & Technical Support", description: "Our team manages advanced audio systems, LED screens, projectors, live streaming, video conferencing, and presentation support to ensure smooth communication throughout your event.", icon: faMusic },
    { title: "Registration & Guest Management", description: "From attendee registration and invitations to guest coordination and on-site assistance, we ensure a hassle-free experience for every participant.", icon: faBriefcase },
    { title: "Branding & Event Design", description: "We create professional branding elements, stage designs, digital displays, welcome signage, and customized event experiences that reflect your company's identity.", icon: faDraftingCompass },
    { title: "Corporate Hospitality", description: "We arrange premium hospitality services, catering, accommodation, transportation, and VIP guest management to provide a comfortable and memorable experience.", icon: faGlassCheers },
    { title: "End-to-End Event Coordination", description: "Our dedicated event managers oversee every aspect of the meeting, ensuring timelines are met, logistics are coordinated, and your event runs smoothly from start to finish.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we transform ordinary business meetings into impactful corporate experiences. Our commitment to excellence, attention to detail, and client-focused approach make us a trusted partner for corporate meeting management.",
    phones: ["+91-9666643456"]
  }
};

export const ConferencesSeminarsData = {
  SeoName: { seotitle: "conferences-seminars" },
  title: "Conferences & Seminars - Leor Media",
  subtitle: "Creating impactful conferences, inspiring seminars, and memorable professional events through strategic planning and flawless execution.",
  coverimage: EventHeroCover,
  categoryLabel: "Conferences & Seminars",
  hero: {
    title: "Professional Conferences & Seminars Management Services",
    subtitle: "Creating impactful conferences, inspiring seminars, and memorable professional events through strategic planning and flawless execution.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Professional Conference & Seminar Planning Services",
    text: "Transform your ideas into impactful events with Leor Media's expert conference & seminar management services. We specialize in planning, organizing, and executing professional conferences, business seminars, industry summits, educational workshops, leadership forums, and corporate knowledge-sharing events.",
    details: "Whether you're hosting a small business seminar or a large-scale international conference, our experienced event management team ensures every aspect of your event is planned and executed flawlessly."
  },
  servicesTitle: "Conferences & Seminars Services",
  services: [
    { title: "Venue Selection & Event Setup", description: "We identify and manage the ideal venue based on your event requirements, audience size, and business objectives. From conference halls to convention centers, we ensure a professional and comfortable environment.", icon: faBriefcase },
    { title: "Speaker & Session Management", description: "Our team coordinates speaker schedules, presentation requirements, session planning, panel discussions, keynote addresses, and event timelines to ensure a smooth experience for speakers and attendees.", icon: faBriefcase },
    { title: "Audio Visual & Technology Solutions", description: "We provide advanced audio systems, LED displays, projectors, live streaming services, video conferencing solutions, and technical support to deliver a world-class event experience.", icon: faMusic },
    { title: "Registration & Attendee Management", description: "From online registrations and invitation management to attendee tracking and on-site support, we streamline the entire participant experience.", icon: faBriefcase },
    { title: "Branding & Event Promotion", description: "We create impactful event branding, stage designs, promotional materials, digital displays, event signage, and marketing support to maximize event visibility and engagement.", icon: faDraftingCompass },
    { title: "Hospitality & Logistics Management", description: "Our team manages accommodation, transportation, catering, VIP guest services, and event logistics to ensure a hassle-free and memorable experience for all participants.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe every conference and seminar should create lasting value for attendees. Our expertise, creativity, and attention to detail help organizations deliver impactful events that educate, inspire, and strengthen professional relationships. Partner with Leor Media to create conferences and seminars that leave a lasting impression on your audience and achieve your event objectives successfully.",
    phones: ["+91-9666643456"]
  }
};

export const ProductLaunchEventsData = {
  SeoName: { seotitle: "product-launch-events" },
  title: "Product Launch Events - Leor Media",
  subtitle: "Creating unforgettable product launch experiences that build excitement, strengthen brand presence, and drive business success.",
  coverimage: EventHeroCover,
  categoryLabel: "Product Launch Events",
  hero: {
    title: "Professional Product Launch Event Management Services",
    subtitle: "Creating unforgettable product launch experiences that build excitement, strengthen brand presence, and drive business success.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Create Powerful First Impressions with Exceptional Product Launch Events",
    text: "A successful product launch is more than an event—it's an opportunity to introduce your brand, capture attention, generate excitement, and create lasting market impact. At Leor Media, we specialize in planning and executing memorable product launch events that help businesses showcase their products with confidence and style.",
    details: "Whether you're launching a new product, service, technology, retail brand, automobile, real estate project, or innovative solution, our expert event management team transforms your vision into an unforgettable experience."
  },
  servicesTitle: "Product Launch Events Services",
  services: [
    { title: "Creative Event Concept & Planning", description: "Every product deserves a unique introduction. We develop innovative event concepts and strategic launch plans designed to highlight your product's features, benefits, and market value.", icon: faBriefcase },
    { title: "Venue Selection & Event Setup", description: "Our team identifies the ideal venue and creates a professional event environment with customized layouts, stage design, seating arrangements, and branded event experiences.", icon: faBriefcase },
    { title: "Stage Design & Brand Presentation", description: "We design visually stunning stages, product display areas, launch backdrops, LED displays, digital branding elements, and immersive brand experiences that leave a lasting impression.", icon: faDraftingCompass },
    { title: "Audio Visual & Technical Production", description: "Deliver a world-class launch experience with advanced sound systems, LED walls, projection mapping, live streaming, special effects, lighting design, and multimedia presentations.", icon: faMusic },
    { title: "Product Unveiling Experience", description: "Create excitement and anticipation with professionally managed product reveal moments, countdown presentations, launch ceremonies, and audience engagement activities.", icon: faBriefcase },
    { title: "Media & Public Relations Support", description: "We coordinate media invitations, press conferences, influencer participation, photography, videography, and promotional coverage to maximize your product's reach.", icon: faBullhorn },
    { title: "Guest Management & Hospitality", description: "From VIP guest coordination and attendee registration to hospitality services and event logistics, we ensure a seamless experience for every participant.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand that first impressions matter. Our creative approach, strategic planning, and flawless execution help brands create impactful product launch events that attract attention, generate excitement, and drive business growth. Partner with Leor Media to launch your next product with confidence and create an unforgettable experience for your audience.",
    phones: ["+91-9666643456"]
  }
};

export const AwardFunctionsData = {
  SeoName: { seotitle: "award-functions" },
  title: "Award Functions - Leor Media",
  subtitle: "Creating prestigious award ceremonies that celebrate achievements, inspire excellence, and deliver unforgettable experiences with elegance and professionalism. 🏆✨",
  coverimage: EventHeroCover,
  categoryLabel: "Award Functions",
  hero: {
    title: "Professional Award Functions Management Services",
    subtitle: "Creating prestigious award ceremonies that celebrate achievements, inspire excellence, and deliver unforgettable experiences with elegance and professionalism. 🏆✨",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Celebrating Excellence with Memorable Award Functions",
    text: "Recognition inspires success, motivates individuals, and strengthens organizations. At Leor Media, we specialize in planning and executing prestigious Award Functions that celebrate achievements with elegance, professionalism, and unforgettable experiences.",
    details: "Whether it's a corporate awards ceremony, employee recognition program, business excellence awards, educational awards, entertainment awards, or industry recognition event, our team creates exceptional award functions that honor success and leave a lasting impression on every guest."
  },
  servicesTitle: "Award Functions Services",
  services: [
    { title: "Creative Event Concept & Theme Design", description: "We design unique award function themes, event concepts, and engaging experiences that reflect your organization's values, achievements, and brand identity.", icon: faDraftingCompass },
    { title: "Venue Selection & Elegant Setup", description: "From luxury banquet halls to grand convention venues, we help select the perfect location and create a sophisticated atmosphere with premium stage setups and guest seating arrangements.", icon: faBriefcase },
    { title: "Stage Design & Award Presentation Experience", description: "Our creative team develops stunning stage designs, LED backdrops, award presentation zones, red carpet experiences, and professional branding elements that elevate the prestige of your event.", icon: faStar },
    { title: "Audio Visual & Entertainment Solutions", description: "We provide advanced sound systems, LED walls, dynamic lighting, live streaming, multimedia presentations, and entertainment performances to create an engaging and impactful event experience.", icon: faMusic },
    { title: "Guest Management & VIP Coordination", description: "From invitations and registrations to VIP guest handling and hospitality services, we ensure a smooth and comfortable experience for all attendees.", icon: faBriefcase },
    { title: "Photography & Videography", description: "Capture every memorable moment with professional photography, videography, event highlights, interviews, and award ceremony coverage.", icon: faStar },
    { title: "End-to-End Event Coordination", description: "Our dedicated event managers oversee every detail, ensuring flawless execution from planning to the final award presentation.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe every achievement deserves recognition and every award function should be memorable. Through innovative event planning, elegant execution, and attention to detail, we create award ceremonies that celebrate excellence and inspire future success. Partner with Leor Media to organize a prestigious Award Function that honors every achievement and creates lasting memories for your guests.",
    phones: ["+91-9666643456"]
  }
};

export const TeamOutingsData = {
  SeoName: { seotitle: "team-outings" },
  title: "Corporate Team Outings - Leor Media",
  subtitle: "Creating engaging team experiences that strengthen workplace relationships, boost employee morale, and inspire collaboration through memorable corporate outings.",
  coverimage: EventHeroCover,
  categoryLabel: "Corporate Team Outings",
  hero: {
    title: "Team Outings",
    subtitle: "Creating engaging team experiences that strengthen workplace relationships, boost employee morale, and inspire collaboration through memorable corporate outings.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Strengthening Teams Through Memorable Corporate Outings",
    text: "A strong team is the foundation of every successful organization. Corporate team outings provide employees with the opportunity to connect, collaborate, relax, and build stronger workplace relationships outside the office environment. At Leor Media, we specialize in planning and organizing engaging Corporate Team Outings that inspire teamwork, boost morale, and create unforgettable experiences.",
    details: "Whether you're planning a one-day team outing, annual corporate retreat, employee engagement program, leadership getaway, or team-building adventure, we deliver customized experiences that align with your company culture and objectives."
  },
  servicesTitle: "Corporate Team Outings Services",
  services: [
    { title: "Customized Team Outing Planning", description: "Every organization is unique. We design personalized team outing programs tailored to your goals, team size, budget, and preferred activities.", icon: faBriefcase },
    { title: "Destination & Venue Selection", description: "From beach resorts and luxury retreats to adventure parks and nature destinations, we help choose the perfect location that offers relaxation, engagement, and memorable experiences.", icon: faBriefcase },
    { title: "Team Building Activities", description: "We organize interactive team-building exercises, leadership challenges, group activities, icebreaker sessions, and fun competitions that strengthen collaboration and communication.", icon: faSmile },
    { title: "Adventure & Recreational Experiences", description: "Create excitement with outdoor adventures, sports activities, entertainment programs, cultural experiences, and recreational events designed to energize and engage participants.", icon: faBriefcase },
    { title: "Travel & Transportation Management", description: "Our team manages transportation, travel arrangements, accommodation, and logistics to ensure a smooth, hassle-free outing.", icon: faBriefcase },
    { title: "Food & Hospitality Services", description: "We provide quality catering, refreshments, hospitality support, and customized dining experiences that enhance employee satisfaction and comfort.", icon: faGlassCheers },
    { title: "Complete Event Coordination", description: "From planning and scheduling to on-site management and execution, our dedicated event coordinators ensure every detail is professionally managed.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe great teams are built through meaningful experiences. Our carefully planned corporate team outings help organizations improve employee engagement, encourage collaboration, strengthen workplace relationships, and create lasting memories. Partner with Leor Media to organize a corporate team outing that motivates your employees, enhances teamwork, and contributes to long-term organizational success.",
    phones: ["+91-9666643456"]
  }
};

export const AnnualDayCelebrationsData = {
  SeoName: { seotitle: "annual-day-celebrations" },
  title: "Annual Day Celebrations - Leor Media",
  subtitle: "Transforming annual celebrations into memorable experiences that recognize achievements, inspire employees, and strengthen organizational culture.",
  coverimage: EventHeroCover,
  categoryLabel: "Annual Day Celebrations",
  hero: {
    title: "Professional Annual Day Celebrations Management Services",
    subtitle: "Transforming annual celebrations into memorable experiences that recognize achievements, inspire employees, and strengthen organizational culture.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Celebrating Success, Achievements & Togetherness",
    text: "An Annual Day Celebration is more than just an event—it's a reflection of an organization's journey, achievements, culture, and people. At Leor Media, we specialize in creating extraordinary Annual Day Celebrations that bring employees, management, and stakeholders together to celebrate success, recognize achievements, and create lasting memories.",
    details: "Whether it's a corporate annual day, company anniversary celebration, employee appreciation event, educational institution annual function, or organizational milestone celebration, our expert event planners ensure a memorable and professionally executed experience."
  },
  servicesTitle: "Annual Day Celebrations Services",
  services: [
    { title: "Creative Theme Development", description: "Every successful celebration starts with a unique concept. Our team develops innovative themes and event experiences that reflect your organization's culture, values, and achievements.", icon: faBriefcase },
    { title: "Venue Selection & Event Setup", description: "From luxury banquet halls and convention centers to outdoor venues, we help select the perfect location and create stunning event environments with professional décor and seamless arrangements.", icon: faBriefcase },
    { title: "Stage Design & Event Branding", description: "We create visually impressive stages, LED backdrops, customized branding elements, welcome zones, photo booths, and thematic décor that enhance the event atmosphere.", icon: faDraftingCompass },
    { title: "Employee Recognition & Award Ceremonies", description: "Celebrate excellence through professionally organized award presentations, employee recognition programs, achievement ceremonies, and milestone celebrations.", icon: faStar },
    { title: "Entertainment & Cultural Programs", description: "Keep your audience engaged with live performances, celebrity appearances, cultural activities, music shows, dance performances, interactive games, and entertainment segments.", icon: faSmile },
    { title: "Audio Visual & Technical Support", description: "Our team provides advanced sound systems, LED walls, dynamic lighting, multimedia presentations, live streaming, and event technology solutions to deliver a flawless event experience.", icon: faMusic },
    { title: "Hospitality & Guest Management", description: "From invitations and registrations to catering, accommodation, transportation, and VIP guest coordination, we ensure a smooth and enjoyable experience for every attendee.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe every achievement deserves to be celebrated. Our innovative planning, creative execution, and commitment to excellence help organizations create annual day celebrations that inspire employees, strengthen company culture, and build meaningful connections. Partner with Leor Media to create an Annual Day Celebration that reflects your organization's success, values, and vision for the future.",
    phones: ["+91-9666643456"]
  }
};

export const EmployeeEngagementEventsData = {
  SeoName: { seotitle: "employee-engagement-events" },
  title: "Employee Engagement Events - Leor Media",
  subtitle: "Creating meaningful employee experiences that boost morale, strengthen workplace culture, improve collaboration, and inspire organizational success.",
  coverimage: EventHeroCover,
  categoryLabel: "Employee Engagement Events",
  hero: {
    title: "Professional Employee Engagement Events Management Services",
    subtitle: "Creating meaningful employee experiences that boost morale, strengthen workplace culture, improve collaboration, and inspire organizational success.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Inspiring Teams, Strengthening Culture, Driving Success",
    text: "Employees are the heart of every successful organization. Creating a positive, engaging, and motivating work environment is essential for improving productivity, strengthening relationships, and building a strong company culture. At Leor Media, we specialize in planning and executing Employee Engagement Events that bring teams together, boost morale, and create meaningful workplace experiences.",
    details: "From team-building activities and employee appreciation programs to wellness initiatives, fun-filled celebrations, and corporate engagement events, we design experiences that help organizations connect with their people in memorable ways."
  },
  servicesTitle: "Employee Engagement Events Services",
  services: [
    { title: "Customized Engagement Programs", description: "Every organization is unique. We create personalized employee engagement events tailored to your company culture, workforce, objectives, and budget.", icon: faSmile },
    { title: "Team Building Activities", description: "Strengthen collaboration and communication through interactive team-building games, leadership challenges, problem-solving exercises, and group activities designed to improve teamwork.", icon: faSmile },
    { title: "Employee Recognition Programs", description: "Celebrate achievements and reward excellence through employee appreciation events, recognition ceremonies, milestone celebrations, and performance award programs.", icon: faBriefcase },
    { title: "Corporate Fun & Entertainment Events", description: "Create memorable experiences with themed events, cultural programs, talent shows, game zones, fun activities, and entertainment sessions that keep employees engaged and energized.", icon: faSmile },
    { title: "Health & Wellness Programs", description: "Promote employee well-being through wellness workshops, fitness challenges, mental health awareness sessions, recreational activities, and lifestyle engagement programs.", icon: faBriefcase },
    { title: "Family Day & Festive Celebrations", description: "Bring employees and their families together through family day events, festive celebrations, holiday gatherings, annual functions, and community engagement activities.", icon: faBriefcase },
    { title: "End-to-End Event Management", description: "From planning and coordination to logistics, venue management, entertainment, hospitality, and execution, our dedicated team ensures a seamless event experience.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe engaged employees create successful organizations. Our employee engagement events are designed to inspire participation, strengthen workplace relationships, enhance employee satisfaction, and foster a culture of collaboration and growth. Partner with Leor Media to create impactful employee engagement events that motivate your workforce, strengthen company culture, and contribute to long-term organizational success.",
    phones: ["+91-9666643456"]
  }
};

export const CelebrityManagementData = {
  SeoName: { seotitle: "celebrity-management" },
  title: "Celebrity Management - Leor Media",
  subtitle: "Connecting brands and events with renowned celebrities, influencers, and performers to create unforgettable experiences, powerful brand visibility, and lasting audience impact.",
  coverimage: EventHeroCover,
  categoryLabel: "Celebrity Management",
  hero: {
    title: "Professional Celebrity Management Services",
    subtitle: "Connecting brands and events with renowned celebrities, influencers, and performers to create unforgettable experiences, powerful brand visibility, and lasting audience impact.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Bringing Star Power to Your Events",
    text: "A celebrity appearance can transform an ordinary event into an extraordinary experience. Whether it's a corporate gathering, brand launch, award ceremony, wedding celebration, concert, promotional campaign, or private event, celebrity presence creates excitement, attracts attention, and leaves a lasting impression.",
    details: "At Leor Media, we specialize in professional Celebrity Management Services, connecting brands and event organizers with renowned celebrities, artists, influencers, performers, speakers, and public personalities to create unforgettable event experiences."
  },
  servicesTitle: "Celebrity Management Services",
  services: [
    { title: "Celebrity Booking & Coordination", description: "We help identify and secure the right celebrity, actor, actress, influencer, performer, motivational speaker, or public personality that aligns perfectly with your event objectives and audience.", icon: faBriefcase },
    { title: "Brand Endorsements & Promotions", description: "Enhance your brand visibility through celebrity endorsements, promotional appearances, product launches, advertising campaigns, and marketing events that create stronger audience engagement.", icon: faBullhorn },
    { title: "Corporate Event Celebrity Appearances", description: "Make your corporate events more impactful with celebrity guest appearances, keynote sessions, award presentations, leadership events, and special performances.", icon: faStar },
    { title: "Wedding & Private Event Celebrity Management", description: "Create unforgettable moments with celebrity appearances, live performances, entertainment acts, and exclusive guest experiences for weddings and private celebrations.", icon: faBriefcase },
    { title: "Influencer & Social Media Collaborations", description: "Expand your brand reach through influencer marketing campaigns, digital promotions, social media collaborations, and celebrity-driven engagement strategies.", icon: faBullhorn },
    { title: "Hospitality & Logistics Management", description: "Our team manages travel arrangements, accommodation, security coordination, hospitality services, backstage management, and all event logistics to ensure a seamless experience.", icon: faBriefcase },
    { title: "Event-Day Execution & Support", description: "From arrival coordination and stage appearances to media interactions and performance management, we handle every detail professionally and efficiently.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional celebrity management services.",
    phones: ["+91-9666643456"]
  }
};

export const LiveConcertsData = {
  SeoName: { seotitle: "live-concerts" },
  title: "Live Concerts - Leor Media",
  subtitle: "Creating electrifying live concert experiences with world-class production, artist management, audience engagement, and seamless event execution.",
  coverimage: EventHeroCover,
  categoryLabel: "Live Concerts",
  hero: {
    title: "Professional Live Concert Management Services",
    subtitle: "Creating electrifying live concert experiences with world-class production, artist management, audience engagement, and seamless event execution.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Creating Unforgettable Live Music Experiences",
    text: "A live concert is more than just a performance—it's an experience that connects artists with audiences, creates powerful emotions, and leaves lasting memories. At Leor Media, we specialize in planning, organizing, and executing spectacular Live Concerts that deliver world-class entertainment, seamless event management, and unforgettable audience experiences.",
    details: "From music festivals and celebrity concerts to cultural performances, DJ nights, college concerts, and large-scale entertainment events, we transform every show into an extraordinary celebration of music and energy."
  },
  servicesTitle: "Live Concerts Services",
  services: [
    { title: "Concert Planning & Production", description: "Every successful concert begins with strategic planning. We manage event concepts, production schedules, artist requirements, venue arrangements, and audience experiences to ensure flawless execution.", icon: faMusic },
    { title: "Artist & Celebrity Coordination", description: "We work closely with artists, performers, bands, DJs, celebrity guests, and management teams to coordinate schedules, performances, hospitality, and event requirements.", icon: faBriefcase },
    { title: "Stage Design & Production Setup", description: "Our creative team designs visually stunning stages, LED walls, lighting setups, special effects, branding elements, and concert environments that enhance the overall experience.", icon: faDraftingCompass },
    { title: "Sound, Lighting & Technical Solutions", description: "Deliver an immersive live music experience with advanced sound systems, professional lighting, video production, LED displays, live streaming, and technical event support.", icon: faMusic },
    { title: "Crowd Management & Security", description: "We prioritize safety through professional crowd management, security planning, access control, emergency support, and on-site event supervision.", icon: faBriefcase },
    { title: "Ticketing & Audience Management", description: "From ticket sales and registration systems to attendee assistance and entry management, we ensure a smooth and organized audience experience.", icon: faBriefcase },
    { title: "Hospitality & Logistics Support", description: "Our team manages artist hospitality, transportation, accommodation, backstage operations, catering services, and event logistics for seamless event delivery.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand the power of live entertainment. Our passion for creativity, commitment to excellence, and expertise in concert management help us deliver memorable events that captivate audiences and exceed expectations. Whether it's a celebrity concert, music festival, corporate entertainment event, or cultural performance, Leor Media provides complete Live Concert Management Services that bring your vision to life and create unforgettable moments.",
    phones: ["+91-9666643456"]
  }
};

export const DjNightsData = {
  SeoName: { seotitle: "dj-nights" },
  title: "DJ Nights & Club Events - Leor Media",
  subtitle: "Creating electrifying DJ night experiences with powerful music, stunning visuals, world-class entertainment, and unforgettable party vibes.",
  coverimage: EventHeroCover,
  categoryLabel: "DJ Nights & Club Events",
  hero: {
    title: "Professional DJ Night Event Management Services",
    subtitle: "Creating electrifying DJ night experiences with powerful music, stunning visuals, world-class entertainment, and unforgettable party vibes.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Turn Up the Energy with Unforgettable DJ Night Experiences",
    text: "Music, lights, energy, and excitement—DJ Nights are all about creating electrifying moments that keep audiences entertained and engaged. At Leor Media, we specialize in planning and executing high-energy DJ Night Events that deliver an unforgettable atmosphere, exceptional entertainment, and a world-class party experience.",
    details: "Whether it's a corporate celebration, college fest, nightclub event, private party, festival, beach party, or large-scale entertainment event, our team transforms every occasion into a vibrant and memorable celebration."
  },
  servicesTitle: "DJ Nights & Club Events Services",
  services: [
    { title: "Event Concept & Theme Development", description: "Every successful DJ night begins with a unique concept. We design creative themes, event experiences, and entertainment concepts tailored to your audience and event goals.", icon: faBriefcase },
    { title: "Professional DJ Booking", description: "We collaborate with talented DJs, celebrity DJs, music artists, and entertainment performers to create the perfect musical atmosphere for your event.", icon: faMusic },
    { title: "Stage Design & Visual Production", description: "Our creative production team develops stunning stage setups, LED walls, dance floors, special effects, branding displays, and immersive event environments that elevate the party experience.", icon: faStar },
    { title: "Sound, Lighting & Special Effects", description: "Experience powerful sound systems, intelligent lighting, laser shows, smoke effects, LED visuals, and advanced audio-visual technology that bring the event to life.", icon: faMusic },
    { title: "Crowd Management & Event Security", description: "Safety remains our priority. We provide professional crowd control, security management, entry coordination, and event supervision to ensure a smooth and enjoyable experience for all attendees.", icon: faBriefcase },
    { title: "Ticketing & Guest Management", description: "From registrations and ticketing solutions to VIP guest handling and attendee coordination, we manage every aspect of guest experience professionally.", icon: faBriefcase },
    { title: "Hospitality & Event Logistics", description: "We handle venue arrangements, artist hospitality, transportation, backstage coordination, catering, and event logistics to ensure flawless execution.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe every DJ Night should be more than just music—it should be an experience. Through innovative event planning, world-class production, and flawless execution, we create unforgettable nights filled with energy, entertainment, and excitement. Whether you're planning a corporate celebration, college event, private party, or large-scale entertainment show, Leor Media delivers DJ Night Management Services that keep the crowd engaged and the memories alive long after the music stops.",
    phones: ["+91-9666643456"]
  }
};

export const FashionShowsData = {
  SeoName: { seotitle: "fashion-shows" },
  title: "Fashion Shows & Runways - Leor Media",
  subtitle: "Creating stunning runway experiences that showcase fashion, creativity, elegance, and brand excellence through world-class event management.",
  coverimage: EventHeroCover,
  categoryLabel: "Fashion Shows & Runways",
  hero: {
    title: "Professional Fashion Show Management Services",
    subtitle: "Creating stunning runway experiences that showcase fashion, creativity, elegance, and brand excellence through world-class event management.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Bringing Fashion, Creativity & Elegance to Life",
    text: "Fashion is more than style—it's a statement, an experience, and a celebration of creativity. At Leor Media, we specialize in planning and executing spectacular Fashion Shows that showcase brands, designers, trends, and talent through unforgettable runway experiences.",
    details: "From designer collections and brand launches to beauty pageants, modeling events, and luxury fashion showcases, we create visually stunning fashion events that captivate audiences and leave a lasting impression."
  },
  servicesTitle: "Fashion Shows & Runways Services",
  services: [
    { title: "Fashion Show Concept & Planning", description: "We develop unique event concepts, themes, and creative strategies that align with your brand identity, fashion vision, and target audience.", icon: faBriefcase },
    { title: "Runway Design & Stage Production", description: "Our team creates elegant runway setups, designer stages, LED backdrops, lighting concepts, and immersive event environments that elevate the fashion experience.", icon: faDraftingCompass },
    { title: "Model Coordination & Management", description: "From professional models and show coordinators to backstage management and rehearsals, we ensure a smooth and professional runway presentation.", icon: faBriefcase },
    { title: "Audio Visual & Lighting Solutions", description: "We provide advanced sound systems, dynamic lighting, LED walls, visual effects, multimedia displays, and technical support to create a world-class fashion event atmosphere.", icon: faMusic },
    { title: "Designer & Brand Showcase", description: "Highlight your collection with customized branding, product displays, promotional support, and premium presentation experiences designed to maximize visibility.", icon: faMusic },
    { title: "Celebrity & Influencer Management", description: "Enhance event impact with celebrity appearances, fashion influencers, brand ambassadors, and media personalities who bring additional excitement and attention to your event.", icon: faBriefcase },
    { title: "Event Promotion & Media Coverage", description: "Our team assists with event marketing, media coordination, photography, videography, social media coverage, and press management to maximize audience reach.", icon: faBullhorn }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand that every fashion event represents creativity, elegance, and innovation. Our expertise in fashion event management helps brands and designers present their collections with confidence while creating memorable experiences for audiences, media, and industry professionals. Whether you're launching a new collection, hosting a fashion showcase, or organizing a large-scale fashion event, Leor Media delivers Fashion Show Management Services that combine creativity, professionalism, and excellence.",
    phones: ["+91-9666643456"]
  }
};

export const CulturalEventsData = {
  SeoName: { seotitle: "cultural-events" },
  title: "Cultural Events & Festivals - Leor Media",
  subtitle: "Creating vibrant cultural experiences that celebrate traditions, showcase talent, inspire communities, and create unforgettable memories.",
  coverimage: EventHeroCover,
  categoryLabel: "Cultural Events & Festivals",
  hero: {
    title: "Professional Cultural Events Management Services",
    subtitle: "Creating vibrant cultural experiences that celebrate traditions, showcase talent, inspire communities, and create unforgettable memories.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Celebrating Culture, Creativity & Community",
    text: "Cultural events bring people together, preserve traditions, showcase talent, and create memorable experiences that inspire and connect communities. At Leor Media, we specialize in planning and organizing extraordinary Cultural Events that celebrate heritage, diversity, art, music, dance, and creativity with professionalism and excellence.",
    details: "Whether it's a cultural festival, traditional celebration, college cultural fest, community gathering, government event, music performance, dance competition, or artistic showcase, we create immersive experiences that leave a lasting impact on audiences."
  },
  servicesTitle: "Cultural Events & Festivals Services",
  services: [
    { title: "Event Concept & Theme Development", description: "Every cultural event has a unique story to tell. We create engaging event concepts, themes, and experiences that reflect traditions, values, and cultural significance.", icon: faBriefcase },
    { title: "Stage Design & Event Production", description: "Our creative team designs visually stunning stages, thematic décor, LED backdrops, cultural installations, and artistic displays that enhance the overall atmosphere of the event.", icon: faDraftingCompass },
    { title: "Artist & Performer Management", description: "We coordinate dancers, musicians, singers, folk artists, cultural performers, hosts, and entertainment groups to ensure smooth performances and exceptional audience engagement.", icon: faBriefcase },
    { title: "Audio Visual & Technical Support", description: "From professional sound systems and lighting setups to LED screens and live streaming services, we provide complete technical solutions for a flawless event experience.", icon: faMusic },
    { title: "Festival & Community Event Coordination", description: "Our team manages registrations, scheduling, logistics, crowd management, hospitality, and on-site event coordination to ensure smooth operations throughout the event.", icon: faBriefcase },
    { title: "Promotions & Media Coverage", description: "Increase event visibility through digital marketing, social media promotions, photography, videography, media coordination, and event branding solutions.", icon: faBullhorn },
    { title: "Hospitality & Guest Management", description: "We provide comprehensive guest management, VIP coordination, accommodation support, transportation arrangements, and hospitality services for participants and attendees.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe cultural events are powerful platforms that unite people, celebrate diversity, and preserve traditions. Our expertise in cultural event management ensures every event is thoughtfully planned, creatively executed, and remembered for years to come. Whether you're organizing a cultural festival, community celebration, educational event, or artistic showcase, Leor Media delivers Cultural Event Management Services that bring your vision to life with passion, creativity, and professionalism.",
    phones: ["+91-9666643456"]
  }
};

export const CollegeFestEventsData = {
  SeoName: { seotitle: "college-fest-events" },
  title: "College Fests - Leor Media",
  subtitle: "Creating Unforgettable Campus Experiences",
  coverimage: EventHeroCover,
  categoryLabel: "College Fests",
  hero: {
    title: "college-fest-events",
    subtitle: "Creating Unforgettable Campus Experiences",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Creating Unforgettable Campus Experiences",
    text: "College festivals are more than just events—they are celebrations of talent, creativity, innovation, and student energy. At Leor Media, we specialize in organizing high-energy College Fest Events that inspire, entertain, and engage students while creating unforgettable memories.",
    details: "From cultural festivals and technical fests to freshers' parties, annual days, celebrity nights, and inter-college competitions, our expert event management team handles everything from planning to execution. College fests are among the most impactful student experiences, bringing together competitions, performances, networking, and campus-wide celebrations."
  },
  servicesTitle: "College Fests Services",
  services: [
    { title: "Technical Fests", description: "Hackathons, Coding Competitions, Robotics Challenges, Project Exhibitions, Technical Workshops, Innovation Challenges.", icon: faBriefcase },
    { title: "Management Fests", description: "Business Plan Competitions, Marketing Challenges, Startup Pitch Events, Group Discussions, Leadership Activities.", icon: faBriefcase },
    { title: "Entertainment Events", description: "Celebrity Nights, DJ Nights, Live Music Concerts, Stand-Up Comedy Shows, Influencer Meet & Greet Programs.", icon: faSmile },
    { title: "Sports & Gaming Events", description: "Sports Tournaments, E-Sports Competitions, Gaming Challenges, Adventure Activities, Popular college fest attractions often include fashion shows, gaming tournaments, workshops, celebrity performances, DJ nights, and creative competitions., --.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Whether you're planning a Freshers' Party, Annual Day Celebration, Cultural Fest, Technical Fest, or Inter-College Festival, Leor Media transforms your vision into an unforgettable campus experience. Our mission is to create exciting, engaging, and professionally managed events that leave lasting impressions on students, faculty, and guests.",
    phones: ["+91-9666643456"]
  }
};

export const BrandPromotionsData = {
  SeoName: { seotitle: "brand-promotions" },
  title: "Brand Promotions - Leor Media",
  subtitle: "Engaging campaigns and activations to boost your brand visibility.",
  categoryLabel: "Brand Promotions",
  hero: {
    title: "Brand Promotions",
    subtitle: "Engaging campaigns and activations to boost your brand visibility.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
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
    phones: ["+91-9666643456"]
  }
};

export const MallActivationsData = {
  SeoName: { seotitle: "mall-activations" },
  title: "Mall Activations - Leor Media",
  subtitle: "Creating engaging brand experiences that attract shoppers, increase customer interaction, boost brand visibility, and deliver measurable marketing results.",
  coverimage: EventHeroCover,
  categoryLabel: "Mall Activations",
  hero: {
    title: "Professional Mall Activation Management Services",
    subtitle: "Creating engaging brand experiences that attract shoppers, increase customer interaction, boost brand visibility, and deliver measurable marketing results.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Creating Engaging Brand Experiences That Drive Customer Interaction",
    text: "In today's competitive market, brands need more than traditional advertising to capture attention. Mall activations create powerful opportunities for businesses to engage directly with customers, increase brand awareness, generate leads, and drive sales through interactive experiences.",
    details: "At Leor Media, we specialize in planning and executing innovative Mall Activation Events that connect brands with shoppers through memorable, engaging, and results-driven campaigns. From product promotions and experiential marketing to seasonal campaigns and brand launches, we create impactful activations that leave lasting impressions."
  },
  servicesTitle: "Mall Activations Services",
  services: [
    { title: "Brand Promotion Campaigns", description: "We create strategic activation campaigns that help brands interact directly with their target audience, increase product awareness, and generate meaningful customer engagement.", icon: faBullhorn },
    { title: "Product Launch Activations", description: "Introduce new products with exciting mall activations that create buzz, attract attention, and encourage customers to experience your brand firsthand.", icon: faBullseye },
    { title: "Experiential Marketing Events", description: "Transform ordinary shopping experiences into memorable brand interactions through creative installations, live demonstrations, interactive zones, and customer engagement activities.", icon: faBullhorn },
    { title: "Promotional Events & Roadshows", description: "Drive footfall and increase visibility with promotional activities, contests, giveaways, sampling campaigns, and brand roadshows designed to attract shoppers.", icon: faBullhorn },
    { title: "Stage Setup & Branding", description: "Our creative team designs eye-catching activation zones, promotional kiosks, branding displays, LED screens, product showcases, and themed event setups that maximize brand impact.", icon: faDraftingCompass },
    { title: "Audience Engagement Activities", description: "We organize games, competitions, interactive experiences, influencer appearances, entertainment programs, and customer participation activities to create excitement and engagement.", icon: faSmile },
    { title: "End-to-End Event Management", description: "From permissions and venue coordination to logistics, staffing, promotions, execution, and reporting, we handle every aspect of the activation professionally.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe successful mall activations create meaningful connections between brands and consumers. Our innovative approach, creative execution, and strategic planning help businesses increase visibility, improve customer engagement, and achieve measurable marketing results. Partner with Leor Media to create exciting Mall Activation Events that attract attention, engage audiences, and elevate your brand presence in today's competitive marketplace.",
    phones: ["+91-9666643456"]
  }
};

export const RoadShowsData = {
  SeoName: { seotitle: "road-shows" },
  title: "Road Shows - Leor Media",
  subtitle: "Creating high-impact road show campaigns that increase brand visibility, engage audiences, and deliver powerful on-ground marketing experiences.",
  coverimage: EventHeroCover,
  categoryLabel: "Road Shows",
  hero: {
    title: "Professional Road Show Management Services",
    subtitle: "Creating high-impact road show campaigns that increase brand visibility, engage audiences, and deliver powerful on-ground marketing experiences.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Taking Your Brand Directly to Your Audience",
    text: "In a world where customer attention is more valuable than ever, road shows provide an effective way to engage audiences, increase brand visibility, and create meaningful face-to-face interactions. At Leor Media, we specialize in planning and executing dynamic roadshow events that bring brands closer to their target audience through impactful on-ground marketing experiences.",
    details: "Whether you're launching a new product, promoting a brand, conducting awareness campaigns, or expanding market reach, our roadshow management services help you connect with consumers in a memorable and engaging way."
  },
  servicesTitle: "Road Shows Services",
  services: [
    { title: "Strategic Campaign Planning", description: "Every successful road show begins with a well-planned strategy. We design customized campaigns based on your marketing objectives, target audience, locations, and promotional goals.", icon: faBullhorn },
    { title: "Mobile Brand Activation", description: "Bring your brand to life through mobile promotional units, branded vehicles, interactive displays, product demonstrations, and customer engagement activities that attract attention wherever you go.", icon: faBullseye },
    { title: "Product Launch & Promotional Road Shows", description: "Generate excitement and awareness for new products and services with professionally managed launch campaigns designed to reach customers directly in high-traffic locations.", icon: faBullhorn },
    { title: "Experiential Marketing Activities", description: "Create memorable consumer experiences through live demonstrations, games, contests, sampling campaigns, audience participation activities, and interactive brand engagements.", icon: faSmile },
    { title: "Event Production & Branding", description: "We provide complete event production solutions, including branded setups, promotional materials, LED displays, sound systems, stage arrangements, and creative marketing installations.", icon: faDraftingCompass },
    { title: "Staffing & Brand Promotion Teams", description: "Our trained promoters, hosts, emcees, and event coordinators effectively represent your brand and engage audiences throughout the campaign.", icon: faUsers },
    { title: "Logistics & Route Management", description: "From transportation planning and permissions to equipment management and venue coordination, we ensure smooth operations across all campaign locations.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe the most powerful marketing happens when brands connect directly with people. Our roadshow management services are designed to increase visibility, strengthen customer engagement, generate leads, and create memorable brand experiences that drive results. Partner with Leor Media to launch impactful road show campaigns that take your message directly to your audience and create lasting impressions.",
    phones: ["+91-9666643456"]
  }
};

export const StoreLaunchesData = {
  SeoName: { seotitle: "store-launches" },
  title: "Store Launches - Leor Media",
  subtitle: "Creating impactful store launch experiences that attract customers, build brand awareness, generate excitement, and drive business growth.",
  coverimage: EventHeroCover,
  categoryLabel: "Store Launches",
  hero: {
    title: "Professional Store Launch Management Services",
    subtitle: "Creating impactful store launch experiences that attract customers, build brand awareness, generate excitement, and drive business growth.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Creating Grand Store Openings That Drive Attention & Business Growth",
    text: "A store launch is more than just opening doors—it's the first opportunity to introduce your brand, attract customers, create excitement, and establish a strong presence in the market. At Leor Media, we specialize in planning and executing exceptional Store Launch Events that generate buzz, increase footfall, and create memorable brand experiences.",
    details: "Whether you're launching a retail store, franchise outlet, showroom, boutique, supermarket, luxury brand store, or commercial establishment, our expert event management team ensures a successful and impactful launch."
  },
  servicesTitle: "Store Launches Services",
  services: [
    { title: "Store Launch Strategy & Planning", description: "Every successful launch starts with a clear vision. We create customized launch strategies based on your brand identity, target audience, location, and business objectives.", icon: faStore },
    { title: "Grand Opening Ceremonies", description: "From ribbon-cutting ceremonies and inaugural events to VIP launches and media gatherings, we organize memorable opening experiences that attract attention and create excitement.", icon: faScroll },
    { title: "Brand Activation & Customer Engagement", description: "We design interactive experiences, product showcases, promotional activities, contests, giveaways, and customer engagement programs that encourage participation and boost brand awareness.", icon: faSmile },
    { title: "Store Branding & Event Setup", description: "Our team creates eye-catching store decorations, entrance arches, promotional displays, LED screens, branded installations, and launch-day visuals that enhance the customer experience.", icon: faDraftingCompass },
    { title: "Celebrity & Influencer Engagement", description: "Increase visibility and audience reach with celebrity appearances, influencer collaborations, guest speakers, and brand ambassadors who help create greater excitement around your launch.", icon: faStar },
    { title: "Marketing & Promotional Campaigns", description: "We support your launch through digital promotions, social media campaigns, outdoor advertising, event branding, and media coordination to maximize exposure.", icon: faBullhorn },
    { title: "Hospitality & Guest Management", description: "From VIP guest coordination and customer registrations to refreshments, hospitality, and event-day support, we ensure a smooth and professional experience for everyone attending.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand that first impressions matter. Our innovative approach, creative event concepts, and professional execution help businesses launch their stores with confidence while creating memorable experiences that attract customers and strengthen brand visibility. Partner with Leor Media to organize a successful Store Launch Event that generates excitement, increases footfall, and sets the foundation for long-term business success.",
    phones: ["+91-9666643456"]
  }
};

export const PoliticalCampaignEventsData = {
  SeoName: { seotitle: "political-campaign-events" },
  title: "Political Campaign Events - Leor Media",
  subtitle: "Delivering well-organized public outreach events, campaign gatherings, and community engagement programs with seamless planning and professional execution.",
  coverimage: EventHeroCover,
  categoryLabel: "Political Campaign Events",
  hero: {
    title: "Professional Political Campaign Event Management Services",
    subtitle: "Delivering well-organized public outreach events, campaign gatherings, and community engagement programs with seamless planning and professional execution.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Professional Event Management for Public Outreach Campaigns",
    text: "Successful political and public outreach events require strategic planning, seamless coordination, and effective audience engagement. At Leor Media, we specialize in organizing and managing political campaign events, public meetings, awareness programs, community outreach initiatives, and large-scale gatherings with professionalism and precision.",
    details: "From campaign launches and public rallies to voter awareness programs and community engagement events, our experienced team ensures every event is executed smoothly while delivering a memorable experience for attendees."
  },
  servicesTitle: "Political Campaign Events Services",
  services: [
    { title: "Event Planning & Coordination", description: "Our team develops customized event plans based on audience size, venue requirements, campaign objectives, and logistical needs to ensure a successful event experience.", icon: faBriefcase },
    { title: "Stage Design & Event Production", description: "We create professional stage setups, podium arrangements, LED displays, event branding, backdrops, and audience seating layouts that enhance visibility and engagement.", icon: faDraftingCompass },
    { title: "Audio Visual & Technical Support", description: "Deliver your message clearly with advanced sound systems, LED screens, live streaming solutions, lighting setups, video production, and technical event management.", icon: faMusic },
    { title: "Public Meeting & Rally Management", description: "From venue preparation and crowd flow planning to on-site coordination and event supervision, we ensure smooth management of public gatherings and outreach events.", icon: faBriefcase },
    { title: "Branding & Promotional Support", description: "We provide event branding materials, banners, digital displays, signage, and promotional elements that create a professional and organized event environment.", icon: faDraftingCompass },
    { title: "Guest & Media Coordination", description: "Our team manages guest arrivals, VIP coordination, media support, registration processes, and event-day logistics for a seamless experience.", icon: faBriefcase },
    { title: "Logistics & Operational Management", description: "From transportation planning and permissions coordination to equipment management and venue operations, we oversee every detail of event execution.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand the importance of professional event execution in public outreach and community engagement. Our expertise in event planning, logistics, branding, and production helps organizations conduct impactful events that are organized, engaging, and memorable. Partner with Leor Media to plan and manage Political Campaign Events with professionalism, efficiency, and attention to every detail.",
    phones: ["+91-9666643456"]
  }
};

export const PublicRelationEventsData = {
  SeoName: { seotitle: "public-relation-events" },
  title: "Public Relations Events - Leor Media",
  subtitle: "Creating impactful PR events that strengthen brand reputation, engage stakeholders, generate media visibility, and build meaningful connections.",
  coverimage: EventHeroCover,
  categoryLabel: "Public Relations Events",
  hero: {
    title: "Professional Public Relations Event Management Services",
    subtitle: "Creating impactful PR events that strengthen brand reputation, engage stakeholders, generate media visibility, and build meaningful connections.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Building Strong Relationships Through Impactful Events",
    text: "Public relations events play a crucial role in shaping brand perception, strengthening stakeholder relationships, and enhancing public visibility. A well-executed PR event creates meaningful connections, generates positive media attention, and reinforces brand credibility.",
    details: "At Leor Media, we specialize in planning and executing professional public relations events that help organizations communicate effectively with their audiences, media representatives, business partners, investors, customers, and the community."
  },
  servicesTitle: "Public Relations Events Services",
  services: [
    { title: "Strategic Event Planning", description: "Every successful PR event starts with a clear objective. We work closely with clients to develop customized event strategies that align with business goals, communication priorities, and audience expectations.", icon: faBriefcase },
    { title: "Press Conferences & Media Events", description: "We organize professional press conferences, media briefings, product announcements, and corporate communication events that facilitate effective interaction between organizations and media representatives.", icon: faBullhorn },
    { title: "Brand Awareness & Public Engagement Programs", description: "Our team designs engaging public relations campaigns, community outreach programs, promotional activities, and awareness initiatives that strengthen brand reputation and audience trust.", icon: faSmile },
    { title: "Event Branding & Production", description: "From stage design and event décor to branded displays, LED screens, signage, and promotional materials, we create professional event environments that reflect your brand identity.", icon: faDraftingCompass },
    { title: "Media Coordination & Guest Management", description: "We handle media invitations, journalist coordination, VIP guest management, registrations, hospitality services, and event-day support to ensure seamless event execution.", icon: faBriefcase },
    { title: "Audio Visual & Technical Support", description: "Our technical solutions include sound systems, LED walls, presentation equipment, live streaming, lighting setups, and multimedia production services that enhance audience engagement.", icon: faMusic },
    { title: "Photography, Videography & Event Coverage", description: "Capture every important moment with professional photography, videography, social media coverage, event highlights, and media-ready content creation.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand the importance of creating meaningful interactions between brands and their audiences. Our expertise in public relations event management helps organizations build credibility, strengthen relationships, increase visibility, and create positive brand experiences. Partner with Leor Media to organize public relations events that communicate your message effectively, engage stakeholders, and elevate your brand presence.",
    phones: ["+91-9666643456"]
  }
};

export const ExhibitionStallDesignData = {
  SeoName: { seotitle: "exhibition-stall-design" },
  title: "Exhibition Stall Design - Leor Media",
  subtitle: "Designing innovative exhibition stalls that attract visitors, showcase your brand, increase engagement, and generate valuable business opportunities.",
  coverimage: EventHeroCover,
  categoryLabel: "Exhibition Stall Design",
  hero: {
    title: "Professional Exhibition Stall Design Services",
    subtitle: "Designing innovative exhibition stalls that attract visitors, showcase your brand, increase engagement, and generate valuable business opportunities.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Transforming Exhibition Spaces into Powerful Brand Experiences",
    text: "In today's competitive business environment, a well-designed exhibition stall is more than just a display space—it's a powerful marketing tool that attracts visitors, showcases your brand, generates leads, and creates lasting impressions. At Leor Media, we specialize in innovative exhibition stall design services that combine creativity, functionality, and strategic branding to maximize your presence at trade shows, expos, exhibitions, and industry events.",
    details: "Whether you're launching a product, promoting a brand, participating in a trade fair, or showcasing your services, our custom-designed exhibition stalls help your business stand out from the crowd."
  },
  servicesTitle: "Exhibition Stall Design Services",
  services: [
    { title: "Custom Stall Design & Concept Development", description: "Every brand has a unique story. We create customized exhibition stall concepts that reflect your brand identity, marketing objectives, and audience engagement goals.", icon: faDraftingCompass },
    { title: "Creative 3D Stall Visualization", description: "Before construction begins, we provide realistic 3D stall designs and visual concepts, allowing you to experience your exhibition space and make informed design decisions.", icon: faStar },
    { title: "Modular & Custom-Built Exhibition Stalls", description: "Whether you need a compact modular setup or a large custom-built exhibition pavilion, we design and fabricate stalls that combine aesthetics, functionality, and visitor engagement.", icon: faBriefcase },
    { title: "Branding & Visual Communication", description: "Our design team integrates impactful branding elements, graphics, LED displays, digital screens, product showcases, and interactive features to enhance brand visibility and recognition.", icon: faStar },
    { title: "Fabrication & Installation", description: "We handle complete stall production, fabrication, transportation, installation, dismantling, and venue coordination to ensure a hassle-free exhibition experience.", icon: faDraftingCompass },
    { title: "Interactive Engagement Solutions", description: "Create memorable visitor experiences with product demonstration zones, touch-screen displays, interactive kiosks, virtual experiences, and experiential marketing elements.", icon: faSmile },
    { title: "Exhibition Support & On-Site Management", description: "Our dedicated team provides technical assistance, maintenance support, logistics management, and on-site coordination throughout the event.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe every exhibition is an opportunity to create meaningful business connections. Our creative exhibition stall designs are built to attract visitors, enhance brand visibility, encourage engagement, and generate valuable business opportunities. Whether you're participating in a local trade fair, national expo, corporate exhibition, or international event, Leor Media delivers exhibition stall design services that help your brand make a powerful impact and achieve measurable results.",
    phones: ["+91-9666643456"]
  }
};

export const TradeShowManagementData = {
  SeoName: { seotitle: "trade-show-management" },
  title: "Trade Show Management - Leor Media",
  subtitle: "Creating impactful trade show experiences that increase brand visibility, generate quality leads, strengthen business relationships, and drive measurable growth.",
  coverimage: EventHeroCover,
  categoryLabel: "Trade Show Management",
  hero: {
    title: "Professional Trade Show Management Services",
    subtitle: "Creating impactful trade show experiences that increase brand visibility, generate quality leads, strengthen business relationships, and drive measurable growth.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Maximizing Brand Visibility Through Professional Trade Show Experiences",
    text: "Trade shows provide businesses with a powerful platform to showcase products, connect with industry leaders, generate quality leads, and build valuable business relationships. A successful trade show presence requires strategic planning, innovative presentation, and flawless execution.",
    details: "At Leor Media, we specialize in comprehensive Trade Show Management Services, helping brands create impactful exhibition experiences that attract visitors, strengthen brand recognition, and deliver measurable business results."
  },
  servicesTitle: "Trade Show Management Services",
  services: [
    { title: "Strategic Trade Show Planning", description: "Every successful trade show starts with a well-defined strategy. We work closely with clients to understand their goals, target audience, and industry requirements to create a customized event plan.", icon: faBriefcase },
    { title: "Exhibition Booth Design & Setup", description: "Our creative team designs visually appealing exhibition booths that effectively showcase your brand, products, and services while maximizing visitor engagement and interaction.", icon: faDraftingCompass },
    { title: "Branding & Visual Communication", description: "We integrate impactful branding elements, LED displays, digital presentations, promotional materials, product displays, and interactive experiences that enhance brand visibility and attract potential customers.", icon: faStar },
    { title: "Product Demonstrations & Engagement Activities", description: "Create meaningful visitor interactions through live demonstrations, experiential marketing activities, product launches, presentations, and interactive engagement zones.", icon: faSmile },
    { title: "Logistics & Event Coordination", description: "From transportation and venue coordination to installation, dismantling, and equipment management, we handle every logistical aspect of your trade show participation.", icon: faBriefcase },
    { title: "Lead Generation & Visitor Engagement", description: "Our trade show solutions are designed to increase footfall, encourage meaningful conversations, capture quality leads, and strengthen customer relationships.", icon: faSmile },
    { title: "Technical Support & On-Site Management", description: "We provide complete technical assistance, event supervision, audio-visual support, and dedicated on-site coordination to ensure a seamless event experience.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe every trade show is an opportunity to grow your business, strengthen industry relationships, and showcase your brand to the right audience. Our expertise in trade show planning, exhibition management, and visitor engagement helps businesses achieve maximum impact and return on investment. Partner with Leor Media to create a powerful trade show presence that attracts attention, generates valuable leads, and delivers long-term business growth.",
    phones: ["+91-9666643456"]
  }
};

export const ExpoPromotionsData = {
  SeoName: { seotitle: "expo-promotions" },
  title: "Expo Promotions - Leor Media",
  subtitle: "Driving brand visibility, audience engagement, and lead generation through innovative expo promotions, strategic marketing campaigns, and impactful exhibition experiences.",
  coverimage: EventHeroCover,
  categoryLabel: "Expo Promotions",
  hero: {
    title: "Professional Expo Promotion Services",
    subtitle: "Driving brand visibility, audience engagement, and lead generation through innovative expo promotions, strategic marketing campaigns, and impactful exhibition experiences.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Maximizing Brand Exposure Through Strategic Expo Promotions",
    text: "Expos and exhibitions offer businesses a unique opportunity to connect with potential customers, showcase products, generate qualified leads, and strengthen brand visibility. However, success at an expo requires more than simply having a booth—it requires strategic promotion, audience engagement, and impactful brand experiences.",
    details: "At Leor Media, we specialize in **Expo Promotion Services** that help businesses stand out in competitive exhibition environments. Our creative promotional strategies, interactive marketing activities, and professional event management solutions ensure your brand attracts attention and achieves measurable results."
  },
  servicesTitle: "Expo Promotions Services",
  services: [
    { title: "Strategic Expo Marketing Planning", description: "Every successful expo campaign begins with a strong strategy. We develop customized promotional plans based on your business goals, target audience, industry, and event objectives.", icon: faBullhorn },
    { title: "Brand Activation Campaigns", description: "Create memorable experiences through interactive brand activations, experiential marketing activities, product demonstrations, contests, and audience engagement programs that encourage participation.", icon: faBullhorn },
    { title: "Exhibition Booth Promotions", description: "Attract more visitors with engaging booth activities, promotional displays, live presentations, product showcases, and creative marketing concepts that increase footfall and engagement.", icon: faBullhorn },
    { title: "Product Launch & Showcase Promotions", description: "Generate excitement around new products and services through professionally managed launch campaigns, demonstrations, sampling activities, and promotional events.", icon: faMusic },
    { title: "Influencer & Celebrity Engagement", description: "Increase visibility and audience interest through influencer collaborations, celebrity appearances, brand ambassadors, and promotional personalities that strengthen brand credibility.", icon: faStar },
    { title: "Lead Generation Campaigns", description: "Our expo promotion strategies are designed to capture quality leads, encourage meaningful interactions, and create opportunities for long-term customer relationships.", icon: faBullhorn },
    { title: "Audio Visual & Promotional Support", description: "We provide LED screens, digital displays, branding materials, promotional setups, presentation systems, and technical support to create a professional exhibition presence.", icon: faMusic }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "Partner with Leor Media for professional expo promotions services.",
    phones: ["+91-9666643456"]
  }
};

export const PoojaEventsData = {
  SeoName: { seotitle: "pooja-events" },
  title: "Pooja Events - Leor Media",
  subtitle: "Organizing sacred pooja ceremonies with traditional elegance, spiritual devotion, seamless planning, and memorable event experiences.",
  coverimage: EventHeroCover,
  categoryLabel: "Pooja Events",
  hero: {
    title: "Professional Pooja Event Management Services",
    subtitle: "Organizing sacred pooja ceremonies with traditional elegance, spiritual devotion, seamless planning, and memorable event experiences.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Celebrating Sacred Traditions with Grace & Perfection",
    text: "Pooja ceremonies hold deep spiritual significance and mark important milestones in life, business, and family traditions. Whether it's a housewarming ceremony, Satyanarayana Swamy Vratham, Ganesh Pooja, Lakshmi Pooja, Vastu Pooja, Bhoomi Pooja, or temple event, every ritual deserves a peaceful, well-organized, and memorable celebration.",
    details: "At Leor Media, we specialize in professional Pooja event management services, ensuring every religious and spiritual gathering is conducted with devotion, tradition, and flawless execution. Our experienced team manages every detail, allowing families and organizations to focus on the spiritual significance of the occasion."
  },
  servicesTitle: "Pooja Events Services",
  services: [
    { title: "Traditional Event Planning", description: "Every pooja has unique customs and requirements. We carefully plan and coordinate every aspect of the ceremony according to your traditions and preferences.", icon: faScroll },
    { title: "Venue Decoration & Setup", description: "Our team creates beautiful and traditional décor arrangements, including floral decorations, pooja mandap setups, entrance decorations, seating arrangements, and spiritual ambiance enhancements.", icon: faBriefcase },
    { title: "Pooja Arrangements & Ritual Support", description: "We assist in organizing pooja materials, ritual essentials, seating arrangements, and ceremony logistics to ensure everything is prepared for a smooth and sacred experience.", icon: faPrayingHands },
    { title: "Floral Decoration Services", description: "Enhance the spiritual atmosphere with fresh flower decorations, traditional garlands, rangoli designs, floral backdrops, and customized ceremonial décor.", icon: faDraftingCompass },
    { title: "Guest Management & Hospitality", description: "From invitations and guest coordination to refreshments, seating arrangements, and hospitality services, we ensure a comfortable experience for all attendees.", icon: faBriefcase },
    { title: "Audio & Event Support", description: "We provide sound systems, microphones, devotional music arrangements, LED displays (if required), and technical support for larger religious gatherings.", icon: faMusic },
    { title: "Photography & Videography", description: "Capture every meaningful moment of your sacred ceremony with professional photography and videography services that preserve memories for years to come.", icon: faStar }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand the importance of preserving traditions while ensuring a seamless event experience. Our dedication to excellence, attention to detail, and respect for cultural values help create meaningful pooja events that bring families, communities, and organizations together. Whether you're planning a small family ceremony or a large religious gathering, Leor Media provides professional Pooja event management services that make every occasion peaceful, organized, and unforgettable.",
    phones: ["+91-9666643456"]
  }
};

export const TempleFestivalsData = {
  SeoName: { seotitle: "temple-festivals" },
  title: "Temple Festivals - Leor Media",
  subtitle: "Organizing sacred temple festivals with devotion, tradition, seamless planning, and exceptional event management for unforgettable spiritual experiences.",
  coverimage: EventHeroCover,
  categoryLabel: "Temple Festivals",
  hero: {
    title: "Professional Temple Festival Management Services",
    subtitle: "Organizing sacred temple festivals with devotion, tradition, seamless planning, and exceptional event management for unforgettable spiritual experiences.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Celebrating Divine Traditions with Grandeur & Devotion",
    text: "Temple festivals are a beautiful expression of faith, culture, tradition, and community spirit. These sacred celebrations bring devotees together to honor deities, preserve cultural heritage, and experience spiritual joy. Organizing a successful temple festival requires careful planning, seamless coordination, and respect for religious traditions.",
    details: "At Leor Media, we specialize in professional Temple Festival Management Services, delivering well-organized, spiritually enriching, and memorable celebrations. From annual temple festivals and Brahmotsavams to religious processions and cultural programs, our experienced team manages every aspect with dedication and excellence."
  },
  servicesTitle: "Temple Festivals Services",
  services: [
    { title: "Festival Planning & Coordination", description: "Every temple festival is unique. Our team works closely with temple committees and organizers to plan schedules, rituals, logistics, and event activities according to traditional practices.", icon: faBriefcase },
    { title: "Temple Decoration & Floral Arrangements", description: "Create a divine atmosphere with elegant floral decorations, traditional lighting, entrance arches, ceremonial pathways, and beautifully designed festival décor.", icon: faDraftingCompass },
    { title: "Religious Processions & Cultural Events", description: "We organize temple processions, devotional programs, cultural performances, spiritual gatherings, and community celebrations that enhance the festival experience.", icon: faScroll },
    { title: "Stage Setup & Event Infrastructure", description: "Our team provides stages, seating arrangements, barricades, lighting systems, LED displays, public address systems, and event infrastructure required for large gatherings.", icon: faDraftingCompass },
    { title: "Sound Systems & Technical Support", description: "Ensure clear communication and devotional experiences with professional audio systems, microphones, LED screens, live streaming solutions, and technical event support.", icon: faMusic },
    { title: "Crowd Management & Security", description: "We implement organized crowd control measures, security coordination, entry management, and emergency support to ensure the safety and comfort of devotees.", icon: faBriefcase },
    { title: "Hospitality & Volunteer Coordination", description: "From guest management and volunteer support to food distribution arrangements and accommodation assistance, we ensure smooth event operations throughout the festival.", icon: faBriefcase }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we understand the spiritual importance of temple festivals and the responsibility of managing sacred events with care and devotion. Our expertise in festival planning, event infrastructure, logistics, and crowd management helps create meaningful celebrations that honor traditions and bring communities together. Whether it's a local temple festival or a large-scale religious celebration, Leor Media provides professional Temple Festival Management Services that ensure every event is organized with excellence, respect, and spiritual significance.",
    phones: ["+91-9666643456"]
  }
};

export const TraditionalCeremoniesData = {
  SeoName: { seotitle: "traditional-ceremonies" },
  title: "Traditional Ceremonies - Leor Media",
  subtitle: "Celebrating cultural traditions and family milestones with elegant planning, seamless execution, and unforgettable experiences.",
  coverimage: EventHeroCover,
  categoryLabel: "Traditional Ceremonies",
  hero: {
    title: "Professional Traditional Ceremonies Management Services",
    subtitle: "Celebrating cultural traditions and family milestones with elegant planning, seamless execution, and unforgettable experiences.",
    ctas: [
      { text: "Book Consultation", link: "/contactus", primary: true }
    ]
  },
  introduction: {
    heading: "Preserving Traditions, Creating Timeless Memories",
    text: "Traditional ceremonies are a beautiful reflection of culture, heritage, values, and family traditions passed down through generations. These special occasions bring families and communities together to celebrate life's most meaningful milestones with joy, respect, and devotion.",
    details: "At Leor Media, we specialize in planning and managing traditional ceremonies with professionalism, cultural sensitivity, and meticulous attention to detail. Whether it's a naming ceremony, housewarming, engagement, baby shower, religious function, milestone celebration, or community gathering, we ensure every event is organized flawlessly while preserving its traditional essence."
  },
  servicesTitle: "Traditional Ceremonies Services",
  services: [
    { title: "Personalized Ceremony Planning", description: "Every tradition is unique. Our team works closely with families to understand customs, rituals, and preferences, ensuring that every ceremony is planned according to cultural values and traditions.", icon: faScroll },
    { title: "Traditional Venue Decoration", description: "Create a warm and festive atmosphere with beautifully designed décor, floral arrangements, traditional backdrops, entrance decorations, lighting setups, and ceremonial seating arrangements.", icon: faBriefcase },
    { title: "Ritual & Event Coordination", description: "We assist in organizing ceremony schedules, ritual arrangements, guest coordination, and event logistics to ensure smooth execution from beginning to end.", icon: faBriefcase },
    { title: "Floral & Theme Decorations", description: "Enhance the beauty of your event with fresh flower decorations, traditional mandap setups, rangoli designs, cultural décor elements, and customized ceremonial themes.", icon: faDraftingCompass },
    { title: "Guest Management & Hospitality", description: "From invitation coordination and guest assistance to seating arrangements, catering support, and hospitality services, we ensure a comfortable and welcoming experience for everyone.", icon: faBriefcase },
    { title: "Photography & Videography Services", description: "Capture every meaningful moment with professional photography and videography that preserves the memories of your special occasion for generations to come.", icon: faStar },
    { title: "Entertainment & Cultural Programs", description: "We can arrange traditional music performances, cultural activities, devotional programs, and entertainment elements that complement the spirit of the ceremony.", icon: faSmile }
  ],
  finalCTA: {
    title: "Contact Us",
    text: "At Leor Media, we believe that traditional ceremonies deserve thoughtful planning and heartfelt execution. Our dedication to preserving customs while delivering professional event management ensures every celebration is meaningful, memorable, and stress-free. Whether you're organizing an intimate family gathering or a large traditional celebration, Leor Media provides traditional ceremony management services that honor your traditions and create unforgettable memories for generations to cherish.",
    phones: ["+91-9666643456"]
  }
};

// Assign unique cover images to each subpage data object
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
export const EventsDetailPageData = {
  "corporate-meetings": CorporateMeetingsData, "conferences-seminars": ConferencesSeminarsData, "product-launch-events": ProductLaunchEventsData, "award-functions": AwardFunctionsData, "team-outings": TeamOutingsData, "annual-day-celebrations": AnnualDayCelebrationsData, "employee-engagement-events": EmployeeEngagementEventsData, "celebrity-management": CelebrityManagementData, "live-concerts": LiveConcertsData, "dj-nights": DjNightsData, "fashion-shows": FashionShowsData, "cultural-events": CulturalEventsData, "college-fest-events": CollegeFestEventsData, "brand-promotions": BrandPromotionsData, "mall-activations": MallActivationsData, "road-shows": RoadShowsData, "store-launches": StoreLaunchesData, "political-campaign-events": PoliticalCampaignEventsData, "public-relation-events": PublicRelationEventsData, "exhibition-stall-design": ExhibitionStallDesignData, "trade-show-management": TradeShowManagementData, "expo-promotions": ExpoPromotionsData, "pooja-events": PoojaEventsData, "temple-festivals": TempleFestivalsData, "traditional-ceremonies": TraditionalCeremoniesData,
};
